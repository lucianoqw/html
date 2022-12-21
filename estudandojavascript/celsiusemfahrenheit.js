/*Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
    */

// fluxode error
function transformDegree(degree) {
    const celsiusExits = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    if (!celsiusExits && !fahrenheitExists) {
        throw new Error('grau não indentificado')
    }

    //fluxo ideial 
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let degrreSign = 'C'

    //fluxo alternativo
    if (celsiusExits) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9 / 5 + 32
        degrreSign = 'F'
    }

    return formula(updatedDegree) + degrreSign
}
try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50z')
} catch (error) {
    console.log(error.message)
}
