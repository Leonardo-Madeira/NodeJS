//clearInterval irá cancelar um setInterval registrado
let time = setInterval(() => {
    console.log('Checking')
}, 1000); // essa é a forma mais interessante p executar um setInterval

setTimeout(() => {clearInterval(time)}, 5000);
//Observe que eu coloquei um setTimeout que significa em um certo tempo = execute encerrar a variavel
//time que tem o setinterval executando infinitamente a cada 1s checking