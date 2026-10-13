---
title: "¡22 Comandos de linux que debes saber!"
description: "¡Hola amigos! En esta oportunidad quiero hablarles de los 22 comandos que más he utilizado en linux parte 1 y que al mi parecer todo usuario que esté empezando en linux debería empezar a utilizar ya que si queremos realizar ciertas tareas en un servidor o a través de ssh podamos realizarlas sin depe"
pubDatetime: 2017-08-21
tags: []
ogImage: "/images/pinguin.jpg"
draft: false
categories: ["Linux"]
sourceUrl: "https://www.codingpizza.com/22-comandos-de-linux-que-debes-saber/"
wpId: 3914
---
¡Hola amigos! En esta oportunidad quiero hablarles de los 22 comandos que más he utilizado en linux parte 1 y que al mi parecer todo usuario que esté empezando en linux debería empezar a utilizar ya que si queremos realizar ciertas tareas en un servidor o a través de ssh podamos realizarlas sin depender de una GUI.

Empecemos con lo básico, como crear, modificar,leer y eliminar un archivo en un directorio también veremos como movernos entre los directorios mediante la terminal.

## Tabla de contenidos

## Comandos para gestionar archivos

#### **1 ) cd**

La función de este comando es moverse entre directorios es bastante sencillo de usar y aqui tenemos algunos ejemplos de ello:

`cd app`

Nos cambiaría al directorio de la carpeta app

`cd ../`

Nos cambia al directorio superior es decir, si tenemos Giuseppe/Documents/Codingpizza/Aplicaciones/AppDePizzaAndroid y nosotros estamos en el directorio *Aplicaciones* nos cambiaría al directorio *Codingpizza*

`cd ~/Documents`

El símbolo ~ indica que es la carpeta personal de cada usuario, si seguimos el ejemplo anterior, nos habíamos movido previamente a la carpeta *Codingpizza* pero ahora resulta que quiero moverme a mi carpeta personal por cualquier circunstancia utilizamos este comando y nos situaría en el directorio Giuseppe

#### **2 ) ls**

