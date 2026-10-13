---
title: "Cloudbuild with Android – Using Encrypted Environment Variables"
description: "Hi there! At my current work, we had a problem with our CI/CD, and we started to look for alternatives. We checked out various platforms like CircleCI, Bitrise, and others. Still, the process to ask the upper-level management to add this as providers was a bit slow and tedious so, since we already h"
pubDatetime: 2020-04-30
tags: []
ogImage: "/images/BLOG-CloudBuild-with-Android.png"
draft: false
categories: ["Programming"]
sourceUrl: "https://www.codingpizza.com/en/cloudbuild-with-android/"
wpId: 4526
---
Hi there! At my current work, we had a problem with our CI/CD, and we started to look for alternatives. We checked out various platforms like CircleCI, Bitrise, and others. Still, the process to ask the upper-level management to add this as providers was a bit slow and tedious so, since we already had GCP as a provider, we decided to try GCP Cloudbuild.

Cloudbuild is an infrastructure that allows you to run builds for your projects. The price was reasonable, so we decided to start investing time on it to move our Android CI/CD all to cloudbuild.

As first we started looking for some previous experience on the internet and found two excellent articles about it, those articles will be linked below. Nevertheless, those articles required a certain knowledge of Docker, CloudBuild, and other technologies that I didn’t have.

So I started learning about it to understand these articles better. What I wanted to achieve first was to read an encrypted environment variable. With this goal in mind, I started my quest.

Note: Articles in which this post is based.

