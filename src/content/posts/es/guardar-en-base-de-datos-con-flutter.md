---
title: "Guardar en base de datos con Flutter"
description: "Guardar en base de datos con Flutter Photo by Tim Evans on Unsplash. Almacenar texto en la base de datos es junto a las llamadas a red, una de las operaciones que como desarrolladores más tenemos que realizar. Algunas veces, necesitamos guardar la información de los servidores en nuestra app para qu"
pubDatetime: 2020-01-08
tags: []
ogImage: "/images/Blog-Guardar-en-bases-de-datos-con-Flutter.png"
draft: false
translationOf: "storing-in-database-with-flutter"
sourceUrl: "https://www.codingpizza.com/guardar-en-base-de-datos-con-flutter/"
wpId: 4490
---
# Guardar en base de datos con Flutter

Photo by Tim Evans on Unsplash.

## Tabla de contenidos

Almacenar texto en la base de datos es junto a las llamadas a red, una de las operaciones que como desarrolladores más tenemos que realizar. Algunas veces, necesitamos guardar la información de los servidores en nuestra app para que los usuarios puedan abrir la app y ver información previamente guardada antes de que se actualice con nuevo contenido, o podemos también tener que implementar un modo offline.

En este artículo, vamos a hablar sobre cómo almacenar información en una app con Flutter. Nuestra app será una aplicación que almacenará unas Tareas por realizar (Todo’s), las cuales podremos consultar luego.

Una lista de las cosas que vamos a necesitar:

-   Una clase de Tareas por realizar (De ahora en adelante las llamaremos Todo).
-   Una Screen, la cual es un Widget que nos mostrará unos campos donde podremos crear nuestro Todo.
-   Agregar las dependencias de los paquetes que utilizaremos. Un paquete es lo que en otros lenguajes puede conocerse como librería, nosotros utilizaremos **sqflite**.
-   Una clase DatabaseHelper la cual se encargará de gestionar la base de datos.

![/images/Screenshot\_1578338767.png](/images/Screenshot_1578338767.png)

Primero, vamos a crear nuestra clase Todo.

```dart
class Todo {
  final int id;
  final String content;
  final String title;
  static const String TABLENAME = "todos";

  Todo({this.id, this.content, this.title});

  Map<String, dynamic> toMap() {
    return {'id': id, 'content': content, 'title': title};
  }
}
```

Esta es la clase Todo la cual contiene un id, el contenido del Todo y el título. Además, agregamos una constante que incluye el nombre de la tabla de Todos, así como también una función toMap que utilizaremos más adelante.

Con la clase Todo creada, vamos a agregar nuestra dependencia de la siguiente forma en el archivo pubspec.yml.

```yaml
dependencies:
  flutter:
    sdk: flutter
  sqflite:
  path:
```

Ahora tenemos que crear nuestra clase **DatabaseHelper,** la cual tiene la función de tratar con la base de datos.

```dart
class DatabaseHelper {
  //Create a private constructor
  DatabaseHelper._();

  static const databaseName = 'todos_database.db';
  static final DatabaseHelper instance = DatabaseHelper._();
  static Database _database;

  Future<Database> get database async {
    if (_database == null) {
      return await initializeDatabase();
    }
    return _database;
  }

  initializeDatabase() async {
    return await openDatabase(join(await getDatabasesPath(), databaseName),
        version: 1, onCreate: (Database db, int version) async {
      await db.execute(
          "CREATE TABLE todos(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title TEXT, content TEXT)");
    });
  }
}
```

Tenemos varias cosas de las que hablar sobre esta clase. Para empezar, acceder a una base de datos es una operación asíncrona, lo que significa que debemos utilizar Futures para inicializar la propiedad **database**.

En la función **initializeDatabase** vamos a inicializar una base de datos siempre y cuando no tengamos una ya creada previamente, para inicializarla vamos a llamar la función **initializeDatabase** y dentro de ella llamaremos a la función **openDatabase** de la librería de sqflite.

La función **openDatabase** necesita los siguientes parámetros:

-   Un String que sería el **Path** de la base de datos. Para esto, debido a que tratamos con sistemas operativos diversos, hay que utilizar la función **join()** que se encargará de unir los path que vamos a obtener con la función **getDatabasesPath()**.
-   Una función anónima que será ejecutada cuando la base de datos sea creada. En nuestro caso, una función anónima con una query creará una tabla dentro de la base de datos.

La función **insertTodo()** toma como parámetro un objeto **Todo.** Obtiene la base de datos que habíamos creado previamente y utiliza la función de la librería sqflite **execute()** para insertar los datos en nuestra base de datos. A esta función le vamos a pasar los siguientes parámetros.

