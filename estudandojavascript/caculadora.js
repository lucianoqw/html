/* Transformar notas escolares 

crie um algoritimo que transforme as notas dosistema 
numéricopara sistema denotas em caracteres tipo ABC
* de 90 para cima - A
* entre 80-89 - b
* entre 70 - 79 - c
* entre 60 - 69
* menor que 60 - f */


function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;


    if (scoreA) {
        scoreFinal = "A"

    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota invalida"
    }

    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(0))
console.log(getScore(50))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))
