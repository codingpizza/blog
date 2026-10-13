---
title: "El camino del desarrollador Android #5 – Primera Aplicación, Pizzapedia"
description: "Hola a todos, Por fin ha llegado el momento de crear nuestra primera aplicación donde utilizaremos todo lo que hemos estado aprendiendo en los post anteriores, si has llegado a este Post y no sabes de cual hablo, te invito a conocerlos aquí. Hoy nos enfocaremos en hacer una aplicación donde podamos "
pubDatetime: 2017-12-13
modDatetime: 2017-12-14
tags: []
ogImage: "/images/dayne-topkin-81631-683x1024.jpg"
draft: false
categories: ["Android", "Programación"]
sourceUrl: "https://www.codingpizza.com/el-camino-del-desarrollador-android-5-aplicacion-con-recyclerview/"
wpId: 4055
---
Hola a todos, Por fin ha llegado el momento de crear nuestra primera aplicación donde utilizaremos todo lo que hemos estado aprendiendo en los post anteriores, si has llegado a este Post y no sabes de cual hablo, te invito a conocerlos [**aquí**](https://www.codingpizza.com/category/android/). Hoy nos enfocaremos en hacer una aplicación donde podamos «iniciar sesión», seleccionar una pizza entre un catalogo y al tocarla mostrar una descripción de ella.

La idea de estas aplicaciones es practicar con ejemplos de la vida real donde puedes llegar a sentir que has aprendido algo, no solo ver videos o leer blogs y esperar que todo lo que has leído lo aprendas mágicamente. Lo que no se practica se olvida y en el campo de la programación la práctica hace al maestro.

#### Tabla de contenidos

#### **Creando el proyecto**

Para empezar, vamos a crear nuestro proyecto y colocarle un nombre original como «Pizzapedia» y vamos a seleccionar crear un Empty Activity, es decir, una «Activity Vacia». Le dejamos el nombre de MainActivity, hacemos click en «Siguiente» Y esperamos que el Android Studio termine de inicializar el proyecto.

Luego que se haya creado el proyecto, procederemos a crear el layout de nuestra Activity en el *activity\_main.xml*  donde vamos a añadir un LinearLayout y dentro de este, dos EditText para el nombre de usuario y contraseña respectivamente y luego incluiremos un Button para iniciar sesión.

Sin mas que agregar, abrimos el archivo *activity\_main.xml* y agregamos el siguiente código:

La mayoría de estos atributos los habíamos visto en los Post anteriores. Sin embargo, he agregado dos mas a la lista los cuales serían:

***android:layout\_margin:*** El cual indica el margen del widget respecto al padre, al utilizar este atributo modificamos todos los márgenes respecto al padre por 8dp (En Android es una buena practica utilizar la unidad dp en vez de px)

***android:layout\_gravity:*** Este atributo especifica como debería colocarse el Button en un conjunto de vistas. En nuestro caso hemos optado por que se mantenga en el centro.

#### **Agreguémosle** **funcionalidad**

Ahora, agreguémosle la funcionalidad a nuestro layout. Abrimos nuestro archivo *MainActivity.java* donde vamos a implementar toda lógica que necesitamos para pasar a los siguientes Activities.

Primero, creamos nuestras variables miembros, mUsername\_et,mPassword\_et y mButton. Le añadimos el prefijo *«m»,* así indicamos que es una variable miembro y le asignamos su vista utilizando el id que hemos declarado en el activity\_main.xml.

Luego, vamos a agregarle la funcionalidad al Button utilizando el método *setOnClickListener();* y dentro de este vamos a llamar a un método que vamos a crear llamado *CheckUser();* el cual se encargara de hacer una validación sencilla, en donde verificaremos que el campo de usuario y contraseña no están vacíos, ademas de verificar que sean los correctos.

Para terminar, en caso de que el usuario haya ingresado el nombre de usuario y la contraseña correcta, se ejecutará un método que crearemos llamado *moveToPizzaList();* donde utilizaremos un Intent para abrir la Activity que muestra la lista de pizzas disponibles.

#### **Mostrando la lista de pizzas**

Ahora que ya hemos iniciado sesión en nuestra aplicación queremos ver nuestra lista de pizzas, para esto necesitamos utilizar la herramienta que ya conocemos el llamado RecyclerView. Ahora, para empezar vamos a crear el layout de nuestra celda en el RecyclerView que llamaremos *item\_row.xml* e incluiremos un ImageView y un TextView donde mostraremos una imagen de la pizza y su nombre.

Hemos agregado unas imágenes de pizzas a nuestra carpeta *drawable* donde luego con el RecyclerView vamos a mostrar, ahora agregamos el RecyclerView a nuestro layout de la nueva Activity que hemos creado el cual es el PizzaListActivity. Quedando asi el *activity\_pizza\_list.xml:*

Muy bien, ahora necesitamos crear un objeto de java llamado Pizza con tres atributos: nombre, descripción y un entero que será el id del drawable que vamos a colocar en el ImageView en pocas palabras el id de la imagen que acabamos de pegar en nuestra carpeta *drawable*.

  
Ahora que ya tenemos un objeto Pizza crearemos un Adapter que utilizará una lista de pizzas para mostrar. Empezamos creando nuestra clase CustomAdapter y Extendiéndola de la clase RecyclerView.Adapter tal cual como lo vimos en nuestro articulo anterior, luego le indicamos al viewHolder cual layout debe inflar en el método *onCreateViewHolder();* y declaramos nuestros widgets en el método *onBindViewHolder();*

Recuerda que si no recuerdas bien como crear un Adapter personalizado, puedes revisar nuestro post anterior **[Aquí.](https://www.codingpizza.com/recyclerview-y-adapters/)**

El CustomAdapter queda de la siguiente manera:

Ok, ya casi terminamos. Necesitamos crear nuestra lista de pizzas e inicializar nuestro RecyclerView en el mainActivity. Para esto, seguiremos los mismos pasos que en el post Anterior solo que en esta oportunidad, vamos a crear una lista de objetos Pizza y la vamos a pasar al CustomAdapter, quedando de esta forma:

#### **Agregando el onClickListener**

Para tener la capacidad de reaccionar al click de cada celda del RecyclerView no podemos utilizar un simple *.setOnClickListener();* necesitamos crear nuestro propio onClickListener y aunque no hemos hablado todavía de los *Listener, e*xplicaremos brevemente que en este caso lo utilizaremos para reaccionar a ciertos eventos y ejecutar métodos entre distintas clases.

Empezaremos por crear la clase OnRecyclerViewItemClicklistener, la cual es una interfaz. Las interfaces solo tienen la declaración de los métodos mas no su implementación, esta se realiza en la clase que implementa la interfaz.

Ahora, debemos agregar como un nuevo atributo al CustomAdapter el cual va a ser nuestro recién creado Listener y a su vez vamos a modificar el constructor de la clase CustomAdapter.

Luego, en el método *onBindViewHolder* vamos a mover toda la inicialización de los widget a un método llamado *bind()* en la clase del ViewHolder y le pasaremos como parámetro la pizza de la lista que hemos seleccionado además del Listener, para despues asignarle un setOnClickListener al itemView y dentro de este llamar al Listener que creamos pasándole la pizza que hemos seleccionado anteriormente. El cual queda de la siguiente manera:

Para terminar, modificamos la forma en la cual creamos el CustomAdapter utilizando el nuevo constructor y creando un *new OnRecyclerviewItemClickListener* quedando de la siguiente manera:

Y así culminamos la aplicación, recuerda que esto es una base y puedes dar rienda suelta a tu imaginación para basarte en esta aplicación y crear otras aplicaciones con tus propias ideas. Si quieres descargarte el proyecto puedes encontrar el link al repositorio de github ***[aquí.](https://github.com/codingpizza/pizzapedia)*** 

Como siempre, si te ha gustado el post deja un comentario acerca de que te ha parecido, sobre que te gustaría que habláramos y no olvides compartir el post y seguirnos en nuestras redes sociales.¡Hasta la próxima!
