import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import imgLogin from '../../assets/login.png';
import './login.css';

export default function Login(){
	const navigate = useNavigate();

	const [usuario, setUsuario] = useState("");
	const [clave, setClave] = useState("");
	const [verpass, setVerpass] = useState(false);

	const handleUsuario = (e) => {
		setUsuario(e.target.value);
	}

	const handleClave = (e) => {
		setClave(e.target.value);
	}

	const handleVerpass = () => {
		setVerpass(!verpass);
	}

	const handleIniciar = (e) => {
		e.preventDefault();
		if(usuario.trim().length > 0 && clave.trim().length > 0) {
			axios.post("http://localhost:5000/api/login", {
				usuario: usuario,
				clave: clave
			}).then(res => {
				if(res.data.result == 0){
					localStorage.setItem("nombprof", res.data.nombprof);
					navigate("/home");
				}else{
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
			if(usuario.trim().length == 0) {
				Swal.fire({
				  position: 'center',
				  icon: 'error',
				  title: 'Debes introducir un nombre de usuario...',
				  showConfirmButton: false,
				  timer: 1500
				});
			}else{
				Swal.fire({
				  position: 'center',
				  icon: 'error',
				  title: 'Debes introducir una contraseña...',
				  showConfirmButton: false,
				  timer: 1500
				});
			}
		}
	}

	return(
		<div className="container bbbb">
			<div className="row">
				<div className="col-12">
					<img src={ imgLogin } alt="" width="150px" height="150px" />
				</div>
				<div className="col containerCard">
					<div className="card bordeLogin">
						<div className="card-body">
							<div className="card-title">
								<h5 className="titulLogin">ACCESO AL SISTEMA</h5>
							</div>
							<div className="card-text">
								<form className="row align-items-center" onSubmit={ handleIniciar }>
  									<div className="input-group col-12">
    									<label for="nomusuario" className="labelLogin">Nombre de usuario</label>
      									<input type="text" className="form-control" id="nomusuario" onChange={ handleUsuario } />
  									</div>
  									<div className="input-group col-12 mt-3">
    									<label for="clavusuario" className="labelLogin">Contraseña</label>
      									<input type={ !verpass ? "password" : "text" } className="form-control" id="clavusuario" onChange={ handleClave } />
      									<div className="spanLogin" onClick={ handleVerpass }>
      										<span className={ !verpass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye" }></span>
      									</div>
  									</div>
  									<div className="col-12 mt-4">
										<button type="submit" className="btn btn-primary">Iniciar Sesión</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}