var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.day + " de " + q.month + " de " + q.year;
  res.end(txt);
}).listen(8080);

//http://localhost:8080/?day=9&month=Dezembro&year=2021