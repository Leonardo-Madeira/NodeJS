//Arquivos de upload de Node.js
// O Módulo Formidável
// Existe um módulo muito bom para trabalhar com uploads de arquivos, chamado "Formidável".

// O módulo Formidable pode ser baixado e instalado usando o NPM ou YARN:
// npm install formidable
// yarn add formidable

//Depois de fazer o download do módulo Formidable, você pode incluí-lo em qualquer aplicativo:

//Etapa 1: Criar um formulário de upload:
// const formidable = require('formidable');
// const http = require('http');

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }).listen(8080);

//**************************************************** */

// Etapa 2: analisar o arquivo enviado

// Inclua o módulo Formidable para poder analisar o arquivo carregado assim que ele chegar ao servidor.

// Quando o arquivo é carregado e analisado, ele é colocado em uma pasta temporária em seu computador.

// const http = require('http');
// const formidable = require('formidable');

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     let form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       res.write('File uploaded');
//       res.end();
//     });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);

//*****************************************/
// Etapa 3: salvar o arquivo

// Quando um arquivo é carregado com êxito para o servidor, ele é colocado em uma pasta temporária.

// O caminho para este diretório pode ser encontrado no objeto "files", passado como terceiro argumento na parse()função de callback do método.

// Para mover o arquivo para a pasta de sua escolha, use o módulo Sistema de Arquivos e renomeie o arquivo:

const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      let oldpath = files.filetoupload.filepath;
      let newpath = files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
    });
  }else{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload">');
    res.write('<input style="color:red; background:blue" type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);

