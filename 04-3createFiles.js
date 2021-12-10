// Criar arquivos / Create files
// O módulo File System possui métodos para criar novos arquivos:

// fs.appendFile()
// fs.open()
// fs.writeFile()

// fs.appendFile() método anexa o conteúdo especificado a um arquivo. Se o arquivo não existir, o arquivo será criado

const fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', (err) => {
  if (err) throw err;
  console.log('Saved!');
});

// fs.open() método recebe um "sinalizador" como segundo argumento, se o sinalizador for "w" para "gravação", o arquivo especificado será aberto para gravação. Se o arquivo não existir, um arquivo vazio será criado:

fs.open('mynewfile2.txt', 'w',(err, file) => {
    if (err) throw err;
    console.log('Saved!');
});

// fs.writeFile()método substitui o arquivo e o conteúdo especificados, se existir. Se o arquivo não existir, um novo arquivo, contendo o conteúdo especificado, será criado:

fs.writeFile('mynewfile3.txt', 'Hello content!',(err) => {
    if (err) throw err;
    console.log('Saved!');
});




