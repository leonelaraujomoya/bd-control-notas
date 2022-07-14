const mongoose = require('mongoose');
const schema = mongoose.Schema;

const schemaPlaneseval = new schema({
	codperiodo: String, 
    materia: { 
    	nombremat: String, 
    	codmat: String 
    },
    numsec: String,
    numparc: Number,
    porparc: Number,
    numpract: Number,
    porpract: Number,
    numtrab: Number,
    portrab: Number,
    numexpo: Number,
    porexpo: Number
});
/*
const schemaPlaneseval = new schema({
	codperiodo: { type: String }, 
    materia: { 
    	nombremat: { type: String }, 
    	codmat: { type: String } 
    },
    numsec: { type: String },
    numparc: { type: Number },
    porparc: { type: Number },
    numpract: { type: Number },
    porpract: { type: Number },
    numtrab: { type: Number },
    portrab: { type: Number },
    numexpo: { type: Number },
    porexpo: { type: Number }
});
*/
const modelPlaneseval = mongoose.model("Model", schemaPlaneseval, 'planeval');
module.exports = modelPlaneseval;