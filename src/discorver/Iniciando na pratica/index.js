const questions = [
    "O que aprendeu hoje?",
    "O que te deixou aborrecido? E o que poderia fazer para melhorar?",
    "O que te deixou feliz hoje?",
    "Quantas pessoas você ajudou hoje?",   
]

const ask = (index = 0) =>{
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){ // questions tem 4 perguntas esse if so vai para se answers chegar a 4 pergunta
        ask(answers.length)
    } else{
        console.log(answers)
        process.exit()
    }
})

process.on('exit', ()=>{
    console.log(`
        Bacana, Leonardo!
    
        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu e o que poderia melhorar foi:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}

        Você ajudou ${answers[3]} pessoas hoje!!

        Volte amanha para novas reflexões
    `)
})
