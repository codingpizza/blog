---
title: "¡Algoritmos!, ¿Que son?"
description: "¡Hola! Soy Giuseppe Vetri un fanático de la computación, ingeniero en computación y apasionado por el desarrollo. Este es mi primer post en este blog llamado CodingPizza y mi primer post en general quise abrir este blog para contar un poco acerca de mis experiencias con el desarrollo y poder colabor"
pubDatetime: 2017-08-14
tags: ["Algoritmos", "Programación"]
ogImage: "/images/Algoritmos-Facebook.png"
draft: false
categories: ["Programación"]
sourceUrl: "https://www.codingpizza.com/algoritmos/"
wpId: 1
---
¡Hola! Soy Giuseppe Vetri un fanático de la computación, ingeniero en computación y apasionado por el desarrollo. Este es mi primer post en este blog llamado CodingPizza y mi primer post en general quise abrir este blog para contar un poco acerca de mis experiencias con el desarrollo y poder colaborar con otros desarrolladores que estén aprendiendo o se encuentren en un nivel mas avanzado acerca de software hablar sobre las buenas practicas y entender juntos algunas documentaciones que no son del todo amigables.Bueno, Basta de hablar de mi. Hablemos del tema de hoy el cual es ¡Algoritmos!, ¿Que son?  ¿Para que se usan? si has llegado hasta aquí a este blog seguramente tienes alguna noción de programación. De no ser así no te preocupes que aquí lo hablaremos desde el principio.

La palabra algoritmo te puede sonar a computación, a código, a programación. Pero ¿sabias que usamos algoritmos todos los días?, Pues si.

Los algoritmos son una serie ordenada de instrucciones o procesos que se realizan para solucionar un problema, pueden ser algo sencillo como tus rutinas matutinas por ejemplo:

1.  Levantarte de la cama
2.  Cepillarte
3.  Bañarte
4.  Vestirte
5.  Desayunar
6.  Salir a trabajar

Vemos y realizamos algoritmos todos los días, ahora si lo llevamos a ciencias de la computación podemos decir que los algoritmos son una serie de instrucciones con ordenes muy precisas y escritas en un lenguaje de programación que el computador entienda y pueda realizar las ordenes que le estamos indicando.

Existen algoritmos que son muy importante en el campo de la programación los cuales son:

###### Tabla de contenidos

###### **Algoritmos de Ordenamiento**

Son algoritmos que se basan en darle una secuencia a ciertos elementos determinados los cuales podrían por ejemplo ser ordenados numéricamente. Por nombre a un par de ellos podemos mencionar al ***Quick Sort*** el cual se basa en comparar elementos para determinar su orden y el ***Radix Sort*** o ordenamiento de raíz, el cual toma el ultimo dígito significativo de cada elemento y los va agrupando consecutivamente.

[Embedded content](https://giphy.com/embed/130pnXbdj3akCY)

*Ejemplo del Quick Sort*

Un Ejemplo del **Radix Sort** se puede encontrar en la pagina de la Universidad de San Francisco: [Radix Sort Visualization](https://www.cs.usfca.edu/~galles/visualization/RadixSort.html)

###### **Arboles**

En las ciencias de la computación un árbol es un tipo de dato abstracto o una estructura de datos que su función es simular la copa de los arboles empezando desde un padre hasta tener muchos **nodos** los cuales son los hijos y el nodo que no tenga hijo es llamado **Hoja.** Para que exista una estructura de árbol valido un nodo del árbol no puede tener mas de 1 padre ademas que no pueden haber nodos sin conectarse.

![Arbol binario](/images/rsz_1rsz_binary_search_tree_-_remove_step_3svg.png "Arbol binario")

*Ejemplo de un árbol binario*

###### **Listas**

Una lista es un tipo de dato abstracto como lo son los **arboles**, el cual contiene un numero de valores secuenciales donde los valores pueden repetirse a diferencia de las pilas o las colas los valores pueden ser removidos en cualquier posición de la lista. Existen varios tipos de listas como lo son las **L****istas Enlazadas(Linked** **List)** las cuales son una secuencia de valores que tienen una referencia hacia el valor que le antecede y el valor que le procede.

![Lista Enlazada](/images/singly-linked-list.png)

*Ejemplo de Listas Enlazadas*

###### **Stacks**

Los stacks o pilas, son estructuras de datos con las que se puede encontrar fácilmente una analogía en la vida real, por ejemplo podemos decir que tenemos una pila de libros de programación en el siguiente orden:

-   Introducción a Python
-   Como volverse un experto en Ruby
-   Aprendiendo Javascript
-   Libro de programación de Kotlin

Ahora queremos retirar el libro de programación de Kotlin a diferencia de las listas en las que se puede retirar un elemento de cualquier posición de esta con las pilas no ocurre lo mismo. En este caso solo podremos obtener el libro que se encuentra en la cima de la pila e ir retirando continuamente hasta poder alcanzar el libro que deseamos que en nuestro caso seria el de Kotlin (Para los que aun no conocen este lenguaje pronto aquí en CodingPizza tendremos un tutorial sobre este lenguaje de programación).

En las pilas solo podemos retirar elementos que están en la cima de esta debido a que tienen una estructura del tipo LIFO (Last In First Out) esto significa que el ultimo elemento en entrar a la pila es el primero en salir a diferencia de las listas las cuales son del tipo FIFO ( First In First Out) como ocurre en las filas de los supermercados el primero en llegar es el primero en salir.

![Pila](/images/200px-Pila.svg_.png)

*Representación grafica de un Stack o Pila*

###### **Algoritmos de Grafos**

Los algoritmos de grafos son muchos, uno de los mas famosos es el algoritmo de Dijkstra el cual tiene como función encontrar el camino mas corto dado un vértice de inicio. Este algoritmo funciona de la siguiente manera selecciona la arista con peso menor que contenga el vértice y lo repetirá cuantas veces sea necesario para llegar a su destino.

[Embedded content](https://giphy.com/embed/ZkIkk3Y8E6hgc)

*Ejemplo de como funciona un algoritmo de grafo*

###### **Conclusión**

Existen muchas variaciones de estos algoritmos de los cuales hemos hablado, algunos son mejores que otros dependiendo del contexto en el cual se este usando. En la programación siempre habrá una herramienta que funcionara bien para cierto tipos de problemas y otra que funcionaria mejor para otros.

¿Que algoritmo te ha gustado mas? ¿Has tenido que implementar uno para una prueba practica para un trabajo o la universidad? Nos encantaría saber acerca de tu experiencia 🙂

¡Comenta y si te ha gustado el post compártelo en las redes sociales!
