---
title: "Collections en Dart"
description: "¡Hola! Esta semana vamos a hablar sobre Collections. Las Collections son muy importantes en la mayoría de proyectos en los que trabajamos. Como siempre, empecemos hablando sobre qué son la Collections. Las Collections son objetos que agrupan múltiples elementos dentro de ellos, un objeto List por ej"
pubDate: 2019-10-02
lang: es
slug: "collections-en-dart"
translationOf: "collections-in-dart"
categories: ["Dart"]
tags: ["dart"]
heroImage: "/images/Blog-CEE-Collections-1.png"
sourceUrl: "https://www.codingpizza.com/collections-en-dart/"
wpId: 4458
draft: false
---
¡Hola! Esta semana vamos a hablar sobre **Collections**. Las **Collections** son muy importantes en la mayoría de proyectos en los que trabajamos. Como siempre, empecemos hablando sobre qué son la **Collections**.

Las **Collections** son objetos que agrupan múltiples elementos dentro de ellos, un objeto List por ejemplo pertenece a los **Collections**.

Digamos que tenemos una lista de números de lotería. Si creamos una lista con estos numeros se veria así.

```
var lotteryNumbers = List.of({18,23,43,65});
```

Esta variable llamada `lotteryNumbers` es una lista. Y esta pertenece a las **Collections.**

En Dart, podemos crear una lista de diferentes maneras.

## **Usando la palabra reservada *var***

Usando la palabra reservada *var* y el nombre de la lista crea una variable vacía.

```
var myVarList;
```

## **Null VS Initialized**

Existe una diferencia entre una lista nula y una lista vacía. Hace poco me he encontrado una imagen que lo explica muy bien.

![](/images/mql6o-300x279.jpg)

Una lista vacia es cuando la lista ha sido creada pero no hay ningún elemento en ella, una lista es **null** cuando no ha sido inicializada. Por supuesto existen otras formas más complejas de explicar esto, pero no viene al caso en este momento.

Podemos crear una lista de ambas maneras, la primera forma creará una lista nula y la segunda creará una lista vacía.

```
List nullList;
List emptyList = [];
```

Si eres curioso, puedes intentar imprimir el tamaño de cada lista usando la propiedad **.length** y comparar los resultados.

## **Creando una lista para un tipo específico**

En caso de que necesitemos crear una lista de un objeto específico, necesitamos especificarlo después de la lista de la siguiente manera.

```
List<String> colorList = ["Red,Yellow,Purple"];
```

En este ejemplo estamos creando una lista de solo objetos Strings.

En caso de que necesitemos crear una lista de varios tipos de objetos necesitamos utilizar la palabra reservada **dynamic**.

```
List<dynamic> dynamicList = ["Red",1]
```

Por último también podemos crear una lista utilizando la función **List.of.**

```
List numberList = List.of({1,2,3,4});
```

## **Obteniendo elementos de una lista**

En caso de que quieras obtener un elemento de una lista, existen varias formas de hacerlo.

-   Utilizando los corchetes luego del nombre de la lista colocando dentro la posición del objeto que quieres obtener.

-   Utilizando la función **.elementAt(posición).**

Aquí hay un ejemplo.

```
List numberList = List.of({1,2,3,4,5});
var firstNumber = numberList[0];
var elementAt = numberList.elementAt(0);
```

El resultado de este ejemplo va a ser el primer elemento de nuestra lista, en nuestro caso el número 1.

## **Agregando un elemento a la lista**

Ahora vamos a ver cómo agregar un elemento a la lista que ya ha sido previamente creada. Todo lo que tenemos que hacer es usar la función **.add** y pasar como parámetro el número que queremos agregar.

```
List numberList = List.of({1,2,3,4,5});
var newNumber = 6;
numberList.add(newNumber);
print(numberList);
// Result: [1,2,3,4,5,6]
```

## **Eliminando un elemento de la lista**

Esta vez vamos a hacer lo contrario, vamos a remover un elemento de la lista. Para esto necesitamos tener la posición del objeto en la lista y utilizar la función **.removeAt()**.

```
List numberList = List.of({1,2,3,4,5});
numberList.removeAt(1)
```

¿Cuál número crees que hemos eliminado de la lista? Si tu respuesta fue el número 1, estabas cerca, pero es incorrecto, hemos removido el número 2. Esto se debe a que las posiciones de las listas empiezan desde 0.

```
Value  -> [1,2,3,4,5]
Position->[0,1,2,3,4]
```

## **Otro objeto de Collections**

