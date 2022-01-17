const fs = require('fs')//modulo do node

const caminho = __dirname + '/06-arquivo.json'


//sincrono...

const conteudo = fs.readFileSync(caminho, 'utf-8')//função que le um arquivo de forma sincrona
console.log(conteudo)


//assincrono...

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


const config = require('./06-arquivo.json')
console.log(config.db)


fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
