//process tbm é um objeto do node
//Lista de argumentos
// console.log(process.argv)
console.log(`Olá ${process.argv[2]} ${process.argv[3]}`)

//ou

const firstName = process.argv[2]
const lastName = process.argv[3]
console.log(`Tudo bem com você? ${firstName} ${lastName}`)

//Para rodar, escreva no terminal: node process Leonardo Madeira
