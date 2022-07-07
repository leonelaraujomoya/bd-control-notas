const bcrypt = require('bcrypt');

const encripta = async (cadena) => {
	const myHash = await bcrypt.hash(cadena, 10);
	return myHash;
};

const compara = async (cadena, myHash) => {
	return await bcrypt.compare(cadena, myHash);
};

module.exports = { encripta, compara };