//criar arquivo com nodejs
const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 2000

//criar novo arquivo

/*
fs.writeFile('portfolio.txt','teste de conteudo', function(err){
  if(err) throw err;
  console.log('O arquivo foi criado com sucesso');
})
*/

//cria novo arquivo ou insere o conteúdo depois do que ja existe

/*
fs.appendFile('portfolio.txt','\n   Outro conteudo', (err)=>{
  if(err) throw err;
  console.log("Arquivo salvo com sucesso")
})
*/
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
