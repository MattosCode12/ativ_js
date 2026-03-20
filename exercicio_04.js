function exercicio_04(){
let n = [4];
let aux;

    for(let i = 0; i <4; i++){
        n[i] + parseInt(prompt("Digite o valor: "+ i));
    }
    for(i=0; i<4; i++){
        for(let j=1; j<4;){

            if(n[j] < n[j+1]){
                aux = n[j];
                n[j]=n[j+1];
                n[j+1]=aux;
            }
        }
    }
    alert("Ordem decrescente: "+ vetor[1] + ";" + vetor[2] ";" + vetor[3] ";" + vetor[4]);
}