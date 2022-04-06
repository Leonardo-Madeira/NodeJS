// Renomear arquivos / Rename Files
// Para renomear um arquivo com o módulo Sistema de Arquivos, use o fs.rename() método.
// fs.rename()método renomeia o arquivo especificado:

const fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', (err) => {
  if (err) throw err;
  console.log('File Renamed!');
});
