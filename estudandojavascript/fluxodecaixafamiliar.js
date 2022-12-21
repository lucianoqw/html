/* Sistemas de gastos familiar 

crei um ojeto que possuirá 2 propriedades, ambas do tipo array
    * receitas:
    * despesas
Agora, crie uma funçao que irá calcular o tatal de receitas 
e despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguindo do valor do saldo 
*/

let family = {
    incomes: [1200, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00, 2000, 2000]
}
function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value

    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }
    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()