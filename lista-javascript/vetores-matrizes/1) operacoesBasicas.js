// Caro usuario, digite os numeros desejados para as operações 
let numero1 = 32
let numero2 = 2
//realiza as operações
const soma = numero1 + numero2
const subtracao = numero1 - numero2
const multiplicacao = numero1 * numero2
const divisao = numero1 / numero2

// Exibir os resultados
console.log("Soma: " + soma)
console.log("Subtração: " + subtracao)
console.log("Multiplicação: " + multiplicacao)

// Verificar se a divisão não é por zero
if (numero2 !== 0) {
    console.log("Divisão: " + divisao)
} else {
    console.log("Não é possível dividir por zero.")
}