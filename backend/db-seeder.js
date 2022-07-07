/********************************************************************
 
 Creacion de la base de datos y colecciones / precarga de documentos

********************************************************************/

// Importamos las dependencias necesarias
const { MongoClient } = require('mongodb');
const bcrypt = require("bcrypt");

// URL de conexion a MongoDB
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Base de Datos
const dbName = 'dbcontrolnotas';

main().catch(console.error).finally(() => client.close());


// Funcion que crea la base de datos y colecciones y precarga documentos 
async function main() {

    // Nos conectamos al servidor de MomgoDB
    await client.connect();
    console.log('Conectados al servidor de MongoDB....');
    const db = client.db(dbName);
    const numTempor = await db.collection('profesores').countDocuments();
    if(numTempor == 0){
        console.log('\nCreada base de datos dbcontrolnotas....');

        // Creamos y precargamos coleccion profesores
        const collectionProf = db.collection('profesores');
    
        // Encriptamos la clave del profesor
        const myHash = await bcrypt.hash("123456", 9);
    
        // Insertamos el documento con las credenciales del profesor
        await collectionProf.insertOne({ 
            nombreprof: "Victor Mujica",
            nombreusuario: "victor",
            contrasena: myHash
        });
        console.log('\nCreada coleccion profesores con 1 documento precargado....');

        // Creamos y precargamos coleccion materias
        const collectionMat = db.collection('materias');
        await collectionMat.insertMany([
            { nombremat: "MATEMATICAS III", codmat: "0082814" },
            { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
            { nombremat: "CIRCUITOS Y SISTEMAS", codmat: "0713463" },
            { nombremat: "ESTRUCTURAS DE DATOS", codmat: "0723123" },
            { nombremat: "SISTEMAS DE BASES DE DATOS", codmat: "0723713" }

        ]);
        console.log('\nCreada coleccion materias con 5 documentos precargados....');

        // Creamos y precargamos coleccion secciones
        const collectionSec = db.collection('secciones');
        await collectionSec.insertMany([
            { 
                codperiodo: '2022-1', 
                materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                numsec: '01',
                cantest: 10
            },
            { 
                codperiodo: '2022-1', 
                materia: { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
                numsec: '01',
                cantest: 8
            },
            { 
                codperiodo: '2022-1', 
                materia: { nombremat: "CIRCUITOS Y SISTEMAS", codmat: "0713463" },
                numsec: '01',
                cantest: 7
            },
            { 
                codperiodo: '2022-1', 
                materia: { nombremat: "ESTRUCTURAS DE DATOS", codmat: "0723123" },
                numsec: '01',
                cantest: 6
            },
            { 
                codperiodo: '2022-1', 
                materia: { nombremat: "SISTEMAS DE BASES DE DATOS", codmat: "0723713" },
                numsec: '01',
                cantest: 5
            }
        ]);
        console.log('\nCreada coleccion secciones con 5 documentos precargados....');

        // Creamos y precargamos coleccion estudiantes
        const collectionEst = db.collection('estudiantes');
        await collectionEst.insertMany([
            // ********************   MATEMATICAS III
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                    numsec: '01'
                },
                cedulaest: '8956407',
                nombreest: 'DUGLAS RODRIGUEZ'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                    numsec: '01'
                },
                cedulaest: '8347735',
                nombreest: 'JOSE SOTO'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                    numsec: '01'
                },
                cedulaest: '844847473',
                nombreest: 'ROSA PEREZ'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                    numsec: '01'
                },
                cedulaest: '9763456',
                nombreest: 'JUAN GARCIA'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                    numsec: '01'
                },
                cedulaest: '6879456',
                nombreest: 'MARIA RIVAS'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                    numsec: '01'
                },
                cedulaest: '11234567',
                nombreest: 'BELKIS RONDON'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                    numsec: '01'
                },
                cedulaest: '14098765',
                nombreest: 'JASMIN ALVAREZ'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                    numsec: '01'
                },
                cedulaest: '18234567',
                nombreest: 'LUIS RODRIGUEZ'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                    numsec: '01'
                },
                cedulaest: '13785256',
                nombreest: 'ELOISA BETANCOURT'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                    numsec: '01'
                },
                cedulaest: '17345697',
                nombreest: 'DUGLAS ARISMENDI'
            },
            // ********************   PROGRAMACION ORIENTADA A OBJETOS
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
                    numsec: '01'
                },
                cedulaest: '17565697',
                nombreest: 'DUGLAS PEREZ'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
                    numsec: '01'
                },
                cedulaest: '22098765',
                nombreest: 'MARIA ARISMENDI'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
                    numsec: '01'
                },
                cedulaest: '13456123',
                nombreest: 'JUANA SILVA'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
                    numsec: '01'
                },
                cedulaest: '21345678',
                nombreest: 'NEPTALY SUAREZ'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
                    numsec: '01'
                },
                cedulaest: '11234987',
                nombreest: 'LUIS MENDOZA'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
                    numsec: '01'
                },
                cedulaest: '10982345',
                nombreest: 'SALOMON RONDON'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
                    numsec: '01'
                },
                cedulaest: '24324567',
                nombreest: 'PATRICIA BELTRAN'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
                    numsec: '01'
                },
                cedulaest: '13456872',
                nombreest: 'MARIALEJANDRA RONDON'
            },
            // ********************   CIRCUITOS Y SISTEMAS
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "CIRCUITOS Y SISTEMAS", codmat: "0713463" },
                    numsec: '01'
                },
                cedulaest: '13456872',
                nombreest: 'MARIALEJANDRA RONDON'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "CIRCUITOS Y SISTEMAS", codmat: "0713463" },
                    numsec: '01'
                },
                cedulaest: '24324567',
                nombreest: 'PATRICIA BELTRAN'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "CIRCUITOS Y SISTEMAS", codmat: "0713463" },
                    numsec: '01'
                },
                cedulaest: '13234569',
                nombreest: 'PEDRO PEREZ'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "CIRCUITOS Y SISTEMAS", codmat: "0713463" },
                    numsec: '01'
                },
                cedulaest: '7654987',
                nombreest: 'MARIA SALAZAR'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "CIRCUITOS Y SISTEMAS", codmat: "0713463" },
                    numsec: '01'
                },
                cedulaest: '23456781',
                nombreest: 'LUIS SALAZAR'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "CIRCUITOS Y SISTEMAS", codmat: "0713463" },
                    numsec: '01'
                },
                cedulaest: '234567890',
                nombreest: 'MARIALEJANDRA BELTRAN'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "CIRCUITOS Y SISTEMAS", codmat: "0713463" },
                    numsec: '01'
                },
                cedulaest: '16543239',
                nombreest: 'ELISA RONDON'
            },
            // ********************   ESTRUCTURAS DE DATOS
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "ESTRUCTURAS DE DATOS", codmat: "0723123" },
                    numsec: '01'
                },
                cedulaest: '8956407',
                nombreest: 'DUGLAS RODRIGUEZ'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "ESTRUCTURAS DE DATOS", codmat: "0723123" },
                    numsec: '01'
                },
                cedulaest: '8347735',
                nombreest: 'JOSE SOTO'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "ESTRUCTURAS DE DATOS", codmat: "0723123" },
                    numsec: '01'
                },
                cedulaest: '844847473',
                nombreest: 'ROSA PEREZ'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "ESTRUCTURAS DE DATOS", codmat: "0723123" },
                    numsec: '01'
                },
                cedulaest: '9763456',
                nombreest: 'JUAN GARCIA'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "ESTRUCTURAS DE DATOS", codmat: "0723123" },
                    numsec: '01'
                },
                cedulaest: '6879456',
                nombreest: 'MARIA RIVAS'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "ESTRUCTURAS DE DATOS", codmat: "0723123" },
                    numsec: '01'
                },
                cedulaest: '11234567',
                nombreest: 'BELKIS RONDON'
            },
            // ********************   SISTEMAS DE BASES DE DATOS
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "SISTEMAS DE BASES DE DATOS", codmat: "0723713" },
                    numsec: '01'
                },
                cedulaest: '17565697',
                nombreest: 'DUGLAS PEREZ'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "SISTEMAS DE BASES DE DATOS", codmat: "0723713" },
                    numsec: '01'
                },
                cedulaest: '22098765',
                nombreest: 'MARIA ARISMENDI'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "SISTEMAS DE BASES DE DATOS", codmat: "0723713" },
                    numsec: '01'
                },
                cedulaest: '13456123',
                nombreest: 'JUANA SILVA'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "SISTEMAS DE BASES DE DATOS", codmat: "0723713" },
                    numsec: '01'
                },
                cedulaest: '21345678',
                nombreest: 'NEPTALY SUAREZ'
            },
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "SISTEMAS DE BASES DE DATOS", codmat: "0723713" },
                    numsec: '01'
                },
                cedulaest: '11234987',
                nombreest: 'LUIS MENDOZA'
            }
        ]);
        console.log('\nCreada coleccion estudiantes con 36 documentos precargados....');

        // Creamos y precargamos coleccion planeval
        const collectionPlan = db.collection('planeval');
        await collectionPlan.insertMany([
            { 
                codperiodo: '2022-1', 
                materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                numsec: '01',
                numparc: 0,
                porparc: 0,
                numpract: 0,
                porpract: 0,
                numtrab: 0,
                portrab: 0,
                numexpo: 0,
                porexpo: 0
            },
            { 
                codperiodo: '2022-1', 
                materia: { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
                numsec: '01',
                numparc: 0,
                porparc: 0,
                numpract: 0,
                porpract: 0,
                numtrab: 0,
                portrab: 0,
                numexpo: 0,
                porexpo: 0
            },
            { 
                codperiodo: '2022-1', 
                materia: { nombremat: "CIRCUITOS Y SISTEMAS", codmat: "0713463" },
                numsec: '01',
                numparc: 0,
                porparc: 0,
                numpract: 0,
                porpract: 0,
                numtrab: 0,
                portrab: 0,
                numexpo: 0,
                porexpo: 0
            },
            { 
                codperiodo: '2022-1', 
                materia: { nombremat: "ESTRUCTURAS DE DATOS", codmat: "0723123" },
                numsec: '01',
                numparc: 0,
                porparc: 0,
                numpract: 0,
                porpract: 0,
                numtrab: 0,
                portrab: 0,
                numexpo: 0,
                porexpo: 0
            },
            { 
                codperiodo: '2022-1', 
                materia: { nombremat: "SISTEMAS DE BASES DE DATOS", codmat: "0723713" },
                numsec: '01',
                numparc: 0,
                porparc: 0,
                numpract: 0,
                porpract: 0,
                numtrab: 0,
                portrab: 0,
                numexpo: 0,
                porexpo: 0
            }
        ]);
        console.log('\nCreada coleccion planeval con 5 documentos precargados....');

        // Creamos y precargamos coleccion carganotas
        const collectionNotas = db.collection('carganotas');
        await collectionNotas.insertMany([
            // ********************   MATEMATICAS III
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "MATEMATICAS III", codmat: "0082814" },
                    numsec: '01'
                },
                estudiantes: [
                    {
                        cedulaest: '8956407',
                        nombreest: 'DUGLAS RODRIGUEZ',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '8347735',
                        nombreest: 'JOSE SOTO',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '844847473',
                        nombreest: 'ROSA PEREZ',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '9763456',
                        nombreest: 'JUAN GARCIA',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '6879456',
                        nombreest: 'MARIA RIVAS',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '11234567',
                        nombreest: 'BELKIS RONDON',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '14098765',
                        nombreest: 'JASMIN ALVAREZ',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '18234567',
                        nombreest: 'LUIS RODRIGUEZ',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '13785256',
                        nombreest: 'ELOISA BETANCOURT',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '17345697',
                        nombreest: 'DUGLAS ARISMENDI',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    }
                ]
            },
            // ********************   PROGRAMACION ORIENTADA A OBJETOS
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "PROGRAMACION ORIENTADA A OBJETOS", codmat: "0722103" },
                    numsec: '01'
                },
                estudiantes: [
                    {
                        cedulaest: '17565697',
                        nombreest: 'DUGLAS PEREZ',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '22098765',
                        nombreest: 'MARIA ARISMENDI',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '13456123',
                        nombreest: 'JUANA SILVA',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '21345678',
                        nombreest: 'NEPTALY SUAREZ',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '11234987',
                        nombreest: 'LUIS MENDOZA',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '10982345',
                        nombreest: 'SALOMON RONDON',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '24324567',
                        nombreest: 'PATRICIA BELTRAN',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '13456872',
                        nombreest: 'MARIALEJANDRA RONDON',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    }
                ]
            },
            // ********************   CIRCUITOS Y SISTEMAS
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "CIRCUITOS Y SISTEMAS", codmat: "0713463" },
                    numsec: '01'
                },
                estudiantes: [
                    {
                        cedulaest: '13456872',
                        nombreest: 'MARIALEJANDRA RONDON',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '24324567',
                        nombreest: 'PATRICIA BELTRAN',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '13234569',
                        nombreest: 'PEDRO PEREZ',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '7654987',
                        nombreest: 'MARIA SALAZAR',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '23456781',
                        nombreest: 'LUIS SALAZAR',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '234567890',
                        nombreest: 'MARIALEJANDRA BELTRAN',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '16543239',
                        nombreest: 'ELISA RONDON',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    }
                ]
            },
            // ********************   ESTRUCTURAS DE DATOS
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "ESTRUCTURAS DE DATOS", codmat: "0723123" },
                    numsec: '01'
                },
                estudiantes: [
                    {
                        cedulaest: '8956407',
                        nombreest: 'DUGLAS RODRIGUEZ',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '8347735',
                        nombreest: 'JOSE SOTO',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '844847473',
                        nombreest: 'ROSA PEREZ',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '9763456',
                        nombreest: 'JUAN GARCIA',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '6879456',
                        nombreest: 'MARIA RIVAS',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '11234567',
                        nombreest: 'BELKIS RONDON',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    }
                ]
            },
            // ********************   SISTEMAS DE BASES DE DATOS
            {
                seccion: { 
                    codperiodo: '2022-1', 
                    materia: { nombremat: "SISTEMAS DE BASES DE DATOS", codmat: "0723713" },
                    numsec: '01'
                },
                estudiantes: [
                    {
                        cedulaest: '17565697',
                        nombreest: 'DUGLAS PEREZ',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '22098765',
                        nombreest: 'MARIA ARISMENDI',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '13456123',
                        nombreest: 'JUANA SILVA',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '21345678',
                        nombreest: 'NEPTALY SUAREZ',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    },
                    {
                        cedulaest: '11234987',
                        nombreest: 'LUIS MENDOZA',
                        evaluaciones: {
                            parciales: [],
                            practicas: [],
                            trabajos: [],
                            exposiciones: []
                        }
                    }
                ]    
            }
        ]);
        console.log('\nCreada coleccion carganotas con 5 documentos precargados....');

    }else{
        console.log('La base de datos dbcontrolnotas ya existe, no se hara nada....');
    }
    

  return 'done.';
}


