const porta = 3000

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended:true}))//faz um parser na requisição

//get -> é uma forma de requisição 
app.get('/', (req, res, next)=>{
    res.send(bancoDeDados.getProduto())//res.send({nome:'Notebook', preco: 1999.99}) //converter p/ JSON
}) //

app.get('/produtos/:id', (req, res, next)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Converter esse objeto para JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor está executando na porta ${porta}`)
})

