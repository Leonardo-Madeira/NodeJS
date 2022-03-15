const { EventEmitter } = require('events')
const event = new EventEmitter()

event.on('saySomething', (name) =>{ //event.on(ouvir o evento)
    console.log(`Eu ouvi você ${name}`)
}) //event.on escuta varias vezes

//event.once faz a mesma coisa do on, mas o once escuta uma vez so o evento, por exemplo ele so iria executar a primeira mensagem e nao a segunda

event.emit('saySomething', "Léo") // event.emit(emitir algo)
event.emit('saySomething', "Day")
