// Arquivos de atualização / Update Files
// O módulo File System tem métodos para atualizar arquivos:

// fs.appendFile()
// fs.writeFile()


// O fs.appendFile()método anexa o conteúdo especificado no final do arquivo especificado:

const fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});

//O fs.writeFile()método substitui o arquivo e o conteúdo especificados:

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});
