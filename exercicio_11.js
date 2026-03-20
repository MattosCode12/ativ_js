function exercicio_11(){
let nome=0;
let salario=0;
let inss=0;

nome = prompt("Nome do funcionário: ");
salario = prompt("Salário bruto: ");

if(salario<1000){
    inss = salario*0.08;
} else if(salario >= 1000 || salario <= 1500){
    inss = salario*0.085;
}else if(salario >= 1500){
    inss = salario*0.09;
}
alert("Nome: "+ nome);
alert("Salário bruto: R$"+ salario);
alert("Valor do desconto do INSS: "+ inss);
alert("Salário liquido: R$"+ (salario-inss));
}
