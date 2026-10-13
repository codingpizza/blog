---
title: "Que es un unit test"
description: "Que es un unit test (Prueba unitaria) Hola! Probablemente hayas visto en ofertas de trabajo la siguiente frase, «Experiencia con pruebas unitarias y TDD.» Pero si eres como yo y no tienes idea sobre tests, has oído de ellos, sabes que existen y sabes que las buenas compañías lo usan. Pero, ¿qué son "
pubDate: 2020-01-21
lang: es
slug: "que-es-un-unit-test"
translationOf: "what-is-a-unit-test"
categories: ["Programación"]
heroImage: "/images/Blog-What-is-a-unit-test.png"
sourceUrl: "https://www.codingpizza.com/que-es-un-unit-test/"
wpId: 4497
draft: false
---
# Que es un unit test (Prueba unitaria)

Hola! Probablemente hayas visto en ofertas de trabajo la siguiente frase, «Experiencia con pruebas unitarias y TDD.» Pero si eres como yo y no tienes idea sobre tests, has oído de ellos, sabes que existen y sabes que las buenas compañías lo usan. Pero, ¿qué son y cómo funcionan?

## ? Empecemos con un test

Cuando alguien de QA (Quality assurance, aquellos que prueban tu app y encuentran fallos que tu no conocías) se acerca a mi y me pregunta si estoy seguro sobre lo que hace mi código, mi respuesta siempre es no, y no es porque no confié en mis habilidades de programación, es porque soy humano y como todo ser humano cometemos errores. Es por esto que empece a aprender sobre testing ya que los test pueden ayudarte a conseguir los errores que vas a introducir en el futuro.

Un test ayuda a probar algo, en nuestro caso, que nuestro código vaya como lo hemos planeado. Con mis simples palabras podría decir que un test es código que tu escribes para verificar que el código que vas a tener en producción funciona y hace lo que esperas que haga.

## ?‍??‍?Unidad

Una unidad es algo individual, digamos que un elemento, muchos elementos pueden crear algo mas grande que ellos. En nuestro caso, una unidad puede ser una clase o una función la cual junto con otras clases u otras funciones pueden crear una app mas compleja.

Al hacer pruebas de cada una de las unidades estamos haciendo pruebas unitarias.

## ?‍??‍? La prueba unitaria

Digamos que vamos a crear una nueva, nunca hecha, disruptiva app llamada calculadora. En esta app tendremos una función llamada **sum()**, la cual realiza la suma de dos números. Si lo hacemos en Kotlin, sería:

```
fun sum(int a,int b) : Int {
    return a+a;
}
```

Luego nos vamos a crear nuestra UI (Interfaz de usuario) la cual es fantástica y amamos hacer para que quede todo super lindo, pero cundo corremos la app y empezamos a probarla, nos damos cuenta de que la función de suma no funciona. ¿Por qué no funciona? Si los parámetros los he declarado bien y la suma va bien. Créeme, esto ocurre mucho mas de lo que imaginas.

Y es un problema si tus build times toman cierto tiempo. Ejecutar una compilación que tarde mucho puede romper el estado de concentración en el que te encontrabas, y espero que no seas como yo quien se distrae fácilmente y pierde el foco de que estaba haciendo. Por suerte, las pruebas unitarias pueden ayudarnos a solucionar estos dos problemas ya que los tests se encargan de verificar que el código haga lo que supone que debe hacer y como las pruebas unitarias son mas rápidas que compilar toda la app y probar cada cosa manualmente nos vienen de maravilla. Así que para empezar, vamos a crear nuestro primer test.

