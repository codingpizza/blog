---
title: "El camino del desarrollador Android #2 – Hola mundo, Activities y Widgets"
description: "Hola mundo, los primeros pasos para todo desarrollador que se encuentra aprendiendo un nuevo lenguaje, un nuevo framework y empezando una nueva aventura con algo nuevo. En este post te hablo de como vamos a crear nuestro primer proyecto de Android Studio y hablaremos de uno de los 4 principales comp"
pubDate: 2017-11-20
lang: es
slug: "el-camino-del-desarrollador-android-2"
categories: ["Android", "Programación"]
heroImage: "/images/jens-lelie-15662-1024x685.jpg"
sourceUrl: "https://www.codingpizza.com/el-camino-del-desarrollador-android-2/"
wpId: 3981
draft: false
---
Hola mundo, los primeros pasos para todo desarrollador que se encuentra aprendiendo un nuevo lenguaje, un nuevo framework y empezando una nueva aventura con algo nuevo. En este post te hablo de como vamos a crear nuestro primer proyecto de Android Studio y hablaremos de uno de los 4 principales componentes de Android.

Las famosas Activities y que sería de una Activity sin los widgets que la complementan, solo veríamos una pantalla la cual no podríamos hacer mas que cambiar de color.

Los activities son una clase del SDK de Android, como ya mencionaba pueden almacenar muchos widgets inclusive almacenar Fragments (Otro componente de Android, pero del cual hablaremos en otro momento).

#### **¿Qué son los Widgets?**

Para hablar de los Widgets necesitamos hablar primero de las View, que son una clase padre que existe en el SDK de android, las cuales tienen muchas clases hijas como lo son los Textview,EditText,ImageView,Button. Todos estos son hijos de la super clase llamada View, estos componentes que son llamados Widgets. Estos widgets pueden modificarse para mostrar el texto que deseamos o la imagen que deseamos mostrar al Usuario, así como cambiar el color del texto o del fondo o decidir si mostrarlos u ocultarlos. Para poder hacer esto, necesitamos asignarle un id para poder identificarlo de los demás.

#### **¿Y dónde se utilizan estos widgets?**

Los widgets pueden ser utilizados dentro de un layout. Un layout es un archivo .xml, el cual guarda toda la información de como se verá tu actividad. Toda Activity o Fragment tiene un layout, que es la parte de la Interfaz de Usuario que esta muestra y que además en este se declaran los Widgets. Usualmente, estos suelen tener una estructura jerárquica donde siempre hay un widget que es el Padre y pueden haber varios hermanos.

Ya va, ¿Qué?

Tranquilo, no es tan complicado como parece. Veámoslo en el siguiente código:

Este es un TextView, un widget que muestra el texto que deseamos y le hemos dado las siguientes propiedades:

**android:layout\_width** : Esta propiedad establece la anchura del TextView.  
**android:layout\_height** : Esta propiedad esteblece la altura del TextView.  
**android:text** : En esta propiedad establecemos el texto que queremos mostrar a través del TextView.  
**android:id** : En esta propiedad se establece el id del widget para poder acceder a el.

¿No es tan difícil, cierto?, ok ahora vamos a crear un EditText el cual es un campo de texto donde puedes ingresar texto y ademas crearemos un botón para enviar el texto que hemos escrito.

Aparte de estos dos widgets vamos a utilizar un LinearLayout, el cual es un widget que a diferencia de los elementos que mencionamos anteriormente, es hijo de la clase ViewGroup del Android SDK, el cual se utiliza para organizar otras vistas, sea Horizontal o verticalmente. Dentro de este LinearLayout vamos a almacenar nuestro EditText y nuestro Button, quedando de esta manera:

Ok, como te comentaba anteriormente, estos layout XML son utilizados por las clases de android para mostrar la interfaz, así que nos encargamos de declarar nuestro layout en nuestra activity. Cada vez que creas un Activity, el android studio genera por defecto un archivo .xml, en nuestro caso se llama activity\_main.xml que es en el cual agregamos los widgets.

El código de tu activity debería verse así:

#### **¡Muéstrame el mensaje!**

Ya tenemos definido nuestros Widgets, ahora solo debemos agregar un listener a nuestro botón para que reaccione al tocarlo. De los listener hablaremos en otro tutorial, mientras tanto solo puedo decir que son líneas de código que se ejecutan cuando un evento ocurre.

Para empezar utilizamos el método setOnClickListener del objeto button, luego como parámetro creamos un nuevo onClickListener, el autocompletado del android studio debería ayudarte y este sería el resultado:

Entendido y anotado capitán, pero ahora ¿como hacemos para mostrar un mensaje que diga el nombre?, pues es muy sencillo, te presento a nuestro amigo el Toast, quías si tienes un dispositivo android lo hayas visto antes pues es muy sencillo de utilizar.

Para mostrar un Toast solo debes crearlo de la siguiente forma:

Donde el primer parámetro le puedes pasar un contexto (Esto es un tema que está fuera del alcance de este post, pero del cual hablaremos próximamente).  
El segundo parámetro es el mensaje que quieres mostrar al usuario, es decir un String. Y el tercero, es una constante el cual es el tiempo de duración que quieres que dure el toast.  
Por último, pero para nada menos importante tenemos el método .show() que es el encargado de mostrar nuestro Toast, sin el no podríamos observar su belleza.

Pero nosotros no queremos mostrar un texto cualquiera, nosotros queremos mostrar el texto que hemos escrito en nuestro EditText, ¿cómo lo obtenemos?. Pues de una manera muy sencilla, utilizando el método .getText de nuestro EditText, quedando así de la siguiente manera:

Que no te asuste el String.valueOf(); el método getText devuelve un objeto del tipo Editable, así que lo que hace este método es transformarlo a un String para que el Toast lo pueda mostrar.

Y con eso tendríamos nuestro resultado:

![imagen\_final](/images/Screenshot_1510946875-576x1024.png)

Puedes saber mas acerca de los Widgets,Activities y Toast en los links que te dejo aquí abajo:

https://developer.android.com/guide/components/activities/index.html

https://developer.android.com/reference/android/widget/Toast.html

https://developer.android.com/reference/android/view/View.html

Y con esto terminamos nuestro Post #2 del Camino del desarrollador Android, comenta debajo sobre que widget quisieras conocer mas y que te interesaría realizar :).

Si te gustó el post no olvides compartirlo en tus redes sociales y ayudar a propagar esta información a personas que quisieran comenzar en el mundo del desarrollo Android.
