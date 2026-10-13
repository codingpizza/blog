---
title: "Powerful list functions in Dart that you should know"
description: "Powerful list functions in Dart that you should know In the previous post about Dart, we talked about Collections in Dart. We spoke about List, Maps, and sets. And today, we're going to talk about some functions that are awesome and can help you in many cases. Note: In this post we use in various…"
pubDatetime: 2019-10-09
tags: ["dart"]
ogImage: "/images/Blog-CEE-PowerfulList-functions.png"
draft: false
translationOf: "funciones-increibles-que-debes-conocer-al-trabajar-con-dart"
categories: ["Dart"]
sourceUrl: "https://www.codingpizza.com/en/powerful-list-functions-in-dart-that-you-should-know/"
wpId: 4463
---
# **Powerful list functions in Dart that you should know**

In the previous post about Dart, we talked about **Collections** in Dart. We spoke about List, Maps, and sets. And today, we’re going to talk about some functions that are awesome and can help you in many cases.

**Note**: In this post we use in various cases the anonymous function, if you are not familiarized with it, you can check my other post about **functions**.

## **Map**

The **map** function exists in many programming languages, and Dart is not an exception. This function creates a new list after transform every element of the previous list. This function takes as a parameter an anonymous function. Let’s see an example.

```
var list = List.of({1,2,3,4});
var mappedList = list.map( (number) => number *2);
print(mappedList);
```

In this example, we create an anonymous function that has a number as a parameter, and we multiply that number per two. The result of this function is:  
`(2,4,6,8)`

## **Sort**

Sometimes you receive a list from the server, and you need to show it to the user. But what if you need to apply some filter and sort it in an ascending way? Well, this function can help you. Let’s see an example.

```
var randomNumbers = List.of({14, 51, 23, 45, 6, 3, 22, 1});
randomNumbers.sort();
print(randomNumbers);
```

This is the result.

```
[1, 3, 6, 14, 22, 23, 45, 51]
```

## **Generate**

This function is great when you need to create a list of numbers for a test. It takes as first parameter a number, which indicates the size of the list and an anonymous function which tells the **generate()** function how to create the numbers inside the list.

Here’s an example.

```
var generatedList = List.generate(10, (number) => number * Random().nextInt(50));
  print(generatedList);
```

In the example we can see how we can generate a list of ten elements and multiply it by a random number from 0 to 50.

## **Take**

The **take** function literally takes the first elements from the list. This can be useful when you have a list of winners and want to take the top 3. Here’s how you can use it.

```
var list = List.from([1,2,3,4,5,6]);
var topThreeList = list.take(3);
print(topThreeList);
```

The result of this example is: `1,2,3`

## **Skip**

The skip function is the opposite of the take function. This function ignores the first elements and creates a list of the remaining ones. This example shows how you can use it.

```
var list = List.from([1,2,3,4,5,6]);
var skipList = list.skip(3);
print(skipList);
```

The result is: `4,5,6`

## **Where**

This function is one of my favorites. It helps us to create a list of elements that satisfy a predicate. That means that your element list is going to have only elements that meet your requirements. Let’s say that you need to create a list of only even numbers.

```
var randomNumbers = List.of({14, 51, 23, 45, 6, 3, 22, 1});
var evenNumbers = randomNumbers.where((number => number.isEven));
print(evenNumbers);
```

The result of this example is `14,6,22`.

## **An awesome tip**

These function can be combined to achieve a greater solution. You can combine a **where** function with a **sort** function to get the even numbers sorted in ascending way.

```
var randomNumbers = List.of({14, 51, 23, 45, 6, 3, 22, 1});
var evenNumbers = randomNumbers.where((number) => number.isEven);
evenNumbers = evenNumbers.toList()..sort();
print(evenNumbers);
```

In this example we take only the even numbers from the randomNumbersList, then we convert these numbers to a List finally we use the cascade operator`..` to **sort()** the list in an ascending way.

The final result is: `[6, 14, 22]`

## **That’s it**

I hope you liked it. Do you want to learn more? I’m also creating new CodingSlices about Flutter on Instagram, feel free to follow me in **@codingpizza** for more content.

I’m also writing an eBook, which is a basic course of Dart. It’s about all you need to know to get started with Flutter. [**It’s free, and you can sign-up here.**](https://www.codingpizza.com/en/free-dart-course/)

## **Now is your turn**

You can try these concepts in IDE like Intellij idea community, which is free. All you need is to install the Dart plugin. Visual Studio Code or in some online editors like **[Dartpad](https://dartpad.dartlang.org/)****.**

## **Previous post**

If you’re interested in more posts like this, youcan check out my others post about Dart.

### [**Variables**](https://www.codingpizza.com/en/dart-variables/)

### [**Functions**](https://www.codingpizza.com/en/functions-in-dart/)

### **[Parameters](https://www.codingpizza.com/en/parameters-in-dart/)**

### [**Control flow**](https://www.codingpizza.com/en/control-flow-in-dart/)

### **[Collections](https://www.codingpizza.com/en/collections-in-dart/)**
