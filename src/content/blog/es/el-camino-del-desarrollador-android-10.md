---
title: "El camino del desarrollador Android #10 – PizzaList"
description: "¡Hola! Finalmente hemos llegado a la segunda aplicación de esta serie de tutoriales que estamos realizando para aprender a programar en Android. En este post, vamos a implementar todo lo que hemos ido aprendiendo en los post anteriores y poder crear nuestra primera aplicación que obtiene datos de un"
pubDate: 2019-01-14
lang: es
slug: "el-camino-del-desarrollador-android-10"
categories: ["Android", "Programación"]
tags: ["Android", "java", "kotlin"]
heroImage: "/images/PIZZALIST-FACEBOOK-.png"
sourceUrl: "https://www.codingpizza.com/el-camino-del-desarrollador-android-10/"
wpId: 4258
draft: false
---
¡Hola! Finalmente hemos llegado a la segunda aplicación de esta serie de tutoriales que estamos realizando para aprender a programar en Android. En este post, vamos a implementar todo lo que hemos ido aprendiendo en los post anteriores y poder crear nuestra primera aplicación que obtiene datos de un servicio y los muestra al usuario. La aplicación en sí lo que hará es mostrar una lista de pizzas y de sus ingredientes, porque todos sabemos que la pizza es vida?.

Las dependencias que utilizaremos para este proyecto serán las siguientes:

\-Fragments  
\-RecyclerView  
\-Retrofit  
\-Glide

## **Resultado final**

![app-screenshot](/images/device-2018-12-29-160632-512x1024.png "App final screenshot")

Captura de pantalla de la aplicación terminada.

## **Agregando dependencias**

Como en todas las aplicaciones que creamos, necesitamos empezar agregando las dependencias a nuestro build.gradle.

## **Creando nuestra Activity**

Vamos a iniciar creando nuestro Activity que va a gestionar nuestro Fragment de lista de pizza. En el último Google I/O, el cual es el evento anual de Google donde hablan acerca del futuro del framework de Android, nuevas tecnologías y todo lo que se viene; los encargados del desarrollo del framework de Android han comentado que la mejor forma de tener una aplicación hoy en día es una Activity con muchos Fragments. Por eso vamos a realizar nuestras aplicaciones de esta manera de ahora en adelante.

Para empezar, crearemos el layout de nuestro Activity y su respectiva clase. Además, para hacer el post un poco más corto agregaremos de una vez la llamada a un Fragment que vamos a crear luego.

#### **Java**

#### **Kotlin**

### **Creando nuestro Fragment**

Ahora procederemos a crear nuestro Fragment donde mostraremos nuestro RecyclerView con la lista de pizzas. Para empezar, vamos a agregar directamente el RecyclerView a nuestro layout.

#### **Java**

#### **Kotlin**

Luego procederemos a crear el layout para la fila que mostrará la información de cada pizza.

## **Creando nuestro POJO**

Como ya se ha mencionado en el post anterior (puedes revisarlo haciendo [click aquí](https://www.codingpizza.com/cda-9-cargar-imagenes-con-glide-v4/)), para crear un objeto a partir de un JSON es necesario realizar un Plain Old Java Object. Para esto crearemos nuestra clase Pizza, que es muy parecida a la que hicimos anteriormente solo que en esta oportunidad tiene una url donde está almacenada la imagen.

#### **Java**

#### **Kotlin**

## **Creando nuestro CustomAdapter y ViewHolder**

Ahora crearemos nuestro CustomAdapter el cual extiende de RecyclerView.Adapter y vamos a crear dentro del mismo una clase con un viewHolder. Dentro de este último vamos a asignar la información de cada pizza.

#### **Java**

#### **Kotlin**

## **Agregando Glide**

Para poder mostrar las imágenes de cada pizza necesitaremos utilizar Glide. Usar Glide es bastante sencillo solo debemos indicarle en cuál View va a buscar la ImageView en la que queremos mostrar la imagen *.with(),* luego desde dónde va a cargar la imagen con el método *.load()*, y finalmente, con el método *.into()* pasamos nuestro ImageView quedando de la siguiente manera:

#### **Java**

#### **Kotlin**

## **Obteniendo datos con Retrofit**

Antes de crear el RecyclerView vamos a empezar creando la llamada a la API para obtener la información que le vamos a pasar a este. Esta parte también es muy parecida al [post anterior](https://www.codingpizza.com/el-camino-del-desarrollador-android-8-conectividad-con-apis-y-retrofit/) con la única diferencia que aquí la parte final de la url es */v2/pizzas/*, ya que esta url contiene la listas de pizzas con imágenes.

#### **Java**

#### **Kotlin**

## **Rellenando el RecyclerView**

Para llenar nuestra lista de pizzas vamos a necesitar crear en nuestro Fragment, un RecyclerView y una instancia de Retrofit. Luego de esto vamos a crear un Service con Retrofit que nos permitirá realizar una llamada a la URL que ya hemos definido previamente y al obtener los datos vamos a asignarlos a nuestro nuevo CustomAdapter.

#### **Java**

#### **Kotlin**

Con esto ya tendremos nuestra simple aplicación para ver Pizzas y sus ingredientes.

## **Conclusión**

En estos últimos post hemos hablado de cómo realizar llamadas a servicios que ya existen y obtener sus datos para mostrarlo en una aplicación. La mayoría de las aplicaciones necesitan hacer esto.

Próximamente, hablaremos sobre cómo integrar mapas a tus aplicaciones, recibir notificaciones y muchas cosas de las que seguro te querrás enterar.

Síguenos en las redes sociales que puedes encontrar al final de la página y comparte este artículo con tus amigos desarrolladores o con aquellos que estén empezando a programar. 😉
