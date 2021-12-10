var http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);

//http://localhost:8080/summer
//entre nessa url e deve retornar um: /summer
//voce pode digitar qualquer coisa no lugar do summer e ira retornar oq digitou