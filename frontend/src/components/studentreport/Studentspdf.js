import React from 'react';
import '../commun/commun.css';

export default function Studentspdf({ repRef, periodo, materia, seccion, nparciales, npracticas, ntrabajos, nexposiciones, arregloDatos, contiene }){

	return(
		<div style={{ display: "none" }}>
			<div className={ contiene === "Con Notas Detalladas" ? "pageLanscape" : "areaReportesStudent" } ref={ repRef }>
				<h3 style={{ textAlign: "center" }}>Listado de Estudiantes</h3>
				<h6 style={{ textAlign: "left", marginTop: "30px" }}>Período: { periodo }   Materia: { materia.trim() }   Sección: { seccion }</h6>
				<div style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto" }}>
					<table className={ contiene === "Sin Notas" ? "table table-striped table-sm tablenotasRep" : "table table-striped table-sm tablenotas"}>
						<thead className="fondoEncabezado">
							<tr>
								<th scope="col" className="fondoEncabezado2" style={{ width:"90px", minWidth: "90px" }}>CEDULA</th>
								<th scope="col" className="fondoEncabezado2" style={{ width:"200px", minWidth: "200px" }}>NOMBRES Y APELLIDOS</th>
								{
									(contiene === "Con Notas Detalladas" && nparciales === 1) ?
										<th scope="col" className="fondoEncabezado2">PARCIAL 1</th>
									: (contiene === "Con Notas Detalladas" && nparciales === 2) ?
										<>
										<th scope="col" className="fondoEncabezado2">PARCIAL 1</th>
										<th scope="col" className="fondoEncabezado2">PARCIAL 2</th>
										</>
									: (contiene === "Con Notas Detalladas" && nparciales === 3) ?
										<>
										<th scope="col" className="fondoEncabezado2">PARCIAL 1</th>
										<th scope="col" className="fondoEncabezado2">PARCIAL 2</th>
										<th scope="col" className="fondoEncabezado2">PARCIAL 3</th>
										</>
									: (contiene === "Con Notas Detalladas" && nparciales === 4) ?
										<>
										<th scope="col" className="fondoEncabezado2">PARCIAL 1</th>
										<th scope="col" className="fondoEncabezado2">PARCIAL 2</th>
										<th scope="col" className="fondoEncabezado2">PARCIAL 3</th>
										<th scope="col" className="fondoEncabezado2">PARCIAL 4</th>
										</>
									: (contiene === "Con Notas Detalladas" && nparciales === 5) ?
										<>	
										<th scope="col" className="fondoEncabezado2">PARCIAL 1</th>
										<th scope="col" className="fondoEncabezado2">PARCIAL 2</th>
										<th scope="col" className="fondoEncabezado2">PARCIAL 3</th>
										<th scope="col" className="fondoEncabezado2">PARCIAL 4</th>
										<th scope="col" className="fondoEncabezado2">PARCIAL 5</th>
										</>
									: ""
								}
								{
									(contiene === "Con Notas Detalladas" && npracticas === 1) ?
										<th scope="col" className="fondoEncabezado2">PRACTICA 1</th>
									: (contiene === "Con Notas Detalladas" && npracticas === 2) ?
										<>
										<th scope="col" className="fondoEncabezado2">PRACTICA 1</th>
										<th scope="col" className="fondoEncabezado2">PRACTICA 2</th>
										</>
									: (contiene === "Con Notas Detalladas" && npracticas === 3) ?
										<>
										<th scope="col" className="fondoEncabezado2">PRACTICA 1</th>
										<th scope="col" className="fondoEncabezado2">PRACTICA 2</th>
										<th scope="col" className="fondoEncabezado2">PRACTICA 3</th>
										</>
									: (contiene === "Con Notas Detalladas" && npracticas === 4) ?
										<>
										<th scope="col" className="fondoEncabezado2">PRACTICA 1</th>
										<th scope="col" className="fondoEncabezado2">PRACTICA 2</th>
										<th scope="col" className="fondoEncabezado2">PRACTICA 3</th>
										<th scope="col" className="fondoEncabezado2">PRACTICA 4</th>
										</>
									: (contiene === "Con Notas Detalladas" && npracticas === 5) ?	
										<>
										<th scope="col" className="fondoEncabezado2">PRACTICA 1</th>
										<th scope="col" className="fondoEncabezado2">PRACTICA 2</th>
										<th scope="col" className="fondoEncabezado2">PRACTICA 3</th>
										<th scope="col" className="fondoEncabezado2">PRACTICA 4</th>
										<th scope="col" className="fondoEncabezado2">PRACTICA 5</th>
										</>
									: ""
								}
								{
									(contiene === "Con Notas Detalladas" && ntrabajos === 1) ?
										<th scope="col" className="fondoEncabezado2">TRABAJO 1</th>
									: (contiene === "Con Notas Detalladas" && ntrabajos === 2) ?
										<>
										<th scope="col" className="fondoEncabezado2">TRABAJO 1</th>
										<th scope="col" className="fondoEncabezado2">TRABAJO 2</th>
										</>
									: (contiene === "Con Notas Detalladas" && ntrabajos === 3) ?
										<>
										<th scope="col" className="fondoEncabezado2">TRABAJO 1</th>
										<th scope="col" className="fondoEncabezado2">TRABAJO 2</th>
										<th scope="col" className="fondoEncabezado2">TRABAJO 3</th>
										</>
									: (contiene === "Con Notas Detalladas" && ntrabajos === 4) ?
										<>
										<th scope="col" className="fondoEncabezado2">TRABAJO 1</th>
										<th scope="col" className="fondoEncabezado2">TRABAJO 2</th>
										<th scope="col" className="fondoEncabezado2">TRABAJO 3</th>
										<th scope="col" className="fondoEncabezado2">TRABAJO 4</th>
										</>
									: (contiene === "Con Notas Detalladas" && ntrabajos === 5) ?	
										<>
										<th scope="col" className="fondoEncabezado2">TRABAJO 1</th>
										<th scope="col" className="fondoEncabezado2">TRABAJO 2</th>
										<th scope="col" className="fondoEncabezado2">TRABAJO 3</th>
										<th scope="col" className="fondoEncabezado2">TRABAJO 4</th>
										<th scope="col" className="fondoEncabezado2">TRABAJO 5</th>
										</>
									: ""
								}
								{
									(contiene === "Con Notas Detalladas" && nexposiciones === 1) ?
										<th scope="col" className="fondoEncabezado2">EXPOSICION 1</th>
									: (contiene === "Con Notas Detalladas" && nexposiciones === 2) ?
										<>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 1</th>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 2</th>
										</>
									: (contiene === "Con Notas Detalladas" && nexposiciones === 3) ?
										<>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 1</th>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 2</th>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 3</th>
										</>
									: (contiene === "Con Notas Detalladas" && nexposiciones === 4) ?
										<>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 1</th>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 2</th>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 3</th>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 4</th>
										</>
									: (contiene === "Con Notas Detalladas" && nexposiciones === 5) ?	
										<>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 1</th>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 2</th>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 3</th>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 4</th>
										<th scope="col" className="fondoEncabezado2">EXPOSICION 5</th>
										</>
									: ""
								}
								{
									!(contiene === "Sin Notas") ?
										<th scope="col" className="fondoEncabezado2" style={{ width:"90px", minWidth: "90px" }}>DEFINITIVA</th>
									:
										""
								}
							</tr>
						</thead> 
						<tbody>
							{arregloDatos.map((estudiante, i) => {
								return(
									<tr key={ i }>
										<td style={{ width:"90px", minWidth: "90px" }}>{ estudiante.cedulaest }</td>
										<td style={{ width:"200px", minWidth: "200px" }}>{ estudiante.nombreest }</td>
										{
											(contiene === "Con Notas Detalladas" && nparciales === 1) ?
												<td>{ estudiante.parcial1 }</td>
											: (contiene === "Con Notas Detalladas" && nparciales === 2) ?
												<>
												<td>{ estudiante.parcial1 }</td>
												<td>{ estudiante.parcial2 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && nparciales === 3) ?
												<>
												<td>{ estudiante.parcial1 }</td>
												<td>{ estudiante.parcial2 }</td>
												<td>{ estudiante.parcial3 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && nparciales === 4) ?
												<>
												<td>{ estudiante.parcial1 }</td>
												<td>{ estudiante.parcial2 }</td>
												<td>{ estudiante.parcial3 }</td>
												<td>{ estudiante.parcial4 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && nparciales === 5) ?
												<>
												<td>{ estudiante.parcial1 }</td>
												<td>{ estudiante.parcial2 }</td>
												<td>{ estudiante.parcial3 }</td>
												<td>{ estudiante.parcial4 }</td>
												<td>{ estudiante.parcial5 }</td>
												</>
											: ""
										}
										{
											(contiene === "Con Notas Detalladas" && npracticas === 1) ?
												<td>{ estudiante.practica1 }</td>
											: (contiene === "Con Notas Detalladas" && npracticas === 2) ?
												<>
												<td>{ estudiante.practica1 }</td>
												<td>{ estudiante.practica2 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && npracticas === 3) ?
												<>
												<td>{ estudiante.practica1 }</td>
												<td>{ estudiante.practica2 }</td>
												<td>{ estudiante.practica3 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && npracticas === 4) ?
												<>
												<td>{ estudiante.practica1 }</td>
												<td>{ estudiante.practica2 }</td>
												<td>{ estudiante.practica3 }</td>
												<td>{ estudiante.practica4 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && npracticas === 5) ?
												<>
												<td>{ estudiante.practica1 }</td>
												<td>{ estudiante.practica2 }</td>
												<td>{ estudiante.practica3 }</td>
												<td>{ estudiante.practica4 }</td>
												<td>{ estudiante.practica5 }</td>
												</>
											: ""
										}
										{
											(contiene === "Con Notas Detalladas" && ntrabajos === 1) ?
												<td>{ estudiante.trabajo1 }</td>
											: (contiene === "Con Notas Detalladas" && ntrabajos === 2) ?
												<>
												<td>{ estudiante.trabajo1 }</td>
												<td>{ estudiante.trabajo2 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && ntrabajos === 3) ?
												<>
												<td>{ estudiante.trabajo1 }</td>
												<td>{ estudiante.trabajo2 }</td>
												<td>{ estudiante.trabajo3 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && ntrabajos === 4) ?
												<>
												<td>{ estudiante.trabajo1 }</td>
												<td>{ estudiante.trabajo2 }</td>
												<td>{ estudiante.trabajo3 }</td>
												<td>{ estudiante.trabajo4 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && ntrabajos === 5) ?
												<>
												<td>{ estudiante.trabajo1 }</td>
												<td>{ estudiante.trabajo2 }</td>
												<td>{ estudiante.trabajo3 }</td>
												<td>{ estudiante.trabajo4 }</td>
												<td>{ estudiante.trabajo5 }</td>
												</>
											: ""
										}
										{
											(contiene === "Con Notas Detalladas" && nexposiciones === 1) ?
												<td>{ estudiante.exposicion1 }</td>
											: (contiene === "Con Notas Detalladas" && nexposiciones === 2) ?
												<>
												<td>{ estudiante.exposicion1 }</td>
												<td>{ estudiante.exposicion2 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && nexposiciones === 3) ?
												<>
												<td>{ estudiante.exposicion1 }</td>
												<td>{ estudiante.exposicion2 }</td>
												<td>{ estudiante.exposicion3 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && nexposiciones === 4) ?
												<>
												<td>{ estudiante.exposicion1 }</td>
												<td>{ estudiante.exposicion2 }</td>
												<td>{ estudiante.exposicion3 }</td>
												<td>{ estudiante.exposicion4 }</td>
												</>
											: (contiene === "Con Notas Detalladas" && nexposiciones === 5) ?
												<>
												<td>{ estudiante.exposicion1 }</td>
												<td>{ estudiante.exposicion2 }</td>
												<td>{ estudiante.exposicion3 }</td>
												<td>{ estudiante.exposicion4 }</td>
												<td>{ estudiante.exposicion5 }</td>
												</>
											: ""
										}
										{
											!(contiene === "Sin Notas") ?
												<td style={{ width:"90px", minWidth: "90px" }}>{ estudiante.definitiva }</td>
											:
												""
										}
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