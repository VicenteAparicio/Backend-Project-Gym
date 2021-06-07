# Backend Project: Gym
## Made by [Miguel Torres](https://github.com/migueltmsp) and [Vicente Aparicio](https://github.com/VicenteAparicio)<br>
This project was proposed and deployed on the 6th week of [GeeksHubs' Full Stack Developer Bootcamp](https://geekshubsacademy.com/)

## Hecho por [Miguel Torres](https://github.com/migueltmsp), y [Vicente Aparicio](https://github.com/VicenteAparicio)<br>
Este proyecto se propuso e implementó en la 6ª semana del [Bootcamp Full Stack Developer de GeeksHubs](https://geekshubsacademy.com/)

## Index / Índice
[English](##English)
* [Goal and used technologies](##Goal-and-used-technologies)
* [Index, routing and middleware](##Index,-routing-and-middleware)
* [Endpoints and DB Management](##Endpoints-and-DB-Management)
* [Conclusions](##Conclusions)

[Español](##Español)
* [Objetivo y tecnologías empleadas](##Objetivo-y-tecnologías-empleadas)
* [Index, routing y middleware](##Index,-routing-y-middleware)
* [Gestión de los Endpoints y la base de datos](##Gestión-de-los-Endpoints-y-la-base-de-datos)
* [Conclusiones](##Conclusiones)

## English
## Goal and used technologies

The aim of the project was to develop an only-backend service for the management of a gym chain, with three areas: <br>

* User Management
    * Sign Up Endpoint
    * Log In Endpoint
    * Log Out Endpoint
    * Delete user Endpoint
    * Extra features: Use of JWT and bCrypt; Admin, Trainer and Client roles
* Coachs Managament
    * New Coach Endpoint
    * Modify Profile Coach Endpoint
    * Find All Profile Coach Endpoint
* Lessons Management
    * New Lesson Endpoint 
        * Lessons are related to Coach
        * Client Join Lesson Endpoint
        * Client Leave Lesson Endpoint
        * Client can add a comment Lesson Endpoint
* Gym Locals Management
    * Find All Gym Locals Endpoint
    * Gym Locals are related to Lessons
* Data Managemente
    * ORM use (Sequelize/MongoDB/MySQL)

The technologies we used were: <br> <br>
![Visual Studio Code](https://code.visualstudio.com/assets/favicon.ico)
![JavaScript](https://camo.githubusercontent.com/3e9f1d82233cb9a42ed30a63d093f2b4502d879301f8cce220de7f0d3b84f5bf/687474703a2f2f33636f6e31342e62697a2f636f64652f5f646174612f6a732f696e74726f2f6a732d6c6f676f2e706e67)
![Node.js](https://cdn.iconscout.com/icon/free/png-256/node-js-3-1174937.png)
![Express.js](https://d2m06gn7cjwia2.cloudfront.net/express.png)
![JWT](https://ps.w.org/jwt-auth/assets/icon-256x256.png?rev=2298869)
![BCrypt](https://cdn.substack.com/image/fetch/w_264,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8e9aa3e7-93f3-45aa-8aac-d8acf45f33b7_256x256.png)
![Postman](https://cdn.iconscout.com/icon/free/png-256/postman-3521648-2945092.png)
![MongoDB](https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png)
![Mongoose](https://images.opencollective.com/frontendmasters/0b9cda4/logo/256.png)



## Index, routing and middleware

### index.js
```
const express = require('express');
const router = require('./router')
const db = require('./config/mongoose')
const app = express();
const port = 3000;
const cors = require('cors');


// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(router);


db.then(() => (
    app.listen(port, () => console.log(`Node server runing on http://localhost:${port}`))
))
.catch((error) => console.log(error));

```

This js file:
1. imported the **Express.js** library,
2. saved its functionalities on "app",
3. selected 3000 as the server's port and
4. linked **router.js**.

Then, the router.js' and express.json()' functionalities were "used", or, we assume, loaded in memory.

**app.listen() _started_ a local node.js server that uses the 3000 port.**
<br>

### router.js
```
const router = require('express').Router();
const userRouter = require('./routers/userRouter');
const lessonRouter = require('./routers/lessonRouter');
const coachRouter = require('./routers/coachRouter');
const gymRouter = require('./routers/gymRouter');


router.use('/user', userRouter);
router.use('/lesson', lessonRouter);
router.use('/coach', coachRouter);
router.use('/gym', gymRouter);


module.exports = router;

```
This js file **imports the .Router() utility from Express.js**, which is used to **link the userRouter, lessonRouter, coachRouter and gymRouter paths, and therefore their content, to index.js**. In this sense, **router.js is merely a link between the main application (index.js) to its dependencies.**



## Endpoints and DB Management
### Prerequisites
<br>

Clone the project from [here](https://github.com/migueltmsp/Backend-Project-Gym.git).

Install the needed dependencies (on Bash): 
```
npm i
```

Install Postman from [here](https://www.postman.com/downloads/).

In Postman:
1. Add our collection of HTTP requests [here](invite_code=5a7af4d5bdf51ea791e1ba2b4d37e384&ws=e693bb66-0d6c-4181-8e2b-fb02e351d762).
2. Use any of the requests to check the functionality .

Although we used 3000 as the default port, you can use another one of your choice, but **remember to change it on index.js / const port**.



## Español
## Objetivo y tecnologías empleadas
El objetivo del proyecto es desarrollar un servicio (solo la parte backend) para una cadena de gimnasios, con tres áreas: <br>


* Gestión de Usuarios
    * Endpoint para Darse de Alta
    * Endpoint para Iniciar Sesión
    * Endpoint para Cerrar Sesión
    * Endpoint para Eliminar usuario
    * Características extra: Uso de JWT, bCrypt; funciones de ADMIN, Trainer y Cliente
* Gestión de Coachs
    * Endpoint para Nuevo Coach
    * Endpoint para Modificar el perfil de Coach
    * Endpoint para Ver todos los Coachs
* Gestión de las sesiones de entrenamiento
    * Endpoint para Crear una sesión de entrenamiento
        * La sesión de entrenamiento está relacionada con un coach
        * Endpoint para que el cliente pueda Añadirse a la sesión de entrenamiento
        * Endpoint para que el cliente pueda Quitarse de la sesión de entrenamiento
        * Endpoint para que el cliente pueda añadir un comentario en la sesión de entrenamiento
    * Endpoint para ver todas las sesiones de entrenamientos
* Gestión de los locales
    * Endpoint para Ver todos los locales
    * Los locales están relacionados con las sesiones de entrenamiento
* Gestión de Datos
    * Emplear un ORM (Sequelize/MongoDB/MySQL)

Las tecnologías empleadas fueron: <br> <br>
![Visual Studio Code](https://code.visualstudio.com/assets/favicon.ico)
![JavaScript](https://camo.githubusercontent.com/3e9f1d82233cb9a42ed30a63d093f2b4502d879301f8cce220de7f0d3b84f5bf/687474703a2f2f33636f6e31342e62697a2f636f64652f5f646174612f6a732f696e74726f2f6a732d6c6f676f2e706e67)
![Node.js](https://cdn.iconscout.com/icon/free/png-256/node-js-3-1174937.png)
![Express.js](https://d2m06gn7cjwia2.cloudfront.net/express.png)
![JWT](https://ps.w.org/jwt-auth/assets/icon-256x256.png?rev=2298869)
![BCrypt](https://cdn.substack.com/image/fetch/w_264,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8e9aa3e7-93f3-45aa-8aac-d8acf45f33b7_256x256.png)
![Postman](https://cdn.iconscout.com/icon/free/png-256/postman-3521648-2945092.png)
![MongoDB](https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png)
![Mongoose](https://images.opencollective.com/frontendmasters/0b9cda4/logo/256.png)

## Index, routing y middleware

### index.js
```
const express = require('express');
const router = require('./router')
const db = require('./config/mongoose')
const app = express();
const port = 3000;
const cors = require('cors');


app.use(express.json());
app.use(cors());
app.use(router);

db.then(() => (
    app.listen(port, () => console.log(`Node server runing on http://localhost:${port}`))
))
.catch((error) => console.log(error));

```

Este archivo js:
1. importó la librería **Express.js**,
2. guardó sus herramientas en "app",
3. seleccionó 3000 como el puerto para el servidor y
4. linked **router.js**.
4. enlazó con **router.js**


Entonces, las herramientras de router.js y de express.json fueron "usadas", o, asumimos, guardadas en memoria.



**app.listen() _lanzó_ un servidor local node.js que emplea el puerto 3000.**
<br>


### router.js
```
const router = require('express').Router();
const userRouter = require('./routers/userRouter');
const lessonRouter = require('./routers/lessonRouter');
const coachRouter = require('./routers/coachRouter');
const gymRouter = require('./routers/gymRouter');


router.use('/user', userRouter);
router.use('/lesson', lessonRouter);
router.use('/coach', coachRouter);
router.use('/gym', gymRouter);


module.exports = router;

```

Este archivo js **importa la herramienta .Router() desde Express.js**, la cual emplea para **enlazar las rutas de userRouter, lessonRouter, coachRouter y gymRouter, y por tanto su contenido, con index.js**. En este sentido, **router.js es un mero enlace entre la aplicación principal (index.js) con sus dependencias.**

<br>

## Gestión de los Endpoints y la base de datos
### Prerrequisitos
<br>

Clona el proyecto desde [aquí](https://github.com/migueltmsp/Backend-Project-Gym.git).

Instala las dependencias necesarias (desde Bash): 
```
npm i
```

Instala Postman desde [aquí](https://www.postman.com/downloads/).

En Postman:
1. Añade nuestra colección de peticiones HTTP desde [aquí](invite_code=5a7af4d5bdf51ea791e1ba2b4d37e384&ws=e693bb66-0d6c-4181-8e2b-fb02e351d762).
2. Usa cualquiera de las peticiones para comprobar la funcionalidad.

Aunque hemos usado 3000 como el puerto para el backend, puedes emplear otro, pero **recuerda cambiarlo desde index.js / const port**.



## Conclusiones