Casi todos los lenguajes tienen un framework para tests. Puedes revisar cual es el framework para test disponibles para tu lenguaje [\*\*aquí](https://www.notion.so/codingpizza/Que-es-un-unit-test-Prueba-unitaria-47049be52694488e96941d19e1240060#ed90ea4a255d495c82aa9b765271af40).\*\* En nuestro caso como estoy usando Kotlin, vamos a usar JUnit.

Una prueba unitaria se parece a esto y por defecto está en la carpeta de tests del proyecto.

```
    @Test
    fun calculator_sum_shouldReturnTheSumBetweenTwoParameters() {
        //Given
        val calculator = Calculator()
        //When
        val result = calculator.sum(2, 1)
        //Then
        assertEquals(3,result)
    }
```

Analicemos un poco qué contiene este Test.

-   La anotación `@Test` que indica que es un Test.
-   El nombre de la función que indica **\[Unidad\_NombreDeLoQueEstamosProbando\_ResultadoEsperado\]**, esto en ingles se hace de la siguiente forma: **\[Unit\_WhatWeAreTesting\_ExpectedBehavior\].**
-   El contenido del test.

Nuestro test debe seguir el patrón Arrange-Act-Assert (Organizar, actuar y afirmar) o el Given- When-Then (Dado que, cuando, entonces). A mi me gusta el patrón given, when, then debido a que me recuerda mucho a lo que suelo ver en las historias de usuario. Además, si te distraes puedes seguir los pasos y recordar el paso que te falta. Hablemos un poco sobre este patrón.

-   Given: En esta parte del patrón, los objetos que vas a necesitar son creados.
-   When: En este paso, llamamos a la función que queremos probar.
-   Then: Finalmente, en la ultima sección, hacemos la comprobación para evaluar el resultado.

Veamos un ejemplo:

![Alt Text](/images/e4bj8lz6o69ifd1a17ei.png)

En mi caso estoy usando Intellij Idea, en este IDE tengo un botón de play cerca de mi test y al hacerle click podremos ver en la siguiente imagen cómo el test falla.

![Alt Text](/images/tvaux78n0q94dikrati2.png)

Nuestro test ha fallado porque nuestra función está sumando dos veces el primer parámetro ?‍♂. Ahora que ya sabemos qué ocurre podremos cambiar nuestra función y ejecutar de nuevo el test para ver cómo pasa.

```
fun sum(int a,int b) : Int {
    return a+b;
}
```

![Alt Text](/images/8l37t5h0gair3xam8qje.png)

Increíble. Tengo que admitir que ahora el verde se ha vuelto uno de mis colores favoritos ya que es el color de los tests al pasar.

**Nota de Kotlin:** En Kotlin, podemos utilizar las comillas invertidas como nombre de la función y hacer nuestro Test mas legible!

```
@Test
    fun `calculator sum should Return The Sum Between Two Parameters`() {
        //Given
        val calculator = Calculator()
        //When
        val result = calculator.sum(2, 1)
        //Then
        assertEquals(3,result)
    }
```

## ? La pirámide del testing

Hemos hablado sobre qué es un unit test, pero hay más tipos de test.

-   Unit Test, se encargan de probar una unidad en especifico.
-   Test de integración, verifica que dos o más unidades estén funcionando juntas correctamente como deberían.
-   End to End tests, verifican que todas las unidades están funcionando correctamente. En el caso de android esto incluye probar la UI.

Visto que tenemos varios tipos de test, debemos dividirlos razonablemente. No todos los tests pueden ser End to End o test de integración. Por suerte, hay una imagen que explica muy bien cómo debemos distribuir los tests y se llama la pirámide del testing.

![Alt Text](/images/h6my1l2dgju7rhq8p8mp.png)

La pirámide del testing fue creada por Mike Cohn en su libro, Succeeding with Agile. Y en este, comenta que los unit test deberían ser la base de la pirámide seguidos por los test de integración y finalmente los End to End.

## ? Otros beneficios del testing

Tener una test suite te puede hacer de malla protectora y ayudarte a detectar bugs que creas cuando estés programando una nueva funcionalidad o cuando estés haciendo un refactor. Además, tus tests pueden ayudar a futuros desarrolladores a entender mas el código que has creado ya que un test es la mejor documentación que hay.

¡Eso es todo por ahora! Espero que te haya gustado este post. Si te ha gustado, compártelo con tus amigos y compañeros de trabajo así todos podemos aprender un poco mas de testing.

## Quieres saber más

Si te ha gustado este artículo y quieres saber sobre otros temas que te interesen puedes dejar un comentario o escribirme a cualquiera de mis redes sociales.

? **[Twitter](http://www.twitter.com/coding__pizza)**

? **[Facebook](http://www.facebook.com/codingpizza)**

? **[Instagram](http://www.instagram.com/codingpizza)**
