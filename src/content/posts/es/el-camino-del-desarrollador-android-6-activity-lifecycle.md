---
title: "El camino del desarrollador Android #6 – Activity Lifecycle"
description: "¡Hola! esta vez traemos de vuelta nuestros post sobre el desarrollo de aplicaciones Android, para seguir aprendiendo sobre como crear aplicaciones en esta plataforma. En esta oportunidad hablaremos del ciclo de vida de las Activities el cual es muy importante para el desarrollo de nuestras aplicacio"
pubDatetime: 2018-04-02
modDatetime: 2018-04-16
tags: []
ogImage: "/images/Untitled-design.png"
draft: false
categories: ["Android", "Programación"]
sourceUrl: "https://www.codingpizza.com/el-camino-del-desarrollador-android-6-activity-lifecycle/"
wpId: 4153
---
¡Hola! esta vez traemos de vuelta nuestros post sobre el desarrollo de aplicaciones Android, para seguir aprendiendo sobre como crear aplicaciones en esta plataforma. En esta oportunidad hablaremos del ciclo de vida de las Activities el cual es muy importante para el desarrollo de nuestras aplicaciones para que se comporten como es debido, tener el conocimiento del ciclo de vida nos ayudara a responder a los diversos cambios del sistema, como cuando tu aplicación se pone en segundo plano o cuando tu aplicación es cerrada.

## **El ciclo de vida**

Cuando tu aplicación es creada y ejecutada pasa por varias etapas del ciclo de vida aquí debajo puedes ver un diagrama de como funciona dicho ciclo de vida.

![ciclo de vida de android](/images/activity_lifecycle.png)

*Obtenida de [Android Developers](https://developer.android.com/guide/components/activities/activity-lifecycle.html)*

Es un poco intimidante al principio, pero no es muy de difícil de entender ya que tiene bastante sentido prosigamos a explicarlo.

1.  Empecemos, por el **onCreate()** este es el primer método que viene viene llamado cuando se crea una actividad aquí es donde construye y se crea tu interfaz de usuario, también llamada UI.
2.  Cuando la actividad pasa a estar visible se llamara al método **onStart()**, el cual aparece cuando la actividad pasa a estar visible.
3.  En el momento en la que la actividad gana foco, se llama el método **onResume().**

La misma secuencia ocurre en reversa,

1.  La secuencia en reversa empieza con el **onPause()**, en este punto la Activity ha perdido el foco un ejemplo de esto es cuando queremos compartir una imagen y aparece el dialogo que te indica con que aplicación quieres compartirlo si a través de Instagram, Facebook o Twitter.
2.  Luego continua con el **onStop()**, el cual viene llamado cuando la Activity ya no es visible.
3.  Y para terminar el ciclo de vida, viene llamado el método **onDestroy()** el cual es el ultimo que viene llamado al eliminar la Activity.

Los otros dos casos que nos quedan son, cuando el usuario regresa a la aplicación en el cual se llamara al método **onRestart()**. El otro caso restante es el que podemos encontrar a la izquierda de la imagen, cuando el Sistema operativo tiene demasiada memoria ocupada, empezara a matar las aplicaciones que estén consumiendo mucha memoria, así que podríamos tener el caso en el que tengamos una aplicación en segundo plano pero que este consumiendo muchos recursos, así que será eliminada y nunca pasaría por el **onRestart()**, lo mismo ocurriría en el **onPause().**

## **Mucha teoría poco código, bueno aquí esta.**

En este caso vamos a tomar por ejemplo, que tenemos un formulario que el usuario debe rellenar para registrarse. ¿Que ocurre? que al girar el móvil, se borran los campos y tiene que llenarlos de nuevo, una de las peores cosas que pueden pasar.

¿Por que ocurre esto? Por que al hacer esto el ciclo de vida se reinicia y empieza a pintar de nuevo la interfaz desde el **onCreate()**, así que lo que procederemos a hacer es almacenar el estado en el bundle y luego restaurarlos.

Tendríamos nuestro layout xml, de la siguiente forma:

Y presentando, nuestro primer post en con código en **Kotlin** tenemos:

De esta forma al girar la aplicación ya tendremos que se mantiene el estado y lo que hemos escrito previamente.

Algunas cosas que deben saber del código en Kotlin que quizas pueden llegar a preguntarse:

-   ¿Donde están los findViewById? en Kotlin puedes utilizar directamente las views de un XML utilizando una extensión que se llama *kotlinx.android.synthetic* al tu escribir el id de en este caso el EditText te aparecera la sugerencia que te indica si quieres importarlo con kotlinx, aceptas y se incluirá en tu clase.
-   La función *.run{}*  es una función de Kotlin, asi que no te preocupes si no las has visto antes.
-   El símbolo ? antes de un punto indica que el objeto es opcional.

Para mucha gente que aun tenemos que utilizar Java en nuestro trabajo o en otros proyectos, lo hacemos de la siguiente forma:

Como podemos notar el código en Kotlin, es mucho mas limpio que en Java y ademas nos ahorramos unos cuantos if.

Y bueno, con eso terminamos en este post, una nueva herramienta que ya conocemos y que podemos aplicar a nuestras aplicaciones para hacerlas mas robustas y mejor para nuestros usuarios. Si te ha gustado lo que hemos hablado acá, no olvides, Compartir el Post usando los botones de aquí abajo, unirte a la newsletter para no perderte cualquier información acerca de nuestros post y seguirnos en nuestras redes sociales que encontraras debajo.
