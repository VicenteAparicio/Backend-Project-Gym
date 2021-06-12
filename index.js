const express = require('express');
const router = require('./router')
const db = require('./config/mongoose')
const app = express();
const port = 3005;
const cors = require('cors');


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(router);


db.then(() => (
    app.listen(port, () => console.log(`Node server runing on http://localhost:${port}`))
))
.catch((error) => console.log(error));