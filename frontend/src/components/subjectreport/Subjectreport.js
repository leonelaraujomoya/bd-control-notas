import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import Swal from 'sweetalert2';
import { useReactToPrint } from 'react-to-print';
import NavBar from '../commun/Navbar';
import Reportinpdf from './Reportinpdf';
import '../commun/commun.css';

export default function Subjectreport(){
	const reporteRef = useRef();

	const [periodo, SetPeriodo] = useState("");
	const [exporta, setExporta] = useState("Imprimir / Exportar a PDF");
	const [misMaterias, setMisMaterias] = useState([]);
	const [existe, setExiste] = useState(false);

	const handlePrint = useReactToPrint({
		content: () => reporteRef.current,
		documentTitle: "Listado_Materias_" + periodo.trim()
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

	useEffect(() => {
		var arregloTmp = [];
		axios.post("http://localhost:5000/api/secciones", {
			periodo: periodo
		}).then(res => {
			if(res.data.result === 0){
				//
				for(let n = 0; n < res.data.docs.length; n++){
					arregloTmp[n] = {
						codmat: res.data.docs[n].materia.codmat,
						nombremat: res.data.docs[n].materia.nombremat,
						numsec: res.data.docs[n].numsec,
						cantest: res.data.docs[n].cantest
					};
				}
				setMisMaterias(arregloTmp);
				setExiste(true);
			}else{
				setMisMaterias([]);
				setExiste(false);
			}
		})
		.catch(err => console.log(err));
	}, [periodo]);

	const handleGenerarExcel = () => {
		if(periodo.trim().length > 0) {
			var arregloTmp = [];
			axios.post("http://localhost:5000/api/secciones", {
				periodo: periodo
			}).then(res => {
				if(res.data.result === 0){
					//
					for(let n = 0; n < res.data.docs.length; n++){
						arregloTmp[n] = {
							codmat: res.data.docs[n].materia.codmat,
							nombremat: res.data.docs[n].materia.nombremat,
							numsec: res.data.docs[n].numsec,
							cantest: res.data.docs[n].cantest
						};
					}
					setMisMaterias(arregloTmp);
					setExiste(true);
					//
					var wb = XLSX.utils.book_new();
					var ws = XLSX.utils.json_to_sheet(arregloTmp, {origin:"A4"});
					XLSX.utils.sheet_add_aoa(ws, [["LISTADO DE MATERIAS"]], {origin:"A1"});
					XLSX.utils.sheet_add_aoa(ws, [["Período: " + periodo]], {origin:"A3"});
					XLSX.utils.sheet_add_aoa(ws, [["Cod. Mat.", "Materia", "Sección", "Estudiantes"]], {origin:"A4"});

					XLSX.utils.book_append_sheet(wb, ws, "Materias");
					XLSX.writeFile(wb, "Listado_Materias_" + periodo.trim() + ".xlsx");
				}else{
					setMisMaterias([]);
					setExiste(false);
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

	const handlePeriodo = (e) => {
		SetPeriodo(e.target.value);
	}

	const handleExporta = (e) => {
		setExporta(e.target.value);
	}

	return(
		<div className="container-fluid myBody">
			<NavBar />
			<h3 className="titulosComponentes">Listar Materias</h3>
			<div className="contentReportes">
				<div className="row">
					<div className="col-12">
						<div className="input-group grupoPeriodoReportes">
							<label for="periodo">Período:</label>
							<input type="text" className="form-control form-control-sm" id="periodo" onChange={ handlePeriodo } />
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
							<button type="button" className="btn btn-primary btn-sm" onClick={ handlePrint }>
								<span className="fa-solid fa-print"></span>
								&nbsp;&nbsp;Generar Reporte
							</button>
						: 
							<button type="button" className="btn btn-primary btn-sm" onClick={ handlePrintError }>
								<span className="fa-solid fa-print"></span>
								&nbsp;&nbsp;Generar Reporte
							</button>
						}
					</div>
				</div>
			</div>	
			{ (exporta === "Imprimir / Exportar a PDF" && misMaterias.length > 0) ?
				<Reportinpdf repRef={ reporteRef } periodo={ periodo } misMaterias={ misMaterias }/>
			: "" }
		</div>
	);
}