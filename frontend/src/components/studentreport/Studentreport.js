import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import { useReactToPrint } from 'react-to-print';
import NavBar from '../commun/Navbar';
import Studentspdf from './Studentspdf';
import '../commun/commun.css';

export default function Studentreport(){
	const reporteRef = useRef();

	const [nparciales, setNparciales] = useState(0);
	const [npracticas, setNpracticas] = useState(0);
	const [ntrabajos, setNtrabajos] = useState(0);
	const [nexposiciones, setNexposiciones] = useState(0);

	const [periodo, SetPeriodo] = useState("");
	const [materia, setMateria] = useState("");
	const [seccion, setSeccion] = useState("");
	const [materiaSelect, setMateriaSelect] = useState([]);
	const [dataPlanes, setDataPlanes] = useState([]);
	const [seccionSelect, setSeccionSelect] = useState([]);
	const [contiene, setContiene] = useState("Sin Notas");
	const [exporta, setExporta] = useState("Imprimir / Exportar a PDF");
	const [dataMaterias, setDataMaterias] = useState([]);
	const [existe, setExiste] = useState(false);
	const [arregloDatos, setArregloDatos] = useState([]);

	const handlePeriodo = (e) => {
		SetPeriodo(e.target.value);
	}

	const handleMateria = (e) => {
		setMateria(e.target.value);
		var arregloSecciones = [];
		for(let n = 0; n < dataMaterias.length; n++){
			if(dataMaterias[n].seccion.materia.nombremat === e.target.value){
				if(!arregloSecciones.includes(dataMaterias[n].seccion.numsec)){
					arregloSecciones.push(dataMaterias[n].seccion.numsec);
					if(arregloSecciones.length === 1){
						setSeccion(dataMaterias[n].seccion.numsec);
					}
				}
			}
		}
		setSeccionSelect(arregloSecciones);
		//setArregloDatos(generaArreglo());
	}

	const handleSeccion = (e) => {
		setSeccion(e.target.value);
		//setArregloDatos(generaArreglo());
	}

	const handleContiene = (e) => {
		setContiene(e.target.value);
		//setArregloDatos(generaArreglo());
	}

	const handleExporta = (e) => {
		setExporta(e.target.value);
	}

	useEffect(() => {
		axios.post("http://localhost:5000/api/materiaestudiantes", {
			periodo: periodo
		}).then(res => {
			if(res.data.result === 0){
				setExiste(true);
				setDataMaterias(res.data.docnotas);
				var arregloMaterias = [];
				for(let n = 0; n < res.data.docnotas.length; n++){
					if(!arregloMaterias.includes(res.data.docnotas[n].seccion.materia.nombremat)){
						arregloMaterias.push(res.data.docnotas[n].seccion.materia.nombremat);
						if(arregloMaterias.length === 1){
							setMateria(res.data.docnotas[n].seccion.materia.nombremat);
							//
							var arregloSecciones = [];
							for(let y = 0; y < res.data.docnotas.length; y++){
								if(res.data.docnotas[y].seccion.materia.nombremat === res.data.docnotas[n].seccion.materia.nombremat){
									if(!arregloSecciones.includes(res.data.docnotas[y].seccion.numsec)){
										arregloSecciones.push(res.data.docnotas[y].seccion.numsec);
										if(arregloSecciones.length === 1){
											setSeccion(res.data.docnotas[y].seccion.numsec);
										}
									}
								}
							}
							setSeccionSelect(arregloSecciones);
							//
						}
					}
				}
				setMateriaSelect(arregloMaterias);
			}else{
				setExiste(false);
				setDataMaterias([]);
				setMateriaSelect([]);
				setSeccionSelect([]);
				setMateria("");
				setSeccion("");
			}
		})
		.catch(err => console.log(err));
		//
		setArregloDatos(generaArreglo());
		axios.post("http://localhost:5000/api/planeval", {
			periodo: periodo
		}).then(res => {
			if(res.data.result === 0){
				setDataPlanes(res.data.docplanes);
			}
		})
		.catch(err => console.log(err));
		
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [periodo]);

	useEffect(() => {
		setArregloDatos(generaArreglo());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [contiene, materia, seccion]);	

	const generaArreglo = () => {
		var parcialDef = 0;
		var practicaDef = 0;
		var trabajoDef = 0;
		var exposicionDef = 0;
		//
		var nparciales = 0;
		var npracticas = 0;
		var ntrabajos = 0;
		var nexposiciones = 0;
		//
		var pparciales = 0;
		var ppracticas = 0;
		var ptrabajos = 0;
		var pexposiciones = 0;
		//
		var pa1 = " ";
		var pa2 = " ";
		var pa3 = " ";
		var pa4 = " ";
		var pa5 = " ";
		//
		var pr1 = " ";
		var pr2 = " ";
		var pr3 = " ";
		var pr4 = " ";
		var pr5 = " ";
		//
		var tr1 = " ";
		var tr2 = " ";
		var tr3 = " ";
		var tr4 = " ";
		var tr5 = " ";
		//
		var ex1 = " ";
		var ex2 = " ";
		var ex3 = " ";
		var ex4 = " ";
		var ex5 = " ";
		//
		for(let ne = 0; ne < dataPlanes.length; ne++){
			if(dataPlanes[ne].codperiodo === periodo && dataPlanes[ne].materia.nombremat === materia && dataPlanes[ne].numsec === seccion){
				nparciales = dataPlanes[ne].numparc;
				npracticas = dataPlanes[ne].numpract;
				ntrabajos = dataPlanes[ne].numtrab;
				nexposiciones = dataPlanes[ne].numexpo;
				//
				pparciales = dataPlanes[ne].porparc;
				ppracticas = dataPlanes[ne].porpract;
				ptrabajos = dataPlanes[ne].portrab;
				pexposiciones = dataPlanes[ne].porexpo;
				break;
			}
		}
		setNparciales(nparciales);
		setNpracticas(npracticas);
		setNtrabajos(ntrabajos);
		setNexposiciones(nexposiciones);
		//
		var arregloExcel = [];
		var estudianteExcel = {};
		for(let n = 0; n < dataMaterias.length; n++){
			if(dataMaterias[n].seccion.codperiodo === periodo && dataMaterias[n].seccion.materia.nombremat === materia && dataMaterias[n].seccion.numsec === seccion){
				for(let i = 0; i < dataMaterias[n].estudiantes.length; i++){
					if(contiene === "Sin Notas"){
						estudianteExcel = {
							cedulaest: dataMaterias[n].estudiantes[i].cedulaest,
							nombreest: dataMaterias[n].estudiantes[i].nombreest
						}
					}else{
						estudianteExcel = {
							cedulaest: dataMaterias[n].estudiantes[i].cedulaest,
							nombreest: dataMaterias[n].estudiantes[i].nombreest
						}
						//
						var parcial1 = 0;
						var parcial2 = 0;
						var parcial3 = 0;
						var parcial4 = 0;
						var parcial5 = 0;
						var practica1 = 0;
						var practica2 = 0;
						var practica3 = 0;
						var practica4 = 0;
						var practica5 = 0;
						var trabajo1 = 0;
						var trabajo2 = 0;
						var trabajo3 = 0;
						var trabajo4 = 0;
						var trabajo5 = 0;
						var exposicion1 = 0;
						var exposicion2 = 0;
						var exposicion3 = 0;
						var exposicion4 = 0;
						var exposicion5 = 0;
						//
						switch(nparciales){
							case 1:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[0])){
									pa1 = " ";
								}else{
									pa1 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[0];
									parcial1 = parseFloat(pa1);
								}
								estudianteExcel['parcial1'] = pa1;
								parcialDef = parcial1 * (parseFloat(pparciales) / 100);
								break;
							case 2:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[0])){
									pa1 = " ";
								}else{
									pa1 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[0];
									parcial1 = parseFloat(pa1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[1])){
									pa2 = " ";
								}else{
									pa2 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[1];
									parcial2 = parseFloat(pa2);
								}
								estudianteExcel['parcial1'] = pa1;
								estudianteExcel['parcial2'] = pa2;
								parcialDef = ((parcial1 + parcial2) / 2) * (parseFloat(pparciales) / 100);
								break;	
							case 3:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[0])){
									pa1 = " ";
								}else{
									pa1 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[0];
									parcial1 = parseFloat(pa1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[1])){
									pa2 = " ";
								}else{
									pa2 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[1];
									parcial2 = parseFloat(pa2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[2])){
									pa3 = " ";
								}else{
									pa3 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[2];
									parcial3 = parseFloat(pa3);
								}
								estudianteExcel['parcial1'] = pa1;
								estudianteExcel['parcial2'] = pa2;
								estudianteExcel['parcial3'] = pa3;
								parcialDef = ((parcial1 + parcial2 + parcial3) / 3) * (parseFloat(pparciales) / 100);
								break;	
							case 4:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[0])){
									pa1 = " ";
								}else{
									pa1 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[0];
									parcial1 = parseFloat(pa1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[1])){
									pa2 = " ";
								}else{
									pa2 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[1];
									parcial2 = parseFloat(pa2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[2])){
									pa3 = " ";
								}else{
									pa3 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[2];
									parcial3 = parseFloat(pa3);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[3])){
									pa4 = " ";
								}else{
									pa4 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[3];
									parcial4 = parseFloat(pa4);
								}
								estudianteExcel['parcial1'] = pa1;
								estudianteExcel['parcial2'] = pa2;
								estudianteExcel['parcial3'] = pa3;
								estudianteExcel['parcial4'] = pa4;
								parcialDef = ((parcial1 + parcial2 + parcial3 + parcial4) / 4) * (parseFloat(pparciales) / 100);
								break;	
							case 5:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[0])){
									pa1 = " ";
								}else{
									pa1 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[0];
									parcial1 = parseFloat(pa1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[1])){
									pa2 = " ";
								}else{
									pa2 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[1];
									parcial2 = parseFloat(pa2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[2])){
									pa3 = " ";
								}else{
									pa3 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[2];
									parcial3 = parseFloat(pa3);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[3])){
									pa4 = " ";
								}else{
									pa4 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[3];
									parcial4 = parseFloat(pa4);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.parciales[4])){
									pa5 = " ";
								}else{
									pa5 = dataMaterias[n].estudiantes[i].evaluaciones.parciales[4];
									parcial5 = parseFloat(pa5);
								}
								estudianteExcel['parcial1'] = pa1;
								estudianteExcel['parcial2'] = pa2;
								estudianteExcel['parcial3'] = pa3;
								estudianteExcel['parcial4'] = pa4;
								estudianteExcel['parcial5'] = pa5;
								parcialDef = ((parcial1 + parcial2 + parcial3 + parcial4 + parcial5) / 5) * (parseFloat(pparciales) / 100);
								break;	
							default:
						}
						//
						switch(npracticas){
							case 1:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[0])){
									pr1 = " ";
								}else{
									pr1 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[0];
									practica1 = parseFloat(pr1);
								}
								estudianteExcel['practica1'] = pr1;
								practicaDef = practica1 * (parseFloat(ppracticas) / 100);
								break;
							case 2:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[0])){
									pr1 = " ";
								}else{
									pr1 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[0];
									practica1 = parseFloat(pr1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[1])){
									pr2 = " ";
								}else{
									pr2 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[1];
									practica2 = parseFloat(pr2);
								}
								estudianteExcel['practica1'] = pr1;
								estudianteExcel['practica2'] = pr2;
								practicaDef = ((practica1 + practica2) / 2) * (parseFloat(ppracticas) / 100);
								break;
							case 3:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[0])){
									pr1 = " ";
								}else{
									pr1 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[0];
									practica1 = parseFloat(pr1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[1])){
									pr2 = " ";
								}else{
									pr2 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[1];
									practica2 = parseFloat(pr2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[2])){
									pr3 = " ";
								}else{
									pr3 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[2];
									practica3 = parseFloat(pr3);
								}
								estudianteExcel['practica1'] = pr1;
								estudianteExcel['practica2'] = pr2;
								estudianteExcel['practica3'] = pr3;
								practicaDef = ((practica1 + practica2 + practica3) / 3) * (parseFloat(ppracticas) / 100);
								break;
							case 4:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[0])){
									pr1 = " ";
								}else{
									pr1 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[0];
									practica1 = parseFloat(pr1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[1])){
									pr2 = " ";
								}else{
									pr2 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[1];
									practica2 = parseFloat(pr2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[2])){
									pr3 = " ";
								}else{
									pr3 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[2];
									practica3 = parseFloat(pr3);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[3])){
									pr4 = " ";
								}else{
									pr4 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[3];
									practica4 = parseFloat(pr4);
								}
								estudianteExcel['practica1'] = pr1;
								estudianteExcel['practica2'] = pr2;
								estudianteExcel['practica3'] = pr3;
								estudianteExcel['practica4'] = pr4;
								practicaDef = ((practica1 + practica2 + practica3 + practica4) / 4) * (parseFloat(ppracticas) / 100);
								break;
							case 5:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[0])){
									pr1 = " ";
								}else{
									pr1 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[0];
									practica1 = parseFloat(pr1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[1])){
									pr2 = " ";
								}else{
									pr2 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[1];
									practica2 = parseFloat(pr2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[2])){
									pr3 = " ";
								}else{
									pr3 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[2];
									practica3 = parseFloat(pr3);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[3])){
									pr4 = " ";
								}else{
									pr4 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[3];
									practica4 = parseFloat(pr4);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.practicas[4])){
									pr5 = " ";
								}else{
									pr5 = dataMaterias[n].estudiantes[i].evaluaciones.practicas[4];
									practica5 = parseFloat(pr5);
								}
								estudianteExcel['practica1'] = pr1;
								estudianteExcel['practica2'] = pr2;
								estudianteExcel['practica3'] = pr3;
								estudianteExcel['practica4'] = pr4;
								estudianteExcel['practica5'] = pr5;
								practicaDef = ((practica1 + practica2 + practica3 + practica4 + practica5) / 5) * (parseFloat(ppracticas) / 100);
								break;
							default:
						}
						//
						switch(ntrabajos){
							case 1:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[0])){
									tr1 = " ";
								}else{
									tr1 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[0];
									trabajo1 = parseFloat(tr1);
								}
								estudianteExcel['trabajo1'] = tr1;
								trabajoDef = trabajo1 * (parseFloat(ptrabajos) / 100);
								break;
							case 2:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[0])){
									tr1 = " ";
								}else{
									tr1 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[0];
									trabajo1 = parseFloat(tr1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[1])){
									tr2 = " ";
								}else{
									tr2 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[1];
									trabajo2 = parseFloat(tr2);
								}
								estudianteExcel['trabajo1'] = tr1;
								estudianteExcel['trabajo2'] = tr2;
								trabajoDef = ((trabajo1 + trabajo2) / 2) * (parseFloat(ptrabajos) / 100);
								break;
							case 3:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[0])){
									tr1 = " ";
								}else{
									tr1 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[0];
									trabajo1 = parseFloat(tr1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[1])){
									tr2 = " ";
								}else{
									tr2 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[1];
									trabajo2 = parseFloat(tr2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[2])){
									tr3 = " ";
								}else{
									tr3 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[2];
									trabajo3 = parseFloat(tr3);
								}
								estudianteExcel['trabajo1'] = tr1;
								estudianteExcel['trabajo2'] = tr2;
								estudianteExcel['trabajo3'] = tr3;
								trabajoDef = ((trabajo1 + trabajo2 + trabajo3) / 3) * (parseFloat(ptrabajos) / 100);
								break;
							case 4:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[0])){
									tr1 = " ";
								}else{
									tr1 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[0];
									trabajo1 = parseFloat(tr1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[1])){
									tr2 = " ";
								}else{
									tr2 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[1];
									trabajo2 = parseFloat(tr2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[2])){
									tr3 = " ";
								}else{
									tr3 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[2];
									trabajo3 = parseFloat(tr3);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[3])){
									tr4 = " ";
								}else{
									tr4 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[3];
									trabajo4 = parseFloat(tr4);
								}
								estudianteExcel['trabajo1'] = tr1;
								estudianteExcel['trabajo2'] = tr2;
								estudianteExcel['trabajo3'] = tr3;
								estudianteExcel['trabajo4'] = tr4;
								trabajoDef = ((trabajo1 + trabajo2 + trabajo3 + trabajo4) / 4) * (parseFloat(ptrabajos) / 100);
								break;
							case 5:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[0])){
									tr1 = " ";
								}else{
									tr1 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[0];
									trabajo1 = parseFloat(tr1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[1])){
									tr2 = " ";
								}else{
									tr2 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[1];
									trabajo2 = parseFloat(tr2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[2])){
									tr3 = " ";
								}else{
									tr3 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[2];
									trabajo3 = parseFloat(tr3);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[3])){
									tr4 = " ";
								}else{
									tr4 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[3];
									trabajo4 = parseFloat(tr4);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.trabajos[4])){
									tr5 = " ";
								}else{
									tr5 = dataMaterias[n].estudiantes[i].evaluaciones.trabajos[4];
									trabajo5 = parseFloat(tr5);
								}
								estudianteExcel['trabajo1'] = tr1;
								estudianteExcel['trabajo2'] = tr2;
								estudianteExcel['trabajo3'] = tr3;
								estudianteExcel['trabajo4'] = tr4;
								estudianteExcel['trabajo5'] = tr5;
								trabajoDef = ((trabajo1 + trabajo2 + trabajo3 + trabajo4 + trabajo5) / 5) * (parseFloat(ptrabajos) / 100);
								break;
							default:
						}
						//
						switch(nexposiciones){
							case 1:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[0])){
									ex1 = " ";
								}else{
									ex1 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[0];
									exposicion1 = parseFloat(ex1);
								}
								estudianteExcel['exposicion1'] = ex1;
								exposicionDef = exposicion1 * (parseFloat(pexposiciones) / 100);
								break;
							case 2:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[0])){
									ex1 = " ";
								}else{
									ex1 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[0];
									exposicion1 = parseFloat(ex1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[1])){
									ex2 = " ";
								}else{
									ex2 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[1];
									exposicion2 = parseFloat(ex2);
								}
								estudianteExcel['exposicion1'] = ex1;
								estudianteExcel['exposicion2'] = ex2;
								exposicionDef = ((exposicion1 + exposicion2) / 2) * (parseFloat(pexposiciones) / 100);
								break;
							case 3:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[0])){
									ex1 = " ";
								}else{
									ex1 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[0];
									exposicion1 = parseFloat(ex1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[1])){
									ex2 = " ";
								}else{
									ex2 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[1];
									exposicion2 = parseFloat(ex2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[2])){
									ex3 = " ";
								}else{
									ex3 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[2];
									exposicion3 = parseFloat(ex3);
								}
								estudianteExcel['exposicion1'] = ex1;
								estudianteExcel['exposicion2'] = ex2;
								estudianteExcel['exposicion3'] = ex3;
								exposicionDef = ((exposicion1 + exposicion2 + exposicion3) / 3) * (parseFloat(pexposiciones) / 100);
								break;
							case 4:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[0])){
									ex1 = " ";
								}else{
									ex1 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[0];
									exposicion1 = parseFloat(ex1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[1])){
									ex2 = " ";
								}else{
									ex2 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[1];
									exposicion2 = parseFloat(ex2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[2])){
									ex3 = " ";
								}else{
									ex3 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[2];
									exposicion3 = parseFloat(ex3);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[3])){
									ex4 = " ";
								}else{
									ex4 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[3];
									exposicion4 = parseFloat(ex4);
								}
								estudianteExcel['exposicion1'] = ex1;
								estudianteExcel['exposicion2'] = ex2;
								estudianteExcel['exposicion3'] = ex3;
								estudianteExcel['exposicion4'] = ex4;
								exposicionDef = ((exposicion1 + exposicion2 + exposicion3 + exposicion4) / 4) * (parseFloat(pexposiciones) / 100);
								break;
							case 5:
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[0])){
									ex1 = " ";
								}else{
									ex1 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[0];
									exposicion1 = parseFloat(ex1);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[1])){
									ex2 = " ";
								}else{
									ex2 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[1];
									exposicion2 = parseFloat(ex2);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[2])){
									ex3 = " ";
								}else{
									ex3 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[2];
									exposicion3 = parseFloat(ex3);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[3])){
									ex4 = " ";
								}else{
									ex4 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[3];
									exposicion4 = parseFloat(ex4);
								}
								if (isNaN(dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[4])){
									ex5 = " ";
								}else{
									ex5 = dataMaterias[n].estudiantes[i].evaluaciones.exposiciones[4];
									exposicion5 = parseFloat(ex5);
								}
								estudianteExcel['exposicion1'] = ex1;
								estudianteExcel['exposicion2'] = ex2;
								estudianteExcel['exposicion3'] = ex3;
								estudianteExcel['exposicion4'] = ex4;
								estudianteExcel['exposicion5'] = ex5;
								exposicionDef = ((exposicion1 + exposicion2 + exposicion3 + exposicion4 + exposicion5) / 5) * (parseFloat(pexposiciones) / 100);
								break;
							default:
						}
						estudianteExcel['definitiva'] = (parcialDef + practicaDef + trabajoDef + exposicionDef).toFixed(2);
					}
					if(contiene === "Con Notas Detalladas"){
						arregloExcel.push(estudianteExcel);
					}else{ 
						if(contiene === "Con Notas Definitivas"){
							estudianteExcel = {
								cedulaest: dataMaterias[n].estudiantes[i].cedulaest,
								nombreest: dataMaterias[n].estudiantes[i].nombreest,
								definitiva: (parcialDef + practicaDef + trabajoDef + exposicionDef).toFixed(2)
							}
							arregloExcel.push(estudianteExcel);
						}else{ // solo cedulas y nombres
							estudianteExcel = {
								cedulaest: dataMaterias[n].estudiantes[i].cedulaest,
								nombreest: dataMaterias[n].estudiantes[i].nombreest
							}
							arregloExcel.push(estudianteExcel);
						}
					}
				}
			}
		}
		return arregloExcel;
	}

	const handleGenerarExcel = () => {
		var arrayExcel = generaArreglo();
		//
		var wb = XLSX.utils.book_new();
		var ws = XLSX.utils.json_to_sheet(arrayExcel, {origin:"A5"});
		XLSX.utils.sheet_add_aoa(ws, [["LISTADO DE ESTUDIANTES"]], {origin:"A1"});
		XLSX.utils.sheet_add_aoa(ws, [["Período: " + periodo + "   Materia: " + materia.trim() + "   Sección: " + seccion]], {origin:"A3"});
		if(contiene === "Sin Notas"){
			XLSX.utils.sheet_add_aoa(ws, [["Cedula", "Nombres y Apellidos"]], {origin:"A5"});
		}else{
			if(contiene === "Con Notas Detalladas"){
				var columnas = ["Cedula", "Nombres y Apellidos"];
				switch(nparciales){
					case 1:
						columnas.push("Parcial1");
						break;
					case 2:
						columnas.push("Parcial1");
						columnas.push("Parcial2");
						break;
					case 3:
						columnas.push("Parcial1");
						columnas.push("Parcial2");
						columnas.push("Parcial3");
						break;
					case 4:
						columnas.push("Parcial1");
						columnas.push("Parcial2");
						columnas.push("Parcial3");
						columnas.push("Parcial4");
						break;
					case 5:
						columnas.push("Parcial1");
						columnas.push("Parcial2");
						columnas.push("Parcial3");
						columnas.push("Parcial4");
						columnas.push("Parcial5");
						break;
					default:
				}
				//
				switch(npracticas){
					case 1:
						columnas.push("Practica1");
						break;
					case 2:
						columnas.push("Practica1");
						columnas.push("Practica2");
						break;
					case 3:
						columnas.push("Practica1");
						columnas.push("Practica2");
						columnas.push("Practica3");
						break;
					case 4:
						columnas.push("Practica1");
						columnas.push("Practica2");
						columnas.push("Practica3");
						columnas.push("Practica4");
						break;
					case 5:
						columnas.push("Practica1");
						columnas.push("Practica2");
						columnas.push("Practica3");
						columnas.push("Practica4");
						columnas.push("Practica5");
						break;
					default:
				}
				//
				switch(ntrabajos){
					case 1:
						columnas.push("Trabajo1");
						break;
					case 2:
						columnas.push("Trabajo1");
						columnas.push("Trabajo2");
						break;
					case 3:
						columnas.push("Trabajo1");
						columnas.push("Trabajo2");
						columnas.push("Trabajo3");
						break;
					case 4:
						columnas.push("Trabajo1");
						columnas.push("Trabajo2");
						columnas.push("Trabajo3");
						columnas.push("Trabajo4");
						break;
					case 5:
						columnas.push("Trabajo1");
						columnas.push("Trabajo2");
						columnas.push("Trabajo3");
						columnas.push("Trabajo4");
						columnas.push("Trabajo5");
						break;
					default:
				}
				//
				switch(nexposiciones){
					case 1:
						columnas.push("Exposicion1");
						break;
					case 2:
						columnas.push("Exposicion1");
						columnas.push("Exposicion2");
						break;
					case 3:
						columnas.push("Exposicion1");
						columnas.push("Exposicion2");
						columnas.push("Exposicion3");
						break;
					case 4:
						columnas.push("Exposicion1");
						columnas.push("Exposicion2");
						columnas.push("Exposicion3");
						columnas.push("Exposicion4");
						break;
					case 5:
						columnas.push("Exposicion1");
						columnas.push("Exposicion2");
						columnas.push("Exposicion3");
						columnas.push("Exposicion4");
						columnas.push("Exposicion5");
						break;
					default:
				}
				columnas.push("Definitiva");
				XLSX.utils.sheet_add_aoa(ws, [columnas], {origin:"A5"});
			}else{
				var columnas2 = ["Cedula", "Nombres y Apellidos"];
				columnas2.push("Definitiva");
				XLSX.utils.sheet_add_aoa(ws, [columnas2], {origin:"A5"});
			}
		}

		XLSX.utils.book_append_sheet(wb, ws, "Estudiantes");
		XLSX.writeFile(wb, "Listado_Estudiantes_" + periodo.trim() + "_" + materia.trim() +"_" + seccion.trim() + ".xlsx");
	}

	/*const pageStyle=`
		@page { size: landscape }
		width: 100%
	`;
*/
	const handlePrintLanscape = useReactToPrint({
		content: () => reporteRef.current,
//		pageStyle,
		documentTitle: "Listado_Estudiantes_" + periodo.trim() + "_" + materia.trim() +"_" + seccion.trim()
		//onAfterPrint: () => alert('Impresion exitosa')
	});

	const handlePrint = useReactToPrint({
		content: () => reporteRef.current,
		documentTitle: "Listado_Estudiantes_" + periodo.trim() + "_" + materia.trim() +"_" + seccion.trim()
		//onAfterPrint: () => alert('Impresion exitosa')
	});

	const handlePrintError = () => {
		Swal.fire({
		  position: 'center',
		  icon: 'error',
		  title: "Codigo de período no registrado...",
		  showConfirmButton: false,
		  timer: 1500
		});
	}

	return(
		<div className="container-fluid myBody">
			<NavBar />
			<h3 className="titulosComponentes">Listar Estudiantes</h3>
			<div className="contentReportesEstudiantes">
				<div className="row">
					<div className="col-12">
						<div className="input-group grupoPeriodoReportes">
							<label for="periodo">Período:</label>
							<input type="text" className="form-control form-control-sm" id="periodo" onChange={ handlePeriodo } />
						</div>
						<div className="input-group" style={{ marginTop: "10px" }}>
							<label for="materia" style={{ marginRight: "10px" }}>Materia:</label>
							<div>
								<select className="form-select form-select-sm" aria-label=".form-select-sm" value={ materia } onChange={ handleMateria }>
									{materiaSelect.map((mate, i) => {
										return(
											<option key={ i } value={ mate }>{ mate }</option>
										)
									})}
								</select>
							</div>
						</div>						
						<div className="input-group" style={{ marginTop: "10px", width: "200px" }}>
							<label for="seccion" style={{ marginRight: "10px" }}>Sección:</label>
							<div>
								<select className="form-select form-select-sm" aria-label=".form-select-sm" value={ seccion } onChange={ handleSeccion }>
									{seccionSelect.map((secc, i) => {
										return(
											<option key={ i } value={ secc }>{ secc }</option>
										)
									})}
								</select>
							</div>
						</div>	


					</div>

					<div className="grupoexporta">
						<p className="enNegritas">Contenido del Reporte:</p>
						<div className="form-check">
						  <input className="form-check-input" type="radio" name="contenidoRep" id="snotas" value="Sin Notas" checked={contiene === 'Sin Notas'} onChange={ handleContiene } />
						  <label className="form-check-label" for="apdf">
						    Sin Notas
						  </label>
						</div>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<div className="form-check">
						  <input className="form-check-input" type="radio" name="contenidoRep" id="notasdet" value="Con Notas Detalladas" checked={contiene === 'Con Notas Detalladas'} onChange={ handleContiene } />
						  <label className="form-check-label" for="aexcel">
						    Con Notas Detalladas
						  </label>
						</div>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<div className="form-check">
						  <input className="form-check-input" type="radio" name="contenidoRep" id="notasdef" value="Con Notas Definitivas" checked={contiene === 'Con Notas Definitivas'} onChange={ handleContiene } />
						  <label className="form-check-label" for="aexcel">
						    Con Notas Definitivas
						  </label>
						</div>
					</div>

					<div className="grupoexporta">
						<div className="form-check">
						  <input className="form-check-input" type="radio" name="exportarA" id="apdf" value="Imprimir / Exportar a PDF" checked={exporta === 'Imprimir / Exportar a PDF'} onChange={ handleExporta } />
						  <label className="form-check-label" for="apdf">
						    Imprimir / Exportar a PDF
						  </label>
						</div>
						&nbsp;&nbsp;&nbsp;&nbsp;
						<div className="form-check">
						  <input className="form-check-input" type="radio" name="exportarA" id="aexcel" value="Exportar a Excel" checked={exporta === 'Exportar a Excel'} onChange={ handleExporta } />
						  <label className="form-check-label" for="aexcel">
						    Exportar a Excel
						  </label>
						</div>
					</div>

					<div className="areaBoton">
						{ exporta === 'Exportar a Excel' ?
							<button type="button" className="btn btn-primary btn-sm" onClick={ handleGenerarExcel }>
								<span className="fa-solid fa-print"></span>
								&nbsp;&nbsp;Generar Reporte
							</button>
						: existe ?
							<button type="button" className="btn btn-primary btn-sm" onClick={ contiene === "Con Notas Detalladas" ? handlePrintLanscape : handlePrint }>
								<span className="fa-solid fa-print"></span>
								&nbsp;&nbsp;Generar Reporte
							</button>
						: 
							<button type="button" className="btn btn-primary btn-sm"  onClick={ handlePrintError }>
								<span className="fa-solid fa-print"></span>
								&nbsp;&nbsp;Generar Reporte
							</button>
						}
					</div>

				</div>
			</div>	
			{ (exporta === "Imprimir / Exportar a PDF" && arregloDatos.length > 0) ?
				<Studentspdf repRef={ reporteRef } periodo={ periodo } materia={ materia } seccion={ seccion } nparciales={ nparciales } npracticas={ npracticas } ntrabajos={ ntrabajos } nexposiciones={ nexposiciones } arregloDatos={ arregloDatos } contiene={ contiene } />
			: "" }
		</div>
	);
} 