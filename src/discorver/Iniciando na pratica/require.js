//Require chama modulos que ja sao nativos do nodejs ou modulos que podemos criar e instalar no node
//console.log(require('path'))//require path é um objeto

//modulos nativos
//const path = require('path')
//console.log(path.basename())
//Path é um modulo

//meus módulos
const myModule = require('./exports.js')
console.log(myModule)