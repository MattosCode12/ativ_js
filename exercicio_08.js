function exercicio_08(){
let n1;
let n2;
let diferenca;
let dobro;
let multiplicacao;

n1=parseFloat(prompt("Insira o 1º valor: "))
n2=parseFloat(prompt("Insira o 2º valor: "))

diferenca = (n1 - n2);
dobro = (n1 * 2) + (n2 * 3);
multiplicacao = (n1 * n2);

alert("A diferença entre eles é: "+ diferenca);
alert("O dobro da primeira variável somado ao triplo da segunda: "+ dobro)
alert("A multiplicação das variáveis"+ multiplicacao);
}