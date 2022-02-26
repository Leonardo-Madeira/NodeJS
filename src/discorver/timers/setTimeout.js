//setTimeout rodar uma função depois de x milissegundos
const timeOut = 3000
const finidhed = () => console.log("Hallo!")
setTimeout(finidhed, timeOut)

//or

setTimeout(() => {
    console.log('World!')
}, 5000);
//essa é a forma mais interessante de chamar um timeout