[**https://ryanharter.com/blog/cloud-build/**](https://ryanharter.com/blog/cloud-build/)

[**https://medium.com/dailymotion/run-your-android-ci-in-google-cloud-build-2487c8b70ccf**](https://medium.com/dailymotion/run-your-android-ci-in-google-cloud-build-2487c8b70ccf)

## Tabla de contenidos

## First, let’s enable GCP KMS

What we need to do first is go to the GCP console, create our new project, and enable the KMS. You must go to Security → Cryptographic Keys.

Note: KMS stands for Key Management Service.

![Sidebar menu which shows the cloud build KMS](/images/image1.png)

## Creating a Keyring and a Criptokey

A Keyring can hold various CryptoKeys. To create a Keyring, you need to use the following command:

«yourkeyringname» is the name of your Keyring, and you should replace it for your what suits best for you, and the flag –location=global means that this Keyring is available in all regions of your project.

Now that we already created a Keyring, let’s create our new CryptoKey, for that we’re going to use the next command.

«KEYNAME» is the name of the key you want to create, and the–keyring flag is to indicate to which Keyring it’s going to belong since we’re using as an example «yourkeyringname» it will belong to it.

## Encrypting the variable

To encrypt our variable, we must store it in a plain text file and then create a ciphertext file from that one. For that, we’re going to use the next command.

What this does for you is to encrypt your my\_variable.txt file and convert it to my\_variable\_encrypted.txt using your Keyring and your cryptokey. After that, you need to create a base64 from your encrypted variable, and that can be achieved using the next command:

If you’re using **macOS** you can use:

In **Linux**, the command is:

The result of this process is going to be something like this:

**Note**: This is an example. Your base64 is not going to be the same.

Now let’s store this base64 until we finish the next step.

## Creating our AndroidBuilder

In this step, we’re going to create our new Docker Image and pass to it our secret as a Build Argument. If you never created a Dockerfile before, probably you want to learn about it before continuing with this topic.

What we do in this Dockerfile is:

-   Obtain the javac builder from GCR (Google Container Registry).
-   Update the system.
-   Download the dependencies.
-   Set our «build arg» with the name SECRET.
-   Set the ANDROID\_HOME as an environment variable.
-   Copy our gradle-build script(This is a little script that helps us to store the gradle cache so the subsequent builds can be faster).
-   Download the android sdk tools, set our tools as an environment variable, and finally install the Android SDK.

This is the gradle-build script that is mentioned in the Dockerfile.

**Note**: This Dockerfile and gradle-build script are based on [this](https://medium.com/dailymotion/run-your-android-ci-in-google-cloud-build-2487c8b70ccf) article that helped me a lot. I only added a few instructions, the latest android platform, build-tools, platform-tools, and the `ARG SECRET` line.

If you’re a more advanced user of Docker and GCP, you can use the community cloud builder, which can be found **[here](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/android)**. I wanted a simpler proof of concept, so the previous one was the one that fit best for me.

As the last part of this step, we’re going to create a cloudbuild.yaml, which is going to build our container and upload it to the Google Container Registry. In this cloudbuild.yaml file, we’re going to execute a command which builds the container. There is where we’re going to run our Android project. In this cloudbuild.yaml, we pass our secret and use the base64 that we generated before, here’s how it’s going to look.

In this file, we’re building a Docker container and passing our secret as build arg. You can see that we’re using a double dollar sign to escape the cloudbuild substitutions, which are, for example, the $PROJECT\_ID, then we’re declaring that we’re going to use the secret at the end of our cloudbuild.yaml. Remember to replace «yourprojectname,» «yourkeyring,» «yourcryptokey» and your base64 in the previous file.

Finally, we use the following command to build it and send it to the Container Registry.

**Important**: If you’re getting an error because the Container Registry doesn’t have permission to decrypt you must go to your GCP console, Select Cloudbuild, go to configuration and copy your service account email, go to Security → Cryptographic keys → Select your key → Click the add member button in the right panel, add it as a member and select the role of decrypt cryptographic keys.

## The cloudbuild file in our android project

Now that we created our container to run our Android project, what we’re going to do is to create the cloudbuild file of our Android Project.

First, we’re going to create a couple of GCP Storage Bucket, and the Storage Buckets are object storages provided by the Google Cloud Platform. In other words, it helps us to store things. In our case, it will be helpful for our Gradle cache and apks.

To create it, we’re going to open up the terminal and type the next command.

In our cloudbuild.yaml we’re going to describe the following steps:

-   Copy our cache into our GCP Storage Bucket using the gsutil image from Google Container Registry. The GCP provides this image, so we don’t have to build our own.
-   Run a **KtLintCheck** task on our previously created AndroidBuilder.
-   Run a **detekt** task in our AndroidBuilder.
-   Run our **unit** test always on our AndroidBuilder.
-   Assemble our Apk.
-   Store the cache.
-   Store our apks in a storage bucket.
-   Finally, we set the timeout for the build to 1200 seconds.

Note: Ktlint is a linting tool for Kotlin, and **[you can read more about it in this awesome article](https://goobar.io/2019/07/25/adding-ktlint-to-your-kotlin-project/)** by Nate Ebel. On the other hand, detekt is a static code analysis tool for Kotlin, and you can read more about it [**here**](https://proandroiddev.com/detecting-kotlin-code-smells-with-detekt-e79c52a35faf).

## Set up the triggers.

Now we want to set-up the build triggers, so each time we push a branch, we can run our build to verify that everything is fine. To do this, we need to go to [console.google.com](http://console.google.com/), select our project, go to the navigation menu, select cloud build, triggers, connect our repository if you haven’t already, and then click the create trigger option. It looks like this.

![Create Trigger in GCP form](/images/image2.png)

This is a trigger that we want to run when a new feature branch is pushed to the repo. To test it, you need to push a new branch to the repo and check the GCP console history. If everything went well, you’re going to see something like this.

![Successfully worked trigger](/images/image3.png)

You can also try your builds locally using **cloud-build-local**.

## Test your build locally

Pushing to GitHub to trigger the build can be annoying and a slow process. If you want to test your build, you can test it in your computer using cloudbuild local and running the following command:

**Note**: You need to install first cloud-build-local with the following commands.

You can read more about it **[here](https://cloud.google.com/cloud-build/docs/build-debug-locally).**

## Where do we go from here

This was a proof of concept that I used to learn new things and to propose it to the DevOps team, in my job, I wanted to help them to help our Android team as I mentioned before this can be hugely improved so feel free to improve it or to use the community cloudbuilder if that fits your needs.

**[Ryan Harter](https://ryanharter.com/)** has a series in which he talks about how to increment the build numbers and how to store the build cache. If you want to go even further, play around with the community builders.

## What you can take away from this

If you’re looking for an alternative to circleCI, bitrise, or others, and you’re not afraid of a terminal and learning new things (Assuming you’re like me and didn’t know anything about cloudbuild) cloudbuild is cool. Surely it doesn’t have the beautiful UI/UX of one Continuous Integration provider. But it does very well the job. So it depends on your needs.

## That’s it

If you have any questions, suggestions, or improvements, please leave a comment ?. You can also reach me via Twitter [@coding__pizza](http://www.twitter.com/coding__pizza).
