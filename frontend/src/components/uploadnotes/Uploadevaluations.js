import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import NavBar from '../commun/Navbar';
import Evaluationrow from './Evaluationrow';
import Opcionselect from './Opcionselect';
import '../commun/commun.css';

export default function Uploadevaluations(){
	const navigate = useNavigate();

	const [nparciales, setNparciales] = useState(0);
	const [npracticas, setNpracticas] = useState(0);
	const [ntrabajos, setNtrabajos] = useState(0);
	const [nexposiciones, setNexposiciones] = useState(0);

	const [estudiantes, setEstudiantes] = useState([]);

	const [inputdisable, setInputdisable] = useState(true);

	// Boton Agregar
	const [accionagregar, setAccionagregar] = useState('Asignar Nota');
	const [iconoagregar, setIconoagregar] = useState('fa-solid fa-plus-circle');

	const [tipoeval, setTipoeval] = useState('parcial');
	const [opcionesselect, setOpcionesselect] = useState([]);

	const [disableregresar, setDisableregresar] = useState(false);

	const [cedulaedit, setCedulaedit] = useState("");
	const [notaedit, setNotaedit] = useState(0.00);
	const [estudianteeditado, setEstudianteeditado] = useState("");
	const [indEstud, setIndEstud] = useState(0);
	const [numevaledit,setNumevaledit]=useState(1);

	const [ingreso, setIngreso] = useState(false);
	const [refresca, setRefresca] = useState(false);

	const [guardo, setGuardo] = useState(false);

	useEffect(() => {
		setNparciales(localStorage.getItem('minparciales'));
		setNpracticas(localStorage.getItem('minpracticas'));
		setNtrabajos(localStorage.getItem('mintrabajos'));
		setNexposiciones(localStorage.getItem('minexposiciones'));

		var arreglo = [];
		for(var num = 1; num < (parseInt(localStorage.getItem('minparciales'), 10)+1); num++){
			arreglo[num-1] = num;
		}
		setOpcionesselect(arreglo);

		axios.post("http://localhost:5000/api/carganotas", {
			periodo: localStorage.getItem('miperiodo'),
			codmat: localStorage.getItem('micodmateria'),
			numsec: localStorage.getItem('miseccion'),
		}).then(res => {
			if(res.data.result === 0){
				setEstudiantes(res.data.docnotas.estudiantes);
			}
		})
		.catch(err => console.log(err));
	}, []);

	const tableNotesRows = estudiantes.map(rowNotas => {
		return(
			<Evaluationrow rowNotas = { rowNotas } />
		);
	});

	const handleAgregar = () => {
		if(!ingreso){
			setInputdisable(false);
			setAccionagregar("Guardar Nota");
			setIconoagregar("fa-solid fa-save");
			setDisableregresar(true);
			setIngreso(true);
		}else{
			if(cedulaedit.trim().length > 0 && notaedit > 0){
				if(estudianteeditado.trim().length > 0){

					var filtro = {};
					var n1 = 0;
					var n2 = 0;
					var n3 = 0;
					var n4 = 0;
					var n5 = 0;
					// PARCIALES
					if(tipoeval === 'parcial'){
						switch(parseInt(nparciales, 10)){
							case 1:
								filtro = {
									periodo: localStorage.getItem('miperiodo'),
									codmat: localStorage.getItem('micodmateria'),
									numsec: localStorage.getItem('miseccion'),
									cedulaest: cedulaedit,
									tipo: tipoeval,
									n1: notaedit
								}
								break;
							case 2:
								if(numevaledit === 1){
									n1 = notaedit;
									n2 = estudiantes[indEstud].evaluaciones.parciales[1];
								}
								else{
									n1 = estudiantes[indEstud].evaluaciones.parciales[0];
									n2 = notaedit;
								}
								filtro = {
									periodo: localStorage.getItem('miperiodo'),
									codmat: localStorage.getItem('micodmateria'),
									numsec: localStorage.getItem('miseccion'),
									cedulaest: cedulaedit,
									tipo: tipoeval,
									n1: n1,
									n2: n2
								}
								break;
							case 3:
								switch(numevaledit){
									case 1:
										n1 = notaedit;
										n2 = estudiantes[indEstud].evaluaciones.parciales[1];
										n3 = estudiantes[indEstud].evaluaciones.parciales[2];
										break;
									case 2:
										n1 = estudiantes[indEstud].evaluaciones.parciales[0];
										n2 = notaedit;
										n3 = estudiantes[indEstud].evaluaciones.parciales[2];
										break;
									case 3:
										n1 = estudiantes[indEstud].evaluaciones.parciales[0];
										n2 = estudiantes[indEstud].evaluaciones.parciales[1];
										n3 = notaedit;
										break;	
									default:
								}
								//
								filtro = {
									periodo: localStorage.getItem('miperiodo'),
									codmat: localStorage.getItem('micodmateria'),
									numsec: localStorage.getItem('miseccion'),
									cedulaest: cedulaedit,
									tipo: tipoeval,
									n1: n1,
									n2: n2,
									n3: n3
								}
								break;
							case 4:
								switch(numevaledit){
									case 1:
										n1 = notaedit;
										n2 = estudiantes[indEstud].evaluaciones.parciales[1];
										n3 = estudiantes[indEstud].evaluaciones.parciales[2];
										n4 = estudiantes[indEstud].evaluaciones.parciales[3];
										break;
									case 2:
										n1 = estudiantes[indEstud].evaluaciones.parciales[0];
										n2 = notaedit;
										n3 = estudiantes[indEstud].evaluaciones.parciales[2];
										n4 = estudiantes[indEstud].evaluaciones.parciales[3];
										break;
									case 3:
										n1 = estudiantes[indEstud].evaluaciones.parciales[0];
										n2 = estudiantes[indEstud].evaluaciones.parciales[1];
										n3 = notaedit;
										n4 = estudiantes[indEstud].evaluaciones.parciales[3];
										break;	
									case 4:
										n1 = estudiantes[indEstud].evaluaciones.parciales[0];
										n2 = estudiantes[indEstud].evaluaciones.parciales[1];
										n3 = estudiantes[indEstud].evaluaciones.parciales[2];
										n4 = notaedit;
										break;	
									default:
								}
								//
								filtro = {
									periodo: localStorage.getItem('miperiodo'),
									codmat: localStorage.getItem('micodmateria'),
									numsec: localStorage.getItem('miseccion'),
									cedulaest: cedulaedit,
									tipo: tipoeval,
									n1: n1,
									n2: n2,
									n3: n3,
									n4: n4
								}
								break;
							case 5:
								switch(numevaledit){
									case 1:
										n1 = notaedit;
										n2 = estudiantes[indEstud].evaluaciones.parciales[1];
										n3 = estudiantes[indEstud].evaluaciones.parciales[2];
										n4 = estudiantes[indEstud].evaluaciones.parciales[3];
										n5 = estudiantes[indEstud].evaluaciones.parciales[4];
										break;
									case 2:
										n1 = estudiantes[indEstud].evaluaciones.parciales[0];
										n2 = notaedit;
										n3 = estudiantes[indEstud].evaluaciones.parciales[2];
										n4 = estudiantes[indEstud].evaluaciones.parciales[3];
										n5 = estudiantes[indEstud].evaluaciones.parciales[4];
										break;
									case 3:
										n1 = estudiantes[indEstud].evaluaciones.parciales[0];
										n2 = estudiantes[indEstud].evaluaciones.parciales[1];
										n3 = notaedit;
										n4 = estudiantes[indEstud].evaluaciones.parciales[3];
										n5 = estudiantes[indEstud].evaluaciones.parciales[4];
										break;	
									case 4:
										n1 = estudiantes[indEstud].evaluaciones.parciales[0];
										n2 = estudiantes[indEstud].evaluaciones.parciales[1];
										n3 = estudiantes[indEstud].evaluaciones.parciales[2];
										n4 = notaedit;
										n5 = estudiantes[indEstud].evaluaciones.parciales[4];
										break;	
									case 5:
										n1 = estudiantes[indEstud].evaluaciones.parciales[0];
										n2 = estudiantes[indEstud].evaluaciones.parciales[1];
										n3 = estudiantes[indEstud].evaluaciones.parciales[2];
										n4 = estudiantes[indEstud].evaluaciones.parciales[3];
										n5 = notaedit;
										break;
									default:	
								}
								//
								filtro = {
									periodo: localStorage.getItem('miperiodo'),
									codmat: localStorage.getItem('micodmateria'),
									numsec: localStorage.getItem('miseccion'),
									cedulaest: cedulaedit,
									tipo: tipoeval,
									n1: n1,
									n2: n2,
									n3: n3,
									n4: n4
								}
								break;
							default:
						}
					}else{
						// PRACTICAS
						if(tipoeval === 'practica'){
							switch(parseInt(npracticas, 10)){
								case 1:
									filtro = {
										periodo: localStorage.getItem('miperiodo'),
										codmat: localStorage.getItem('micodmateria'),
										numsec: localStorage.getItem('miseccion'),
										cedulaest: cedulaedit,
										tipo: tipoeval,
										n1: notaedit
									}
									break;
								case 2:
									if(numevaledit === 1){
										n1 = notaedit;
										n2 = estudiantes[indEstud].evaluaciones.practicas[1];
									}
									else{
										n1 = estudiantes[indEstud].evaluaciones.practicas[0];
										n2 = notaedit;
									}
									filtro = {
										periodo: localStorage.getItem('miperiodo'),
										codmat: localStorage.getItem('micodmateria'),
										numsec: localStorage.getItem('miseccion'),
										cedulaest: cedulaedit,
										tipo: tipoeval,
										n1: n1,
										n2: n2
									}
									break;
								case 3:
									switch(numevaledit){
										case 1:
											n1 = notaedit;
											n2 = estudiantes[indEstud].evaluaciones.practicas[1];
											n3 = estudiantes[indEstud].evaluaciones.practicas[2];
											break;
										case 2:
											n1 = estudiantes[indEstud].evaluaciones.practicas[0];
											n2 = notaedit;
											n3 = estudiantes[indEstud].evaluaciones.practicas[2];
											break;
										case 3:
											n1 = estudiantes[indEstud].evaluaciones.practicas[0];
											n2 = estudiantes[indEstud].evaluaciones.practicas[1];
											n3 = notaedit;
											break;	
										default:
									}
									//
									filtro = {
										periodo: localStorage.getItem('miperiodo'),
										codmat: localStorage.getItem('micodmateria'),
										numsec: localStorage.getItem('miseccion'),
										cedulaest: cedulaedit,
										tipo: tipoeval,
										n1: n1,
										n2: n2,
										n3: n3
									}
									break;
								case 4:
									switch(numevaledit){
										case 1:
											n1 = notaedit;
											n2 = estudiantes[indEstud].evaluaciones.practicas[1];
											n3 = estudiantes[indEstud].evaluaciones.practicas[2];
											n4 = estudiantes[indEstud].evaluaciones.practicas[3];
											break;
										case 2:
											n1 = estudiantes[indEstud].evaluaciones.practicas[0];
											n2 = notaedit;
											n3 = estudiantes[indEstud].evaluaciones.practicas[2];
											n4 = estudiantes[indEstud].evaluaciones.practicas[3];
											break;
										case 3:
											n1 = estudiantes[indEstud].evaluaciones.practicas[0];
											n2 = estudiantes[indEstud].evaluaciones.practicas[1];
											n3 = notaedit;
											n4 = estudiantes[indEstud].evaluaciones.practicas[3];
											break;	
										case 4:
											n1 = estudiantes[indEstud].evaluaciones.practicas[0];
											n2 = estudiantes[indEstud].evaluaciones.practicas[1];
											n3 = estudiantes[indEstud].evaluaciones.practicas[2];
											n4 = notaedit;
											break;
										default:	
									}
									//
									filtro = {
										periodo: localStorage.getItem('miperiodo'),
										codmat: localStorage.getItem('micodmateria'),
										numsec: localStorage.getItem('miseccion'),
										cedulaest: cedulaedit,
										tipo: tipoeval,
										n1: n1,
										n2: n2,
										n3: n3,
										n4: n4
									}
									break;
								case 5:
									switch(numevaledit){
										case 1:
											n1 = notaedit;
											n2 = estudiantes[indEstud].evaluaciones.practicas[1];
											n3 = estudiantes[indEstud].evaluaciones.practicas[2];
											n4 = estudiantes[indEstud].evaluaciones.practicas[3];
											n5 = estudiantes[indEstud].evaluaciones.practicas[4];
											break;
										case 2:
											n1 = estudiantes[indEstud].evaluaciones.practicas[0];
											n2 = notaedit;
											n3 = estudiantes[indEstud].evaluaciones.practicas[2];
											n4 = estudiantes[indEstud].evaluaciones.practicas[3];
											n5 = estudiantes[indEstud].evaluaciones.practicas[4];
											break;
										case 3:
											n1 = estudiantes[indEstud].evaluaciones.practicas[0];
											n2 = estudiantes[indEstud].evaluaciones.practicas[1];
											n3 = notaedit;
											n4 = estudiantes[indEstud].evaluaciones.practicas[3];
											n5 = estudiantes[indEstud].evaluaciones.practicas[4];
											break;	
										case 4:
											n1 = estudiantes[indEstud].evaluaciones.practicas[0];
											n2 = estudiantes[indEstud].evaluaciones.practicas[1];
											n3 = estudiantes[indEstud].evaluaciones.practicas[2];
											n4 = notaedit;
											n5 = estudiantes[indEstud].evaluaciones.practicas[4];
											break;	
										case 5:
											n1 = estudiantes[indEstud].evaluaciones.practicas[0];
											n2 = estudiantes[indEstud].evaluaciones.practicas[1];
											n3 = estudiantes[indEstud].evaluaciones.practicas[2];
											n4 = estudiantes[indEstud].evaluaciones.practicas[3];
											n5 = notaedit;
											break;	
										default:
									}
									//
									filtro = {
										periodo: localStorage.getItem('miperiodo'),
										codmat: localStorage.getItem('micodmateria'),
										numsec: localStorage.getItem('miseccion'),
										cedulaest: cedulaedit,
										tipo: tipoeval,
										n1: n1,
										n2: n2,
										n3: n3,
										n4: n4,
										n5: n5
									}
									break;
								default:
							}
						}else{
							// TRABAJOS
							if(tipoeval === 'trabajo'){
								switch(parseInt(ntrabajos, 10)){
									case 1:
										filtro = {
											periodo: localStorage.getItem('miperiodo'),
											codmat: localStorage.getItem('micodmateria'),
											numsec: localStorage.getItem('miseccion'),
											cedulaest: cedulaedit,
											tipo: tipoeval,
											n1: notaedit
										}
										break;
									case 2:
										if(numevaledit === 1){
											n1 = notaedit;
											n2 = estudiantes[indEstud].evaluaciones.trabajos[1];
										}
										else{
											n1 = estudiantes[indEstud].evaluaciones.trabajos[0];
											n2 = notaedit;
										}
										filtro = {
											periodo: localStorage.getItem('miperiodo'),
											codmat: localStorage.getItem('micodmateria'),
											numsec: localStorage.getItem('miseccion'),
											cedulaest: cedulaedit,
											tipo: tipoeval,
											n1: n1,
											n2: n2
										}
										break;
									case 3:
										switch(numevaledit){
											case 1:
												n1 = notaedit;
												n2 = estudiantes[indEstud].evaluaciones.trabajos[1];
												n3 = estudiantes[indEstud].evaluaciones.trabajos[2];
												break;
											case 2:
												n1 = estudiantes[indEstud].evaluaciones.trabajos[0];
												n2 = notaedit;
												n3 = estudiantes[indEstud].evaluaciones.trabajos[2];
												break;
											case 3:
												n1 = estudiantes[indEstud].evaluaciones.trabajos[0];
												n2 = estudiantes[indEstud].evaluaciones.trabajos[1];
												n3 = notaedit;
												break;	
											default:
										}
										//
										filtro = {
											periodo: localStorage.getItem('miperiodo'),
											codmat: localStorage.getItem('micodmateria'),
											numsec: localStorage.getItem('miseccion'),
											cedulaest: cedulaedit,
											tipo: tipoeval,
											n1: n1,
											n2: n2,
											n3: n3
										}
										break;
									case 4:
										switch(numevaledit){
											case 1:
												n1 = notaedit;
												n2 = estudiantes[indEstud].evaluaciones.trabajos[1];
												n3 = estudiantes[indEstud].evaluaciones.trabajos[2];
												n4 = estudiantes[indEstud].evaluaciones.trabajos[3];
												break;
											case 2:
												n1 = estudiantes[indEstud].evaluaciones.trabajos[0];
												n2 = notaedit;
												n3 = estudiantes[indEstud].evaluaciones.trabajos[2];
												n4 = estudiantes[indEstud].evaluaciones.trabajos[3];
												break;
											case 3:
												n1 = estudiantes[indEstud].evaluaciones.trabajos[0];
												n2 = estudiantes[indEstud].evaluaciones.trabajos[1];
												n3 = notaedit;
												n4 = estudiantes[indEstud].evaluaciones.trabajos[3];
												break;	
											case 4:
												n1 = estudiantes[indEstud].evaluaciones.trabajos[0];
												n2 = estudiantes[indEstud].evaluaciones.trabajos[1];
												n3 = estudiantes[indEstud].evaluaciones.trabajos[2];
												n4 = notaedit;
												break;	
											default:
										}
										//
										filtro = {
											periodo: localStorage.getItem('miperiodo'),
											codmat: localStorage.getItem('micodmateria'),
											numsec: localStorage.getItem('miseccion'),
											cedulaest: cedulaedit,
											tipo: tipoeval,
											n1: n1,
											n2: n2,
											n3: n3,
											n4: n4
										}
										break;
									case 5:
										switch(numevaledit){
											case 1:
												n1 = notaedit;
												n2 = estudiantes[indEstud].evaluaciones.trabajos[1];
												n3 = estudiantes[indEstud].evaluaciones.trabajos[2];
												n4 = estudiantes[indEstud].evaluaciones.trabajos[3];
												n5 = estudiantes[indEstud].evaluaciones.trabajos[4];
												break;
											case 2:
												n1 = estudiantes[indEstud].evaluaciones.trabajos[0];
												n2 = notaedit;
												n3 = estudiantes[indEstud].evaluaciones.trabajos[2];
												n4 = estudiantes[indEstud].evaluaciones.trabajos[3];
												n5 = estudiantes[indEstud].evaluaciones.trabajos[4];
												break;
											case 3:
												n1 = estudiantes[indEstud].evaluaciones.trabajos[0];
												n2 = estudiantes[indEstud].evaluaciones.trabajos[1];
												n3 = notaedit;
												n4 = estudiantes[indEstud].evaluaciones.trabajos[3];
												n5 = estudiantes[indEstud].evaluaciones.trabajos[4];
												break;	
											case 4:
												n1 = estudiantes[indEstud].evaluaciones.trabajos[0];
												n2 = estudiantes[indEstud].evaluaciones.trabajos[1];
												n3 = estudiantes[indEstud].evaluaciones.trabajos[2];
												n4 = notaedit;
												n5 = estudiantes[indEstud].evaluaciones.trabajos[4];
												break;	
											case 5:
												n1 = estudiantes[indEstud].evaluaciones.trabajos[0];
												n2 = estudiantes[indEstud].evaluaciones.trabajos[1];
												n3 = estudiantes[indEstud].evaluaciones.trabajos[2];
												n4 = estudiantes[indEstud].evaluaciones.trabajos[3];
												n5 = notaedit;
												break;	
											default:
										}
										//
										filtro = {
											periodo: localStorage.getItem('miperiodo'),
											codmat: localStorage.getItem('micodmateria'),
											numsec: localStorage.getItem('miseccion'),
											cedulaest: cedulaedit,
											tipo: tipoeval,
											n1: n1,
											n2: n2,
											n3: n3,
											n4: n4,
											n5: n5
										}
										break;
									default:
								}
							}else{
								// TRABAJOS
								if(tipoeval === 'exposicion'){
									switch(parseInt(nexposiciones, 10)){
										case 1:
											filtro = {
												periodo: localStorage.getItem('miperiodo'),
												codmat: localStorage.getItem('micodmateria'),
												numsec: localStorage.getItem('miseccion'),
												cedulaest: cedulaedit,
												tipo: tipoeval,
												n1: notaedit
											}
											break;
										case 2:
											if(numevaledit === 1){
												n1 = notaedit;
												n2 = estudiantes[indEstud].evaluaciones.exposiciones[1];
											}
											else{
												n1 = estudiantes[indEstud].evaluaciones.exposiciones[0];
												n2 = notaedit;
											}
											filtro = {
												periodo: localStorage.getItem('miperiodo'),
												codmat: localStorage.getItem('micodmateria'),
												numsec: localStorage.getItem('miseccion'),
												cedulaest: cedulaedit,
												tipo: tipoeval,
												n1: n1,
												n2: n2
											}
											break;
										case 3:
											switch(numevaledit){
												case 1:
													n1 = notaedit;
													n2 = estudiantes[indEstud].evaluaciones.exposiciones[1];
													n3 = estudiantes[indEstud].evaluaciones.exposiciones[2];
													break;
												case 2:
													n1 = estudiantes[indEstud].evaluaciones.exposiciones[0];
													n2 = notaedit;
													n3 = estudiantes[indEstud].evaluaciones.exposiciones[2];
													break;
												case 3:
													n1 = estudiantes[indEstud].evaluaciones.exposiciones[0];
													n2 = estudiantes[indEstud].evaluaciones.exposiciones[1];
													n3 = notaedit;
													break;
												default:	
											}
											//
											filtro = {
												periodo: localStorage.getItem('miperiodo'),
												codmat: localStorage.getItem('micodmateria'),
												numsec: localStorage.getItem('miseccion'),
												cedulaest: cedulaedit,
												tipo: tipoeval,
												n1: n1,
												n2: n2,
												n3: n3
											}
											break;
										case 4:
											switch(numevaledit){
												case 1:
													n1 = notaedit;
													n2 = estudiantes[indEstud].evaluaciones.exposiciones[1];
													n3 = estudiantes[indEstud].evaluaciones.exposiciones[2];
													n4 = estudiantes[indEstud].evaluaciones.exposiciones[3];
													break;
												case 2:
													n1 = estudiantes[indEstud].evaluaciones.exposiciones[0];
													n2 = notaedit;
													n3 = estudiantes[indEstud].evaluaciones.exposiciones[2];
													n4 = estudiantes[indEstud].evaluaciones.exposiciones[3];
													break;
												case 3:
													n1 = estudiantes[indEstud].evaluaciones.exposiciones[0];
													n2 = estudiantes[indEstud].evaluaciones.exposiciones[1];
													n3 = notaedit;
													n4 = estudiantes[indEstud].evaluaciones.exposiciones[3];
													break;	
												case 4:
													n1 = estudiantes[indEstud].evaluaciones.exposiciones[0];
													n2 = estudiantes[indEstud].evaluaciones.exposiciones[1];
													n3 = estudiantes[indEstud].evaluaciones.exposiciones[2];
													n4 = notaedit;
													break;	
												default:
											}
											//
											filtro = {
												periodo: localStorage.getItem('miperiodo'),
												codmat: localStorage.getItem('micodmateria'),
												numsec: localStorage.getItem('miseccion'),
												cedulaest: cedulaedit,
												tipo: tipoeval,
												n1: n1,
												n2: n2,
												n3: n3,
												n4: n4
											}
											break;
										case 5:
											switch(numevaledit){
												case 1:
													n1 = notaedit;
													n2 = estudiantes[indEstud].evaluaciones.exposiciones[1];
													n3 = estudiantes[indEstud].evaluaciones.exposiciones[2];
													n4 = estudiantes[indEstud].evaluaciones.exposiciones[3];
													n5 = estudiantes[indEstud].evaluaciones.exposiciones[4];
													break;
												case 2:
													n1 = estudiantes[indEstud].evaluaciones.exposiciones[0];
													n2 = notaedit;
													n3 = estudiantes[indEstud].evaluaciones.exposiciones[2];
													n4 = estudiantes[indEstud].evaluaciones.exposiciones[3];
													n5 = estudiantes[indEstud].evaluaciones.exposiciones[4];
													break;
												case 3:
													n1 = estudiantes[indEstud].evaluaciones.exposiciones[0];
													n2 = estudiantes[indEstud].evaluaciones.exposiciones[1];
													n3 = notaedit;
													n4 = estudiantes[indEstud].evaluaciones.exposiciones[3];
													n5 = estudiantes[indEstud].evaluaciones.exposiciones[4];
													break;	
												case 4:
													n1 = estudiantes[indEstud].evaluaciones.exposiciones[0];
													n2 = estudiantes[indEstud].evaluaciones.exposiciones[1];
													n3 = estudiantes[indEstud].evaluaciones.exposiciones[2];
													n4 = notaedit;
													n5 = estudiantes[indEstud].evaluaciones.exposiciones[4];
													break;	
												case 5:
													n1 = estudiantes[indEstud].evaluaciones.exposiciones[0];
													n2 = estudiantes[indEstud].evaluaciones.exposiciones[1];
													n3 = estudiantes[indEstud].evaluaciones.exposiciones[2];
													n4 = estudiantes[indEstud].evaluaciones.exposiciones[3];
													n5 = notaedit;
													break;	
												default:
											}
											//
											filtro = {
												periodo: localStorage.getItem('miperiodo'),
												codmat: localStorage.getItem('micodmateria'),
												numsec: localStorage.getItem('miseccion'),
												cedulaest: cedulaedit,
												tipo: tipoeval,
												n1: n1,
												n2: n2,
												n3: n3,
												n4: n4,
												n5: n5
											}
											break;
										default:
									}
								}
							}
						}
					}
					axios.post("http://localhost:5000/api/actualizanota", 
						filtro
					).catch(err => console.log(err));
					//
					setGuardo(!guardo);
					//refrescaTabla();
					//
					setCedulaedit("");
					setEstudianteeditado("");
					setNotaedit(0);
					setInputdisable(true);
					setAccionagregar("Asignar Nota");
					setIconoagregar("fa-solid fa-plus-circle");
					setDisableregresar(false);
					setIngreso(false);

				}else{
					Swal.fire({
					  position: 'center',
					  icon: 'error',
					  title: "Cédula no registrada en esta materia / sección...",
					  showConfirmButton: false,
					  timer: 1500
					});
				}
			}else{
				if(cedulaedit.trim().length === 0){
					Swal.fire({
					  position: 'center',
					  icon: 'error',
					  title: "Debes introducir la cédula de un estudiante...",
					  showConfirmButton: false,
					  timer: 1500
					});
				}else{
					Swal.fire({
					  position: 'center',
					  icon: 'error',
					  title: "La nota debe ser mayor que cero...",
					  showConfirmButton: false,
					  timer: 1500
					});
				}
			}
		}
	}

	useEffect(() => {
		refrescaTabla();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [guardo]);

	const refrescaTabla = () => {
		setEstudiantes([]);
		axios.post("http://localhost:5000/api/carganotas", {
			periodo: localStorage.getItem('miperiodo'),
			codmat: localStorage.getItem('micodmateria'),
			numsec: localStorage.getItem('miseccion'),
		}).then(res => {
			if(res.data.result === 0){
				setEstudiantes(res.data.docnotas.estudiantes);
				setRefresca(!refresca);
			}
		})
		.catch(err => console.log(err));
	}


	const handleCancelar = () => {
		setInputdisable(true);
		setAccionagregar("Asignar Nota");
		setIconoagregar("fa-solid fa-plus-circle");
		setDisableregresar(false);
		setIngreso(false);
		//
		setCedulaedit("");
		setEstudianteeditado("");
		setNotaedit(0);
	}

	const handleRegresar = () => {
		localStorage.setItem("tmpper", localStorage.getItem('miperiodo'));
		navigate(-1);
	}

	const handleTipoeval = (e) => {
		setTipoeval(e.target.value);
		var arreglo = [];
		if(e.target.value === 'parcial'){
			arreglo = [];
			for(let num = 1; num < (parseInt(nparciales, 10)+1); num++){
				arreglo[num-1] = num;
			}
			setOpcionesselect(arreglo);
		}else{
			if(e.target.value === 'practica'){
				arreglo = [];
				for(let num = 1; num < (parseInt(npracticas, 10)+1); num++){
					arreglo[num-1] = num;
				}
				setOpcionesselect(arreglo);
			}else{
				if(e.target.value === 'trabajo'){
					arreglo = [];
					for(let num = 1; num < (parseInt(ntrabajos, 10)+1); num++){
						arreglo[num-1] = num;
					}
					setOpcionesselect(arreglo);
				}else{
					arreglo = [];
					for(let num = 1; num < (parseInt(nexposiciones, 10)+1); num++){
						arreglo[num-1] = num;
					}
					setOpcionesselect(arreglo);
				}
			}
		}
	}

	const numEvaluaciones = opcionesselect.map(num => {
		return(
			<Opcionselect numero = { num } />
		);
	});

	const handleCedulaedit = (e) => {
		setCedulaedit(e.target.value);
		nombreEstudiante(e.target.value);
	}

	const handleNotaedit = (e) => {
		let ntemp = parseFloat(e.target.value);
		if (isNaN(ntemp)){
			ntemp = 0;
		}
		if(ntemp > 10){
			ntemp = 10;
		}
		setNotaedit(ntemp);
	}

	const nombreEstudiante = (cedulaBusca) => {
		var indx = 0;
		for(var i = 0; i < estudiantes.length; i++){
			if(estudiantes[i].cedulaest === cedulaBusca){
				setEstudianteeditado(estudiantes[i].nombreest);
				setIndEstud(i);
				indx =1;
				break;
			}
		}
		if(indx === 0){
			setEstudianteeditado("");
		}
	}

	const handleNumevaledit = (e) => {
		setNumevaledit(parseInt(e.target.value, 10));
	}


	return(
		<div className="container-fluid myBody">
			<NavBar />
			<h3 className="titulosComponentes">Cargar Notas</h3>
			<div className="contentComponentesNotas">
				<div className="row">
					<div className="col-12">
						<h6 className="materiaelegida">
							Período:&nbsp;&nbsp;{ localStorage.getItem('miperiodo') }
							&nbsp;&nbsp;&nbsp;&nbsp;( { localStorage.getItem('micodmateria') } )&nbsp;&nbsp;-  
							&nbsp;&nbsp;{ localStorage.getItem('mimateria') }
							&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Sección:&nbsp;&nbsp;{ localStorage.getItem('miseccion') }
						</h6>
					</div>
					<div className="col-12 mt-3 tablaEvaluaciones">	
						<table className="table table-striped table-sm tablenotas">
							<thead className="fondoEncabezado">
								<tr>
									<th scope="col" className="colcedula encabezspan fondoEncabezado2" rowspan="2">CEDULA</th>
									<th scope="col" className="colnombres encabezspan fondoEncabezado2" rowspan="2">APELLIDOS Y NOMBRES</th>
									<th scope="col" className="colNota fondoEncabezado2" colspan="5">PARCIALES</th>
									<th scope="col" className="colNota fondoEncabezado2" colspan="5">PRACTICAS</th>
									<th scope="col" className="colNota fondoEncabezado2" colspan="5">TRABAJOS</th>
									<th scope="col" className="colNota fondoEncabezado2" colspan="5">EXPOSICIONES</th>
									<th scope="col" className="colNota encabezspan fondoEncabezado2" rowspan="2">DEF.</th>
								</tr>
								<tr>
									<th scope="col" className="colNota fondoEncabezado2">1</th>
									<th scope="col" className="colNota fondoEncabezado2">2</th>
									<th scope="col" className="colNota fondoEncabezado2">3</th>
									<th scope="col" className="colNota fondoEncabezado2">4</th>
									<th scope="col" className="colNota fondoEncabezado2">5</th>
									<th scope="col" className="colNota fondoEncabezado2">1</th>
									<th scope="col" className="colNota fondoEncabezado2">2</th>
									<th scope="col" className="colNota fondoEncabezado2">3</th>
									<th scope="col" className="colNota fondoEncabezado2">4</th>
									<th scope="col" className="colNota fondoEncabezado2">5</th>
									<th scope="col" className="colNota fondoEncabezado2">1</th>
									<th scope="col" className="colNota fondoEncabezado2">2</th>
									<th scope="col" className="colNota fondoEncabezado2">3</th>
									<th scope="col" className="colNota fondoEncabezado2">4</th>
									<th scope="col" className="colNota fondoEncabezado2">5</th>
									<th scope="col" className="colNota fondoEncabezado2">1</th>
									<th scope="col" className="colNota fondoEncabezado2">2</th>
									<th scope="col" className="colNota fondoEncabezado2">3</th>
									<th scope="col" className="colNota fondoEncabezado2">4</th>
									<th scope="col" className="colNota fondoEncabezado2">5</th>
								</tr>
							</thead> 
							<tbody>
								{ tableNotesRows }
							</tbody>
						</table>

						<button type="button" className="btn btn-primary btn-sm" onClick={ handleAgregar }>
							<span className={ iconoagregar }></span>
							&nbsp;&nbsp;{ accionagregar }
						</button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
						<button type="button" className="btn btn-secondary btn-sm" onClick={ handleCancelar } disabled={ inputdisable ? 'disabled' : '' }>
							<span className="fa-solid fa-reply"></span>
							&nbsp;&nbsp;Cancelar
						</button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
						<button type="button" className="btn btn-secondary btn-sm" onClick={ handleRegresar } disabled={ disableregresar ? 'disabled' : '' }>
							<span className="fa-solid fa-reply"></span>
							&nbsp;&nbsp;Regresar
						</button>


						<div className="opcionesnotas">
							<div className="grupoopciones">
								<p className="labelextra">Tipo de evaluación:</p>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<div className="form-check">
								  <input className="form-check-input" type="radio" name="tipoEvaluacion" id="tipoParcial" value="parcial" checked={tipoeval === 'parcial'} disabled={ inputdisable ? 'disabled' : '' } onChange={ handleTipoeval } />
								  <label className="form-check-label" for="tipoParcial">
								    Parcial
								  </label>
								</div>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<div className="form-check">
								  <input className="form-check-input" type="radio" name="tipoEvaluacion" id="tipoPractica" value="practica" checked={tipoeval === 'practica'} disabled={ inputdisable ? 'disabled' : '' } onChange={ handleTipoeval } />
								  <label className="form-check-label" for="tipoPractica">
								    Practica
								  </label>
								</div>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<div className="form-check">
								  <input className="form-check-input" type="radio" name="tipoEvaluacion" id="tipoTrabajo" value="trabajo" checked={tipoeval === 'trabajo'} disabled={ (inputdisable || parseInt(ntrabajos, 10) === 0) ? 'disabled' : '' } onChange={ handleTipoeval } />
								  <label className="form-check-label" for="tipoTrabajo">
								    Trabajo
								  </label>
								</div>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<div className="form-check">
								  <input className="form-check-input" type="radio" name="tipoEvaluacion" id="tipoExposicion" value="exposicion" checked={tipoeval === 'exposicion'} disabled={ (inputdisable || parseInt(nexposiciones, 10) === 0) ? 'disabled' : '' } onChange={ handleTipoeval } />
								  <label className="form-check-label" for="tipoExposicion">
								    Exposición
								  </label>
								</div>
								<p className="margenextra">Evaluación nro:</p>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<div className="micombo">
									<select className="form-select form-select-sm" aria-label=".form-select-sm" disabled={ inputdisable ? 'disabled' : '' } value={ numevaledit } onChange={ handleNumevaledit }>
									  { numEvaluaciones }
									</select>
								</div>
							</div>
							<div className="grupoopciones mt-2">
								<div className="input-group" style={{ width: "160px" }}>
									<label for="cedulaestudiante">Cédula:&nbsp;&nbsp;&nbsp;</label>
									<input type="text" className="form-control form-control-sm" id="cedulaestudiante" disabled={ inputdisable ? 'disabled' : '' } value={ cedulaedit } onChange={ handleCedulaedit } />
								</div>
								<p className="estudedit">{ estudianteeditado }</p>
								<div className="input-group" style={{ width: "120px", marginLeft: "60px" }}>
									<label for="notaestudiante">Nota:&nbsp;&nbsp;&nbsp;</label>
									<input type="number" className="form-control form-control-sm" id="notaestudiante" disabled={ inputdisable ? 'disabled' : '' } value={ notaedit } onChange={ handleNotaedit } placeholder="0.00" step="0.01" min="0" max="10" />
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>
		</div>	
	);
}