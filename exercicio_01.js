function exercicio_01(){
let soma = 0;
let continuar = true;

while(continuar){
    let numero = parseFloat(prompt("Digite um número(ou digite '0' para encerrar):"));

    if(!isNaN(numero)){
        soma += numero;
    } else {
        alert("Digite um número válido.");
    }
    continuar = confirm("Quer adicionar mais número");
}
    alert("A soma dos numeros é: " + soma);
}

somarNumeros();
