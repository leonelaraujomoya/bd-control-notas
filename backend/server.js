/**************************************************************************************
 Servidor NodeJS - ExpressJS - MongoDB

**************************************************************************************/

// Importamos las dependencias necesarias
const express = require('express');
const app = express();

// Importamos la configuracion para conectarnos a MongoDB
const myDataBase = require('./connection/connection');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}));

// Configuramos el servidor
app.listen(5000, function(){
	console.log('Servidor ejecutandose en el puerto 5000');
});