De que nos serviría cambiar de directorio en directorio si no podríamos ver que se encuentra en cada uno ¿no?, esto lo podemos solucionar con el comando ls dicho comando se encarga de mostrar todo el contenido de un directorio actual, suponiendo que estamos en el directorio *Aplicaciones/*  y queremos ver la lista de nuestras aplicaciones podemos utilizar el comando ls para observar en la consola que archivos hay disponibles.

Dependiendo de tu distribución de linux este comando puede mostrarte los colores de distintos tipos de archivo por ejemplo, en mi caso que utilizo Xubuntu 16.04 y los directorios me los muestra con un color azul, los archivos comprimidos con un color rosado y los ejecutables de color verde.

otras variaciones de este comando pueden ser:

`ls -l`

El cual indica todos los archivos disponibles en un directorio con el nombre del dueño, sus permisos,fecha y hora de creación.

`ls -a`

Este comando muestra todos los archivos *incluyendo* los archivos ocultos.

#### **3) pwd**

Si en algún momento no recordamos en qué directorio estamos, siempre podemos utilizar este comando para mostrar el directorio en el que estamos situados actualmente, de hecho su nombre viene de “print working directory” así se te hará mas fácil recordar el nombre del comando.

#### **4) touch**

El comando touch se utiliza para crear un comando a través de la terminal por ejemplo:

`touch miarchivo.txt`

#### **5) head**

En linux es una buena práctica nunca abrir los archivos con un editor para solamente leerlos, por que imagínate si por cualquier razón te equivocas y terminas escribiendo algo en el archivo y luego es utilizado por el sistema o por alguien mas y se daña.

Por esta razón el comando **head** es importante ya que muestra las primeras diez líneas de un archivo por ejemplo si utilizamos el siguiente comando:

`head  listacompras.txt`

Daría como resultado:

-   lista de compras:
-   Pan
-   Queso
-   Jamón
-   Jugo de naranja
-   Galletas
-   Mas Galletas
-   Tomate
-   Cebolla
-   Manzanas

#### **6) tail**

El comando *tail* al contrario del comando *head* muestra las últimas líneas de un archivo si tenemos un archivo que contiene los números del 1 al 20

`tail lista_numeros.txt`

El resultado del comando seria:

-   11
-   12
-   13
-   14
-   15
-   16
-   17
-   18
-   19
-   20

#### **7) more / less**

Al contrario de head y tails estos comandos muestran todo el contenido de un archivo por ejemplo si tienes un archivo.log y es extremadamente largo pero quieres revisarlo la ventana de la terminal no podrá mostrar toda la información así que para esto usamos *less*  ya que aunque cumplen una función muy similar, con el comando less tenemos la posibilidad de “pasar de páginas” usando la combinación de teclas *CTRL+F* para ir a la siguiente pagina y *CTRL+B* para ir a la anterior si quieres salir del modo de lectura del archivo basta con presionar la tecla *q*

El comando se utiliza de la siguiente manera:

`less log_del_servidor.log`

#### **8) nano**

Ya hablamos de como crear un archivo y ver su contenido ahora vamos a ver como escribir un archivo, el comando *nano* es un comando que muestra un editor de texto en la consola donde podemos escribir y editar de ser necesario un archivo.

Este comando se utiliza de la siguiente manera:

nano nombredelarchivo.txt

Una vez dentro del archivo podemos utilizar la siguiente combinación de teclas para salir de el:  
*  
ctrl + x para salir del editor, si no has grabado el editor te preguntara si deseas guardar los cambios, presionamos enter y se guardaran los cambios.*

*ctrl + o guarda el archivo el cual estamos editando.*

*ctrl + \\ reemplaza un* *carácter.*

#### **9) rm**

Ahora para terminar de hablar de archivos hablemos de *rm*  este es un comando que permite la eliminación de directorio y archivos, recuerda que si eliminas algún directorio o archivo utilizando este comando no podrás recuperarlo más.

Para eliminar un archivo utilizamos el comando

`rm archivoaeliminar.txt`

Para eliminar un directorio usamos

`rm -r directorio_a_eliminar`

Donde -r indica al comando que tiene que utilizar una operación recursiva.

#### **10) cp**

cp es un comando muy sencillo el cual se utiliza para copiar un archivo o un directorio para copiar un directorio es necesario utilizar la bandera -r para indicar que es una operación recursiva.

Para copiar un archivo utilizamos

`cp archivo_original.txt archivo_copia.txt`

Para copiar un directorio utilizamos

`cp -r directorio_original directorio_copia2`

#### **11) mv**

El comando mv se utiliza para mover archivos de un directorio a otro podemos utilizarlo de esta forma:

`mv archivo_original.txt directorio_original`

#### **12) find**

Como indica el nombre de este comando se utiliza para encontrar un archivo, en este caso en el directorio en que nos indicamos actualmente.

`find archivo1.txt`

#### **13) locate**

Este comando se encargará de buscar el archivo a un nivel más profundo y detallado así que para utilizarlo solo necesitamos usar el siguiente comando:

locate index.html

#### **14 ) history**

history es un comando simple este comando lo que nos permite es ver un historial de los comandos que hemos utilizado anteriormente el cual es útil si quieres buscar uno en especifico que no recuerdas.

Su uso es tan simple como escribir:

`history`

además, si deseas guardar el resultado del comando en un archivo de texto puedes utilizarlo de la siguiente forma:

`history >> historial_de_comandos.txt`

donde “historial\_de\_comandos” puede ser el nombre del archivo donde desees guardar la información que te trae el comando.

#### **15) grep**

El comando grep es al mi parecer uno de los comandos mas poderoso que puede tener la terminal de unix su función es mostrar todas las lineas que contengan un patrón o una expresión regular sin embargo aquí vamos a tratar solo su forma sencilla ya que hay inclusive capítulos en libros que hablan de este comando.

Suponiendo que tenemos un archivo con una lista de frutas y queremos saber si contiene una en especifico podemos utilizar el comando:

`grep “Pera”`

Así sabremos si dicho archivo contiene lo que se está buscando, el comando grep también acepta expresiones regulares.

Otra buena manera de combinar el comando *grep* es con el comando history ya que si por ejemplo estamos buscando un comando que solo recordamos una parte de él podemos combinarlos de la siguiente manera:

`history | grep “git”`

esta combinación mostrara todos los comandos que contengan la cadena “git” del historial de comandos. La barra vertical conocida en inglés como el “Pipe operator” el cual toma la salida de un comando y lo utiliza en el siguiente comando.

#### **16 ) shutdown**

Este comando se utiliza para reiniciar el sistema operativo el cual es muy util si quieres programar a que hora tu ordenador debería apagarse, se usa de esta manera:

sudo shutdown -P 16:00

Este comando debe ejecutarse como super usuario por eso utilizamos la instrucción sudo, luego ingresamos el comando el cual es *shutdown* y la bandera *\-P*  indica la hora en la cual se va a apagar el ordenador en este caso seria a las 16:00 en formato de 24 horas.

También puedes utilizarlo de esta manera:

`sudo shutdown -P +60`

en el cual le damos una indicación en el cual se apague dentro de 60 minutos.

Para cancelar un apagado debemos utilizar el comando de la siguiente manera:

`sudo shutdown -c`

Si queremos reiniciar el ordenador solo debemos agregar la bandera -r para que se reinicie por ejemplo:

`sudo shutdown -P +60 -r ó sudo shutdown -P 16:00 -r`

#### **19) top/htop**

El comando *top* es un comando en el cual puedes observar los procesos del sistema y que recursos se están utilizando. Yo personalmente prefiero *htop* el cual es un comando que ayuda muchísimo ya que es la versión mejorada de *top*, este comando muestra los procesos y los recursos que se utilizan con gráficas y una interfaz de la consola bastante amigable y mas entendible.

#### **20) service restart**

Este comando es útil cuando necesitas iniciar o reiniciar un servicio el cual ha dejado de responder o has realizado ciertos cambios y necesitas reiniciarlo para que surtan efecto dichos cambios. Por ejemplo si quieres reiniciar el servicio de postgres desde tu laptop podrías usar:

`service postgresql restart`

#### **21) apt-get**

*apt-get* permite instalar paquetes derivadas de Debian este se encarga de obtener,resolver dependencias, instalar y desistalar paquetes del sistema operativo se puede usar

`apt-get update`

Para actualizar la lista de fuentes que tenemos en nuestro sistema operativo, estas fuentes nos ayudan a saber que paquetes hay disponibles.

`apt-get install htop`

Si queremos instalar el comando htop del que hablamos previamente tendríamos que utilizar el comando de esta forma donde htop puede ser cualquier paquete que desees instalar recuerda que esta debe estar en la lista de fuentes

`apt-get upgrade`

Se encarga de descargar y actualizar todos los paquetes previamente instalados

#### **22) gdebi**

gdebi es una herramienta para instalar paquetes que puedes usar de forma local a diferencia del apt-get este no necesita internet y solo tienes que tener un archivo .deb, para usarlo solo necesitas usar:

`sudo gdebi google-chrome.deb`

#### **23) pkill/kill**

Tanto pkill como kill son procesos que se usan para matar procesos que quizás se quedaron colgados. La diferencia entre ambos radica que pkill, busca un proceso con la cadena de texto que se pasa como argumento  
en este caso seria «firefox» pero si utilizáramos «fire» matara tanto el proceso de firefox como el de firebird por que ambos contienen el texto «fire».

se utiliza de la siguiente manera:

`pkill firefox`

Al contrario de pkill el comando kill mata un proceso usando su PID ( Process ID) por ejemplo:

`kill 15349`

#### **24) ssh**

ssh es un comando primordial en la gestión de servidores ya que lo utilizamos para conectarnos a servidores remotos mediante la terminal, es decir utilizar tu terminal como si fuese la del servidor y poder realizar cambios. Esto el «pan de cada dia» para quien gestiona servidores y para conectarnos usando un login y contraseña a nuestro servidor solo tenemos que usar el comando

`ssh -l nombreusuario direcciondetuservidor.com -p 22`

Donde la bandera -l indica que iniciaras sesión usando un login y el comando -p mediante cual puerto accederás al servidor usando ssh, luego de esto te pedirán tu contraseña  
la ingresas y podrás ingresar a tu servidor y utilizar todos los comandos que hemos visto hasta ahora 😉

¿Tienes algún comando que debería estar aquí? Escribelo abajo en los comentarios 🙂 y si te ha gustado este post ¡no olvides compartirlo por las redes sociales!
