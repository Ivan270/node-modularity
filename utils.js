// importar variable booleana
let { estado } = require('./config');

const concatenar = (str1, str2) => {
	console.log(estado);
	if (estado) {
		return str1.concat('', str2);
	} else {
		return str1.concat('', str2).length;
	}
};

module.exports = { concatenar: concatenar };
