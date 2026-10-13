---
title: "How Classes works in Dart"
description: "Hi! We've been learning about Dart for some weeks, if you've been following this series, you know we learned a lot of topics. In this post we're going to talk about Classes in Dart, the Classes are one of the basics of programming. ? What is a Class A class is the object blueprint. Inside…"
pubDatetime: 2019-10-16
tags: []
ogImage: "/images/Blog-CEE-Classes.png"
draft: false
categories: ["Dart"]
sourceUrl: "https://www.codingpizza.com/en/how-classes-works-in-dart/"
wpId: 4473
---
Hi! We’ve been learning about Dart for some weeks, if you’ve been following this series, you know we learned a lot of topics. In this post we’re going to talk about Classes in Dart, the Classes are one of the basics of programming.

## Tabla de contenidos

## ? **What is a Class**

A class is the object blueprint. Inside the class, we can find their properties, constructors, and functions. We already talked about functions in Dart, so we’re going to skip that part.

### **Properties**

The class properties are variables declared inside the class. For example, if we have a class named Car, the car color can be a string variable with the value «Blue.»

### **Constructors**

The constructors help us to initialize and set the values of our object. When we create a class and pass some variable as a parameter, we’re using a constructor.

## ? **How to create a Class in Dart**

To create a Class in Dart, we need to use the reserved keyword class and then the name of the Class. For example:

```dart
class Dog {

}
```

With this, we can create any Dog we want. But there’s more our Dog needs a name, so let’s create a variable that assigns that name.

```dart
class Dog {
  String name = "Rocky";
}
```

That’s great! Now every time we create a new Dog, it’s going to have Rocky as the name. Now we need to add our dog’s ability to bark. For that, we need to create a function.

```dart
class Dog {
  String name = "Rocky";

  void bark(){
    print("Woof Woof! ?");
  }
}
```

We already have a blueprint for a Dog named Rocky who can bark. All we need to do is create an object from this blueprint is use the constructor.

```dart
var MyDoggo = Dog();
```

The previous example shows us how we can create a Dog object using a default constructor. But what if we want to create another dog with another name? Not all dogs are named Rocky.

## ? **Creating uniques dogs with constructors**

To assign the name of our Dogs, we need to create a Constructor inside the class, which can help us to initialize our Dog objects with their name.

```dart
class Dog {
  String name = "Rocky";

  Dog(this.name)

  void bark(){
    print("Woof Woof! ?");
  }
}
```

Now we can create our Dogs using the following code.

```dart
var doggo = Dog("Sparky");
doggo.bark();
```

There are more Constructors. We’re going to talk about those in the next CodingSlices Extended. Remember to follow me, so you don’t miss it.

## ? **Finally, here is a spooky dog.**

[![](/images/giphy.gif)](/images/giphy.gif)

## **That’s it**

I hope you liked it. Do you want to learn more? I’m also creating new CodingSlices about Flutter on Instagram, feel free to follow me in **@codingpizza** for more content.

I’m also writing an eBook, which is a basic course of Dart. It’s about all you need to know to get started with Flutter. [**It’s free, and you can sign-up here.**](https://www.codingpizza.com/en/free-dart-course/)

## **Now is your turn**

You can try these concepts in IDE like Intellij idea community, which is free. All you need is to install the Dart plugin. Visual Studio Code or in some online editors like **[Dartpad](https://dartpad.dartlang.org/)****.**

## **Previous post**

If you’re interested in more posts like this, you can check out my others post about Dart.

### [**Variables**](https://www.codingpizza.com/en/dart-variables/)

### [**Functions**](https://www.codingpizza.com/en/functions-in-dart/)

### **[Parameters](https://www.codingpizza.com/en/parameters-in-dart/)**

### [**Control flow**](https://www.codingpizza.com/en/control-flow-in-dart/)

### **[Collections](https://www.codingpizza.com/en/collections-in-dart/)**

### [**Powerful list functions in dart that you should know**](https://www.codingpizza.com/en/powerful-list-functions-in-dart-that-you-should-know/)
