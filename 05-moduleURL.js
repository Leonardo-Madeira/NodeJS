// O Módulo de URL embutido
// O módulo de URL divide um endereço da web em partes legíveis.

const url = require('url');

// Analise um endereço com o url.parse() método e ele retornará um objeto de URL com cada parte do endereço como propriedades:

const adr = 'http://localhost:8080/?day=9&month=Dezembro&year=2021';
const q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?day=9&month=Dezembro&year=2021'

const qdata = q.query; //returns an object: { day: 9 year: 2021, month: 'Dezembro' }
console.log(qdata.month); //returns 'Dezembro'