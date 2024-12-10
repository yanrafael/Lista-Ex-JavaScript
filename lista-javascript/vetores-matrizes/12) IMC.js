let altura = 1.60
let peso = 66

imc = peso / (altura * altura)

if (imc < 22){
    console.log(imc +" Abaixo do peso")
}
else if (imc <27) {
    console.log(imc +" Normal")
}
else if(imc <29.99){
    console.log(imc + " Acima do peso")
}
else {
    console.log(imc +" Obesidade")
}