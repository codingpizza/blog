---
title: "Funciones en Dart"
description: "En esta oportunidad vamos a hablar sobre las funciones,como funcionan en Dark y sus tipos. ?¿Qué es una función? Una función es un bloque de código que debe ser organizado, realizar una sola tarea y debe estar relacionado a la clase en la que estamos trabajando.¿Por qué digo «debería» ? Porque mucha"
pubDate: 2019-09-11
lang: es
slug: "funciones-en-dart"
translationOf: "functions-in-dart"
categories: ["Dart"]
heroImage: "/images/Functions-Blog-Image.png"
sourceUrl: "https://www.codingpizza.com/funciones-en-dart/"
wpId: 4411
draft: false
---
En esta oportunidad vamos a hablar sobre las funciones,como funcionan en Dark y sus tipos.

## ?¿Qué es una función?

Una función es un bloque de código que debe ser organizado, realizar una sola tarea y debe estar relacionado a la clase en la que estamos trabajando.¿Por qué digo *«debería»* ? Porque mucha gente tiende a olvidarse de esto y creeme que te encontrarás muchos de estos casos en tu vida profesional.

Las funciones también deben ser en su mayoriareusables, esto reducirá la cantidad de código que escribes e incrementará la cantidad del mismo. Si ha sido hecho correctamente, claro.

## ?‍? Anatomía de las funciones

Existen muchos tipos de funciones en Dart, primerovamos a aprender sobre coymo funciona una función y luego vamos a hablar sobre los otros tipos de funciones.

Las funciones son usualmente creadas con la siguiente sintaxis:

**Dónde:**

**void** es el tipo que regresa la función, esto significa que cuando una función ejecuta todo el código dentro de ella esta debe regresar un valor de este tipo.

Espera un momento… Nosotros no estamos regresando nada, solo estamos imprimiendo un nombre. Cuando no necesitamos regresar un valor decimos que es del tipo *void*.

**printName** es el nombre de la función, un nombre que vamos a necesitar usar después, el mismo debe saber explicar qué hace esta función.

**(****String** **name),** dentro del paréntesis vamos a especificar el tipo del parámetro que va a recibir la función y el nombre de este parámetro. Los parámetros son variables que están disponibles dentro de la función, hablaremos más sobre ellos en el siguiente capitulo.

Veamos un ejemplo clásico:

Esta función suma dos enteros, le pasamos a la función un primer y un segundo valor y esta nos regresa la suma de los dos. Podemos usarla de la siguiente manera:

En este código creamos una variable llamada resultado la cual almacena el valor que obtenemos de la función **sum,** cuando usamos **print** para imprimirla el resultado es 4.

En simples palabras podría decirse que una función funciona como una maquina de helados, puedes agregar los ingredientes (parametros) y debería regresar un delicioso helado. Veamos otro ejemplo:

En este ejemplo más avanzado hemos creado una función llamada **IceCreamMachine** (Máquina de Helados) la cual regresa un objeto **AwesomeIceCream** (HeladoIncreible). Este **objeto** es una instancia de una clase, esto lo hablaremos luego. Pero manten en mente que **AwesomeIceCream** es un tipo de objeto como lo es un **String, un Entero o un Double**.

## ➡️Arrow function (Funciones Flecha)

En Dart existen otro tipos de funciones, veamos las siguientes.

Las Arrow Function llamadas Funciones Flecha en español, son funciones que solo pueden tener una línea de código y te darás cuenta que tendrá en lugar de paréntesis una flecha `=>`

Este tipo de funciones nos ayuda a mantener nuestras funciones pequeñas e incrementar la legibilidad del código. Vamos a convertir nuestros ejemplos anteriores a arrow functions.

Empecemos con la función **sum,** en primer lugar necesitamos remover los paréntesis y agregar la flecha, después de la flecha debemos agregar la lógica de nuestra función, ¡y eso es todo! Hemos creado exitosamente nuestra primera arrow function.

Ahora es tu turno, ¿Por qué no intentas convertir por tu cuenta la función iceCreamMachine?

## ?️‍♀️ Funciones anónimas

Como hemos hablado previamente todas las funciones deben tener un nombre, pero no es el caso de las funciones anonimas. Esta función es llamada en el momento y pasada como parámetro a otras funciones ?. Veamos un ejemplo:

**Nota:** Lo que hace la función  
***ForEach*** es ejecutar el código dentro de ella por cada elemento de la lista. No te preocupes ya que vamos a ver más sobre las *collections* en otro capitulo.

La función de la que hemos hablado imprime el siguiente resultado:

```
We have the chocolate flavour
We have the vanilla flavour
We have the orange flavour
```

¿Qué ha pasado aquí?. La función forEach recibe como parámetro una **Function** (función), en Dart **Function** es un tipo también.

Para las funciones anónimas la sintaxis es la siguiente:

**parameterName :** El nombre del parámetro

**Body of the function:** El cuerpo de la función, la lógica que queremos que tenga la función.

Si te sientes confundido no te preocupes, intenta verlo de esta forma: Las Anonymous functions son una forma corta de crear una función.

Supongamos que tienes una lista y que quierer recorrer toda la lista para imprimir los objetos que se encuentran dentro de ella, pero quieres tener una función que lo haga. Podríamos hacer algo como esto:

Pero como queremos imprimir nuestros números en otra función, podemos crear la función `getPrintElementFunction()`.

Esta función regresa una función ?. ¿Es un poco raro, no? Luego podríamos utilizarla dentro de nuestra función **forEach** de la siguiente manera.

<span style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" data-mce-type="bookmark" class="mce\_SELRES\_start">﻿</span>

Esto podrá compilar e imprimir el mismo resultado de la función que vimos previamente, pero es un poco feo si quieres hacer algo tan simple como imprimir algo ¿No lo crees?

## **Ahora es tu turno**

Puedes probar estos conceptos en Entornos de desarrollo (IDE) como [Intellij Idea Communit](https://www.jetbrains.com/idea/download/)y, que es gratis e instalar el plugin de Dart, si te gusta Visual Studio Code tambien puedes probar estos conceptos en él y por último si prefieres algo online, puedes utilizar **[Dartpad](https://dartpad.dartlang.org/)****.**

## **Post anterior**

Si estás interesado en más post como este puedes revisar mis otros artículos sobre Dart.

-   [**Variables**](https://www.codingpizza.com/variables-en-dart/)

## **¿Quieres saber mas sobré Dart?**

Si te ha gustado este post y estás interesado en aprender Dart, actualmente estoy escribiendo más artículos como este en un ebook, el cual es un curso básico de Dart que te ayudará a tener un buen conocimiento que luego podrás utilizar para empezar con Flutter ;). Puedes darte de alta en este link ya que el ebook será **[totalmente gratis](https://www.codingpizza.com/curso-dart-gratis/).**
