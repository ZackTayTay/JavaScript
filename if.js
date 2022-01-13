var idade = prompt("Insira sua idade")

if ( idade >= 18 && idade < 70) {

    alert("Você está apto para entrar na sala ")
    prompt("Qual o seu pedido?")
    alert("Pedido concedido")
    
}


else if (idade >= 70) {

    alert("Sua idade está acima do limite")
    alert("Por favor se dirija para outra sala")

}

else if (idade < 18){

   alert("Sua idade é abaixo da idade pedida")
   alert("Volte futuramente")

}