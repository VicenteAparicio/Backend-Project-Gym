const mongoose = require('mongoose');
const QUERY_STRING = "mongodb+srv://crossAdmin:Bootcamp2021@crosscluster.ueju7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"



const db = mongoose.connect(QUERY_STRING,
    {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Conectado a Atlas'))
.catch((error) => console.log(error));






module.exports = db;