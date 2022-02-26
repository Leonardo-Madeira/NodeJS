//Primeiro uso com node

let somar = (x, y) => x + y // função para somar x+y

setInterval(() => {
  // função que vai retornar a função somar a cada 2s
  console.log(somar(50, 50))
}, 2000) // 2.000(dois mil) é 2s(dois segundos) em nodejs
