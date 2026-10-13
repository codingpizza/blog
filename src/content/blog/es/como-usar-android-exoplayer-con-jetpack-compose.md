---
title: "Como usar Android ExoPlayer con Jetpack Compose"
description: "Jetpack Compose ha venido para quedarse, es la solución moderna al desarrollo de interfaces de aplicaciones Android. Utilizando toda la potencia de Kotlin y su compilador, se ha logrado crear un Toolkit poderoso, fácil de utilizar y extensible. En este artículo vamos a hablar sobre cómo podemos util"
pubDate: 2022-03-03
updatedDate: 2022-04-23
lang: es
slug: "como-usar-android-exoplayer-con-jetpack-compose"
categories: ["Android"]
heroImage: "/images/Blog-post-Como-usar-Exoplayer-con-Jetpack-Compose.png"
sourceUrl: "https://www.codingpizza.com/como-usar-android-exoplayer-con-jetpack-compose/"
wpId: 4581
draft: false
---
Jetpack Compose ha venido para quedarse, es la solución moderna al desarrollo de interfaces de aplicaciones Android. Utilizando toda la potencia de Kotlin y su compilador, se ha logrado crear un Toolkit poderoso, fácil de utilizar y extensible. En este artículo vamos a hablar sobre cómo podemos utilizar Jetpack Compose con vistas existentes de Android como lo es Exoplayer.

¿Que es exoplayer? Es una librería de Android que contiene un reproductor que nos permite reproducir en nuestras aplicaciones de Android, videos, audio y streaming. Además de estas funcionalidades, también nos permite gestionar listas de reproducción, lo cual siempre se agradece.

Esta librería fue creada utilizando el toolkit de UI de Android existente, conocido también como Android Views, el cual es un mundo muy diferente al que manejaremos ahora y en el futuro con Jetpack compose. Para poder tener esta interoperabilidad entre las anteriores views y Jetpack Compose, existe un composable especial llamado Android View.

