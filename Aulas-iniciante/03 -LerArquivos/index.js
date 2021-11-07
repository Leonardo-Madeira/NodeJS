//Ler arquivos com base na URL
const http = require('http')
const fs = require('fs') // esse comando vai permitir que a gente consiga manipular arquivos utilizando node

const hostname = '127.0.0.1'
const port = 2000 // pode ser a porta 8080

const server = http.createServer((req, res) => {
  console.log(req.headers)
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
    return res.end()
  })
})

server.listen(port, hostname, () => {
  console.log('Servidor está rodando!')
})
