const http = require('http')
const dt = require('./myModule.js')

http.createServer((req, res)=>{ //http.createServer() método, será executada quando alguém tentar acessar o computador na porta 8080.
    res.writeHead(200, {'Content-Type':'text/html'}); //res.writeHead()método é o código de status, 200 significa que está tudo OK, o segundo argumento é um objeto que contém os cabeçalhos de resposta.
    res.write("The date and time is currently: ");
    res.end()
}).listen(8080, ()=>{
    console.log('Servidor rodando com sucesso!')
})