---
title: "Como usar el Android Navigation Component"
description: "Android Architecture components - Navigation Component El problema de la navegación A lo largo de los años los desarrolladores Android han buscado una forma de hacer más fácil la navegación entre los fragments y las activities dentro de las aplicaciones que creaban. Muchos inventaron una cantidad de"
pubDatetime: 2019-05-05
tags: ["Android", "Architecture Components", "java", "kotlin"]
ogImage: "/images/dan-chung-355054-unsplash-1.jpg"
draft: false
categories: ["Android", "Programación"]
sourceUrl: "https://www.codingpizza.com/como-usar-el-android-navigation-component/"
wpId: 4313
---
# Android Architecture components - Navigation Component

![](/images/dan-chung-355054-unsplash-1.jpg)

## El problema de la navegación

A lo largo de los años los desarrolladores Android han buscado una forma de hacer más fácil la navegación entre los fragments y las activities dentro de las aplicaciones que creaban. Muchos inventaron una cantidad de clases y variantes llamadas Navigation, Base Navigation, Navigation Manager.

## Tabla de contenidos

Entre cualquier cantidad de ingeniosos nombres que el ser humano se puede inventar, cada uno tenía sus peculiaridades con sus ventajas y sus desventajas, muchas de estas necesitaban que el desarrollador heredara de una clase base o agregara manualmente constantes a una clase para así identificar a donde iría y de a donde vendría, esto solía generar muchos bugs respecto a la navegación de la app.

Por ejemplo, si una App que mostraba el detalle de una compra al ir hacia atrás lo que se espera es que te llevara al paso anterior a ese detalle de compra, es decir a los objetos que habías seleccionado para comprar, y en algunos casos estas famosas clases de navegación fallaban enviando al usuario a la pantalla principal de la aplicación o peor aún a otra pantalla que no tenía nada que ver con este flujo, esto suponía un problema.

## Entra en escena el Navigation Component de Android

