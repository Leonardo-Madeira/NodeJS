//lendo input da linha de comando
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Qual é o seu nome?', (nome)=>{
  console.log(`O nome do usuário é: ${nome}`);
  rl.question("Qual é a sua idade?",(idade)=>{
    console.log(`A idade de ${nome} é ${idade}`)
  })
})

rl.on('close',()=>{
  console.log('Adeus!');
  process.exit(0);
})
