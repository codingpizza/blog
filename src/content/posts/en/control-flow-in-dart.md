---
title: "Control flow in Dart"
description: "Control Flow Hi there!, in the last month I've been writing about Dart and how things work in this language. If you're new here, you can check my other post about Dart. I'll leave it down below. Variables Functions Parameters Power without control is useless. In this post, we're going to talk about "
pubDatetime: 2019-09-25
tags: ["dart"]
ogImage: "/images/Blog-Flow-Control-CodingSlices-Extended.png"
draft: false
translationOf: "flujo-de-control-en-dart"
categories: ["Dart"]
sourceUrl: "https://www.codingpizza.com/en/control-flow-in-dart/"
wpId: 4441
---
# **Control Flow**

Hi there!, in the last month I’ve been writing about Dart and how things work in this language. If you’re new here, you can check my other post about Dart. I’ll leave it down below.

### [**Variables**](https://www.codingpizza.com/en/dart-variables/)

### [**Functions**](https://www.codingpizza.com/en/functions-in-dart/)

### **[Parameters](https://www.codingpizza.com/en/parameters-in-dart/)**

## **Power without control is useless.**

In this post, we’re going to talk about how **Control Flow**, works in Dart. Let’s start with what it is, **Control Flow**. In simple words is the order in which your code is executed.

Let’s say we need to choose between going outside with an umbrella or not. We check our Weather app, and if it says it’s going to rain we take it with us, otherwise we can leave it at home.

If we want to write that in code, this can be.

```
if (isGoingToRainToday()) {
 takeUmbrella() 
} else {
 print ("What a great weather today ?")
}
```

## **If statements**

The **if statements** help our code to make a decision, it has the following syntax.

```
if (condition) {
 doThis()
} else {
 doAnotherThing()
}
```

We start with the reserved keyword if, then we add a condition inside the parentheses. If that condition is met the code inside the first curly braces is going to be executed. Otherwise, the code after the else statement is executed. The condition at the end is a Boolean value; let’s see an example.

In the previous example, we wanted to check the weather to know if we needed to take the umbrella with us. But what isGoingToRainToday() is? Well is a function which returns a boolean. It looks like this.

```
Boolean isGoingToRainToday() {
	return false
} 
```

Here’s a tip the else statement is not always needed. If you only need to execute what it is inside the if statement you can omit it.

If you need to make a comparison with more than two options you can also use an **else if** statement, let’s see how it is.

```
var flavor = "Vanilla";
if (flavor == "Vanilla"){
	print("Here's your vanilla ice cream");
} else if( flavor == "Chocolate") {
	print("Here's your chocolate ice cream");
} else {
	print("Since we don't know your favorite flavor, here's a random one");
}
```

In this example we have a favorite flavor of ice cream, the **if** statement is going to check if the flavor is vanilla if it is not, is going to try the **else if** condition. If any of the condition mentioned before are met, the else statement is going to be executed.

What happen if we have too many flavors?

## **Introducing the Switch case**

The switch statements work with variables instead of a condition if the switch has a «case» for the value of the variable the code inside that case is going to be executed. If the switch can’t found a case for it, the code inside the default case is executed.  
Here’s an example.

```
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

## **The for statement**

The for statement is a common statement that exists in almost every language. Is used to iterate an array of objects. The syntax in Dart is as follows:

```
for (var i = 0; i < list.length; i++){
 print(list[i]);
}
```

This statement may look confusing but let’s split this declaration, the variable **i** start at value 0, and it will increase by one until it reaches the length minus one of the list.

For each time the variable increase by one, the code inside the braces is executed. This print that «i object» from the list.

The **for statement** is useful when you know when it’s going to end. In our case, we now it because list.length is limited.

## **While statement**

The While statement on the other side works better when you don’t know when a condition is going to meet. It will execute the code inside the braces until the condition is met, for example.

```
int laps = 0;
while (laps < 5){
	print("Laps $laps");
	laps++;
}
```

In this example, the code inside the while is executed until the laps are less than five.

```
Laps 0
Laps 1
Laps 2
Laps 3
Laps 4
```

## **The sibling of the while is the** do while

Introducing the sibling of the While statement, the Do while statement. This statement executes the code and after the statement evaluates it. Here’s an example.

```
int countDown = 5;
do {
 print("Time remaining: $countDown");
 countDown--;
} while (countDown != 0);
```

This code is going to print the countDown variable while it’s different than zero. Here’s the result.

```
Time remaining: 5
Time remaining: 4
Time remaining: 3
Time remaining: 2
Time remaining: 1
```

## **That’s it**

If you’re new into programming, I hope this helps you, and if you’re not, I hope you liked it. I’m also creating new CodingSlices about Flutter on Instagram, feel free to follow me in @codingpizza for more content.

Do you know I’m also writing an eBook which is a basic course of Dart. All you need to get started with Flutter. [**It’s free and you can sign-up here.**](https://www.codingpizza.com/en/free-dart-course/)

## **Now is your turn**

You can try these concepts in IDE like Intellij idea community which is free, all you need is to install the Dart Plugin. Visual Studio Code or in some online editors like **[Dartpad.](https://dartpad.dartlang.org/)**

## **Previous post**

If you’re interested in more post like this you can check out my others post about Dart.

### [**Variables**](https://www.codingpizza.com/en/dart-variables/)

### [**Functions**](https://www.codingpizza.com/en/functions-in-dart/)

### **[Parameters](https://www.codingpizza.com/en/parameters-in-dart/)**
