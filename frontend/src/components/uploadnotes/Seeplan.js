import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import NavBar from '../commun/Navbar';
import '../commun/commun.css';

export default function Seeplan(){
	const navigate = useNavigate();

	const [nparciales, setNparciales] = useState(0);
	const [npracticas, setNpracticas] = useState(0);
	const [ntrabajos, setNtrabajos] = useState(0);
	const [nexposiciones, setNexposiciones] = useState(0);

	const [pparciales, setPparciales] = useState(0.00);
	const [ppracticas, setPpracticas] = useState(0.00);
	const [ptrabajos, setPtrabajos] = useState(0.00);
	const [pexposiciones, setPexposiciones] = useState(0.00);

	const [inputdisable, setInputdisable] = useState(true);
	const [accion, setAccion] = useState('Modificar');
	const [icono, setIcono] = useState('fa-solid fa-edit');

	useEffect(() => {
		setNparciales(localStorage.getItem('minparciales'));
		setNpracticas(localStorage.getItem('minpracticas'));
		setNtrabajos(localStorage.getItem('mintrabajos'));
		setNexposiciones(localStorage.getItem('minexposiciones'));
		setPparciales(localStorage.getItem('mipparciales'));
		setPpracticas(localStorage.getItem('mippracticas'));
		setPtrabajos(localStorage.getItem('miptrabajos'));
		setPexposiciones(localStorage.getItem('mipexposiciones'));
	}, []);

	const handleRegresar = () => {
		localStorage.setItem("tmpper", localStorage.getItem('miperiodo'));
		navigate(-1);
	}

	const handleNParciales = (e) => {
		let ntemp = parseInt(e.target.value, 10);
		if (isNaN(ntemp)){
			ntemp = 0;
		}
		if(ntemp > 5){
			ntemp = 5;
		}
		setNparciales(ntemp);
	}

	const handleNpracticas = (e) => {
		let ntemp = parseInt(e.target.value, 10);
		if (isNaN(ntemp)){
			ntemp = 0;
		}
		if(ntemp > 5){
			ntemp = 5;
		}
		setNpracticas(ntemp);
	}

	const handleNtrabajos = (e) => {
		let ntemp = parseInt(e.target.value, 10);
		if (isNaN(ntemp)){
			ntemp = 0;
		}
		if(ntemp > 5){
			ntemp = 5;
		}
		setNtrabajos(ntemp);
	}

	const handleNexposiciones = (e) => {
		let ntemp = parseInt(e.target.value, 10);
		if (isNaN(ntemp)){
			ntemp = 0;
		}
		if(ntemp > 5){
			ntemp = 5;
		}
		setNexposiciones(ntemp);
	}

	const handlePparciales = (e) => { 
		let ntemp = parseFloat(e.target.value);
		if (isNaN(ntemp)){
			ntemp = 0;
		}
		setPparciales(ntemp);
	}

	const handlePpracticas = (e) => {
		let ntemp = parseFloat(e.target.value);
		if (isNaN(ntemp)){
			ntemp = 0;
		}
		setPpracticas(ntemp);
	}

	const handlePtrabajos = (e) => {
		let ntemp = parseFloat(e.target.value);
		if (isNaN(ntemp)){
			ntemp = 0;
		}
		setPtrabajos(ntemp);
	}

	const handlePexposiciones = (e) => {
		let ntemp = parseFloat(e.target.value);
		if (isNaN(ntemp)){
			ntemp = 0;
		}
		setPexposiciones(ntemp);
	}

	const handleGuardar = () => {
		if(accion === "Modificar"){
			setInputdisable(false);
			setAccion('Actualizar');
			setIcono('fa-solid fa-save');
		}else{
			if(nparciales === 0 && npracticas === 0 && ntrabajos === 0 && nexposiciones === 0 && pparciales === 0 && ppracticas === 0 && ptrabajos === 0 && pexposiciones === 0) {
				Swal.fire({
				  position: 'center',
				  icon: 'error',
				  title: "Debes especificar los números y porcentajes de las evaluaciones...",
				  showConfirmButton: false,
				  timer: 1900
				});
			}else{
				if(nparciales === 0 || npracticas === 0 || pparciales === 0 || ppracticas === 0) {
					if(nparciales === 0) {
						Swal.fire({
						  position: 'center',
						  icon: 'error',
						  title: "Debes especificar el número de parciales...",
						  showConfirmButton: false,
						  timer: 1900
						});
					}else{
						if(npracticas === 0) {
							Swal.fire({
							  position: 'center',
							  icon: 'error',
							  title: "Debes especificar el número de practicas...",
							  showConfirmButton: false,
							  timer: 1900
							});
						}else{
							if(pparciales === 0){
								Swal.fire({
								  position: 'center',
								  icon: 'error',
								  title: "Debes especificar el porcentaje de evaluaciones parciales...",
								  showConfirmButton: false,
								  timer: 1900
								});
							}else{
								Swal.fire({
								  position: 'center',
								  icon: 'error',
								  title: "Debes especificar el porcentaje de evaluaciones practicas...",
								  showConfirmButton: false,
								  timer: 1900
								});
							}
						}
					}
				}else{
					if((ntrabajos > 0 && ptrabajos === 0) || (ntrabajos === 0 && ptrabajos > 0) || (nexposiciones > 0 && pexposiciones === 0) || (nexposiciones === 0 && pexposiciones > 0)){
						if(ntrabajos > 0 && ptrabajos === 0){
							Swal.fire({
							  position: 'center',
							  icon: 'error',
							  title: "Debes especificar el porcentaje de evaluaciones por trabajos...",
							  showConfirmButton: false,
							  timer: 1900
							});
						}else{
							if(ntrabajos === 0 && ptrabajos > 0){
								Swal.fire({
								  position: 'center',
								  icon: 'error',
								  title: "Debes especificar el número de trabajos...",
								  showConfirmButton: false,
								  timer: 1900
								});
							}else{
								if(nexposiciones > 0 && pexposiciones === 0){
									Swal.fire({
									  position: 'center',
									  icon: 'error',
									  title: "Debes especificar el porcentaje de evaluaciones por exposiciones...",
									  showConfirmButton: false,
									  timer: 1900
									});
								}else{
									Swal.fire({
									  position: 'center',
									  icon: 'error',
									  title: "Debes especificar el número de exposiciones...",
									  showConfirmButton: false,
									  timer: 1900
									});
								}
							}
						}

					}else{
						if((parseFloat(pparciales) + parseFloat(ppracticas) + parseFloat(ptrabajos) + parseFloat(pexposiciones)) > 100){
							Swal.fire({
							  position: 'center',
							  icon: 'error',
							  title: "Los porcentajes de evaluacion superan el 100%...",
							  showConfirmButton: false,
							  timer: 1900
							});
						}else{
							axios.post("http://localhost:5000/api/updateplaneval", {
								periodo: localStorage.getItem('miperiodo'),
								codmat: localStorage.getItem('micodmateria'),
								numsec: localStorage.getItem('miseccion'),
								numparc: nparciales,
								porparc: pparciales,
								numpract: npracticas,
								porpract: ppracticas,
								numtrab: ntrabajos,
								portrab: ptrabajos,
								numexpo: nexposiciones,
								porexpo: pexposiciones
							}).then(res => {
								if(res.data.result === 0){
									Swal.fire({
									  position: 'center',
									  icon: 'success',
									  title: "El plan de evaluación ha sido actualizado...",
									  showConfirmButton: false,
									  timer: 1500
									});
									//
									localStorage.setItem("minparciales", nparciales);
									localStorage.setItem("mipparciales", pparciales);
									localStorage.setItem("minpracticas", npracticas);
									localStorage.setItem("mippracticas", ppracticas);
									localStorage.setItem("mintrabajos", ntrabajos);
									localStorage.setItem("miptrabajos", ptrabajos);
									localStorage.setItem("minexposiciones", nexposiciones);
									localStorage.setItem("mipexposiciones", pexposiciones);
									//
									setInputdisable(true);
									setAccion('Modificar');
									setIcono('fa-solid fa-edit');
								}
							})
							.catch(err => console.log(err));
						}
					}
				}
			}
		}
	}

	const handleCancelar = () => {
		setNparciales(localStorage.getItem('minparciales'));
		setNpracticas(localStorage.getItem('minpracticas'));
		setNtrabajos(localStorage.getItem('mintrabajos'));
		setNexposiciones(localStorage.getItem('minexposiciones'));
		setPparciales(localStorage.getItem('mipparciales'));
		setPpracticas(localStorage.getItem('mippracticas'));
		setPtrabajos(localStorage.getItem('miptrabajos'));
		setPexposiciones(localStorage.getItem('mipexposiciones'));
		setInputdisable(true);
		setAccion('Modificar');
		setIcono('fa-solid fa-edit');
	}

	return(
		<div className="container-fluid myBody">
			<NavBar />
			<h3 className="titulosComponentes">Plan de evaluación</h3>
			<div className="contentComponentes">
			<div className="row">
				<div className="col-12">
					<h6 className="materiaelegida">
						Período:&nbsp;&nbsp;{ localStorage.getItem('miperiodo') }
						&nbsp;&nbsp;&nbsp;&nbsp;( { localStorage.getItem('micodmateria') } )&nbsp;&nbsp;-  
						&nbsp;&nbsp;{ localStorage.getItem('mimateria') }
						&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;Sección:&nbsp;&nbsp;{ localStorage.getItem('miseccion') }
					</h6>
				</div>
					<div className="col-12 mt-4 tablasPlan">	
						<table className="table table-striped">
							<thead className="fondoEncabezado">
								<tr>
									<th scope="col" className="colNum">{ "   " }</th>
									<th scope="col" className="colNumeros">PARCIALES</th>
									<th scope="col" className="colNumeros">PRACTICAS</th>
									<th scope="col" className="colNumeros">TRABAJOS</th>
									<th scope="col" className="colNumeros">EXPOSICIONES</th>
								</tr>
							</thead> 
							<tbody>
								<tr className="filasMateria">
									<th scope="row" className="colNum">NRO.</th>
									<td className="colNumeros">
										<input type="number" className="form-control form-control-sm controltextPlan" onChange={ handleNParciales } value={ nparciales } disabled={ inputdisable ? 'disabled' : ''} />
									</td>
									<td className="colNumeros">
										<input type="number" className="form-control form-control-sm controltextPlan" onChange={ handleNpracticas } value={ npracticas } disabled={ inputdisable ? 'disabled' : '' } />
									</td>
									<td className="colNumeros">
										<input type="number" className="form-control form-control-sm controltextPlan" onChange={ handleNtrabajos } value={ ntrabajos } disabled={ inputdisable ? 'disabled' : '' } />
									</td>
									<th scope="row" className="colNumeros">
										<input type="number" className="form-control form-control-sm controltextPlan" onChange={ handleNexposiciones } value={ nexposiciones } disabled={ inputdisable ? 'disabled' : '' } />
									</th>
								</tr>
							</tbody>
						</table>
						<div className="mt-4">
							<table className="table table-striped">
								<thead className="fondoEncabezado">
									<tr>
										<th scope="col" className="colNum">{ "   " }</th>
										<th scope="col" className="colNumeros">PARCIALES</th>
										<th scope="col" className="colNumeros">PRACTICAS</th>
										<th scope="col" className="colNumeros">TRABAJOS</th>
										<th scope="col" className="colNumeros">EXPOSICIONES</th>
									</tr>
								</thead> 
								<tbody>
									<tr className="filasMateria">
										<th scope="row" className="colNum">PORCENTAJE</th>
										<td className="colNumeros">
											<input type="number" className="form-control form-control-sm controltextPlan" onChange={ handlePparciales } value={ pparciales } placeholder="0.00" step="0.01" min="0" max="100" disabled={ inputdisable ? 'disabled' : '' } />
										</td>
										<td className="colNumeros">
											<input type="number" className="form-control form-control-sm controltextPlan" onChange={ handlePpracticas } value={ ppracticas } placeholder="0.00" step="0.01" min="0" max="100" disabled={ inputdisable ? 'disabled' : '' } />
										</td>
										<td className="colNumeros">
											<input type="number" className="form-control form-control-sm controltextPlan" onChange={ handlePtrabajos } value={ ptrabajos } placeholder="0.00" step="0.01" min="0" max="100" disabled={ inputdisable ? 'disabled' : '' } />
										</td>
										<th scope="row" className="colNumeros">
											<input type="number" className="form-control form-control-sm controltextPlan" onChange={ handlePexposiciones } value={ pexposiciones } placeholder="0.00" step="0.01" min="0" max="100" disabled={ inputdisable ? 'disabled' : '' } />
										</th>
									</tr>
								</tbody>
							</table>
						</div>	
						<button type="button" className="btn btn-primary btn-sm" onClick={ handleGuardar }>
							<span className={ icono }></span>
							&nbsp;&nbsp;{ accion }
						</button>	
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
						<button type="button" className="btn btn-secondary btn-sm" onClick={ handleCancelar } disabled={ inputdisable ? 'disabled' : '' }>
							<span className="fa-solid fa-redo"></span>
							&nbsp;&nbsp;Cancelar
						</button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
						<button type="button" className="btn btn-secondary btn-sm" onClick={ handleRegresar } disabled={ !inputdisable ? 'disabled' : '' }>
							<span className="fa-solid fa-reply"></span>
							&nbsp;&nbsp;Regresar
						</button>
					</div>


				</div>
			</div>
		</div>
	);
}