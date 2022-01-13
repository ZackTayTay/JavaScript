var seunome = prompt("Digite seu nome")

var atividades = parseFloat(
    prompt("Digite a nota das suas atividades"))

    var testes = parseFloat(
    prompt("Digite a nota do seu teste"))

    var trabalho = parseFloat(
    prompt("Digite a nota do seu trabalho"))

    var prova = parseFloat(
    prompt("Digite a nota da sua prova"))

    var medianota = atividades + testes + trabalho + prova / 3 
    


var conceito = ""

if (medianota >= 21 ) {

    conceito = "Aluno aprovado"



}

else if (medianota < 20,9 ) {


    conceito = "Aluno na recuperação"
}

if ( medianota < 18 ) {

    conceito = "Aluno reprovado"
}

alert(seunome + " a sua nota foi " + medianota.toFixed(2) + " então você é " + conceito)


switch (conceito) {

   case "Aluno aprovado":

   alert("Parabéns, você foi aprovado")
   break;

   case "Aluno na recuperação":

   alert("Você tem uma chance de ser aprovado na recuperação.")
   break;

   case "Aluno reprovado":

   alert("Oh meu amigo, sinto muito você foi reprovado")
   break;

   default:
       console.log("Existe um erro")

       break;

}
