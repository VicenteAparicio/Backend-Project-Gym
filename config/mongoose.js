const mongoose = require('mongoose');
const QUERY_STRING = "mongodb+srv://Vicenteapi:Bootcamp2021@cluster0.gtzxg.mongodb.net/chatDB?retryWrites=true&w=majority"



const db = mongoose.connect(QUERY_STRING,
    {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Conectado a Atlas'))
.catch((error) => console.log(error));






module.exports = db;