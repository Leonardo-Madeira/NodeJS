//Leia os arquivos: / Read files

const http = require('http')

http.createServer((req, res) => {
    fs.readFile('04-2html.html',(err, data) => {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080);
