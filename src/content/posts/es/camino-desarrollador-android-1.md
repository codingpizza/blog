---
title: "El camino del desarrollador Android #1 – Instalar Android Studio en Linux"
description: "¡Hola! Para estrenar esta sección de nuestro blog pensé en realizar una serie de tutoriales donde veremos como podemos seguir un camino para volvernos un desarrollador Android aprendiendo conceptos y elementos para luego implementarlos en aplicaciones de la vida real. En esta primera versión de esta"
pubDatetime: 2017-09-18
tags: ["Android", "android-studio"]
ogImage: "/images/mark-basarab-157610-683x1024.jpg"
draft: false
categories: ["Android"]
sourceUrl: "https://www.codingpizza.com/camino-desarrollador-android-1/"
wpId: 3977
---
¡Hola! Para estrenar esta sección de nuestro blog pensé en realizar una serie de tutoriales donde veremos como podemos seguir un camino para volvernos un desarrollador Android aprendiendo conceptos y elementos para luego implementarlos en aplicaciones de la vida real. En esta primera versión de esta serie de Post empezaremos hablando de como instalar Android Studio.

Instalar Android Studio en Linux no tiene gran dificultad solo tenemos que instalar Java, descargar el SDK de Android y el IDE el cual sería Android Studio.

##### Tabla de contenidos

##### **Instalar Android Studio en Linux (Debian,Ubuntu,Xubuntu,Kubuntu)**

Antes que nada debemos instalar Java el cual lo haremos de la siguiente manera:

1.  Agregar el repositorio de webupd8team.com con el siguiente comando:  
    `add-apt-repository ppa:webupd8team/java`
2.  Actualizar la listas de repositorios  
    `sudo apt-get update`
3.  Instalar Java 8 con el siguiente comando:  
    `sudo apt-get install oracle-java8-installer`
4.  Utilizar el siguiente comando:  
    `sudo update-alternatives --config java`
5.  Ahora agregaremos la variable de entorno *$JAVA\_HOME* al archivo environment de la siguiente manera usamos el comando `sudo nano /etc/environment` para abrir el archivo y agregamos la siguiente línea  
    `"JAVA_HOME="/usr/lib/jvm/java-8-oracle/jre/bin/java""`
6.  Notificamos los cambios y volvemos a cargar el archivo environment con el comando:  
    `source /etc/environment`

Podemos saber si nuestra variable $JAVA\_HOME funciona utilizando:

`echo $JAVA_HOME`

Y para saber si hemos instalado bien Java usando el comando:

`java -version`

#### **Instalando Android Studio**

Hoy en día instalar Android Studio es muy sencillo, solo tienes que descargar el archivo .zip.

[Desde aquí](https://developer.android.com/studio/index.html)

Luego al descargarlo solo tienes que extraer los archivos, dirigirse a la carpeta que acabamos de extraer desde la terminal.

`cd android-studio/bin/`

luego corremos el archivo .sh del Android Studio

`./studio.sh`

Seguimos el proceso de instalación seleccionamos la primera opción

Seleccionamos la opción de «Configuración»  
![Android Studio tutorial imagen 1](/images/android-studio-tutorial.jpg)

Luego seleccionamos los SDK que vamos a descargar

![Android Studio tutorial imagen 1](/images/android-studio-tutorial-2-e1505508958586.jpg)

Se abrirá una ventana como la siguiente y comenzara a descargarse los SDK, luego esperamos y al terminar ya podríamos empezar a crear un proyecto con Android Studio.

![Android Studio tutorial imagen 1](/images/android-studio-tutorial-3-e1505509029272.jpg)

Nuestros amigos de Google y de IntelliJ nos proporcionan actualizaciones del Android Studio desde el mismo programa así que no tienes que preocuparte por repetir este paso una y otra vez.

Si te ha gustado este Post, compártelo en las redes sociales 🙂 y déjanos tu opinión aquí debajo.
