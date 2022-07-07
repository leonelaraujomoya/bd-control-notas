import React from 'react';
import { Navigate } from 'react-router-dom';

export default function VerifyAuthentication({children}){
	const nombProf = localStorage.getItem('nombprof');

	if(!nombProf) {
		return <Navigate to="/" replace />;
	}else{
		return children;
	}
}