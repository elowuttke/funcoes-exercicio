console.log(" - EXERCÍCIO 1 -")
//a) Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função.

function dizNome (nome) {
    return `Olá, ${nome}`
}

console.log(dizNome ("Eloísa"))

//b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.

//function tabuada(num){
//    return[num*0,num*1,num*2,num*3,num*4,num*5,num*6,num*7,num*8,num*9,num*10]
//}

//console.log(tabuada(5))
//console.log(tabuada(8))
//console.log(tabuada(3))
//console.log(tabuada(7))

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou arrow functions

const tabuada = (num) => {
    return[num*0,num*1,num*2,num*3,num*4,num*5,num*6,num*7,num*8,num*9,num*10]
}

console.log(tabuada(5))