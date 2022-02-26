// middleware pattern (chain of responsibility) 
// cadeira de responsabilidade
const passo1 = (contexto, next) => {
    contexto.valor = 'middl1'
    next()
}

const passo2 = (contexto, next) =>{
    contexto.valor2 = 'middl2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'middl3'


const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
            middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0) //parar a execução quando acabar o array
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)
console.log(contexto)