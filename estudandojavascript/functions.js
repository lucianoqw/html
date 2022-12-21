
//function expression
//function anonymous

//parÂmetros 
/*const sum = function (number1, number2) {
    let total = number1 + number2
    return total
}

sum(2, 3)// aguments- argumentos
let number1 = 34
let number2 = 25

console.log(`o numero 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

//function scope
let subject = 'create video'
function createthink(subject) {
    subject = 'study'

    return subject
}

console.log(createthink(subject))
console.log(subject)

// function hoisting

/*sayMyName()

function sayMyName() {
    console.log('luciano')
}*/

//arrow function
/*const sayMyName = (name) => {
    console.log('name')
}

sayMyName('lucinao')*/

//callback function

/*function sayMyName(name) {
    console.log('ante de executar a funçao callback')
    name()
    console.log('depois de execuar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
*/
/* 
function ()constructor
 *expressão new
 * criar um novo objeto
 * this keyword
 */

/*function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + "está andando"
    }
}


const lucinao = new Person("luciano")
const joao = new Person("joão")

console.log(lucinao.walk())
console.log(joao.walk())

/* 
prototype
* prototype-based laguage
* prototype chain
*_proto_
*/



// Manipulando Stringse Números 

// Transformando um numero quebrado em 2 casas decimais e tracar ponto por vírgula

/*let number = 34532432
console.log(number.toFixed(2).replace())*/

//Transformar letras minúsculas em maiúsculas. faça o contrário disso também

/*let word = "Programar é muito bacana!"
console.log(word.toUpperCase())
/* Separe um textoque contem espaços, em um novo array onde 
cada texto é uma posição do array. Depois disso, transforme 
o array em um texto e onde eram espaços ,coleque_ */

/*let pharase = "Eu quero viver o amor !"
let myArray = pharase.split(" ")
let pharaseWithUnderscore = myArray.join("")
console.log(myArray)*/

// verificar se o texto contém a palafra amor

/*let phrarase = "Eu quero viver!"
console.log(pharase.includes("Amor"))*/

// Criar Array com construtor
/*let myArray = new Array('a', 'b', 'c')

console.log(myArray)

// manipulando Arrays

// contar elementos de um array

/*console.log(["a",
    { type: "array" },
    function () { return "alo" }
].length)


// Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação"
//console.log(Array.from(word))*/

/*let techs = ["html", "css", "js"]
// adicionar um item no fim 
techs.push("nodejs")
//adicionar no começo 
techs.unshift("sql")
//remover do fim 
//techs.pop()
//remover do começo 
techs.shift()
//pegar somene alguns elementos do array
//console.log(techs.slice(1, 3))
//remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)
//encontrar a posição de um elemento no array
let index = techs.indexOf('html')

console.log(techs)

// Expressôes e Operadores 
// Expressions
//let number =
//Operators 
// binaria
//  console.log(number + 1)
//unary
//console.log(typeof number)
//Ternary
//console.log(true ? 'alo' : 'nada')

/*new = criar um novo objeto
let name = new string('lucinao')
name.surName = "ortiz"
let age = new Number(23)
console.log(name.surName, age)*/

// Operadores Aritiméticos
//multiplicação *
//console.log(3.2 * 5.5)
//divisão /
//soma +
//subtraçaõ -
//resto da divisão %
/*let remainder
remainder = 11 % 9
console.log(remainder)
//incremento ++
//let increment = 0
//increment++
//console.log(increment)
//decremento
//let decremet = 0
//decremet--
//console.log(decrement)
//exponencial **

// operador de comparaçao
// == igual a
// != deferente de

// === estritamente igaul a
// !== estritamente deferente de

//Operador condicional (Ternáio)
//dependendo da condição, nós receberemos valore diferentes 
// exempos
// café da manha top
/*let pao = true
let queijo = true
const nicebreakfast = pao && queijo ? 'café top' : 'café ruin'
console.log(nicebreakfast)*/

/*let age = 18
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)*/

// control flow

// if .... else

/*let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperture = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log('febre alta')
} else if (mediumTemperture) {
    HTMLFormControlsCollection.log('febre moderada')
} else {
    console.log('saudável')
}


/* switch
let expression = 'a'

switch (expression) {
    case 'a':
        // codigo
        break
    case 'b':
        // codigo para a exprecion b
        break
    default:
        console.log('default')
        break
}*/

//calculate = calculadora

/*function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 8)) */


/*throw
function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome  é obrigatorio '
    }

    console.log('depois do erro')
}
// try... catch
try {
    sayMyName()
} catch (e) {
    console.log(e)
} */

/*A estrutura de repetição for tem a seguinte sintaxe:

for(inicialização de uma variável; condição de continuação para o loop; expressão final) */
// break - para a execucão do loop e o coninue pula


for (let i = 10; i > 0; i--) {
    if (i == 5) {
        break;
    }
    console.log(i)

}

// for....in

let person = {
    name: 'luciano',
    age: 30,
    weight: 88,

}
for (let property in person) {
    console.log(property)
    console.log(person[property])

}


