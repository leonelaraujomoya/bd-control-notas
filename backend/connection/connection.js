/*********************************************************

Parametros de conexion con la base de datos de MongoDB

*********************************************************/

// Importamos la dependencia necesaria
const mongoose = require('mongoose');

// configuramos la conexion a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/dbcontrolnotas');

// Establecemos la conexion
const myDB = mongoose.connection;
myDB.on('connected', () => {
	console.log('Conectado a MongoDB');
});

// De presentarse un error con la conexion, lo notificamos
myDB.on('error', () => {
	console.log('Se produjo un error al intentar conectarse a MongoDB');
});

module.exports = mongoose;