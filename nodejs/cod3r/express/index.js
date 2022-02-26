const express = require('express')
const app = express()// tudo o que tem dentro de express/que é o frameork vai ser colocado na variavel app
//app significa aplicação, nela vamos fazer todas as querys
const port = 8080

// app.use('/', (req, res)=>{}) // use(utiliza todas as requisições(get, put, post, delete etc...))

app.get('/',(req, res)=>{
    //res.send('Hello, <strong>World!</strong>') //send == mandar // manda uma mensg p browser

    //res.json({nome:'Leonardo',idade:25}) //res.json / transforma um objeto em um json

    //res.json([{id:1,nome:'Fulano',idade:'35'},{id:2,nome:'Beltrano'idade:'18'},{id:1,nome:'Sicrano',idade:'55'}]) //tbm pode transforma um array em json
})

app.listen(port, ()=>{
    console.log(`Servidor executado com sucesso na porta:${port}`)
})
