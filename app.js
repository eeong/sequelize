const express = require('express');
const app = express();
const path = require('path');
const {Sequelize, Model, DataTypes}= require('sequelize');

app.listen(3001,()=>{
    console.log("http://127.0.0.1")
});

app.set('view engine', pug);
app.set('views', path.join(__dirname,'views'));