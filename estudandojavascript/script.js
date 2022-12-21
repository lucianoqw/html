console.log('bem vindo ao starter')
console.log({
    name: "luciano",
    idade: 36,
    andar: function () {
        console.log('andar')
    }

})


console.log([
    "leite",
    "ovos",
    2,
    3
])
// variaveis e tipos de dados 
// declaraçao or declaration

var name

//assignment or atribuição de valores 
name = "Luciano"

//que tipo de dado foi colocado na variável
console.log(typeof name)

/*let age = 20
let isHuman = true */

//agrupamento

let age, isHuman

age = 18
isHuman = true

//console.log(name, age, isHuman)
//multiplos argumentos na funça
// escrita de texto + variável
//concatenando os valores 

//console.log('O ' + name + 'tem' + age + 'ano.')

//interpolndo valores com template literals
console.log(`o ${name} tem ${age} anos`)

//object
const person = {
    name: 'lucinao',
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos`)

// Array

const animals = [
    'Lion',
    'Monkey',
    'cat',
]



// acessar valores dentro do Array

console.log(animals[1])