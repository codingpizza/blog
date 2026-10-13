---
title: "Functions in Dart"
description: "In this section, we're going to talk about functions, how it works on Dart and the function types. ?What is a function? A function is a block of code that should be organized, perform a single task, and should be related to the class we're working on. Functions should also be reusable. This would re"
pubDate: 2019-09-11
lang: en
slug: "functions-in-dart"
translationOf: "funciones-en-dart"
categories: ["Dart"]
heroImage: "/images/Functions-Blog-Image.png"
sourceUrl: "https://www.codingpizza.com/en/functions-in-dart/"
wpId: 4406
draft: false
---
In this section, we’re going to talk about functions, how it works on Dart and the function types.

## ?What is a function?

A function is a block of code that should be organized, perform a single task, and should be related to the class we’re working on.

Functions should also be reusable. This would reduce the quantity and increase the quality of your code. If it is done correctly.

## ?‍?Function anatomy

There are many function types in Dart. First, we’re going to learn about how a function works then we’ll going to explain the other function types.

The functions are usually created with the following syntax:

**Where**:

**void** is the return type of the function. This means that when the function executes all the code inside, it should return this value.

Wait a minute. We’re not returning anything, and we’re just printing a name. And that’s because when we don’t need to return a value, we use the reserved keyword void.

**printName** is the name of the function, a name we’re going to need to use it later, the name should explain what this function is.

**(****String** **name****),** inside this parentheses, we’re going to specify the type of the parameter and the name of that parameter. Parameters are variables that are available inside the function, and we’re going to talk more about parameters in the next chapter.

Let’s see a classic example:

This function helps us to sum two integers, we provide the first value and the second value, and it returns the sum of both. We can use it as follows:

In this code, we created a variable called result which stores the result we get from the function **sum,**

when we print it the result is 4.

In a nutshell, we can say a function works like an ice cream machine, you add the ingredients (parameters), and it should return you a delicious ice cream. Let’s see another example:

In this more advanced example, we created a function called IceCreamMachine which returns an AwesomeIceCream object. And object is an instance of a class. We’re going to discuss it later. But keep in mind that AwesomeIceCream is an object like Strings, Integer or Double.

## ➡️Arrow function

The arrow function is a function that can have only one line of code, you may notice that it has no braces instead has an arrow.

This type of function helps us to keep our functions small and improve the code readability. Let’s convert our other examples to an arrow function.

Let’s start with the *sum function. In* the first place, we need to remove the braces and add the arrow; after the arrow sign, we add the logic of our function. That’s it! You successfully created your first arrow function.

Now why don’t you try to convert the *ice cream machine* function?.

## ?️‍♀️ Anonymous function

As we say before the functions should have a name, but in the case of the Anonymous function, it doesn’t, this function are called in-site a passed as parameters to other functions ?.

**Note**: What the forEachFunction does is to execute the code inside of it for each element in the list. We’re going to see more about these functions and collection in another chapter.

This is going to have the following output:

```
We have the chocolate flavour
We have the vanilla flavour
We have the orange flavour
```

What happened here?. The forEach() **function** receive as parameter a Function, in Dart **Function** is a type like any other.

For the anonymous functions the syntax is the following:

If you’re still confused you can see it as a shorthand for the following example:  
Let’s say that you have a list that you want to iterate to print items, but you don’t want to do the print items in the same method that you’re right now. Something like this.

Because we want to have that logic in another method, we can create a function called `getPrintElementFunction()`.

This function returns a function ?. This function is quite rare. You can use the function inside your forEach method as follows:

This code could compile and is going to print the same result as the function we saw before, but it’s quite ugly if you’re going to do something simple inside of it.

## Now is your turn

You can try these concepts in IDE like Intellij idea community which is free, all you need is to install the Dart Plugin. Visual Studio Code or in some online editors like **[Dartpad.](https://dartpad.dartlang.org/)**

## Previous post

If you’re interested in more post like this you can check out my others articles about Dart.

[**Variables**](https://www.codingpizza.com/en/dart-variables/)

## Learn more

If you liked this post I’m actually writing more like these in a free ebook which is basically a basic course of Dart that can help you to later start with Flutter, that awesome framework for develop multiplatform apps. If you’re interested you can get it for **free** [following this link](https://www.codingpizza.com/en/free-dart-course).
