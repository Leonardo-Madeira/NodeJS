//lendo arquivos em nodejs
const fs = require('fs')

fs.readFile('teste.txt', (err, data) => {
  console.log(data.toString())
})
