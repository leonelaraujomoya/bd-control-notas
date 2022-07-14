import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import NavBar from '../commun/Navbar';
import Tablerow from './Tablerow';
import '../commun/commun.css';

export default function Uploadnotes(){
	const [datamaterias, setDatamaterias] = useState([]);
	const [periodo, SetPeriodo] = useState("");

	const handlePeriodo = (e) => {
		SetPeriodo(e.target.value);
	}

	const handleBuscaPlan = (e) => {
		e.preventDefault();
		if(periodo.trim().length > 0) {
			axios.post("http://localhost:5000/api/planeval", {
				periodo: periodo
			}).then(res => {
				if(res.data.result === 0){
					setDatamaterias(res.data.docplanes);
				}else{
					setDatamaterias([]);
					Swal.fire({
					  position: 'center',
					  icon: 'error',
					  title: res.data.msg,
					  showConfirmButton: false,
					  timer: 1500
					});
				}
			})
			.catch(err => console.log(err));
		}else{
			Swal.fire({
			  position: 'center',
			  icon: 'error',
			  title: 'Debes introducir un período...',
			  showConfirmButton: false,
			  timer: 1500
			});
		}
	}

	const tableRows = datamaterias.map(rowMateria => {
		return(
			<Tablerow rowMateria = { rowMateria } />
		);
	}); 

	useEffect(() => {
		const tempPeriodo = localStorage.getItem('tmpper');
		if(tempPeriodo) {
			axios.post("http://localhost:5000/api/planeval", {
				periodo: tempPeriodo
			}).then(res => {
				if(res.data.result === 0){
					setDatamaterias(res.data.docplanes);
				}
				localStorage.removeItem("tmpper");
			})
			.catch(err => console.log(err));
		}
	}, []);

	return(
		<div className="container-fluid myBody">
			<NavBar />
			<h3 className="titulosComponentes">Carga de Notas</h3>
			<div className="contentComponentes">
				<div className="row">
					<div className="col-12">
						<div className="input-group grupoPeriodo">
							<label for="periodo">Período:</label>
							<input type="text" className="form-control form-control-sm" id="periodo" onChange={ handlePeriodo } />
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<button type="button" className="btn btn-primary btn-sm" onClick={ handleBuscaPlan }>
								<span className="fa-solid fa-search"></span>
							</button>
						</div>
					</div>
					<div className="col-12 mt-2">	
						<table className="table table-striped">
							<thead className="fondoEncabezado">
								<tr>
									<th scope="col" className="colCodigo">COD MAT</th>
									<th scope="col" className="colMateria">MATERIA</th>
									<th scope="col" className="colSeccion">SECCION</th>
									<th scope="col" className="colOpciones">OPCIONES</th>
								</tr>
							</thead> 
							<tbody>
								{ datamaterias.length > 0 ?
									 tableRows 
								:
									<tr className="filasMateria">
										<th scope="row" className="colCodigo">{ "        " }</th>
										<td className="colMateria colAlinea">{ "           " }</td>
										<td className="colSeccion">{ "   " }</td>
										<td className="colOpciones">
											<div className="contenidoOpciones">
												<div style={{ height: "30px" }}>
													{ "        " }
												</div>
											</div>
										</td>
									</tr>
								}
							</tbody>
						</table>			
					</div>
				</div>
			</div>
		</div>
	);
}