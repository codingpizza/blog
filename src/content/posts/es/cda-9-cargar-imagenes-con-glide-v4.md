---
title: "El camino del desarrollador Android #9 – Cargar imagenes con Glide v4"
description: "¡Hola! Hoy vamos a seguir con la serie de tutoriales de desarrollo Android, estas guías que a cualquier desarrollador le pueden servir para aprender y usar en su trabajo. En esta oportunidad hablaremos de Glide, la cual es una librería que se utiliza para cargar imágenes en nuestras aplicaciones And"
pubDatetime: 2018-12-03
tags: []
ogImage: "/images/GLIDE-CDA9-IG.png"
draft: false
categories: ["Android", "Programación"]
sourceUrl: "https://www.codingpizza.com/cda-9-cargar-imagenes-con-glide-v4/"
wpId: 4229
---
¡Hola! Hoy vamos a seguir con la serie de tutoriales de desarrollo Android, estas guías que a cualquier desarrollador le pueden servir para aprender y usar en su trabajo. En esta oportunidad hablaremos de Glide, la cual es una librería que se utiliza para cargar imágenes en nuestras aplicaciones Android.

#### Tabla de contenidos

#### **Agregando Glide a nuestro proyecto**

Como la mayoría de las librerías, empezamos agregando lineas a nuestro archivo build.gradle.

#### **Añadimos el permiso de Internet (Opcional)**

Si nuestra aplicación va a cargar imágenes desde Internet, vamos a necesitar el permiso correspondiente. En caso de que la aplicación que estés desarrollando no necesite cargar imágenes, puedes obviar este paso.

El permiso de internet se incluye en el AndroidManifest.xml, dentro de la etiqueta de Manifest y fuera de la etiqueta de Application. Quedando de la siguiente manera:

#### **Añadiendo el permiso de escritura y lectura.**

Para leer imágenes del usuario de la app vas a necesitar agregar el siguiente permiso, el cual se agrega igual que el anterior.

`<uses-permission android:name=»android.permission.READ_EXTERNAL_STORAGE» />`

Si quieres utilizar la cache de Glide para almacenar datos en la microSD vas a necesitar el permiso de escritura, si agregas los dos permisos al AndroidManifest quedaría así:

`<uses-permission android:name=»android.permission.WRITE_EXTERNAL_STORAGE» />`

Puedes usar el de Internet y estos que hemos mencionado anteriormente no son excluyentes, solo debes agregar uno debajo el otro. Con esto hemos terminado de incluir esta librería en nuestro proyecto usando Java, en caso de que uses Kotlin aun te falta algo mas por hacer.

#### **Agregar el Plugin kapt (Solo en caso de Kotlin)**

En este caso, no vamos a utilizar la linea de annotationProcessor que tenemos en el primer paso. En su lugar vamos a agregar el Plugin de kapt

En el build.gradle agregamos:

dependencies {  
kapt ‘com.github.bumptech.glide:compiler:4.8.0’  
}

Y luego tenemos que incluir también el plugin al inicio del build.gradle:

apply plugin: ‘kotlin-kapt’

Quedándonos así:

#### **Creando el layout para mostrar la imagen**

Para hacer esto solo tenemos que seguir unos sencillos pasos. Simplemente un botón con un ImageView en el que se cargara la imagen, el cual seria.

Nada que no hayamos visto antes ni que sea muy complicado, una View que es un ImageView y un botón el cual tendremos que tocar para que se cargue la imagen.

![](/images/2gojnb.jpg)

#### **Finalmente, utilizamos Glide**

Para utilizar Glide vamos a agregar un listener al botón que hemos creado previamente y llamar al método loadImage que crearemos ahora, y luego dentro de este ultimo haremos la llamada a Glide.

Cuando utilizas Glide basta con llamar al método with() y pasarle como parámetro un Context, un Activity o un Fragment. Luego indicamos la URL que vamos a utilizar para cargarla en el imageView y para finalizar utilizamos el método .into para cargarla en el imageView que hemos declarado anteriormente.

#### Java

#### Kotlin

La única diferencia que tenemos en Kotlin es el uso de .let.

Recuerda que el repositorio del proyecto lo puedes encontrar [Aquí.](https://github.com/codingpizza/CDA9) Para alternar entre el proyecto en Java y en Kotlin basta cambiar de rama ?.

#### **Qué hacer ahora**

Glide tiene muchísimo más potencial de lo que hemos hablado hasta ahora, así que si quieres conocer más de sus capacidades puedes leer su documentación haciendo [click aquí](http://bumptech.github.io/glide/).

Con esto terminamos este post; si te ha servido no olvides compartirlo con tus amigos programadores ? y recuerda seguirnos en nuestras redes sociales para estar al tanto de todas las publicaciones que hacemos.
