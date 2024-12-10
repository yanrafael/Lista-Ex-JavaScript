let preco = 5
let quantidadeComprada = 11

if (quantidadeComprada > 10){
    desconto = preco * quantidadeComprada * 0.10
    total = preco * quantidadeComprada - desconto
}
else {
    total = preco * quantidadeComprada
}

console.log(`O total da compra é de ${total}`)