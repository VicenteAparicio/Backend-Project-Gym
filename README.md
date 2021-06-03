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
    * Extra features: Use of JWT and bCrypt; Admin, Trainer and Client roles
* Appointments Managament
    * List All Appointments Endpoint (Both by Admin and by each Trainer)
    * Make an Appointment Endpoint (Choosing a Trainer/Gym)
    * Cancel an Appointment Endpoint

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
const app = express();
const port = 3000;
const router = require('./router');

app.use(router);
app.use(express.json());

app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));

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

const moviesRouter = require('./routes/moviesRouter.js');
const seriesRouter = require('./routes/seriesRouter.js');

router.use('/movies', moviesRouter);
router.use('/series', seriesRouter);


module.exports = router;

```
This js file **imports the .Router() utility from Express.js**, which is used to **link the moviesRouter, customerRouter, orderRouter and loginRouter paths, and therefore their content, to index.js**. In this sense, **router.js is merely a link between the main application (index.js) to its dependencies.**



## Endpoints and DB Management
### Prerequisites
<br>

Clone the project from [here](https://github.com/PedroAgullo/Challenge5_GH_PMJ).

Install the needed dependencies (on Bash): 
```
npm i
```

Install Postman from [here](https://www.postman.com/downloads/).

In Postman:
1. Add a new collection
2. Use GET with the address: http://localhost:3000 <br> <br>
Although we used 3000 as the default port, you can use another one of your choice.



## Español
## Objetivo y tecnologías empleadas
El objetivo del proyecto es desarrollar un servicio (solo la parte backend) para una cadena de gimnasios, con tres áreas: <br>


* Gestión de Usuarios
    * Endpoint para Darse de Alta
    * Endpoint para Iniciar Sesión
    * Endpoint para Cerrar Sesión
    * Características extra: Uso de JWT, bCrypt; funciones de ADMIN, Trainer y Cliente
* Gestión de Citas
    * Endpoint para Búsqueda por Título
    * Endpoint para buscar por Id
    * Endpoint para Mostrar todas las Películas
* Gestión de los Pedidos
    * Endpoint para Crear un Pedido
        * Una única Película por Cliente
        * Fechas de Recepción y de Devolución
    * Características extra: Mostrar todos los Pedidos (solo para el Admin)
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
const app = express();
const port = 3000;
const router = require('./router');

app.use(router);
app.use(express.json());

app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));

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

const moviesRouter = require('./routes/moviesRouter.js');
const seriesRouter = require('./routes/seriesRouter.js');

router.use('/movies', moviesRouter);
router.use('/series', seriesRouter);


module.exports = router;

```

Este archivo js **importa la herramienta .Router() desde Express.js**, la cual emplea para **enlazar las rutas de moviesRouter, loginRouter, orderRouter y customerRouter, y por tanto su contenido, con index.js**. En este sentido, **router.js es un mero enlace entre la aplicación principal (index.js) con sus dependencias.**

<br>


## Conclusiones