Presentamos los **Maps,** estos son una colección de clave-valor que nos ayudan a asociar una clave a un valor. Para crear los mapas hay que especificar el tipo de objeto de la clave y del valor, haciéndolo de la siguiente forma.

```
Map<int,String> nullMap;
//or
Map<String,String> powerRangersMap = {"red": "Tyrannosaurus","blue":"Triceratops","pink":"pterodactyl"};
```

Después de esta referencia de los noventas, podemos ver como cada Power Ranger tiene un dinosaurio asociado.

## **Obteniendo un elemento de un map**

En ciertas ocasiones vamos a necesitar llamar solo a uno de nuestros Zords ¿no? Pero, ¿cómo podemos hacerlo en un **Map**? Para hacerlo necesitamos utilizar su clave en lugar de la posición.

Ejemplo:

```
var powerRanger = powerRangerMap["red"];
```

## **Para eliminar un elemento del Map**

En caso de que necesitemos remover un elemento del **Map** lo que debemos hacer es utilizar la función **.remove()** pasando como parámetro la clave del elemento que queremos eliminar.

Ejemplo:

```
Map<String,String> powerRangersMap = {"red": "Tyrannosaurus","blue":"Triceratops","pink":"pterodactyl"};
powerRangersMap.remove("red");
```

## **Cómo agregar un elemento al Map**

Ha aparecido un nuevo Ranger y queremos agregarlo a nuestro grupo creado previamente. Para esto debemos crear un **Map,** luego asignar una clave y un valor a nuestro nuevo mapa y por último debemos utilizar la función **.addAll()** para agregar al nuevo Ranger al grupo existente.

Ejemplo:

```
var newRanger = Map<String,String>();
newRanger["yellow"] = "Sabertooth Tiger";
powerRangersMap.addAll(newRanger);
```

## **Por último pero no menos importante**

Hasta el momento hemos hablado de **Collections** sin mencionar los **Sets**. Un **Set** es una **Collection** de elementos únicos. Existen dos cosas que vale la pena mencionar sobre los sets

1.  No puedes obtener elementos de el **Set** utilizando la posición del elemento.

2.  Si intentas agregar un segundo elemento igual a uno ya existente no tendrá ningún efecto.

Ejemplo:

```
Set colorSet = Set.from(["Red","Blue","Yellow","Black","Pink"]);
```

## **Eliminando elementos del set**

Para eliminar un elemento del **Set** debemos utilizar la función **.remove()** e indicar el elemento a eliminar.

```
colorSet.remove("Red");
```

## **Agregando un elemento a un set**

Para agregar un elemento a un set todo lo que debemos hacer es utilizar la función **.add()** y pasarle el parámetro que queremos agregar.

```
colorSet.add("White");
```

Como he mencionado anteriormente si intentas agregar otro elemento al set que contenga el mismo valor, no surtirá ningún efecto.

## **Eso es todo**

Si eres nuevo programando, espero que esto te pueda ayudar y si no lo eres, espero que te haya gustado. También estoy creando nuevas CodingSlices sobre Flutter en Instagram, puedes seguirme como **[@codingpizza](https://www.instagram.com/codingpizza/)** y en Twitter como **[@coding\_\_pizza](https://twitter.com/coding__pizza)** para ver mas contenido.

## **Ahora es tu turno**

Puedes probar estos conceptos en Entornos de desarrollo (IDE) como [Intellij Idea Communit](https://www.jetbrains.com/idea/download/)y, que es gratis e instalar el plugin de Dart, si te gusta Visual Studio Code tambien puedes probar estos conceptos en él y por último, si prefieres algo online puedes utilizar **[Dartpad](https://dartpad.dartlang.org/)****.**

## **Post anterior**

Si estás interesado en más post como este puedes revisar mis otros artículos sobre Dart.

-   [**Variables**](https://www.codingpizza.com/variables-en-dart/)

-   [**Funciones**](https://www.codingpizza.com/funciones-en-dart/)

-   [**Parámetros**](https://www.codingpizza.com/parametros-en-dart/)

-   [**Flujo de Control**](https://www.codingpizza.com/flujo-de-control-en-dart/)

## **¿Quieres saber más sobre Dart?**

Si te ha gustado este post y estás interesado en aprender Dart, actualmente estoy escribiendo más artículos como este en un ebook, el cual es un curso básico de Dart que te ayudará a tener un buen conocimiento que luego podrás utilizar para empezar con Flutter ;). Puedes darte de alta **[en este link](https://www.codingpizza.com/curso-dart-gratis/)** ya que el ebook será **totalmente gratis.**
