---
title: "Flujo de control en Dart"
description: "Flujo de control en Dart Hola!, en el último mes he estado escribiendo sobre Dart y cómo funcionan las cosas en este lenguaje. Si eres nuevo por acá puedes revisar mis otros post sobre Dart. Dejaré los enlaces acá debajo. Variables Funciones Parámetros El poder sin control es inútil En este post, va"
pubDatetime: 2019-09-25
tags: []
ogImage: "/images/Blog-Flow-Control-CodingSlices-Extended-1.png"
draft: false
translationOf: "control-flow-in-dart"
categories: ["Dart"]
sourceUrl: "https://www.codingpizza.com/flujo-de-control-en-dart/"
wpId: 4444
---
# **Flujo de control en Dart**

Hola!, en el último mes he estado escribiendo sobre Dart y cómo funcionan las cosas en este lenguaje. Si eres nuevo por acá puedes revisar mis otros post sobre Dart. Dejaré los enlaces acá debajo.

-   [**Variables**](https://www.codingpizza.com/variables-en-dart/)
-   [**Funciones**](https://www.codingpizza.com/funciones-en-dart/)
-   **[Parámetros](https://www.codingpizza.com/parametros-en-dart/)**

## Tabla de contenidos

## **El poder sin control es inútil**

En este post, vamos a hablar sobre cómo funciona el **Control Flow (Flujo de control)** en Dart. Empecemos hablando de que es el flujo de control. En palabras simples es el orden en el cual tu código es ejecutado.

Digamos que tenemos que elegir entre salir a la calle con un paraguas o no. Revisamos nuestra app del clima y si dice que va a llover nos llevamos un paraguas de lo contrario lo podemos dejar en casa.

Si quisiéramos escribir eso en código seria así:

```dart
if (isGoingToRainToday()) {
 takeUmbrella() 
} else {
 print ("What a great weather today ?")
}
```

## **If statements**

Los If ayudan a nuestro código a tomar una decisión y tienen la siguiente sintaxis.

```dart
if (condition) {
 doThis()
} else {
 doAnotherThing()
}
```

Empezamos con la palabra reservada **if,** luego agregamos una condición dentro del paréntesis. Si esa condición se cumple el código dentro de las primeras llaves se ejecutará. De lo contrario, el código dentro de las llaves del else será ejecutado. La condición al final termina siendo una variable boolean.

Un dato para tener en cuenta es que el **else** no es siempre necesario, si solo necesitas ejecutar lo que está dentro del if puedes evitarlo.

En caso de que necesites hacer una comparación con mas de dos opciones puedes usar un **else** **if.** Veamos como funciona.

```dart
var flavor = "Vanilla";
if (flavor == "Vanilla"){
	print("Here's your vanilla ice cream");
} else if( flavor == "Chocolate") {
	print("Here's your chocolate ice cream");
} else {
	print("Since we don't know your favorite flavor, here's a random one");
}
```

En este ejemplo tenemos un sabor favorito de helado el cual es Vanilla. El **If** va a revisar si el sabor es vanilla en caso de que lo sea ejecutará el código dentro del **if.** Si el sabor es igual a chocolate ejecutara lo que  
está dentro del else **if**, en caso de que no cumpla ninguna de las dos condiciones mencionadas ejecutara el código dentro del else.

¿Pero qué ocurre cuando tenemos muchos sabores?

## **Presentamos el Switch case**

Los Switch Case funcionan con variables en vez de funcionar con una condición. El Switch va caso por caso comparando la variable con el valor del case y en caso de que sean iguales el código dentro del case será ejecutado.

Aquí podemos ver un ejemplo.

```dart
var flavor = "Vanilla"
switch (flavor) {
	case "Vanilla":
		print("Here's your vanilla ice cream");
	case "Chocolate":
		print("Here's your chocolate ice cream");
	case "Orange":
		print("Here's your orange ice cream");
	default:
		print("Since we don't know your favorite flavor, here's a random one");
}
```

## **For**

El bucle **For** es una instrucción común que se puede encontrar en casi todos los lenguajes. Se utiliza para ejecutar un código una limitadacantidad de veces. Su sintaxis en dart es la siguiente:

```dart
for (var i = 0; i < list.length; i++){
 print(list[i]);
}
```

El bucle **For** puede parecer confuso pero vamos a separarlo en partes. La variable **i** empieza en el valor 0 y está variable incrementa una por uno hasta que es menor por 1 al tamaño de la lista.

Por cada ciclo que realiza el bucle, el código dentro del **for** es ejecutado. En nuestro caso imprimirá el elemento **i** de la lista.

## **While**

El bucle **While** se ejecuta mientras una condición se cumpla, por ejemplo.

```dart
int laps = 0;
while (laps < 5){
	print("Laps $laps");
	laps++;
}
```

En este ejemplo, el código dentro del while es ejecutado hasta que la variable **laps** (vueltas) es menor que cinco.

```dart
Laps 0
Laps 1
Laps 2
Laps 3
Laps 4
```

## **El hermano del While**

El hermano del bucle While es el Do While. Este bucle al contrario de su hermano ejecuta el código y luego evalúa la condición. Aquí tenemos un ejemplo.

```dart
int countDown = 5;
do {
 print("Time remaining: $countDown");
 countDown--;
} while (countDown != 0);
```

Este ejemplo imprime la variable **countDown** mientras sea diferente de cero.

```dart
Time remaining: 5
Time remaining: 4
Time remaining: 3
Time remaining: 2
Time remaining: 1
```

## **Eso es todo**

Si eres nuevo programando, espero que esto te pueda ayudar y si no lo eres, espero que te haya gustado. También estoy creando nuevas CodingSlices sobre Flutter en Instagram, puedes seguirme como [@codingpizza](https://www.instagram.com/codingpizza/) y en Twitter como [@coding\_\_pizza](https://twitter.com/coding__pizza) para ver mas contenido.

En caso de que no lo sepas, estoy escribiendo un eBook sobre un curso básico de Dart necesario para aprender Flutter. [Es gratis y puedes registrarte en este link.](https://www.codingpizza.com/curso-dart-gratis/)

## **Ahora es tu turno**

Puedes probar estos conceptos en Entornos de desarrollo (IDE) como [Intellij Idea Communit](https://www.jetbrains.com/idea/download/)y, que es gratis e instalar el plugin de Dart, si te gusta Visual Studio Code tambien puedes probar estos conceptos en él y por último si prefieres algo online, puedes utilizar **[Dartpad.](https://dartpad.dartlang.org/)**

## **Post anterior**

Si estás interesado en más post como este puedes revisar mis otros artículos sobre Dart.

-   [**Variables**](https://www.codingpizza.com/variables-en-dart/)
-   [**Funciones**](https://www.codingpizza.com/funciones-en-dart/)
-   **[Parámetros](https://www.codingpizza.com/parametros-en-dart/)**

## **¿Quieres saber mas sobré Dart?**

Si te ha gustado este post y estás interesado en aprender Dart, actualmente estoy escribiendo más artículos como este en un ebook, el cual es un curso básico de Dart que te ayudará a tener un buen conocimiento que luego podrás utilizar para empezar con Flutter ;). Puedes darte de alta **[en este link](https://www.codingpizza.com/curso-dart-gratis/)** ya que el ebook será **totalmente gratis.**