-   El nombre de la tabla en la cual vamos a insertar la información. En nuestro caso tenemos el nombre declarado como una constante en nuestra clase de Todo.
-   Un map que incluye la información que queremos insertar. Para esto hemos creado la función **toMap** de nuestra clase Todo que convierte nuestro objeto Todo a un Map.
-   Y una constante definida por la librería que especificará qué acción tomar cuando se encuentre un conflicto. Nosotros vamos a tomar la acción de reemplazar siempre que tenga un conflicto.

Finalmente, podemos crear nuestra Screen la cual nos servirá para crear nuestro Todo object. Dado que los campos serán editables necesitaremos utilizar un StatefulWidget con su respectivo State. Los widgets que vamos a utilizar son Textfields y FloatingActionButton para guardar el Todo.

```dart
class CreateTodoScreen extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {
    return _CreateTodoState();
  }
}

class CreateTodoScreen extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {
    return _CreateTodoState();
  }
}

class _CreateTodoState extends State<CreateTodoScreen> {
  final descriptionTextController = TextEditingController();
  final titleTextController = TextEditingController();

  @override
  void dispose() {
    super.dispose();
    descriptionTextController.dispose();
    titleTextController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Retrieve Text Input'),
      ),
      body: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: TextField(
              decoration: InputDecoration(
                  border: OutlineInputBorder(), labelText: "Title"),
              maxLines: 1,
              controller: titleTextController,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: TextField(
              decoration: InputDecoration(
                  border: OutlineInputBorder(), labelText: "Description"),
              maxLines: 10,
              controller: descriptionTextController,
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
          child: Icon(Icons.check),
          onPressed: () {
            DatabaseHelper.instance.insertTodo(Todo(
              title: titleTextController.text,
              content: descriptionTextController.text));
            Navigator.pop(context, "Your todo has been saved.");
          }),
    );
  }
}
```

Luego de crear nuestro State necesitamos utilizar un **TextEditingController** para cada uno de nuestros TextFields, estos los declaramos al principio de nuestro Widget y hacemos un ***override*** de la función dispose() para llamar a la respectiva función dispose de cada **TextEditingController.**

Al momento de crear nuestros **TextFields**, le pasamos a cada TextField su respectivo controller. Finalmente, para llamar al **DatabaseHelper** e indicarle que llame a la función **insertTodo** debemos pasarle a la propiedad **onPressed** del **floatingActionButton** una función anónima con un **Todo** creado usando el texto obtenido de los **TextEditingController**.

![/images/Screenshot\_1578338787.png](/images/Screenshot_1578338787.png)

## Actualizando nuestros Todo’s

Para actualizar nuestros Todo’s necesitamos hacer ciertas modificaciones. Primero, vamos a agregar esta nueva función a nuestro **DatabaseHelper**.

```dart
updateTodo(Todo todo) async {
    final db = await database;

    await db.update(Todo.TABLENAME, todo.toMap(),
        where: 'id = ?',
        whereArgs: [todo.id],
        conflictAlgorithm: ConflictAlgorithm.replace);
  }
```

En esta función obtenemos el objeto database y luego llamamos a la función **update()** de la librería y le pasamos los siguientes parámetros.

-   El nombre de la tabla que hemos declarado previamente en nuestro objeto **Todo**.
-   El objeto **Todo** convertido a un map usando la función **toMap.**
-   La cláusula **where** la cual aplicará cambios en cualquier fila que cumpla con esa condición
-   El parámetro **whereArgs** que sustituirá el signo de interrogación en nuestra cláusula where.
-   Y finalmente, una constante que especifica el tipo de algoritmo a usar en caso de que haya un conflicto.

Ahora debemos actualizar nuestra UI. Primero, vamos a modificar nuestra **DetailTodoScreen** para poder editar nuestro Todo. Necesitaremos agregar nuestro **Todo** como un parámetro opcional en el constructor del **DetailTodoScreen**, luego crear una property **Todo** en nuestro Widget y debido a que es un **StatefulWidget** debemos pasarle este **Todo** al State.

```dart
class DetailTodoScreen extends StatefulWidget {
    final Todo todo;

  const DetailTodoScreen({Key key, this.todo}) : super(key: key);

  @override
  State<StatefulWidget> createState() => _CreateTodoState(todo);
}
```

En nuestro State necesitamos agregar también nuestro Todo al constructor, crear la property Todo y sobrescribir la función initState de nuestro Widget para que podamos asignar el Título y la descripción de nuestro **Todo** a los respectivos **TextField**.

```dart
class _CreateTodoState extends State<DetailTodoScreen> {
  Todo todo;
  final descriptionTextController = TextEditingController();
  final titleTextController = TextEditingController();

  _CreateTodoState(this.todo);

  @override
  void initState() {
    super.initState();
    if (todo != null) {
      descriptionTextController.text = todo.content;
      titleTextController.text = todo.title;
    }
  }
```

