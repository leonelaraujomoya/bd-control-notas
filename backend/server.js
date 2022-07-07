/**************************************************************************************
 Servidor NodeJS - ExpressJS - MongoDB

**************************************************************************************/

// Importamos las dependencias necesarias
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const app = express();

// Importamos la configuracion para conectarnos a MongoDB
const myDataBase = require('./connection/connection');

// Importamos el archivo de rutas
const myRoutes = require('./routes/routes');

// Configuramos cors para permitir la comunicacion con cualquier aplicacion
app.use(cors({origin: '*'}));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'true'}));


//encripta();


// Establecemos el prefijo /api para todas las rutas definidas en roures.js
app.use('/api', myRoutes);

// Configuramos la ruta inicial del servidor
app.get('/', (req, res) => {
	res.send('Bienvenido al servidor Nodejs');
});

// Configuramos el servidor
app.listen(5000, function(){
	console.log('Servidor ejecutandose en el puerto 5000');
});