Si no sabes que es un composable o cómo funciona Jetpack Compose puedes visitar la [página oficial de Jetpack compose](https://developer.android.com/jetpack/compose/documentation) para leer más sobre ello, también puedes revisar streamings que hemos desarrollado en el canal de [Twitch de codingpizza](http://twitch.tv/codingpizza) donde tenemos colecciones enteras de streaming sobre apps hechas en Jetpack compose.

Volviendo al tema, en tiempos antiguos y oscuros para crear una View de Android programáticamente había que tener a disposición el contexto de la aplicación y con el crear la vista. En el mundo de Jetpack Compose esto no es así, ya que como mencionamos anteriormente tenemos un composable llamado Android View que lo podemos usar de la siguiente forma:

```
AndroidView(factory = { myOldView }) { oldView ->
    oldView.doSomething()
}
```

Dentro de la lambda podemos crear nuestra View con el contexto que nos viene dado como parámetro. Para utilizar nuestra Android View con exoplayer será necesario utilizar otros elementos para que pueda funcionar como es debido. El `player`, el cual es la clase que se encarga de manejar el `PlayerView` que es la vista de Android y el manejo del ciclo de vida de nuestro PlayerView.

Empecemos creando nuestro Player. El Player puede ser creado de la misma forma con el que se creaba en un mundo sin compose, solo que para obtener el contexto es necesario utilizar el `LocalContext.current` en lugar del `Context` que se utilizan normalmente en una Activity o Fragment.

```
@Composable
private fun generatePlayer(uri: String): SimpleExoPlayer {
    val player = SimpleExoPlayer.Builder(LocalContext.current).build()
    val mediaItem = MediaItem.fromUri(uri)
    player.setMediaItem(mediaItem)
    player.prepare()
    player.play()
    return player
}
```

Para crear el PlayerView, primero tenemos que crear una variable llamada `playerView`, luego utilizar la función `remember` para generar una instancia del `PlayerView` y luego asignarla a nuestra variable. Suena más complicado de lo que parece, pero veamos el código.

```
@Composable
private fun rememberPlayerViewWithLifecycle(onDisposeCalled: (Long) -> Unit): PlayerView {
    val context = LocalContext.current
    val playerView = remember {
        PlayerView(context).apply {
            id = R.id.playerview
            setShowNextButton(false)
            setShowPreviousButton(false)
        }
    }
}
```

**Nota**: Si no conoces sobre la función remember ni los side-effects en Jetpack Compose, puedes leer más sobre ellos [aquí](https://developer.android.com/jetpack/compose/side-effects).

En este código hemos aprovechado la función apply de Kotlin para modificar algunas propiedades del PlayerView, como ocultar los botones de navegar al contenido previo o al contenido posterior.

Ahora nos tenemos que enfrentar al problema del ciclo de vida. En el mundo sin Compose, en cada parte del ciclo de vida de nuestro Activity/Fragment debíamos llamar a la función correspondiente del player. En Compose debemos crear un `LifecycleEventObserver` el cual dependiendo del evento del ciclo de vida emitirá un valor y en base a cual sea este valor nosotros llamaremos a la función correspondiente del player.

El código en el que creamos nuestro `LifecycleEventObserver` es el siguiente:

```
@Composable
private fun rememberPlayerLifecycleObserver(player: PlayerView): LifecycleEventObserver = remember(player) {
    LifecycleEventObserver { _, event ->
        when (event) {
            Lifecycle.Event.ON_RESUME -> player.onResume()
            Lifecycle.Event.ON_PAUSE -> player.onPause()
            Lifecycle.Event.ON_DESTROY -> player.player?.release()
            else -> {
                // NOTHING TO DO HERE
            }
        }
    }
}
```

Ahora debemos asignar nuestro observable al ciclo de vida y removerlo una vez que ya no lo estemos utilizando. Para esto vamos a hacer uso de una función llamada `disposableEffect`, la cual utilizamos cuando queremos realizar alguna acción luego de que el composable abandone el estado de composición, y esto se realiza mediante la función `onDispose`.

**Nota**: Si quieres saber sobre el ciclo de vida de los composables y que es el estado de composición puedes leer más en la documentación de Android en este [enlace](https://developer.android.com/jetpack/compose/lifecycle#lifecycle-overview).

En nuestro caso queremos que el ciclo de vida elimine el observer que hemos creado así que podemos llamar la función `removeObserver` al final para eliminarlo.

```
DisposableEffect(lifecycle) {
        lifecycle.addObserver(lifecycleObserver)
        onDispose {
            lifecycle.removeObserver(lifecycleObserver)
        }
    }
```

Un buen detalle a agregar sería poder obtener la posición del player en el momento en que se ha llamado el `onDispose`. Para esto vamos a acceder a esa propiedad del player dentro del onDispose y utilizar una lambda para exponer a quien esté llamando a la función, la posición del player actual.

```
DisposableEffect(lifecycle) {
        lifecycle.addObserver(lifecycleObserver)
        onDispose {
            val position = playerView.player?.currentPosition ?: 0
            onDisposeCalled(position)
            lifecycle.removeObserver(lifecycleObserver)
        }
}
```

Al final nuestro composable encargado de crear un player quedaría asi:

```
@Composable
private fun rememberPlayerViewWithLifecycle(onDisposeCalled: (Long) -> Unit): PlayerView {
    val context = LocalContext.current
    val playerView = remember {
        PlayerView(context).apply {
            id = R.id.playerview
            setShowNextButton(false)
            setShowPreviousButton(false)
        }
    }
    val lifecycleObserver = rememberPlayerLifecycleObserver(playerView)
    val lifecycle = LocalLifecycleOwner.current.lifecycle
    DisposableEffect(lifecycle) {
        lifecycle.addObserver(lifecycleObserver)
        onDispose {
            val position = playerView.player?.currentPosition ?: 0
            onDisposeCalled(position)
            lifecycle.removeObserver(lifecycleObserver)
        }
    }
    return playerView
}
```

Ahora que hemos creado el Player view con sus observable atado al ciclo de vida y estamos obteniendo la posición actual del player al momento del `Dispose`, necesitamos guardar el valor de la posición aunque el dispositivo se rote, para esto podemos utilizar el delegado `by rememberSaveable`.

El `rememberSaveable` ayuda a restaurar el estado de la UI aun cuando una Activity o un proceso ha sido recreado. Para saber cómo funciona más a profundidad puedes revisar la documentación de Android en [este enlace](https://developer.android.com/jetpack/compose/state#restore-ui-state).

```
var currentPosition by rememberSaveable { mutableStateOf(0L) }
    val castContext = generateRememberCastContext()
    generateCastPlayer(uri = uri, castContext = castContext)
    val player = generatePlayer(uri)
    val playerView = rememberPlayerViewWithLifecycle { currentPosition = it }
```

Para finalizar, vamos a crear nuestro PlayerContainer Composable al que le pasaremos todo lo que hemos creado previamente: el PlayerView, el Player, la posición actual y un modifier para saber si lo queremos en modo portrait o landscape.

Una vez dentro de nuestro PlayerContainer vamos a utilizar el AndroidView composable que recibe como parámetros el modifier, un parámetro factory que crea la View que le pasamos y parámetro llamado update, el cual es un callback que se llama luego de que el Layout de la View ha sido inflado.

Dentro del callback `update` vamos a asignar a el `Player` a nuestro `playerAndroidView`, además aprovechamos y le decimos que se mueva a la posición que ya hemos seleccionado previamente. Quedándonos así.

```
@Composable
private fun PlayerContainer(playerView: PlayerView, player: SimpleExoPlayer, currentPosition: Long, modifier: Modifier) {
    AndroidView(modifier = modifier, factory = { playerView }) { playerAndroidView ->
        playerAndroidView.player = player
        playerAndroidView.player?.seekTo(currentPosition)
    }
}
```

Con esto hemos logrado implementar Exoplayer en nuestra app con Jetpack Compose.

Estos gist de código han sido extraídos de una nueva app que he creado para probar cosas con Jetpack Compose. Se llama Euterpe y es un reproductor multimedia en Android creado en Jetpack Compose. Aún le falta mucho para completarse, pero puedes encontrar el código en [este enlace](https://github.com/Gvetri/euterpe-compose-player). Si tienes alguna sugerencia o comentario puedes dejarlo en los comentarios del blog ?
