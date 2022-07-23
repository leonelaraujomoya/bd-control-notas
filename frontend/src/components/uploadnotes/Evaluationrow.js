import React, { useState, useEffect } from 'react';
import '../commun/commun.css';

export default function Evaluationrow({ rowNotas }) {
	const [nparciales, setNparciales] = useState(0);
	const [npracticas, setNpracticas] = useState(0);
	const [ntrabajos, setNtrabajos] = useState(0);
	const [nexposiciones, setNexposiciones] = useState(0);
	//
	const [pparciales, setPparciales] = useState(0.00);
	const [ppracticas, setPpracticas] = useState(0.00);
	const [ptrabajos, setPtrabajos] = useState(0.00);
	const [pexposiciones, setPexposiciones] = useState(0.00);
	//
	const [clasepa1, setClasepa1] = useState('');
	const [clasepa2, setClasepa2] = useState('');
	const [clasepa3, setClasepa3] = useState('');
	const [clasepa4, setClasepa4] = useState('');
	const [clasepa5, setClasepa5] = useState('');
	//
	const [clasepr1, setClasepr1] = useState('');
	const [clasepr2, setClasepr2] = useState('');
	const [clasepr3, setClasepr3] = useState('');
	const [clasepr4, setClasepr4] = useState('');
	const [clasepr5, setClasepr5] = useState('');
	//
	const [clasetr1, setClasetr1] = useState('');
	const [clasetr2, setClasetr2] = useState('');
	const [clasetr3, setClasetr3] = useState('');
	const [clasetr4, setClasetr4] = useState('');
	const [clasetr5, setClasetr5] = useState('');
	//
	const [claseex1, setClaseex1] = useState('');
	const [claseex2, setClaseex2] = useState('');
	const [claseex3, setClaseex3] = useState('');
	const [claseex4, setClaseex4] = useState('');
	const [claseex5, setClaseex5] = useState('');
	// NOTAS
	const [npa1, setNpa1] = useState(0.00);
	const [npa2, setNpa2] = useState(0.00);
	const [npa3, setNpa3] = useState(0.00);
	const [npa4, setNpa4] = useState(0.00);
	const [npa5, setNpa5] = useState(0.00);
	const [npr1, setNpr1] = useState(0.00);
	const [npr2, setNpr2] = useState(0.00);
	const [npr3, setNpr3] = useState(0.00);
	const [npr4, setNpr4] = useState(0.00);
	const [npr5, setNpr5] = useState(0.00);
	const [ntr1, setNtr1] = useState(0.00);
	const [ntr2, setNtr2] = useState(0.00);
	const [ntr3, setNtr3] = useState(0.00);
	const [ntr4, setNtr4] = useState(0.00);
	const [ntr5, setNtr5] = useState(0.00);
	const [nex1, setNex1] = useState(0.00);
	const [nex2, setNex2] = useState(0.00);
	const [nex3, setNex3] = useState(0.00);
	const [nex4, setNex4] = useState(0.00);
	const [nex5, setNex5] = useState(0.00);
	const [ndef, setNdef] = useState(0.00);


	useEffect(() => {
		setNparciales(localStorage.getItem('minparciales'));
		setNpracticas(localStorage.getItem('minpracticas'));
		setNtrabajos(localStorage.getItem('mintrabajos'));
		setNexposiciones(localStorage.getItem('minexposiciones'));
		//
		setPparciales(localStorage.getItem('mipparciales'));
		setPpracticas(localStorage.getItem('mippracticas'));
		setPtrabajos(localStorage.getItem('miptrabajos'));
		setPexposiciones(localStorage.getItem('mipexposiciones'));
		//
		var parcialDef = 0;
		var practicaDef = 0;
		var trabajoDef = 0;
		var exposicionDef = 0;
		let ntemp1 = 0;
		let ntemp2 = 0;
		let ntemp3 = 0;
		let ntemp4 = 0;
		let ntemp5 = 0;
		switch(parseInt(localStorage.getItem('minparciales'), 10)){
			case 0:
				setClasepa1("colNota coldisabled fondoEncabezado2");
				setClasepa2("colNota coldisabled fondoEncabezado2");
				setClasepa3("colNota coldisabled fondoEncabezado2");
				setClasepa4("colNota coldisabled fondoEncabezado2");
				setClasepa5("colNota coldisabled fondoEncabezado2");
				break;
			case 1:
				setClasepa1("colNota fondoEncabezado2");
				setClasepa2("colNota coldisabled fondoEncabezado2");
				setClasepa3("colNota coldisabled fondoEncabezado2");
				setClasepa4("colNota coldisabled fondoEncabezado2");
				setClasepa5("colNota coldisabled fondoEncabezado2");
				//
				ntemp1 = rowNotas.evaluaciones.parciales[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				setNpa1(rowNotas.evaluaciones.parciales[0]);
				parcialDef = ntemp1 * (parseFloat(localStorage.getItem('mipparciales')) / 100);
				break;
			case 2:
				setClasepa1("colNota fondoEncabezado2");
				setClasepa2("colNota fondoEncabezado2");
				setClasepa3("colNota coldisabled fondoEncabezado2");
				setClasepa4("colNota coldisabled fondoEncabezado2");
				setClasepa5("colNota coldisabled fondoEncabezado2");
				//
				setNpa1(rowNotas.evaluaciones.parciales[0]);
				setNpa2(rowNotas.evaluaciones.parciales[1]);
				//
				ntemp1 = rowNotas.evaluaciones.parciales[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.parciales[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				parcialDef = ((ntemp1 + ntemp2) / 2) * (parseFloat(localStorage.getItem('mipparciales')) / 100);
				break;
			case 3:
				setClasepa1("colNota fondoEncabezado2");
				setClasepa2("colNota fondoEncabezado2");
				setClasepa3("colNota fondoEncabezado2");
				setClasepa4("colNota coldisabled fondoEncabezado2");
				setClasepa5("colNota coldisabled fondoEncabezado2");
				//
				setNpa1(rowNotas.evaluaciones.parciales[0]);
				setNpa2(rowNotas.evaluaciones.parciales[1]);
				setNpa3(rowNotas.evaluaciones.parciales[2]);
				//
				ntemp1 = rowNotas.evaluaciones.parciales[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.parciales[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.parciales[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				parcialDef = ((ntemp1 + ntemp2 + ntemp3) / 3) * (parseFloat(localStorage.getItem('mipparciales')) / 100);
				break;
			case 4:
				setClasepa1("colNota fondoEncabezado2");
				setClasepa2("colNota fondoEncabezado2");
				setClasepa3("colNota fondoEncabezado2");
				setClasepa4("colNota fondoEncabezado2");
				setClasepa5("colNota coldisabled fondoEncabezado2");
				//
				setNpa1(rowNotas.evaluaciones.parciales[0]);
				setNpa2(rowNotas.evaluaciones.parciales[1]);
				setNpa3(rowNotas.evaluaciones.parciales[2]);
				setNpa4(rowNotas.evaluaciones.parciales[3]);
				//
				ntemp1 = rowNotas.evaluaciones.parciales[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.parciales[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.parciales[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				ntemp4 = rowNotas.evaluaciones.parciales[3];
				if (isNaN(ntemp4)){
					ntemp4 = 0;
				}
				parcialDef = ((ntemp1 + ntemp2 + ntemp3 + ntemp4) / 4) * (parseFloat(localStorage.getItem('mipparciales')) / 100);
				break;
			case 5:
				setClasepa1("colNota fondoEncabezado2");
				setClasepa2("colNota fondoEncabezado2");
				setClasepa3("colNota fondoEncabezado2");
				setClasepa4("colNota fondoEncabezado2");
				setClasepa5("colNota fondoEncabezado2");
				//
				setNpa1(rowNotas.evaluaciones.parciales[0]);
				setNpa2(rowNotas.evaluaciones.parciales[1]);
				setNpa3(rowNotas.evaluaciones.parciales[2]);
				setNpa4(rowNotas.evaluaciones.parciales[3]);
				setNpa5(rowNotas.evaluaciones.parciales[4]);
				//
				ntemp1 = rowNotas.evaluaciones.parciales[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.parciales[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.parciales[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				ntemp4 = rowNotas.evaluaciones.parciales[3];
				if (isNaN(ntemp4)){
					ntemp4 = 0;
				}
				ntemp5 = rowNotas.evaluaciones.parciales[4];
				if (isNaN(ntemp5)){
					ntemp5 = 0;
				}
				parcialDef = ((ntemp1 + ntemp2 + ntemp3 + ntemp4 + ntemp5) / 5) * (parseFloat(localStorage.getItem('mipparciales')) / 100);
				break;
		}
		//
		switch(parseInt(localStorage.getItem('minpracticas'), 10)){
			case 0:
				setClasepr1("colNota coldisabled fondoEncabezado2");
				setClasepr2("colNota coldisabled fondoEncabezado2");
				setClasepr3("colNota coldisabled fondoEncabezado2");
				setClasepr4("colNota coldisabled fondoEncabezado2");
				setClasepr5("colNota coldisabled fondoEncabezado2");
				break;
			case 1:
				setClasepr1("colNota fondoEncabezado2");
				setClasepr2("colNota coldisabled fondoEncabezado2");
				setClasepr3("colNota coldisabled fondoEncabezado2");
				setClasepr4("colNota coldisabled fondoEncabezado2");
				setClasepr5("colNota coldisabled fondoEncabezado2");
				//
				setNpr1(rowNotas.evaluaciones.practicas[0]);
				ntemp1 = rowNotas.evaluaciones.practicas[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				practicaDef = ntemp1 * (parseFloat(localStorage.getItem('mippracticas')) / 100);
				break;
			case 2:
				setClasepr1("colNota fondoEncabezado2");
				setClasepr2("colNota fondoEncabezado2");
				setClasepr3("colNota coldisabled fondoEncabezado2");
				setClasepr4("colNota coldisabled fondoEncabezado2");
				setClasepr5("colNota coldisabled fondoEncabezado2");
				//
				setNpr1(rowNotas.evaluaciones.practicas[0]);
				setNpr2(rowNotas.evaluaciones.practicas[1]);
				//
				ntemp1 = rowNotas.evaluaciones.practicas[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.practicas[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				practicaDef = ((ntemp1 + ntemp2) / 2) * (parseFloat(localStorage.getItem('mippracticas')) / 100);
				break;
			case 3:
				setClasepr1("colNota fondoEncabezado2");
				setClasepr2("colNota fondoEncabezado2");
				setClasepr3("colNota fondoEncabezado2");
				setClasepr4("colNota coldisabled fondoEncabezado2");
				setClasepr5("colNota coldisabled fondoEncabezado2");
				//
				setNpr1(rowNotas.evaluaciones.practicas[0]);
				setNpr2(rowNotas.evaluaciones.practicas[1]);
				setNpr3(rowNotas.evaluaciones.practicas[2]);
				//
				ntemp1 = rowNotas.evaluaciones.practicas[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.practicas[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.practicas[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				practicaDef = ((ntemp1 + ntemp2 + ntemp3) / 3) * (parseFloat(localStorage.getItem('mippracticas')) / 100);
				break;
			case 4:
				setClasepr1("colNota fondoEncabezado2");
				setClasepr2("colNota fondoEncabezado2");
				setClasepr3("colNota fondoEncabezado2");
				setClasepr4("colNota fondoEncabezado2");
				setClasepr5("colNota coldisabled fondoEncabezado2");
				//
				setNpr1(rowNotas.evaluaciones.practicas[0]);
				setNpr2(rowNotas.evaluaciones.practicas[1]);
				setNpr3(rowNotas.evaluaciones.practicas[2]);
				setNpr4(rowNotas.evaluaciones.practicas[3]);
				//
				ntemp1 = rowNotas.evaluaciones.practicas[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.practicas[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.practicas[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				ntemp4 = rowNotas.evaluaciones.practicas[3];
				if (isNaN(ntemp4)){
					ntemp4 = 0;
				}
				practicaDef = ((ntemp1 + ntemp2 + ntemp3 + ntemp4) / 4) * (parseFloat(localStorage.getItem('mippracticas')) / 100);
				break;
			case 5:
				setClasepr1("colNota fondoEncabezado2");
				setClasepr2("colNota fondoEncabezado2");
				setClasepr3("colNota fondoEncabezado2");
				setClasepr4("colNota fondoEncabezado2");
				setClasepr5("colNota fondoEncabezado2");
				//
				setNpr1(rowNotas.evaluaciones.practicas[0]);
				setNpr2(rowNotas.evaluaciones.practicas[1]);
				setNpr3(rowNotas.evaluaciones.practicas[2]);
				setNpr4(rowNotas.evaluaciones.practicas[3]);
				setNpr5(rowNotas.evaluaciones.practicas[4]);
				//
				ntemp1 = rowNotas.evaluaciones.practicas[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.practicas[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.practicas[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				ntemp4 = rowNotas.evaluaciones.practicas[3];
				if (isNaN(ntemp4)){
					ntemp4 = 0;
				}
				ntemp5 = rowNotas.evaluaciones.practicas[4];
				if (isNaN(ntemp5)){
					ntemp5 = 0;
				}
				practicaDef = ((ntemp1 + ntemp2 + ntemp3 + ntemp4 + ntemp5) / 5) * (parseFloat(localStorage.getItem('mippracticas')) / 100);
				break;
		}
		//
		switch(parseInt(localStorage.getItem('mintrabajos'), 10)){
			case 0:
				setClasetr1("colNota coldisabled fondoEncabezado2");
				setClasetr2("colNota coldisabled fondoEncabezado2");
				setClasetr3("colNota coldisabled fondoEncabezado2");
				setClasetr4("colNota coldisabled fondoEncabezado2");
				setClasetr5("colNota coldisabled fondoEncabezado2");
				break;
			case 1:
				setClasetr1("colNota fondoEncabezado2");
				setClasetr2("colNota coldisabled fondoEncabezado2");
				setClasetr3("colNota coldisabled fondoEncabezado2");
				setClasetr4("colNota coldisabled fondoEncabezado2");
				setClasetr5("colNota coldisabled fondoEncabezado2");
				//
				setNtr1(rowNotas.evaluaciones.trabajos[0]);
				//
				ntemp1 = rowNotas.evaluaciones.trabajos[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				trabajoDef = ntemp1 * (parseFloat(localStorage.getItem('miptrabajos')) / 100);
				break;
			case 2:
				setClasetr1("colNota fondoEncabezado2");
				setClasetr2("colNota fondoEncabezado2");
				setClasetr3("colNota coldisabled fondoEncabezado2");
				setClasetr4("colNota coldisabled fondoEncabezado2");
				setClasetr5("colNota coldisabled fondoEncabezado2");
				//
				setNtr1(rowNotas.evaluaciones.trabajos[0]);
				setNtr2(rowNotas.evaluaciones.trabajos[1]);
				//
				ntemp1 = rowNotas.evaluaciones.trabajos[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.trabajos[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				trabajoDef = ((ntemp1 + ntemp2) / 2) * (parseFloat(localStorage.getItem('miptrabajos')) / 100);
				break;
			case 3:
				setClasetr1("colNota fondoEncabezado2");
				setClasetr2("colNota fondoEncabezado2");
				setClasetr3("colNota fondoEncabezado2");
				setClasetr4("colNota coldisabled fondoEncabezado2");
				setClasetr5("colNota coldisabled fondoEncabezado2");
				//
				setNtr1(rowNotas.evaluaciones.trabajos[0]);
				setNtr2(rowNotas.evaluaciones.trabajos[1]);
				setNtr3(rowNotas.evaluaciones.trabajos[2]);
				//
				ntemp1 = rowNotas.evaluaciones.trabajos[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.trabajos[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.trabajos[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				trabajoDef = ((ntemp1 + ntemp2 + ntemp3) / 3) * (parseFloat(localStorage.getItem('miptrabajos')) / 100);
				break;
			case 4:
				setClasetr1("colNota fondoEncabezado2");
				setClasetr2("colNota fondoEncabezado2");
				setClasetr3("colNota fondoEncabezado2");
				setClasetr4("colNota fondoEncabezado2");
				setClasetr5("colNota coldisabled fondoEncabezado2");
				//
				setNtr1(rowNotas.evaluaciones.trabajos[0]);
				setNtr2(rowNotas.evaluaciones.trabajos[1]);
				setNtr3(rowNotas.evaluaciones.trabajos[2]);
				setNtr4(rowNotas.evaluaciones.trabajos[3]);
				//
				ntemp1 = rowNotas.evaluaciones.trabajos[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.trabajos[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.trabajos[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				ntemp4 = rowNotas.evaluaciones.trabajos[3];
				if (isNaN(ntemp4)){
					ntemp4 = 0;
				}
				trabajoDef = ((ntemp1 + ntemp2 + ntemp3 + ntemp4) / 4) * (parseFloat(localStorage.getItem('miptrabajos')) / 100);
				break;
			case 5:
				setClasetr1("colNota fondoEncabezado2");
				setClasetr2("colNota fondoEncabezado2");
				setClasetr3("colNota fondoEncabezado2");
				setClasetr4("colNota fondoEncabezado2");
				setClasetr5("colNota fondoEncabezado2");
				//
				setNtr1(rowNotas.evaluaciones.trabajos[0]);
				setNtr2(rowNotas.evaluaciones.trabajos[1]);
				setNtr3(rowNotas.evaluaciones.trabajos[2]);
				setNtr4(rowNotas.evaluaciones.trabajos[3]);
				setNtr5(rowNotas.evaluaciones.trabajos[4]);
				//
				ntemp1 = rowNotas.evaluaciones.trabajos[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.trabajos[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.trabajos[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				ntemp4 = rowNotas.evaluaciones.trabajos[3];
				if (isNaN(ntemp4)){
					ntemp4 = 0;
				}
				ntemp5 = rowNotas.evaluaciones.trabajos[4];
				if (isNaN(ntemp5)){
					ntemp5 = 0;
				}
				trabajoDef = ((ntemp1 + ntemp2 + ntemp3 + ntemp4 + ntemp5) / 5) * (parseFloat(localStorage.getItem('miptrabajos')) / 100);
				break;
		}
		//
		switch(parseInt(localStorage.getItem('minexposiciones'), 10)){
			case 0:
				setClaseex1("colNota coldisabled fondoEncabezado2");
				setClaseex2("colNota coldisabled fondoEncabezado2");
				setClaseex3("colNota coldisabled fondoEncabezado2");
				setClaseex4("colNota coldisabled fondoEncabezado2");
				setClaseex5("colNota coldisabled fondoEncabezado2");
				break;
			case 1:
				setClaseex1("colNota fondoEncabezado2");
				setClaseex2("colNota coldisabled fondoEncabezado2");
				setClaseex3("colNota coldisabled fondoEncabezado2");
				setClaseex4("colNota coldisabled fondoEncabezado2");
				setClaseex5("colNota coldisabled fondoEncabezado2");
				//
				setNex1(rowNotas.evaluaciones.exposiciones[0]);
				//
				ntemp1 = rowNotas.evaluaciones.exposiciones[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				exposicionDef = ntemp1 * (parseFloat(localStorage.getItem('mipexposiciones')) / 100);
				break;
			case 2:
				setClaseex1("colNota fondoEncabezado2");
				setClaseex2("colNota fondoEncabezado2");
				setClaseex3("colNota coldisabled fondoEncabezado2");
				setClaseex4("colNota coldisabled fondoEncabezado2");
				setClaseex5("colNota coldisabled fondoEncabezado2");
				//
				setNex1(rowNotas.evaluaciones.exposiciones[0]);
				setNex2(rowNotas.evaluaciones.exposiciones[1]);
				//
				ntemp1 = rowNotas.evaluaciones.exposiciones[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.exposiciones[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				exposicionDef = ((ntemp1 + ntemp2) / 2) * (parseFloat(localStorage.getItem('mipexposiciones')) / 100);
				break;
			case 3:
				setClaseex1("colNota fondoEncabezado2");
				setClaseex2("colNota fondoEncabezado2");
				setClaseex3("colNota fondoEncabezado2");
				setClaseex4("colNota coldisabled fondoEncabezado2");
				setClaseex5("colNota coldisabled fondoEncabezado2");
				//
				setNex1(rowNotas.evaluaciones.exposiciones[0]);
				setNex2(rowNotas.evaluaciones.exposiciones[1]);
				setNex3(rowNotas.evaluaciones.exposiciones[2]);
				//
				ntemp1 = rowNotas.evaluaciones.exposiciones[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.exposiciones[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.exposiciones[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				exposicionDef = ((ntemp1 + ntemp2 + ntemp3) / 3) * (parseFloat(localStorage.getItem('mipexposiciones')) / 100);
				break;
			case 4:
				setClaseex1("colNota fondoEncabezado2");
				setClaseex2("colNota fondoEncabezado2");
				setClaseex3("colNota fondoEncabezado2");
				setClaseex4("colNota fondoEncabezado2");
				setClaseex5("colNota coldisabled fondoEncabezado2");
				//
				setNex1(rowNotas.evaluaciones.exposiciones[0]);
				setNex2(rowNotas.evaluaciones.exposiciones[1]);
				setNex3(rowNotas.evaluaciones.exposiciones[2]);
				setNex4(rowNotas.evaluaciones.exposiciones[3]);
				//
				ntemp1 = rowNotas.evaluaciones.exposiciones[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.exposiciones[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.exposiciones[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				ntemp4 = rowNotas.evaluaciones.exposiciones[3];
				if (isNaN(ntemp4)){
					ntemp4 = 0;
				}
				exposicionDef = ((ntemp1 + ntemp2 + ntemp3 + ntemp4) / 4) * (parseFloat(localStorage.getItem('mipexposiciones')) / 100);
				break;
			case 5:
				setClaseex1("colNota fondoEncabezado2");
				setClaseex2("colNota fondoEncabezado2");
				setClaseex3("colNota fondoEncabezado2");
				setClaseex4("colNota fondoEncabezado2");
				setClaseex5("colNota fondoEncabezado2");
				//
				setNex1(rowNotas.evaluaciones.exposiciones[0]);
				setNex2(rowNotas.evaluaciones.exposiciones[1]);
				setNex3(rowNotas.evaluaciones.exposiciones[2]);
				setNex4(rowNotas.evaluaciones.exposiciones[3]);
				setNex5(rowNotas.evaluaciones.exposiciones[4]);
				//
				ntemp1 = rowNotas.evaluaciones.exposiciones[0];
				if (isNaN(ntemp1)){
					ntemp1 = 0;
				}
				ntemp2 = rowNotas.evaluaciones.exposiciones[1];
				if (isNaN(ntemp2)){
					ntemp2 = 0;
				}
				ntemp3 = rowNotas.evaluaciones.exposiciones[2];
				if (isNaN(ntemp3)){
					ntemp3 = 0;
				}
				ntemp4 = rowNotas.evaluaciones.exposiciones[3];
				if (isNaN(ntemp4)){
					ntemp4 = 0;
				}
				ntemp5 = rowNotas.evaluaciones.exposiciones[4];
				if (isNaN(ntemp5)){
					ntemp5 = 0;
				}
				exposicionDef = ((ntemp1 + ntemp2 + ntemp3 + ntemp4 + ntemp5) / 5) * (parseFloat(localStorage.getItem('mipexposiciones')) / 100);
				break;
		}
		if (isNaN(parcialDef)){
			parcialDef = 0;
		}
		if (isNaN(practicaDef)){
			practicaDef = 0;
		}
		if (isNaN(trabajoDef)){
			trabajoDef = 0;
		}
		if (isNaN(exposicionDef)){
			exposicionDef = 0;
		}
		setNdef((parcialDef + practicaDef + trabajoDef + exposicionDef));
	}, []);


	return(
		<tr>
			<th scope="row" className="colcedula alineanombre">{ rowNotas.cedulaest }</th>
			<td className="colnombres alineanombre">
				{ rowNotas.nombreest }
			</td>
			<td className={ clasepa1 }>
				{ npa1 }
			</td>
			<td className={ clasepa2 }>
				{ npa2 }
			</td>
			<td className={ clasepa3 }>
				{ npa3 }
			</td>
			<td className={ clasepa4 }>
				{ npa4 }
			</td>
			<td className={ clasepa5 }>
				{ npa5 }
			</td>
			<td className={ clasepr1 }>
				{ npr1 }
			</td>
			<td className={ clasepr2 }>
				{ npr2 }
			</td>
			<td className={ clasepr3 }>
				{ npr3 }
			</td>
			<td className={ clasepr4 }>
				{ npr4 }
			</td>
			<td className={ clasepr5 }>
				{ npr5 }
			</td>
			<td className={ clasetr1 }>
				{ ntr1 }
			</td>
			<td className={ clasetr2 }>
				{ ntr2 }
			</td>
			<td className={ clasetr3 }>
				{ ntr3 }
			</td>
			<td className={ clasetr4 }>
				{ ntr4 }
			</td>
			<td className={ clasetr5 }>
				{ ntr5 }
			</td>
			<td className={ claseex1 }>
				{ nex1 }
			</td>
			<td className={ claseex2 }>
				{ nex2 }
			</td>
			<td className={ claseex3 }>
				{ nex3 }
			</td>
			<td className={ claseex4 }>
				{ nex4 }
			</td>
			<td className={ claseex5 }>
				{ nex5 }
			</td>
			<td className="colNota">
				{ ndef.toFixed(2) }
			</td>
		</tr>
	);
}