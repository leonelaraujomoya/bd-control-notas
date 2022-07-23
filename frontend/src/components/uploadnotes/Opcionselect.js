import React from 'react';
import '../commun/commun.css';

export default function Opcionselect({ numero }) {

	return(
		<option key={numero} value={numero}>{numero}</option>
	);
}