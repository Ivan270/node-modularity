// Autores de nanoid removieron soporte para uso de CommonJS, lo reemplacé por uuid
const { v4: uuidv4 } = require('uuid');
const { concatenar } = require('./utils');

const id1 = uuidv4();
const id2 = uuidv4();
console.log(concatenar(id1, id2));
