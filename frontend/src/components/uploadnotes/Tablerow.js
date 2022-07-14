import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../commun/commun.css';

export default function Tablerow({ rowMateria }) {
	const navigate = useNavigate();

	const handleCreaplan = () => {
		localStorage.setItem("miperiodo", rowMateria.codperiodo);
		localStorage.setItem("micodmateria", rowMateria.materia.codmat);
		localStorage.setItem("mimateria", rowMateria.materia.nombremat);
		localStorage.setItem("miseccion", rowMateria.numsec);
		navigate("/uploadplan");
	}

	const handleVerplan = () => {
		localStorage.setItem("miperiodo", rowMateria.codperiodo);
		localStorage.setItem("micodmateria", rowMateria.materia.codmat);
		localStorage.setItem("mimateria", rowMateria.materia.nombremat);
		localStorage.setItem("miseccion", rowMateria.numsec);
		localStorage.setItem("minparciales", rowMateria.numparc);
		localStorage.setItem("mipparciales", rowMateria.porparc);
		localStorage.setItem("minpracticas", rowMateria.numpract);
		localStorage.setItem("mippracticas", rowMateria.porpract);
		localStorage.setItem("mintrabajos", rowMateria.numtrab);
		localStorage.setItem("miptrabajos", rowMateria.portrab);
		localStorage.setItem("minexposiciones", rowMateria.numexpo);
		localStorage.setItem("mipexposiciones", rowMateria.porexpo);
		navigate("/seeplan");
	}

	const handleCargarnotas = () => {
		
	}
	
	return(
		<tr className="filasMateria">
			<th scope="row" className="colCodigo">{ rowMateria.materia.codmat }</th>
			<td className="colMateria colAlinea">{ rowMateria.materia.nombremat }</td>
			<td className="colSeccion">{ rowMateria.numsec }</td>
			<td className="colOpciones">
				<div className="contenidoOpciones">
					{ (rowMateria.numparc === 0 && rowMateria.numpract === 0 && rowMateria.numtrab === 0 && rowMateria.numexpo === 0) ?
						<button type="button" className="btn btn-primary btn-sm" onClick={ handleCreaplan }>
							<span className="fa-solid fa-plus-circle"></span>
							&nbsp;&nbsp;Crear plan
						</button>
					: ''}	
					{ (rowMateria.numparc > 0 || rowMateria.numpract > 0 || rowMateria.numtrab > 0 || rowMateria.numexpo > 0) ?
						<button type="button" className="btn btn-success btn-sm" onClick={ handleVerplan }>
							<span className="fa-solid fa-search"></span>
							&nbsp;&nbsp;Ver plan
						</button>
					: ''}
					{ (rowMateria.numparc > 0 || rowMateria.numpract > 0 || rowMateria.numtrab > 0 || rowMateria.numexpo > 0) ?
						<button type="button" className="btn btn-primary btn-sm" onClick={ handleCargarnotas }>
							<span className="fa-solid fa-pen"></span>
							&nbsp;&nbsp;Cargar notas
						</button>
					: ''}
				</div>
			</td>
		</tr>
	);
}
