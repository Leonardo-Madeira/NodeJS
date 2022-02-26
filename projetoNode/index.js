const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('oii')
})


app.listen(8080, ()=>{
    console.log('Servidor iniciado com sucesso!')
})