Finalmente, en la función anónima que le pasamos como parámetro onPressed vamos a llamar a otra función llamada **saveTodo,** la cual se encargará de insertar un nuevo Todo en caso de que no tengamos ningún **Todo** para editar o de modificar un **Todo** existente que hayamos pasado como parámetro a nuestro **State**. Al final debemos llamar también a la función setState.

Así es como se verá nuestro State luego de esas modificaciones.

```dart
class _CreateTodoState extends State<DetailTodoScreen> {
  Todo todo;
  final descriptionTextController = TextEditingController();
  final titleTextController = TextEditingController();

  _CreateTodoState(this.todo);

  @override
  void initState() {
    super.initState();
    if (todo != null) {
      descriptionTextController.text = todo.content;
      titleTextController.text = todo.title;
    }
  }

  @override
  void dispose() {
    super.dispose();
    descriptionTextController.dispose();
    titleTextController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Retrieve Text Input'),
      ),
      body: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: TextField(
              decoration: InputDecoration(
                  border: OutlineInputBorder(), labelText: "Title"),
              maxLines: 1,
              controller: titleTextController,
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: TextField(
              decoration: InputDecoration(
                  border: OutlineInputBorder(), labelText: "Description"),
              maxLines: 10,
              controller: descriptionTextController,
            ),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
          child: Icon(Icons.check),
          onPressed: () async {
            _saveTodo(titleTextController.text, descriptionTextController.text);
            setState(() {});
          }),
    );
  }

  _saveTodo(String title, String content) async {
    if (todo == null) {
      DatabaseHelper.instance.insertTodo(Todo(
          title: titleTextController.text,
          content: descriptionTextController.text));
      Navigator.pop(context, "Your todo has been saved.");
    } else {
      await DatabaseHelper.instance
          .updateTodo(Todo(id: todo.id, title: title, content: content));
      Navigator.pop(context);
    }
  }
}
```

## Deleting a Todo

Para borrar un Todo necesitamos comenzar por borrar una función de nuestra clase **DatabaseHelper.**

```dart
deleteTodo(int id) async {
    var db = await database;
    db.delete(Todo.TABLENAME, where: 'id = ?', whereArgs: [id]);
  }
```

Esta función llama a la función **delete** de la librería Sqflite a la cual le pasamos el nombre de la tabla la cláusula where y el id del Todo a eliminar.

Luego, para agregar una función de borrado en nuestra lista de todos vamos a necesitar realizar los siguientes pasos. Primero, en nuestro **ListTile** widget vamos a necesitar a utilizar un parámetro opcional llamado **trailing,** en este parámetro vamos a pasarle un **IconButton**, dentro de ese parámetro **onPressed** vamos a pasarle una función anónima que llamará a la función del **DatabaseHelper** encargada de borrar el **Todo**.

```dart
class  ReadTodoScreen extends StatefulWidget {
  @override
  _ReadTodoScreenState createState() => _ReadTodoScreenState();
}

class _ReadTodoScreenState extends State<ReadTodoScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Saved Todos'),
      ),
      body: FutureBuilder<List<Todo>>(
        future: DatabaseHelper.instance.retrieveTodos(),
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return ListView.builder(
              itemCount: snapshot.data.length,
              itemBuilder: (BuildContext context, int index) {
                return ListTile(
                  title: Text(snapshot.data[index].title),
                  leading: Text(snapshot.data[index].id.toString()),
                  subtitle: Text(snapshot.data[index].content),
                  onTap: () => _navigateToDetail(context, snapshot.data[index]),
                  trailing: IconButton(
                      alignment: Alignment.center,
                      icon: Icon(Icons.delete),
                      onPressed: () async {
                        _deleteTodo(snapshot.data[index]);
                        setState(() {});
                      }),
                );
              },
            );
          } else if (snapshot.hasError) {
            return Text("Oops!");
          }
          return Center(child: CircularProgressIndicator());
        },
      ),
    );
  }
}

_deleteTodo(Todo todo) {
  DatabaseHelper.instance.deleteTodo(todo.id);
}

_navigateToDetail(BuildContext context, Todo todo) async {
  Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => DetailTodoScreen(todo: todo)),
  );
}
```

![/images/Screenshot\_1578338793.png](/images/Screenshot_1578338793.png)

¡Y eso es todo! Ahora tenemos un app que puede almacenar un Todo, leerlo desde base de datos, actualizarlo y borrarlo.

El código está disponible [aquí](https://github.com/codingpizza/todoapp). Si quieres leer más artículos como estos o tienes alguna duda, puedes encontrarme en las siguientes redes sociales.

**Instagram**: [www.instagram.com/codingpizza](http://www.instagram.com/codingpizza)  
**Twitter**: [www.twitter.com/coding\_\_pizza](http://www.twitter.com/coding__pizza)  
**Facebook**: [www.facebook.com/codingpizza](http://www.facebook.com/codingpizza)  
**Site**: [www.codingpizza.com](http://www.codingpizza.com/)
