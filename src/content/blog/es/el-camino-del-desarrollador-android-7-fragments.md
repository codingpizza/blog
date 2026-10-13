---
title: "El camino del desarrollador Android #7 – Fragments"
description: "Fragments ¡Hola! En esta oportunidad nos toca hablar de uno de los componentes de Android que mucha gente odia, los Fragments. Los Fragments podríamos decir que son piezas reutilizables de UI como los Layouts o los Viewgroups. Estos se pueden organizar de forma distinta dependiendo del tamaño de pan"
pubDate: 2018-04-16
lang: es
slug: "el-camino-del-desarrollador-android-7-fragments"
categories: ["Android"]
heroImage: "/images/Copy-of-Copy-of-EDA7.png"
sourceUrl: "https://www.codingpizza.com/el-camino-del-desarrollador-android-7-fragments/"
wpId: 4163
draft: false
---
## **Fragments**

¡Hola! En esta oportunidad nos toca hablar de uno de los componentes de Android que mucha gente odia, los Fragments.

Los Fragments podríamos decir que son piezas reutilizables de UI como los Layouts o los Viewgroups. Estos se pueden organizar de forma distinta dependiendo del tamaño de pantalla si así se quiere.

Generalmente, estos Fragments se utilizan en dos formas en específico. Puedes utilizarlos dentro de la misma actividad e intercambiarlos para dar la sensación de que se ha cambiado de actividad o puedes utilizarlos como se utilizan en las tablets el cual es un menú de un lado y el contenido de otro a esto se le llama “MasterFlow” en este post vamos a tratar solo el primer caso.

![Fragments](/images/fragments.png)

*Fuente: [Android Developers](https://developer.android.com/guide/components/fragments.html)*

Todos los Fragments vienen mostrados en una Activity, estos utilizan la Activity como una “Anfitriona” y se alojan ahí. En práctica la actividad es un AirBnB para Fragments en este caso, la Activity gestiona estos Fragments a través del FragmentManager el cual permite agregar, remover y reemplazar los Fragments.

## **Ahora vamos a crear unos Fragments, pero antes otro poco de teoria**

Los Fragments tienen un ciclo de vida distinto a los de las Activities, el cual por si no lo conoces lo puedes leer **[aquí](https://www.codingpizza.com/el-camino-del-desarrollador-android-6-activity-lifecycle/)**. Sin embargo, comparten algunos Callbacks o eventos con su actividad «Anfitriona».

El ciclo de vida de los Fragments es el siguiente:

![Fragment Lifecycle](/images/fragment_lifecycle.png)

Fuente: [Android Developers](https://developer.android.com/guide/components/fragments.html)

No vamos a hablar mucho de esto, por que considero que en la documentación de **[Android Developers](https://developer.android.com/guide/components/fragments.html)** esta muy bien explicado este ciclo de vida. Si quieres que te lo expliquemos de una manera mas a nuestra forma háznoslo saber en los comentarios ? , solo comentaremos que la vista en el caso de los Fragments no se crean en el onCreate() sino, en el onCreateView().

## **Ahora, el código.**

Para utilizar los Fragments hay que seguir una serie de pasos los cuales son bastantes simples: 

#### **Creando los Fragments**

El Primer paso es crear nuestro Layout y nuestro Fragment que extienda de la clase Fragment, en este caso lo que vamos a hacer es crear una Activity en la que se muestre un Fragment para iniciar sesión, en caso de que el usuario no tenga cuenta seleccione la opción de registrarse y mostremos un Fragment con un formulario.

Primero creamos el Layout del Fragment, luego nuestro Fragment que extiende de la clase de Android Fragment.

Así que tenemos los Layouts para Login del Fragment y del Registro respectivamente:

Ahora, para continuar debemos crear nuestras clases Fragments.

Creamos nuestra clase LoginFragment

En la cual, creamos una clase LoginFragment que extiende de la clase Fragment, hacemos un Override del onCreateView() y dentro de este declaramos nuestras Views con nuestros onClickListeners en el caso de los botones.

Como habrán podido notar en el onCreateView() estamos devolviendo un objeto View, esto es por que inflamos la vista del Fragment que luego devolvemos por eso necesitamos usar el view.FindViewById().

También necesitamos crear una interfaz que implementara la MainActivity para que esta actué cuando tengamos que cambiar de Fragment.

Luego, creamos el Fragment de registro que es seguir los mismos pasos que hemos realizado previamente con el Fragment de Login.

## **Crear el MainActivity**

Ahora para que la Activity anfitriona se encargue de ellos, debemos agregar al Layout del Activity un Fragment container y nos quedaría de esta forma:

Posteriormente a esto, creamos una instancia de nuestro Login Fragment y obtenemos una instancia del FragmentManager el cual nos va a ayudar a gestionar nuestros bellos Fragments en la Activity.

No podemos olvidar que debemos implementar la interfaz que hemos creado en el LoginFragment luego de esto debemos implementar el método de esta interfaz, gracias a este método cuando se toque el botón de Registrarse en el LoginFragment podremos decirle al FragmentManager que cambie el Fragment que se esta mostrando.

Así que el resultado de nuestra MainActivity seria este:

## **Ahora, para Kotlin**

Para Kotlin el codigo que debemos utilizar en las clases del LoginFragment,SignInFragment y MainActivity es el siguiente:

*Nota: en el post anterior, no utilizamos el findViewById() al contrario, usamos las ventajas de las Kotlin Android Extensions, las cuales nos permitían acceder a los views sin tener que utilizar la función findViewById().*

*En este caso al ser un fragment no podemos utilizarla, ya que lo que hace Kotlin Extension es llamar al metodo getView().findViewById() pero en este caso aun no hemos devuelto la View donde buscariamos el ID. Para utilizar la Kotlin Android Extension habría que llamarla en el onViewCreated();*

## **Resultado Final**

![](/images/Screenshot_20180414-213555-576x1024.png)

**Formulario de inicio de sesión**

![](/images/Screenshot_20180414-213602-576x1024.png)

**Formulario de Registro**

Y por ahora esto es todo, no olvides compartir esto en las redes sociales para demostrarles a todos como vas progresando como desarrollador Android ?, recuerda seguirnos y si algo no te ha quedado claro o tienes alguna sugerencia déjala aquí debajo en los comentarios.
