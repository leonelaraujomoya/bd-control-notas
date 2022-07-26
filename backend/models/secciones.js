const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schemaSecciones = new schema({
	codperiodo: String, 
    materia: { 
    	nombremat: String, 
    	codmat: String 
    },
    numsec: String,
    cantest: Number
});

const modelSecciones = mongoose.model('secciones', schemaSecciones);
//const modelSecciones = mongoose.model("Model", schemaSecciones, 'secciones');
module.exports = modelSecciones;