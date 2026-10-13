---
title: "What is a unit test"
description: "You probably seen in those job offers, «Experience with Tests and TDD.» But if you're like me you probably have no idea about tests, you heard about them, and you know that the good developers are using it. But, what are they? how they work? ? Let's start with the test When a QA comes…"
pubDate: 2020-01-21
lang: en
slug: "what-is-a-unit-test"
translationOf: "que-es-un-unit-test"
categories: ["Programming"]
tags: ["kotlin", "programming", "testing"]
heroImage: "/images/Blog-What-is-a-unit-test.png"
sourceUrl: "https://www.codingpizza.com/en/what-is-a-unit-test/"
wpId: 4494
draft: false
---
You probably seen in those job offers, «Experience with Tests and TDD.» But if you’re like me you probably have no idea about tests, you heard about them, and you know that the good developers are using it. But, what are they? how they work?

## ? Let’s start with the test

When a QA comes to me and asks me if I’m confident about what my code is supposed to do, I always answer no, and that’s because I know I could mess it up. It’s not because I don’t trust my coding skills. It’s because I’m human, and we made mistakes. That’s why I started learning about testing because an excellent test suite can help you to catch the bugs that you’re going to introduce.

A test determines something; in our case, we want that our code goes as we planned. In my vague words, a test is a code that you write to verify that the «production» code you wrote is doing what is supposed to do.

## ?‍??‍?The unit

> An individual thing or person regarded as single and complete but which can also form an individual component of a larger or more complex whole.

Taken from [lexico](https://www.lexico.com/en/definition/unit).

In our case, a unit can be a class or a function which can group to create an App. We can test our units to be sure that each unit does what it’s supposed to do, and if we do that, we’re doing unit testing.

### ?‍??‍? Testing the unit

Let’s say we are building a shiny, never made before, unique app called calculator. In this app, we have a function called sum(), which realizes an addition of two numbers. In Kotlin, it will be.

```
fun sum(int a,int b) : Int {
    return a+a;
}
```

Then we jump into making our UI because the UI is fantastic, and I love to make the UI, and when we run the app and start testing it, we are surprised because the sum isn’t working. Why isn’t this working? The parameters are a and b. Trust me, this thing happens.

There’s a problem if your build times take some time. You probably know that a full compilation time can break your productivity flow. I hope you’re not like me who get distracted easily and forget what I was doing. Unit testing can help us to solve these two problems because the tests verify that the code is doing what it’s supposed to do. Unit tests run faster than compiling the app and manually testing it, so let’s create our first test.

Almost every language has its unit testing frameworks. You can check your language unit testing framework [**here**](https://en.wikipedia.org/wiki/List_of_unit_testing_framework). In this case, I’m using Kotlin, so we’re going to use JUnit.

A unit test looks like this and, by default, lives in your test folder.

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

Analyzing the anatomy of these tests, we can observe the next things:

-   The `@Test` annotation which indicates that is a Test.
-   The name of the function which indicates \[Unit\_WhatWeAreTesting\_ExpectedBehavior\].
-   The body of the test.

The test should follow the Arrange-Act-Assert or the Given-When-Then Pattern. I like the given, when, then pattern because it reminds me of the user stories. And when you can get easily distracted it helps you well! Let’s talk about that pattern!

-   Given: In this section, the objects which we’re going to need are created.
-   When: Here, we call the method to test.
-   Then: Finally, in the last section, we do the assertions.

![Alt Text](/images/e4bj8lz6o69ifd1a17ei.png)

I’m using Intellij Idea, so there’s a play button close to that test, we click on it, and there’s a message indicating that the test failed.

![Alt Text](/images/tvaux78n0q94dikrati2.png)

Our test failed because our function is returning the sum between our first parameter ?‍♂. Now we can change our function to the following and it will pass!

```
fun sum(int a,int b) : Int {
    return a+b;
}
```

![Alt Text](/images/8l37t5h0gair3xam8qje.png)

Amazing. I must admit now the green has become one of my favorite colors since it’s the color that the tests show when it passes!

**Kotlin Note**: In Kotlin, we can use backticks to wrap the name of the test so it can be more readable!

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

## ? The pyramid of testing

We already saw what a unit test is, but there are more types:

-   Unit Test, as we mentioned before this test only the subject.
-   Integration Test verifies that two or more units are working together as they should.
-   End to End Test verifies that all the units are working together as they should. The end to end test in the case of Android includes UI testing.

Since we have three types of testing, we need to split them reasonably. All can’t be End to End Test of Integration Tests. And fortunately, there’s an image which explains very well how we should distribute our testing, and it’s called the pyramid of testing.

![Alt Text](/images/h6my1l2dgju7rhq8p8mp.png)

The pyramid of testing was created by Mike Cohn in his book, Succeeding with Agile. He states that the unit tests should be the base, then the Integration Tests, and finally the End to End Tests.

## ? More benefits of testing

When you have a test suite, it works like a fallback network that can help you to avoid introducing new bugs when you are creating a new feature or refactoring the code. Also, your tests can help future developers who came after you to understand more what a feature is doing because the test is the best documentation.

That’s all for now! I hope you enjoyed this post. If you like it, don’t forget to share it with your friends and coworkers so they can know more about testing.

## Get in touch

Chat with me on:

? **[Twitter](http://www.twitter.com/coding__pizza)**

? **[Facebook](http://www.facebook.com/codingpizza)**

? **[Instagram](http://www.instagram.com/codingpizza)**
