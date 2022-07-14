const express = require('express');
const { encripta, compara } = require('../tools/funcbcrypt');

const router = express.Router();

// Importamos el modelo profesores
const modelProfesores = require('../models/profesores');

// Importamos el modelo profesores
const modelPlaneseval = require('../models/planeval');

// Configuramos nuestras rutas
router.post('/login', async (req, res) => {
	const docProfesor = await modelProfesores.findOne({ nombreusuario: req.body.usuario });
	if(!docProfesor){
		res.send(
			{ 
				result: 1,
				msg: 'Usuario no registrado...'
			}
		);
	}else{
		const verifClave = await compara(req.body.clave, docProfesor.contrasena);
		if(verifClave){
			res.send(
				{ 
					result: 0,
					nombprof: docProfesor.nombreprof
				}
			);
		}else{
			res.send(
				{ 
					result: 1,
					msg: 'Contraseña invalida...' 
				}
			);
		}
	}
});

router.post('/planeval', async (req, res) => {
	await modelPlaneseval.find({ codperiodo: req.body.periodo }).clone().then((docs, err) => {
		// verificamos si docs esta vacio
		if(!(Object.keys(docs).length === 0)){  
		  	res.send(
				{ 
					result: 0,
					docplanes: docs
				}
			);
		}else{
		  	res.send(
				{ 
					result: 1,
					msg: 'Codigo de período no registrado...' 
				}
			);
		}
	});
});

router.post('/updateplaneval', async (req, res) => {
	//await modelPlaneseval.findOne({ codperiodo: req.body.periodo, 'materia.codmat': req.body.codmat, numsec: req.body.numsec }).clone().then((docs, err) => {
	await modelPlaneseval.updateOne(
		{ 
			codperiodo: req.body.periodo, 
			'materia.codmat': req.body.codmat, 
			numsec: req.body.numsec 
		},
		{
			numparc: req.body.numparc,
			porparc: req.body.porparc,
            numpract: req.body.numpract,
            porpract: req.body.porpract,
            numtrab: req.body.numtrab,
            portrab: req.body.portrab,
            numexpo: req.body.numexpo,
            porexpo: req.body.porexpo
		}
	).then(() => {
		res.send(
			{ 
				result: 0
			}
		);
	});
});

module.exports = router;
