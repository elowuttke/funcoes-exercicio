console.log(" - EXERCÍCIO 3 -")
// a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

function som(x,y){
    let resultado = x+y
    return `${x} somado a ${y} é igual a ${resultado}.`
}

console.log(som(5,8))

function sub (x,y){
    let resultado = x-y
    return `${x} menos ${y} é igual a ${resultado}.`
}

console.log(sub(10,8))

function mul (x,y){
    let resultado = x*y
    return `${x} multiplicado por ${y} é igual a ${resultado}.`
}

console.log(mul(12,3))

function div (x,y){
    let resultado = x/y
    return `${x} dividido por ${y} é igual a ${resultado}.`
}

console.log(div(88,11))

// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

const resp1 = Number(prompt("Digite um número:"))
const resp2 = Number(prompt("Digite outro número:"))

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

console.log(som(resp1,resp2))
console.log(sub(resp1,resp2))
console.log(mul(resp1,resp2))
console.log(div(resp1,resp2))

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.