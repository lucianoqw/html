const questions = [
"o que aprendi hoje ?",
"o que me deixou aborrecido? E o que eu poderia fazer para melhorare",
"o que me deixou feliz hoje?",
"Quantas pessoas ajudei hoje?"
]

const ask = ( index = 0) =>{
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
 answers.push(data.toString().trim())
 if (answers.length < questions.length) {
    ask (answers.length)
 } else {
    console.log(answers)
    process.exit()
 }
 })

process.on('exit', () => {
    console.log(`
    Bacana Luciano !
    
    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te aborreceu e você poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje:
    ${answers[2]}
    
    Voce ajudou ${answers[3]} pessoal hoje!!
    volte amanhã para novas reflexões !! `
        
    )
}
)
