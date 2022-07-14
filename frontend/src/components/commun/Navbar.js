import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoUDO from '../../assets/udo.png';
import './commun.css';

export default function Navbar(){
	const navigate = useNavigate();

	const handleUploadnotes = (e) => {
		e.preventDefault();
		navigate("/uploadnotes");
	}

	const handleSubjectreport = (e) => {
		e.preventDefault();
		navigate("/subjectreport");
	}

	const handleStudentreport = (e) => {
		e.preventDefault();
		navigate("/studentreport");
	}

	const handleCerrarSesion = () => {
		localStorage.removeItem("nombprof");
		navigate("/");
	}

	return(
		<div>
			<div className="fondoNavbar"></div>
			<div className="myNavBar">
				<a className="navbar-brand" href="/home">
				<div className="imgNav">
					<img src={ logoUDO } alt="" width="50px" height="50px" />
				</div>
				</a>
				<div className="myOptions">
					<ul className="nav">
			  			<li class="nav-item">
			    			<a className="nav-link active" aria-current="page" href="" onClick={ handleUploadnotes }>Carga de Notas</a>
			  			</li>
			  			<li className="nav-item dropdown">
				          <a className="nav-link dropdown-toggle" href="#" id="navbarSecondaryDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				            Reportes
				          </a>
				          <ul className="dropdown-menu dropdown-menu-secondary" aria-labelledby="navbarSecondaryDropdownMenuLink">
				            <li><a className="dropdown-item" href="" onClick={ handleSubjectreport }>Listar Materias</a></li>
				            <li><a className="dropdown-item" href="" onClick={ handleStudentreport }>Listar Estudiantes</a></li>
				          </ul>
				        </li>
					</ul>
					<div className="areaUsuario">
						<span className= "fa-solid fa-user" style={{ fontSize: "30px", marginLeft: "140px"}}></span>
						<div className="nav-item dropdown">
				          <a className="nav-link dropdown-toggle" href="#" id="navbarSecondaryDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
				            { localStorage.getItem('nombprof') }
				          </a>
				          <ul className="dropdown-menu dropdown-menu-secondary" aria-labelledby="navbarSecondaryDropdownMenuLink">
				            <li><a className="dropdown-item" href="" onClick={ handleCerrarSesion }>Cerrar Sesión</a></li>
				          </ul>
				        </div>
					</div>
				</div>
			</div>
		</div>
	);
}