---
title: "Collections in Dart"
description: "Hello everyone, this week we're going to talk about Collections. Collections are a crucial part of every project. As always let's start with what are Collections. Collections are objects that groups multiple elements inside of them; a List is one of them. Let's say we have a list of lottery numbers."
pubDatetime: 2019-10-02
tags: ["dart"]
ogImage: "/images/Blog-CEE-Collections1.png"
draft: false
translationOf: "collections-en-dart"
categories: ["Dart"]
sourceUrl: "https://www.codingpizza.com/en/collections-in-dart/"
wpId: 4452
---
Hello everyone, this week we’re going to talk about Collections. Collections are a crucial part of every project. As always let’s start with what are **Collections**.

Collections are objects that groups multiple elements inside of them; a List is one of them.

Let’s say we have a list of lottery numbers. We can create a list from it.

The `lotteryNumbers` is a **List,**which is part of Collections. In Dart, we can create a List in different ways.

## **Using var**

You can create a null list using the reserved keyword *var* and the name of the list.

## **Null VS Initialized**

There’s a difference between a **null** list and an **Initialized** list. I recently found an image that explains it well.

An empty list is when the list exist but there is not element on it. Null instead means you don’t have a list initialized yet offcourse there’s a more scientific way to explain this, but this is a good example to start.

[![](/images/w7j4u121mtmp32i0p53a.jpg)](/images/w7j4u121mtmp32i0p53a.jpg)

You can create list as follows.

If you’re curious, you can try to print the size of each list using the **.length** property and compare the results.

## **Creating a list for a specific type**

If we need to create a list from one specific object type, we need to specify it inside angle brackets in the following way.

In this example we’re creating a list of only String objects.

In case we need to create a list with multiple object types, we need to use the **dynamic** keyword instead of **String**.

You can also create a list using the **List.of** function, we already used this way in the first code snippet.

## **Retrieving elements from the list**

In case you need to retrieve an element. What you need to do is to use brackets beside the **List** name. This gives you the element from that list in that position. Also you can use the **elementAt()** function.

Here’s an example:

The result of this example is going to be the first number of that list, in our case the number 1.

## **Adding an element from the list**

This time we’re going to add an element to an already created list. All we need to do is to use the .add function and pass as parameter the number we want to add.

Add items are pretty straightforward

## **Deleting an element from the list**

This time we’re going to do the opposite, we’re going to remove an element from the list. What we need to do is to have the position of the element and use the **.removeAt()** function.

Which number do you think we removed from this list? If your answer is number 1. You were close, but that’s incorrect, we removed the number 2 because the list position starts from 0.

```
Value  -> [1,2,3,4,5]
Position->[0,1,2,3,4]
```

## **Another type of Collections**

Introducing **Maps,** **Maps** are unordered key-value pair collection which helps us to associate a key to a value. You can create a map specifying the key type and the value type as follows:

After this reference from the nineties, we can see that each Power Ranger has a dinosaur associated with.

## **Obtaining an item from a map**

Sometimes we need to recall only one of our Zords, how we can do it in a map? All you need to do is indicate the key inside brackets just after the name of the map.

This example returns the Zord of the red ranger.

## **How to remove a ranger from the map**

If you need to remove an element from the map what you need to do is to use the **.remove()** function and pass as parameter the key. Here’s an example.

## **How to add a new ranger to our map**

When we have a new member in our crew, we need to create a map and then assign it to that map the key and the value only after that we can add that ranger to our map. Here’s an example.

As you can see in this previous example, we created a map with a string key and a string value. Then we assign the key inside the brackets and assign the value «Sabertooth Tiger» to that key.

## **Last but not least**

We can’t talk about **Collections** without mentioning **Sets.** A set is an unordered collection of unique objects. Two things worth mentioning about sets are: First, you cannot get an item by index and second, adding a duplicate  
item has no effect.

Here’s an example about how to create a set

## **Remove from the set**

If we need to remove an element from the set we can use the function **.remove().**

## **Adding an item to the set**

When we need to add an item to the set we use the **.add() function.**

As I mentioned before we can’t add a duplicate object to the **Set**.

## **That’s it**

If you’re new into programming, I hope this helps you, and if you’re not, I hope you liked it. I’m also creating new CodingSlices about Flutter on Instagram, feel free to follow me in **@codingpizza** for more content.

I’m also writing an eBook which is a basic course of Dart It’s about all you need to get started with Flutter. [**It’s free and you can sign-up  
here.**](https://www.codingpizza.com/en/free-dart-course/)

## **Now is your turn**

You can try these concepts in IDE like Intellij idea community which is free. All you need is to install the Dart Plugin. Visual Studio Code or in some online editors like **[Dartpad](https://dartpad.dartlang.org/)****.**

## **Previous post**

If you’re interested in more posts like this, you can check out my others post about Dart.

### [**Variables**](https://www.codingpizza.com/en/dart-variables/)

### [**Functions**](https://www.codingpizza.com/en/functions-in-dart/)

### **[Parameters](https://www.codingpizza.com/en/parameters-in-dart/)**

### [**Control flow**](https://www.codingpizza.com/en/control-flow-in-dart/)
