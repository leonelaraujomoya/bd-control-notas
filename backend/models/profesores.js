const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schemaProfesores = new schema({
	nombreprof: String,
	nombreusuario: String,
	contrasena: String
});

const modelProfesores = mongoose.model('profesores', schemaProfesores);
module.exports = modelProfesores;