// setInterval irá rodar uma função N vezes
// intervalo a cada x segundos que no caso é 1000 que é 1s

const timeOut = 1000
const checking = () =>{
    console.log("Checking")
}
setInterval(checking,timeOut)

//or

setInterval(() => {
    console.log(' 2 Checking')
}, 5000); // essa é a forma mais interessante p executar um setInterval


