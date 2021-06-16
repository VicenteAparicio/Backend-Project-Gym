const express = require('express');
const router = require('./router')
const db = require('./config/mongoose')
const app = express();
const port = 3000;
const cors = require('cors');


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(router);


db.then(() => (
    app.listen(port, () => console.log(`Running on https://backendgymfsd.herokuapp.com`))
))
.catch((error) => console.log(error));