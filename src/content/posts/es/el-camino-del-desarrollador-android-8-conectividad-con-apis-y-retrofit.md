---
title: "El Camino del Desarrollador Android #8 – Conectividad con Apis y Retrofit"
description: "Nuestras tareas de cada día en la mayoría de las aplicaciones que creamos son las llamadas a servicios,APIs y otras fuentes donde podamos consumir datos para mostrar al usuario en nuestra aplicación. En estos casos existen muchas maneras de realizar estas tareas pero gracias a Retrofit, una librería"
pubDatetime: 2018-11-12
modDatetime: 2018-11-26
tags: []
ogImage: "/images/EL-CAMINO-DEL-DESARROLLADOR-ANDROID-8-IG-1024x1024.png"
draft: false
categories: ["Android", "Programación"]
sourceUrl: "https://www.codingpizza.com/el-camino-del-desarrollador-android-8-conectividad-con-apis-y-retrofit/"
wpId: 4118
---
Nuestras tareas de cada día en la mayoría de las aplicaciones que creamos son las llamadas a servicios,APIs y otras fuentes donde podamos consumir datos para mostrar al usuario en nuestra aplicación. En estos casos existen muchas maneras de realizar estas tareas pero gracias a Retrofit, una librería para la capa de comunicación de nuestra aplicación se nos hace fácil esta tarea.

Integrar Retrofit a tu aplicación es bastante sencillo, solo necesitas seguir los siguientes pasos:

1.  Integrar Retrofit a las dependencias a tu proyecto de Android Studio en el build.gradle.
2.  Crear nuestros POJO (Plain Old Java Object) para la llamada.
3.  Luego necesitas crear una interfaz donde vas a definir todas las llamadas que se van a realizar a una API utilizando sus anotaciones especiales.
4.  Crear una instancia de Retrofit donde indicar la URL de la API.
5.  Crear una implementación de la clase que hemos creado previamente en el paso 2.
6.  Realizar la llamada.
7.  Hacer uso de los datos de la forma que prefieras, por ejemplo mostrarlos en un RecyclerView.

## **Integrando Retrofit a nuestro proyecto**

Para integrar Retrofit lo unico que necesitamos realizar es agregar las siguientes lineas al build.gradle

## **Creando nuestros POJOS**

Aquí es donde viene unas de las mejores funcionalidades que tiene Retrofit, la conversión a nuestros POJOS haciendo uso de la librería de Google, GSON. Podemos convertir un JSON en objetos Java.

En nuestro caso he preparado una API de pizzas a la cual consultaremos y mostraremos su resultado por consola, recuerda que luego podemos utilizar esta información para mostrarla en un RecyclerView.

La URL de nuestra API a la cual llamaremos es: http://private-3cc5a4-codingpizza.apiary-mock.com/pizzas

Con el JSON que nos devuelve nuestra API de pizzas iremos a esta pagina [http://www.jsonschema2pojo.org/](http://www.jsonschema2pojo.org/) , la cual es genial para convertir JSON a clases de Java (En el caso de que estemos creando un proyecto con Kotlin, puedes convertir la clase de Java a Kotlin utilizando la opción de convertir archivo Java a Kotlin en la pestaña de «Code» de Android Studio.

En la siguiente imagen podemos ver como obtener nuestra clase Java, solo basta pegar el JSON y luego hacer click en Preview si queremos ver una vista previa o descargar todo en un zip que contenga las clases que necesitamos.

![JsonToPojo](/images/CDA8_JSON2POJO-1024x837.jpg)

Ahora solo falta pegar estas clases dentro de nuestro proyecto y hemos terminado con este paso.

## **Creando la interfaz**

Luego procedemos a crear una interfaz donde definiremos todas las llamadas que realizaremos y lo haremos de la siguiente manera:

###### Kotlin

Podemos ver que tenemos varias anotaciones las cuales indican lo siguiente:

**@Get**: Realiza una llamada Get (Si, es un poco obvio). Pero existen otras anotaciones que podrán conocer en la pagina oficial de **[Retrofit.](http://square.github.io/retrofit/)**

## **Creando nuestra instancia de Retrofit**

Creamos nuestra instancia de Retrofit en nuestra clase usando su Builder e indicamos a la URL que vamos a llamar

###### Kotlin

## **Indicandole a Retrofit de que interfaz hablamos**

Ahora tenemos que crear un Objeto de PizzaService, con la clase que necesitábamos y para terminar este paso tenemos que crear una Call, especificando que método de la clase PizzaService vamos a utilizar.

###### Kotlin

## **Agregar el permiso de** **Internet**

Esto es de vital importancia si no lo agregas no podrás realizar conexiones desde tu aplicación y esta se cerrara.

## **Realizando las llamadas**

Ahora vamos a realizar una simple llamada a un servicio utilizando nuestras clases nuevas de la siguiente manera:

###### Kotlin

En esta parte, creamos un objeto Call el cual nos traerá un objeto Response el cual verificamos si ha sido exitoso y de ser así obtenemos el Body de la llamada el cual es una lista de objetos de Pizza donde obtendremos toda la información que necesitamos para mostrar en un Log, esta lista podemos utilizarla también en un RecyclerView y mostrar estos datos pero esto lo haremos cuando creemos la aplicación completa. Así que si no quieres perderte cuando creemos la aplicación no olvides seguirnos en nuestras redes sociales y suscribirte a nuestra newsletter.

## **Ventajas de Retrofit**

Retrofit es muy versátil y así como puedes convertir llamadas a JSON puedes convertir a XML,Jackson,Moshi hasta puedes obtener un JSON «Crudo», Llámese «Crudo» a la misma respuesta JSON que puedes obtener realizando una llamada a la API desde otro medio como Postman (¿Conoces Postman No?, de no ser así deberías es una gran aplicación para realizar llamadas a API y ver como funcionan los servicios de la API).

Otra de las grandes ventajas de Retrofit 2 es que te permite modificar el Header (Cabecera) de una llamada, utilizando la anotación *@Header*. Hay mucha tela que cortar con el Retrofit, por el momento utilizaremos solo las GET. Luego iré actualizando este Post con todas las llamadas posibles que utilicemos en otros post de el Camino del Desarrollador Android.

## **¿Que hacer ahora?**

Empieza probando con diferentes llamadas a servicios que te llamen la atención y practica con ellos, si tienes alguna duda o quieres hacer algo en especifico pero tienes una duda. Puedes comentarlo aquí abajo y no olvides seguirnos en nuestras redes sociales, las cuales encontraras al final de la pagina ademas compartir esto con alguien que necesite aprender a usar Retrofit. Ademas en caso de que necesites el código del proyecto lo puedes ver y descargar de [aquí](https://github.com/codingpizza/CDA8) si lo quieres en Java y para Kotlin [aquí](https://github.com/codingpizza/CDA8/tree/Kotlin).
