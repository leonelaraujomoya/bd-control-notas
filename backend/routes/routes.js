const express = require('express');
const { encripta, compara } = require('../tools/funcbcrypt');

const router = express.Router();

// Importamos el modelo profesores
const modelProfesores = require('../models/profesores');

// Configuramos nuestras rutas
router.post('/login', async (req, res) => {
	const docProfesor = await modelProfesores.findOne({ nombreusuario: req.body.usuario });
	if(!docProfesor){
		res.send(
			{ 
				//data: {
					result: 1,
					msg: 'Usuario no registrado...'
				//}
			}
		);
	}else{
		const verifClave = await compara(req.body.clave, docProfesor.contrasena);
		if(verifClave){
			res.send(
				{ 
					//data: {
						result: 0,
						nombprof: docProfesor.nombreprof
					//} 
				}
			);
		}else{
			res.send(
				{ 
					//data: {
						result: 1,
						msg: 'Contraseña invalida...' 
					//}
				}
			);
		}
	}
});

module.exports = router;
