---
title: "El camino del desarrollador android #3 – Intents,ImageView y Bundles"
description: "Hola a todos, previamente ya hemos hablado acerca de lo que son las Activities, cómo funcionan y cómo agregar widgets para darle un uso y una apariencia. De lo que vamos a hablar en este Post es acerca de Intents,Imageview (Otro widget que aun no hemos cubierto) y Bundles. Estos componentes son esen"
pubDate: 2017-11-27
lang: es
slug: "intents-imageview-bundles"
categories: ["Android", "Programación"]
heroImage: "/images/samuel-ferrara-318709.jpg"
sourceUrl: "https://www.codingpizza.com/intents-imageview-bundles/"
wpId: 4017
draft: false
---
Hola a todos, previamente ya hemos hablado acerca de lo que son las Activities, cómo funcionan y cómo agregar widgets para darle un uso y una apariencia. De lo que vamos a hablar en este Post es acerca de Intents,Imageview (Otro widget que aun no hemos cubierto) y Bundles. Estos componentes son esenciales en una app de Android, ya que por empezar a hablar de ellos los Intents nos ayudan a llamar a otro componente de la aplicación, es imposible tener una app sin imágenes así que para eso tenemos los ImageView y los Bundles que nos sirven para almacenar objetos y pasarlos a través de clases.

#### **¿Qué son los Intents?**

Los Intents son objetos que se utilizan para solicitar la acción de otro componente de Android. Ya vimos una de ellas que son las Activities, ahora los otros tres componentes de Android restantes serían, Broadcast, Services y content Providers. De los cuales hablaremos próximamente en este blog.

Las tres formas más comunes para utilizar Intents son las que vamos a ver a continuación:

###### **Para comenzar una actividad**

En caso de que tengamos nuestra actividad Login y quisiéramos desplazarnos a nuestra actividad principal con toda la información principal de la aplicación, tendríamos que crear un Intent y utilizar el método

startActivity();

y pasarle como parámetro un Intent con la clase a la que nos queremos dirigir, por ejemplo:

###### **Los dos tipos de Intents**

Existen dos tipos de Intents, lo que acabamos de ver que sería un Intent *explícito,* el cual se llama así por que se indica explícitamente que componente vamos a iniciar, en este caso sería otra activity de nuestra app.

![](/images/intent-filters-300x138.png)

Fuente: *[Android Developers](https://developer.android.com/guide/components/intents-filters.html)*

En esta imagen podemos ver como se inicia un Intent desde un Activity A hasta como llega y se inicia un Activity B.

Al contrario a un *Intent implícito,*  
no le indicamos que componente va a iniciar, sino que le declaramos una acción, lo cual permite a otra aplicación como gestionarlo. ¿Alguna vez has querido compartir esa foto graciosa que encontraste en tu aplicación favorita y le das al famoso botón de share y luego te muestra un menú para seleccionar a través de que aplicación quieres compartirla?, Bueno eso es gracias a un Intent implícito.

Para crear un Intent implícito en tu aplicación puedes hacerlo de la siguiente manera:

También existen los Pending Intents los cuales son contenedores de Intents que se ejecutan luego de que el usuario interactúa con una notificación o con un widget.

#### **ImageViews**

Los ImageViews son widgets como los que hablamos en la versión anterior de esta serie de tutoriales solo que estos se encargan, como su nombre lo indica, de mostrar una imagen al usuario. Para mostrar una imagen solo hay que copiarla en el directorio Drawable o Mipmap y luego llamarla desde el XML de la siguiente forma:

En el cual podemos ver los siguientes atributos:

**android:layout\_width\=«wrap\_content»****:** Donde le indicamos que queremos que el ancho de la imagen se adapte al tamaño que tenemos.  
**android:layout\_height\=«wrap\_content»:** En este atributo le indicamos que se adapte al tamaño pero en este caso hablamos de la altura del widget.  
**android:src\=«@mipmap/ic\_launcher»:** En este atributo indicamos en donde esta guardada la imagen y el nombre que esta tiene para asignarla

Aparte de estos atributos los ImageView tienen atributos muy importantes como son los siguientes:

**android:tint :** Con este atributo podemos cambiarle el color a drawable o un svg.  
**android:scaleType** : Con este atributo podemos cambiar la forma en el que se ve una imagen al aplicarle una reducción.

#### **Bundles**

Los Bundles, objetos cuya misión es transportar tus objetos desde una Activity a otra. Para ello, el objeto que tengas que enviar debe implementar la interfaz *Parcelable.* O utilizar primitivos para enviar tus datos desde una Activity a otra, por ejemplo, si queremos enviar un dato desde una Activity a otra podemos agregarlo al Intent de la siguiente manera:

Luego en la mainActivity.java podemos obtenerlo desde un bundle de la siguiente forma:

Donde podemos observar que obtenemos el intent con el método *getIntent();* y luego obtenemos los extra que habíamos colocado anteriormente con el método *.getExtras();* y por último, verificamos si el bundle no es nulo y si contiene el string con la clave *url* de ser hacer mostramos un Toast.

Nuestros amigos los bundles, también sirve para guardar los datos de nuestra activity en un caso que se gire la pantalla y se tenga que reconstruir la actividad. Hablaremos de esto y acerca del ciclo de vida de las activities en un próximo post aquí, así que no olvides seguirnos en las redes sociales para estar al tanto de nuestros post.

Con esto terminamos otro capitulo mas acerca del camino del desarrollador Android y estamos más cerca de poder lograr nuestra propia aplicación así que comenta si te gusto el post, si no te ha gustado comenta que no te gusto y comparte este post por las redes sociales para todos aquellos que quieran empezar a desarrollar en Android, ¡Hasta luego!

Recuerda que si quieres adelantarte y seguir conociendo mas de Android puedes visitar *[la documentación oficial haciendo click aquí](http://developer.android.com)*
