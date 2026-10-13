---
title: "El camino del desarrollador Android #4 – RecyclerView y Adapters"
description: "Hola amigos, bienvenidos otra vez a otro tutorial de esta serie sobre Android en este caso por fin, toca hablar de uno de los elementos más usados en todo el mundo del desarrollo Android, RecyclerViews. ¿Que son estos famosos RecyclerViews? Los RecycerViews son elementos que permiten mostrar una lis"
pubDatetime: 2017-12-04
tags: ["Android", "Programación"]
ogImage: "/images/john-towner-117317-1024x683.jpg"
draft: false
categories: ["Android", "Programación"]
sourceUrl: "https://www.codingpizza.com/recyclerview-y-adapters/"
wpId: 4039
---
Hola amigos, bienvenidos otra vez a otro tutorial de esta serie sobre Android en este caso por fin, toca hablar de uno de los elementos más usados en todo el mundo del desarrollo Android, RecyclerViews.

#### **¿Que son estos famosos RecyclerViews?**

Los RecycerViews son elementos que permiten mostrar una lista de elementos en una aplicación, por ejemplo. Mostrar una lista de fotos, dónde el usuario puede interactuar con cada foto, darle «Me gusta», compartir la foto y comentar sobre la foto. ¿Les suena parecido este ejemplo? pues seguramente si, Instagram, Facebook, La aplicación que usas para ordenar pizza los domingos probablemente también utilice un RecyclerView para mostrarte todas sus pizzas.

Un RecyclerView nunca anda solo, siempre tiene compañeros y estos son los Adapters y los LayoutManager. Son algo así cómo los tres mosqueteros, El LayoutManager se encarga de gestionar cómo mostrar cada celda del Recyclerview y ordenarlas de cierta manera, el Adapter se encarga de cómo se gestiona la información manejar la lista de elementos, notificar cuando un elemento ha cambiado o ha sido eliminado y por último el RecyclerView gestiona la parte visual de cómo se muestra esta cantidad de elementos en una manera muy eficiente, esto lo hace manteniendo una cantidad de limitada de vistas.

![](/images/RecyclerView-300x58.png)

Fuente: Android Developers

#### ¿**Entendido, por dónde empezamos?**

Para empezar debemos primero agregar nuestro RecyclerView al layout XML de nuestro Activity.

Vemos que al ser un widget, tiene atributos que ya hemos visto antes en los otros post si no te acuerdas de ellos o no los has visto. Puedes revisar en nuestro post dónde hablamos de widgets **[*Aquí*](https://www.codingpizza.com/el-camino-del-desarrollador-android-2/)**.

###### **Paso #2**

Crear nuestro layout del ViewHolder, cada ViewHolder necesita mostrar un layout. Así que nos centramos en crear nuestro propio layout, es bastante simple, hacemos el mismo procedimiento que hemos realizado previamente para los Activities.

cómo podrás ver, no tiene nada del otro mundo. Es solo un Activity con un TextView dentro que nos muestra un nombre.

###### **Paso #3**

Para continuar con la creación de nuestro RecyclerView, necesitamos crear nuestro propio Adapter. Para ellos necesitamos crear una clase que sea hija del Recyclerview.Adapter y lo hacemos de la siguiente manera:

Ok, hemos creado nuestro Adapter e implementado sus métodos. Pero, un momento ¿que es un «ViewHolder» y por que esta ahí?, bueno un ViewHolder es la forma en la que cada celda es representada en el RecyclerView y cada ViewHolder necesita de un layout. Si, un archivo XML así cómo las Activities ¿Que sorpresa no?.

Puede parecer mucho código luego de implementar todos los métodos que se generan por la herencia de la clase, pero calma que explicaremos cada parte de este código.

Primero, creamos una clase llamada CustomAdapter. Esta clase hereda de RecyclerViewAdapter y dentro de ella tenemos un ViewHolder, al ser una clase hija de *RecyclerView.Adapter* debe implementar los siguientes métodos:

**onCreateViewHolder(ViewGroup parent, int viewType):** Este método se encarga de «inflar» el xml del cual hablamos previamente y regresar un objeto ViewHolder.

**public void onBindViewHolder(MyViewHolder holder, int position):** Este método se encarga de asignarle a cada ViewHolder los datos que tiene que mostrar por eso para acceder a los widgets que tenemos declarados previamente, necesitamos utilizar el *holder.mTextView.setText* y asignarle el texto obteniendo cada elemento de la lista utilizando *mNameList.get(position).*

**public int getItemCount():** Por último este método indica la cantidad de objetos que contiene la lista. La cual hemos creado previamente, en nuestra clase CustomAdapter.

Para terminar con este paso hablaremos de la clase *MyViewHolder* la cual es una clase que hereda de la clase RecyclerView.ViewHolder y es dónde creamos nuestro ViewHolder personalizado, aquí declaramos los widgets que se muestra en el layout xml que hemos creado previamente y para inicializarlos tenemos que utilizar el famoso método *findViewById()* pero esta vez necesitamos buscar este id en el itemView que nos provee el constructor por eso utilizamos *itemView.findViewById(R.id.tv\_name);*

###### **Paso #4**

Ahora tenemos que crear e inicializar nuestro RecyclerView y Adapter en el Activity que estamos utilizando. Lo hacemos de la siguiente manera:

Aquí podemos observar, cómo creamos un RecyclerView y lo inicializamos, luego creamos una lista de nombres que es con la cual vamos a rellenar nuestro CustomAdapter y llegamos al LayoutManager el cual se encarga de ordenar y manejar las celdas que le envie el Adapter, existen tres tipos de LayoutManager las cuales son:

-   LinearLayoutManager: El cual muestra las celdas cómo si fuera un LinearLayout de forma vertical o de forma horizontal.
-   GridLayoutManager: Que muestra los elementos en forma de cuadrícula.
-   StaggeredGridLayoutManager: Parecido al GridLayoutManager solo que esta lo muestra de una manera escalonada.

Si no estas contento con alguno de estos 3, siempre puedes crear tu propio LayoutManager.

Luego, indicamos al RecyclerView que ItemAnimator debe utilizar el cual es una animación que se muestra en una celda cuando un cambio es realizado en el Adapter y un divisor que divide cada celda de nuestro RecyclerView. Para terminar solo le indicamos al RecyclerView cual es el Adapter que debe utilizar y hemos terminado!

![RecyclerView](/images/Screenshot-at-dic-04-21-34-27.png)

Y con esto tenemos otra herramienta más a nuestro arsenal, dónde sin duda alguna es una de las más importantes y muy usadas en este mundo del desarrollo Android, no te pierdas la próxima entrega de esta serie de tutoriales dónde crearemos una aplicación desde 0 y utilizaremos todos los conocimientos que hemos ido publicando hasta el momento.

Y cómo siempre, si te ha gustado el Post o nuestro blog puedes comentar, compartir nuestro post por las redes sociales y seguirnos en ellas (*[Instagram](http://www.instagram.com/codingpizza), [Twitter](http://www.twitter.com/coding__pizza), [Facebook](http://www.facebook.com/codingpizza)*) para que no te pierdas ningún Post de nuestro blog y más importante, nos apoyes. ¡Hasta luego!
