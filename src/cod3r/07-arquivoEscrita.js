const fs = require('fs')

const produto = {
    nome:'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/07arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'arquivo salvo!')
})