En el Google I/O de 2018 fue anunciada la creación de este componente para así tener un standard en el cual se basaran las aplicaciones Android, la versión estable de este component fue liberada hace aproximadamente un mes y actualmente existe una versión 1.0 que es compatible con AppCompat y una versión 2.0 que está disponible para Android Jetpack. Si quieres saber qué es Android Jetpack he hablado de él previamente en **[este articulo.](https://dev.to/gvetri/que-es-android-jetpack-5g3)**

El uso de este componente está basado en crear un grafo en el cual estén conectados todos los activities y fragments de tu aplicación ademas de las «actions» que permiten cambiar de fragments.

## Muéstrame el código

Para empezar a utilizar nuestro Navigation Component en nuestros proyectos es necesario agregar las siguientes dependencias a nuestro build.gradle del modulo app y del proyecto.

**Java**  
  
build.gradle del proyecto

  
build.gradle del modulo app

## 1\. Crear el Navigation Graph

Para esto debemos abrir nuestra pestaña de Project en Android Studio y hacer click derecho en la carpeta «res», seleccionar Android Resource File, escribir el nombre del navigation graph que queremos y luego seleccionar Navigation.

![](/images/qneekzmbb5n1qpk5up52.png)

![](/images/h2bwotca0cvmrino07jz.png)

## 2\. Agregar el NavHostFragment en el layout de nuestro MainActivity.

Esto nos servirá para hospedar nuestros fragments. Para esto agregamos el siguiente código a nuestro layout.

Luego, hay que abrir nuestro archivo de navegación nav\_graph.xml y seleccionar nuestro host fragment.

![](/images/o3ty6sj1w1iil8gg0k8b.png)

## 3\. Agregar nuestros fragments al Navigation Graph

Basta hacer click en el icono de la pantalla con un signo + verde, luego hacer click en «Create new destination» desde ahí podremos agregar nuestros Fragments previamente creados o crear nuevos.

## 4\. Conectar nuestros fragments utilizando actions

Para conectarlos basta hacer click en un fragment y «arrastrar» una flecha hacia nuestro segundo fragment. Y ya habríamos creado una acción.

![](/images/kwarjfldz4yg9fasoriv.jpg)

## 5\. Moverse entre fragments

Para movernos entre fragments utilizando el Navigation Component tenemos varias opciones. La principal siempre es obtener el NavigationController, dependiendo del contexto en el que te encuentres puedes realizarlo de una manera distinta.  
En nuestro caso cambiaremos a otro fragment cuando se haga click en una imagen. Para esto utilizaremos el método de la clase Navigation FindNavController que acepta como parámetro una View o una Activity, luego utilizamos el método navigate y le pasamos como parámetro el id de nuestro action quedando de esta manera:

**Java:**  
  
**Kotlin:**  

## Pasar objetos de un fragment a otro

Para poder pasar objetos de un fragment solo tenemos que crear nuestro Bundle como se hacía tradicionalmente y agregarlo como parámetro al método .navigate() que vimos antes de esta forma:  
**Java:**  
  
**Kotlin:**  
  
Para obtener el drawableId en nuestro fragment de detalles lo hacemos de la siguiente manera:

**Java:**  
  
**Kotlin:**  

## Pasar objetos de un fragment a otro usando el plugin de safe-args

El Navigation Component utiliza un plugin de Gradle llamado safe-args que ayuda al momento de pasar objetos de un Fragment A a un Fragment B. Este ayuda a generar clases que se encargan de que los objetos sean type-safe.

> **Nota**: Type-safe significa que el objeto es evaluado en tiempo de compilación y el compilador nos dará un error en caso de que intentemos pasar un tipo que sea erróneo.

Ademas de esto, nos ayuda a quitarnos el problema de estar asignando constantes como claves del bundle para luego usarlas y recuperar así los objetos.

Primero necesitamos ir a nuestro nav\_graph.xml y hacer click en el fragment que va a recibir el objeto, en nuestro caso vamos a pasar el id del drawable que vamos a mostrar en nuestro Fragment de detalle. Así que hacemos click en el detailFragment, luego en el símbolo + que se encuentra a la derecha de «Arguments» y creamos nuestro nuevo argumento. Rellenamos los campos y hacemos click en «Add».

![](/images/sfsp9dzhx4d4wn1x99ag.jpg)

Necesitamos crear una instancia del objeto NavDirections, esta la obtenemos desde una clase que fue generada por el plugin de safeArgs. El plugin de safeArgs lo que hace es agregar un sufijo al nombre del fragment, en nuestro caso:  
Si tu Fragment se llama MainFragment, esta clase se llamará MainFragmentDirections, luego utilizamos el método que nos provee y como podrás ver tiene como parámetro un entero que es el id del drawable que vamos a pasar al otro Fragment. Luego se llama al método que vimos antes de navigate() pero esta vez le vamos a pasar el NavDirections que hemos creado previamente.

**Java:**  
  
**Kotlin:**  

Para obtener el drawableId que hemos pasado al fragment de DetailFragment lo hacemos de la siguiente forma:

**Java:**  
  
**Kotlin:**  

## Final

Esto es el uso básico del Navigation Component. También puede ser usado en el caso que quieras con un Drawer o con un Bottom Navigation View, pero eso da para otro artículo ?.  
Y con esto hemos terminado. En los próximos artículos hablaré un poco acerca de otros Android Architecture components. Si te ha gustado este artículo compartelo en las redes sociales. No olvides seguirme en mi twitter [seguirme en twitter](www.twitter.com/gvetri18) para que seamos amigos ? y sigue tambíen el twitter y el instagram de codingpizza que lo encontrarás al final del sitio.

[Aquí puedes encontrar todo el codigo que ha sido utilizado en este articulo.](https://github.com/codingpizza/android-component-navigation)
