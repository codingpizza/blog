---
title: "Funciones increibles que debes conocer al trabajar con Dart"
description: "Funciones increibles que debes conocer al trabajar con Dart En los post anteriores sobre Dart, hablamos sobre las Collections. Hablamos sobre Lists,Maps y sets. Y en esta oportunidad vamos a hablar sobre funciones asombrosas y que nos pueden ayudar en muchos casos. Nota:En este post usamos varios el"
pubDatetime: 2019-10-09
tags: []
ogImage: "/images/Blog-CEE-PowerfulList-functions.png"
draft: false
translationOf: "powerful-list-functions-in-dart-that-you-should-know"
categories: ["Dart", "Programación"]
sourceUrl: "https://www.codingpizza.com/funciones-increibles-que-debes-conocer-al-trabajar-con-dart/"
wpId: 4469
---
# **Funciones increibles que debes conocer al trabajar con Dart**

En los post anteriores sobre Dart, hablamos sobre las Collections. Hablamos sobre Lists,Maps y sets. Y en esta oportunidad vamos a hablar sobre funciones asombrosas y que nos pueden ayudar en muchos casos.

Nota:En este post usamos varios elementos que probablemente quieras repasar, como las funciones anónimas. Si es tu primera vez leyendo esta serie de artículos puedes aquí debajo te dejo el link para que leas sobre funciones en **Dart**.

**[Funciones en Dart](https://www.codingpizza.com/funciones-en-dart/)**

## **Map**

The **map** function exists in many programming languages, and Dart is not an exception. This function creates a new list after transform every element of the previous list. This function takes as a parameter an anonymous function. Let’s see an example.

```
var list = List.of({1,2,3,4});
var mappedList = list.map( (number) => number *2);
print(mappedList);
```

Esta función existe en muchos lenguajes de programación y dart no es la excepción. Esta función crea una nueva lista después de transformar cada elemento de la lista anterior. Esta función recibe como parámetro una función anónima. Veamos un ejemplo.

En este ejemplo, hemos creado una función anónima que tiene un número como parámetro y hemos multiplicado este número por dos. El resultado de la función es  
`(2,4,6,8).`

## **Sort**

Muchas veces necesitamos recibir una lista desde el servidor y mostrarla al usuario. Pero ¿qué ocurre si necesitamos aplicar algunos filtros y ordenarla de forma ascendente? Esta función está aquí para ayudarnos con eso, veamos un ejemplo.

```
var randomNumbers = List.of({14, 51, 23, 45, 6, 3, 22, 1});
randomNumbers.sort();
print(randomNumbers);
```

El resultado es el siguiente.

```
[1, 3, 6, 14, 22, 23, 45, 51]
```

## **Generate**

La función generate es genial cuando necesitas crear una lista de números para hacer una prueba rápida. Toma como parámetro un número el cual indica el tamaño de la lista y una función anónima.

```
var generatedList = List.generate(10, (number) => number * Random().nextInt(50));
  print(generatedList);
```

Dentro de la función anónima obtenemos un número y lo multiplicamos por un número aleatorio entre 0 y 50.

## **Take**

Ya solo con su nombre en inglés te explica que hace esta función simplemente toma los primeros elementos de la lista. Puede ser útil cuando tengas una lista de competidores y quieras solo obtener el top tres de todos los competidores.

```
var list = List.from([1,2,3,4,5,6]);
var topThreeList = list.take(3);
print(topThreeList);
```

El resultado es: `1,2,3`

## **Skip**

Esta función es el opuesto de la función Take, está ignora la cantidad de elementos que se le indique. En caso de que se le indiquen 3 elementos obviara los primeros tres elementos de la lista.

```
var list = List.from([1,2,3,4,5,6]);
var skipList = list.skip(3);
print(skipList);
```

El resultado es: `4,5,6`

## **Where**

Esta función es una de mis favoritas ya que nos ayuda a crear una lista con los elementos que cumplan con el predicado que se le pasa como parámetro. Esto quiere decir que solo los elementos que cumplan con la condición dada se agregaran a la lista.

Digamos que tenemos una lista aleatoria de números en caso de que queramos una lista con solo numeros pares bastará realizar esa comprobación en la función anónima. Veamos el siguiente ejemplo.

```
var randomNumbers = List.of({14, 51, 23, 45, 6, 3, 22, 1});
var evenNumbers = randomNumbers.where((number => number.isEven));
print(evenNumbers);
```

El resultado del ejemplo anterior es el siguiente:  
`14,6,22`.

## **Un buen tip**

Estas funciones pueden combinarse para lograr una mejor solución. Puedes combinar la función where con la función sort para obtener los números pares ordenados de forma ascendente por ejemplo.

```
var randomNumbers = List.of({14, 51, 23, 45, 6, 3, 22, 1});
var evenNumbers = randomNumbers.where((number) => number.isEven);
evenNumbers = evenNumbers.toList()..sort();
print(evenNumbers);
```

En este ejemplo tomamos solamente los números pares de la lista randomNumberList, luego convertimos esos números a una Lista y finalmente usamos el operador de cascada `..` para ordenar la lista de forma ascendente.

El resultado final es: `[6, 14, 22]`

## **Eso es todo**

Espero que te haya gustado. Estoy creando nuevas CodingSlices sobre Flutter en Instagram, puedes seguirme en **[@codingpizza](https://www.instagram.com/codingpizza/)** y en Twitter como **[@coding\_\_pizza](https://twitter.com/coding__pizza)** para aprender sobre **Flutter**.

## **Ahora es tu turno**

Puedes probar estos conceptos en Entornos de desarrollo (IDE) como [Intellij Idea Communit](https://www.jetbrains.com/idea/download/)y, que es gratis e instalar el plugin de Dart, si te gusta Visual Studio Code tambien puedes probar estos conceptos en él y por último, si prefieres algo online puedes utilizar **[Dartpad](https://dartpad.dartlang.org/)****.**

## **¿Quieres saber más sobre Dart?**

Si te ha gustado este post y estás interesado en aprender Dart, actualmente estoy escribiendo más artículos como este en un ebook, el cual es un curso básico de Dart que te ayudará a tener un buen conocimiento que luego podrás utilizar para empezar con Flutter ;). Puedes darte de alta **[en este link](https://www.codingpizza.com/curso-dart-gratis/)** ya que el ebook será **totalmente gratis.**

## **Post anterior**

Si estás interesado en más post como este puedesrevisar mis otros artículos sobre Dart.

-   [**Variables**](https://www.codingpizza.com/variables-en-dart/)

-   [**Funciones**](https://www.codingpizza.com/funciones-en-dart/)

-   [**Parámetros**](https://www.codingpizza.com/parametros-en-dart/)

-   [**Flujo de Control**](https://www.codingpizza.com/flujo-de-control-en-dart/)

-   [**Collections**](https://www.codingpizza.com/collections-en-dart/)
