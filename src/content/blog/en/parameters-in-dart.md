---
title: "Parameters in Dart ¿What types exist?"
description: "Parameters Hi there! In the last post, we've been talking about variables and functions. If case you missed it, you can check our previous post here. Variables Functions We saw them previously. On the previous post about functions, we talked about parameters. We saw an example in which we need them "
pubDate: 2019-09-18
lang: en
slug: "parameters-in-dart"
translationOf: "parametros-en-dart"
categories: ["Dart"]
tags: ["dart"]
heroImage: "/images/Blog-Parameters-CodingSlices-Extended.png"
sourceUrl: "https://www.codingpizza.com/en/parameters-in-dart/"
wpId: 4424
draft: false
---
# **Parameters**

Hi there! In the last post, we’ve been talking about variables and functions. If case you missed it, you can check our previous post here.

[**Variables**](https://www.codingpizza.com/en/dart-variables/)

[**Functions**](https://www.codingpizza.com/en/functions-in-dart/)

## **We saw them previously.**

On the previous post about **functions**, we talked about *parameters.* We saw an example in which we need them as ingredients to do a IceCreamMachine works. We can also say that parameters are dependencies that a function requires to execute their code.

## **Required parameters**

The required parameters are the most basic parameters that a function can use, you specify a type, a name, and you’re ready to go.

We already saw them in the previous post on the sum function example:

The integer **a** and the integer **b,** are used inside the function and then are returned.

## **Optional parameters**

These parameters are optional because you can omit them when you use that function. To make a parameter optional, we need to put them inside brackets and at the end of the signature, if you’re using required params. Let’s see an example.

In this function, we can see how the optional parameter is placed before the required parameters if you put the optional parameter first the compiler would complain.

Ok, but what happened with the variable $secondName if it is not passed? The variable is going to be null. We don’t want to print «John null Wick.» for that, we can add a default value that we’re using later in case the optional parameter is null.

To add a default value to an optional parameter, all we need to do is an assignment. You can see it better in the following example:

Now the value is going to be an empty string, and the name will print correctly.

Let’s talk about how we can use the previous function. We actually can use it as follows:

You can make all your parameters optional by wrapping your parameters with brackets, in this way:

## **Named Parameters**

This type of parameters allows you to indicate in the function signature which parameter are you passing into it. For that, we need to surround our parameter with curly braces.

Here’s an example:

In this example, we’re using the name and the surname as required parameters. And the second name as a named parameter and in case nothing is passed to it the value will be an empty string.

When we want to use the last function with the optional parameters, we use it in the following way:

As you can see the named parameter should be included inside the parentheses.

In case we need to have a function with only **named parameters**, all we need to do is surround all the parameter section in the function signature with curly braces.

With the last function, we can specify the parameters but also change the order in which we use it because the order of the parameters doesn’t matter.

For example:

Isn’t it amazing? The named parameters improve the function readability a lot.

## **Now is your turn**

You can try these concepts in IDE like Intellij idea community which is free, all you need is to install the Dart plugin. Visual Studio Code or in some online editors like **[Dartpad.](https://dartpad.dartlang.org/)**

## **Previous post**

If you’re interested in more post like this, you can check out my other articles about Dart.

[**Variables**](https://www.codingpizza.com/en/dart-variables/)

[**Functions**](https://www.codingpizza.com/en/functions-in-dart/)

## **Learn more**

If you liked this post, I’m writing more like these in a free ebook which is a basic course of Dart that can help you to later start with Flutter, that awesome framework for develop multiplatform apps. If you’re interested, you can get it for **free** **[following this link](https://www.codingpizza.com/en/free-dart-course)**.
