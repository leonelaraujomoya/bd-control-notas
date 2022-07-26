import React from 'react';
import '../commun/commun.css';

export default function Reportinpdf({ periodo, misMaterias, repRef }){

	return(
		<div style={{ display: "none" }}>
			<div className="areaReportes"  ref={ repRef }>
				<h3 style={{ textAlign: "center" }}>Listado de Materias</h3>
				<h5 style={{ textAlign: "left", marginTop: "30px" }}>Período: { periodo }</h5>
				<div style={{ marginTop: "10px" }}>
					<table className="table table-striped table-sm tablenotas">
						<thead className="fondoEncabezado">
							<tr>
								<th scope="col" className="colCodigoMat fondoEncabezado2">CODIGO</th>
								<th scope="col" className="colMateria fondoEncabezado2">MATERIA</th>
								<th scope="col" className="colSeccionMat fondoEncabezado2">SECCION</th>
								<th scope="col" className="colEstudMat fondoEncabezado2">ESTUDIANTES</th>
							</tr>
						</thead> 
						<tbody>
							{misMaterias.map((materia, i) => {
								return(
									<tr key={ i }>
										<td>{ materia.codmat }</td>
										<td>{ materia.nombremat }</td>
										<td>{ materia.numsec }</td>
										<td>{ materia.cantest }</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}