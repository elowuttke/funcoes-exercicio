console.log(" - EXERCÍCIO 2 -")

//Declare e chame as funções abaixo:

//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function soma (num1,num2) {
    num1=Number(prompt("Digite um número:"))
    num2=Number(prompt("Digite outro número:"))
    res=num1+num2
    console.log(res)
}

soma()

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.

function boleano (num1,num2) {
    num1=Number(prompt("Digite um número:"))
    num2=Number(prompt("Digite outro número:"))
    res=num1>=num2
    console.log(res)
}

boleano()


//c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

function ePar (num1) {
    num1=Number(prompt("Digite um número:"))
    let verificaPar = num1 % 2 == 0?"par":"impar"
    console.log(verificaPar+":", num1)
}

ePar()

//d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.

function salario (salBruto) {
    salBruto=Number(prompt("Quanto você ganha?"))
    const salLiquido = salBruto - (salBruto*0.1)
    console.log(salLiquido)
}

salario()