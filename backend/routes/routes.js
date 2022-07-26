const express = require('express');
const { encripta, compara } = require('../tools/funcbcrypt');

const router = express.Router();

// Importamos el modelo profesores
const modelProfesores = require('../models/profesores');

// Importamos el modelo profesores
const modelPlaneseval = require('../models/planeval');

// Importamos el modelo profesores
const modelCarganotas = require('../models/carganotas');

// Importamos el modelo secciones
const modelSecciones = require('../models/secciones');

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
 
router.post('/carganotas', async (req, res) => {
	await modelCarganotas.findOne({ 
		'seccion.codperiodo': req.body.periodo, 
		'seccion.materia.codmat': req.body.codmat, 
		'seccion.numsec': req.body.numsec 
	}).then((docs, err) => {
		// verificamos si docs esta vacio
		if(!(Object.keys(docs).length === 0)){  
		  	res.send(
				{ 
					result: 0,
					docnotas: docs
				}
			);
		}else{
		  	res.send(
				{ 
					result: 1,
					msg: 'Seccion no registrada...' 
				}
			);
		}
	});
});

router.post('/actualizanota', async (req, res) => {
	var notas = [];
	if(req.body.n1){
		notas.push(req.body.n1);
	}
	if(req.body.n2){
		notas.push(req.body.n2);
	}
	if(req.body.n3){
		notas.push(req.body.n3);
	}
	if(req.body.n4){
		notas.push(req.body.n4);
	}
	if(req.body.n5){
		notas.push(req.body.n5);
	}
	//
	if(req.body.tipo === "parcial"){
		await modelCarganotas.updateOne(
			{ 
				'seccion.codperiodo': req.body.periodo, 
				'seccion.materia.codmat': req.body.codmat, 
				'seccion.numsec': req.body.numsec,
				'estudiantes.cedulaest': req.body.cedulaest 
			},
			{ 
				$set: { 
					'estudiantes.$.evaluaciones.parciales': notas
	      		}
	      	}	
		).then(() => {
			res.send(
				{ 
					result: 0
				}
			);
		});
	}else{
		if(req.body.tipo === "practica"){
			await modelCarganotas.updateOne(
				{ 
					'seccion.codperiodo': req.body.periodo, 
					'seccion.materia.codmat': req.body.codmat, 
					'seccion.numsec': req.body.numsec,
					'estudiantes.cedulaest': req.body.cedulaest 
				},
				{ 
					$set: { 
						'estudiantes.$.evaluaciones.practicas': notas
		      		}
		      	}	
			).then(() => {
				res.send(
					{ 
						result: 0
					}
				);
			});
		}else{
			if(req.body.tipo === "trabajo"){
				await modelCarganotas.updateOne(
					{ 
						'seccion.codperiodo': req.body.periodo, 
						'seccion.materia.codmat': req.body.codmat, 
						'seccion.numsec': req.body.numsec,
						'estudiantes.cedulaest': req.body.cedulaest 
					},
					{ 
						$set: { 
							'estudiantes.$.evaluaciones.trabajos': notas
			      		}
			      	}	
				).then(() => {
					res.send(
						{ 
							result: 0
						}
					);
				});
			}else{
				await modelCarganotas.updateOne(
					{ 
						'seccion.codperiodo': req.body.periodo, 
						'seccion.materia.codmat': req.body.codmat, 
						'seccion.numsec': req.body.numsec,
						'estudiantes.cedulaest': req.body.cedulaest 
					},
					{ 
						$set: { 
							'estudiantes.$.evaluaciones.exposiciones': notas
			      		}
			      	}	
				).then(() => {
					res.send(
						{ 
							result: 0
						}
					);
				});
			}
		}
	}
});

router.post('/secciones', async (req, res) => {
	await modelSecciones.find({ codperiodo: req.body.periodo }).clone().then((docs, err) => {
		// verificamos si docs esta vacio
		if(!(Object.keys(docs).length === 0)){  
		  	res.send(
				{ 
					result: 0,
					docs: docs
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

router.post('/materiaestudiantes', async (req, res) => {
	await modelCarganotas.find({ 
		'seccion.codperiodo': req.body.periodo
	}).clone().then((docs, err) => {
		// verificamos si docs esta vacio
		if(!(Object.keys(docs).length === 0)){  
		  	res.send(
				{ 
					result: 0,
					docnotas: docs
				}
			);
		}else{
		  	res.send(
				{ 
					result: 1,
					msg: 'Periodo no registrado...' 
				}
			);
		}
	});
});

module.exports = router;
