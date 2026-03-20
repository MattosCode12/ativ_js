function exercicio_10(){
let nome=0;
let salario=0;
let inss=0;

nome = prompt("Nome do funcionário: ");
salario = prompt("Salário bruto: ");
inss += salario*0.08

alert("Nome: " + nome);
alert("Salário bruto: R$"+ salario);
alert("Valor do desconto do INSS: "+ inss);
alert("Salário liquido: R$"+ (salario-inss));
}