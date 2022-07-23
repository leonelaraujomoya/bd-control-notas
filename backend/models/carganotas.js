const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schemaCarganotas = new schema({
    seccion: {
        codperiodo: String, 
        materia: { 
            nombremat: String, 
            codmat: String 
        },
        numsec: String
    },
    estudiantes: [
        {
            cedulaest: String,
            nombreest: String,
            evaluaciones: {
                parciales: [],
                practicas: [],
                trabajos: [],
                exposiciones: []
            }
        }
    ]
});

//const modelCarganotas = mongoose.model("Model", schemaCarganotas, 'carganotas');
const modelCarganotas = mongoose.model('carganotas', schemaCarganotas);
module.exports = modelCarganotas;