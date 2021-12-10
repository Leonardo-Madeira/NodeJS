// Eventos em Node.js
// Cada ação em um computador é um evento. Como quando uma conexão é feita ou um arquivo é aberto.

// Objetos em Node.js podem disparar eventos, como o objeto readStream dispara eventos ao abrir e fechar um arquivo:

// let fs = require('fs');
// let rs = fs.createReadStream('./demofile.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });

// Módulo de Eventos
// O Node.js tem um módulo integrado, chamado "Eventos", onde você pode criar, disparar e ouvir seus próprios eventos.

let events = require('events');
let eventEmitter = new events.EventEmitter();

// O objeto EventEmitter
// Você pode atribuir manipuladores de eventos a seus próprios eventos com o objeto EventEmitter.

// No exemplo abaixo, criamos uma função que será executada quando um evento "grito" for disparado.

// Para disparar um evento, use o emit()método.

/*************************************** */

//Create an event handler:
let myEventHandler = () => console.log('I hear a scream!');

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
  
//Fire the 'scream' event:
eventEmitter.emit('scream');
