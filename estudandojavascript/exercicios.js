// 1 declare uma variável nome weight
//let weight

// 2. que tipo de dado é a variável acima ?
//como descobrir 
//console.log(typeof weight) undefined

/* 
  3. declare uma variável e atribua valores pra cada um dos dados 
   * name: string
   * age: Number (integer= inteiro)
   * sars: Number (float= quebrado)
   * isSubscribed: boolean   */

/*let name = luciano
let age = 23
let stars = 4.8
let isSubscribed = true*/

/* 4.A variável student abaixo é de que tipo de dados ?

4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

4.2 Mostre no console a seguinte mensagem:
<name> de idade <age> pesa <weight> kg.
atençao, sbstitua <name> <age> e <weight> pelos valcres de cada propriedade do objeto */


let student = {
    name: "lucinao",
    age: 23,
    weight: 85,
    isSbscribed: true,
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/* 5 declare uma variáveldo tipo Array,de nome 
students e atibua a ela nengumvalor , ou seja , somente o Array vazio
*/
let students = []

/* 6 Retribua valor para a variável acema , colocando dentro dela o objeto student da questao 4. ( nao copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array.) */
students = [
    student
]

//7. coloque no console o valor da possiçao zero do Array acima

console.log(students[0])

//8. crie um novo student e coloque na posiçao 1 do Array students

const john = {
    name: "john",
    age: 23,
    weight: 74.8,
    isSbscribed: true,
}

students[1] = john

/* 9 sem rodar o codigo responda qual e a resposta do condigo abaixo e por que ? Após sua resposta , rode o codigo e veja se voce acertou.
console.log(a)
var a = 1 */ undefined

