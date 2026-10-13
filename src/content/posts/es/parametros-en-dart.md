---
title: "Parámetros en Dart"
description: "¡Hola!, en los ultimos post he hablado sobre variables y funciones. Si te los has perdido, te dejo el link a ellos aqui debajo para que puedas echarle un ojo. Variables Funciones Ya hemos hablado un poco sobre ellos. En el post anterior sobre funciones ya hablamos un poco sobre los parámetros. Hemos"
pubDatetime: 2019-09-18
modDatetime: 2019-09-25
tags: []
ogImage: "/images/Blog-Parameters-CodingSlices-Extended-1.png"
draft: false
translationOf: "parameters-in-dart"
categories: ["Dart", "Programación"]
sourceUrl: "https://www.codingpizza.com/parametros-en-dart/"
wpId: 4433
---
¡Hola!, en los ultimos post he hablado sobre **variables** y **funciones.** Si te los has perdido, te dejo el link a ellos aqui debajo para que puedas echarle un ojo.

## Tabla de contenidos

-   **[Variables](https://www.codingpizza.com/variables-en-dart/)**
-   **[Funciones](https://www.codingpizza.com/funciones-en-dart/)**

## **Ya hemos hablado un poco sobre ellos.**

En el post anterior sobre **funciones** ya hablamos un poco sobre los ***parámetros***. Hemos visto que funcionaban como ingredientes para hacer funcionar una «Maquina de Helado». Tambien podemos decir que los parámetros son dependencias que una función requiere para poder ejecutar su codigo.

## **Required parameters (Parámetros requeridos)**

Los parámetros requeridos son los mas basicos que una función puede usar, solo hace falta especificar un tipo un nombre y hemos terminado.

Los **parámetros requeridos** los hemos visto ya en el caso de la función **suma**.

```dart
Integer suma(Integer a,Integer b) {
    return a+b;
}
```

El entero **a** y el entero **b,** son usados dentro de la función y posteriormente la función devuelve el valor de los dos sumados.

## **Optional parameters / Parámetros opcionales**

Los parámetros opcionales no son requeridos por la función al momento de usarla. En ciertos casos podrías necesitar pasarle ese parámetro a la función, como en otros no.

Para hacer un **parámetro opcional** es necesario colocarlo al final de la firma de la función y entre corchetes. Para dejarlo mas claro veamos el siguiente ejemplo:

```dart
void imprimirNombreCompleto(String nombre, String apellido, [String segundoNombre]){
    print("Mi nombre es: $name $secondName $surname");
}
```

En esta función podemos ver como hemos situado el **parámetro opcional** despues de los **parámetros requeridos,** esto se debe a que los **parámetros opcionales** deben ir siempre despues de los requeridos, de lo contrario no compilará.

Te preguntuntaras, ¿Que ocurré con la variable `segundoNombre` , si no la hemos pasado a la función?. La variable `segundoNombre` será nula. Y nosotros no queremos mostrar «John null Wick», ¿Cierto?.

Para evitar esto podemos agregar un valor por defecto que va a ser utilizado en lugar del **parámetro opcional** cuando este sea nulo.

Para agregar un valor por defecto a un **parámetro opcional,** todo lo que necesitamos hacer es una asignación. Para entenderlo mejor puedes ver el siguiente ejemplo:

```dart
void imprimirNombreCompleto(String nombre, String apellido, [String segundoNombre = ""]){
    print("Mi nombre es: $nombre $segundoNombre $apellido");
}
```

Ahora el valor será un String vacio y el texto será mostrado correctamente.

Para usar la función con **parámetros opcionales** que hemos creado previamente hacemos lo siguiente.

```dart
imprimirNombreCompleto("John","Wick");
//O
imprimirNombreCompleto("Scarlett","Johansson","Ingrid");
```

En el caso que quieras utilizar todos los parámetros de la funcion como **opcionales** puedes encerrarlos entre corchetes como muestra el siguiente ejemplo.

```dart
void imprimirNombreCompleto([String nombre, String segundoNombre, String Apellido]){
    print("Mi nombre es: $nombre $segundoNombre $apellido");
} 
```

## **Named parameters / Parámetros nombrados**

Este tipo de parámetros permite indicarle a la función cual es el parámetro que estas pasando. Para lograr esto tenemos que colocarlo entre llaves.

Ejemplo:

```dart
void imprimirParametrosNombrados(String nombre,String apellido,{String segundoNombre = ""}){
    print("$nombre $segundoNombre $apellido")
}
```

En este ejemplo hemos usado el nombre y el apellido como parámetros requeridos. Y el segundo nombre como **parámetro nombrado** ademas nos aseguramos de tener un valor por defecto por si no se proporciona ningun valor.

Cuando queremos utilizar una función con parámetros requeridos debemos hacerlo de la siguienta manera:

```dart
imprimirParametrosNombrados("Samuel","Jackson",segundoNombre: "Leroy");
```

En este ejemplo podemos ver que necesitamos indicar el nombre del parámetro dentro de la función y despues de los dos puntos indicamos el valor del parámetro.

En el caso en que necesitemos tener una función con solo **parámetros nombrados** lo que tenemos que hacer es incluir dentro de las llaves todos los **parámetros**.

```dart
void imprimirParametrosNombrados({String nombre,String apellido,String segundoNombre = ""}){
    print("$nombre $segundoNombre $apellido")
}
```

Cuando una función tiene unicamente parámetros nombrados no importa el orden en el que los utilicemos.

Por ejemplo:

```dart
imprimirParametrosNombrados(nombre: "Scarlett",segundoNombre:"Ingrid",apellido:"Johansson");
```

¿Genial, no?.

## **Ahora es tu turno**

Puedes probar estos conceptos en Entornos de desarrollo (IDE) como [Intellij Idea Communit](https://www.jetbrains.com/idea/download/)y, que es gratis e instalar el plugin de Dart, si te gusta Visual Studio Code tambien puedes probar estos conceptos en él y por último si prefieres algo online, puedes utilizar [Dartpad.](https://dartpad.dartlang.org/)

## **Post anterior**

Si estás interesado en más post como este puedes revisar mis otros artículos sobre Dart.

-   **[Variables](https://www.codingpizza.com/variables-en-dart/)**
-   **[Funciones](https://www.codingpizza.com/funciones-en-dart/)**

## **¿Quieres saber mas sobré Dart?**

Si te ha gustado este post y estás interesado en aprender Dart, actualmente estoy escribiendo más artículos como este en un ebook, el cual es un curso básico de Dart que te ayudará a tener un buen conocimiento que luego podrás utilizar para empezar con Flutter ;). Puedes darte de alta [en este link ya que el ebook será totalmente gratis.](https://www.codingpizza.com/curso-dart-gratis/)
