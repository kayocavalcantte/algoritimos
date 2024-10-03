
let n
let aux;
let vetor = []

n = prompt("quantos numeros teram seu vetor?");

for(let i = 0; i < n; i++){

    vetor[i] = prompt("digite o " + i + "°" + " valor: ");
}

document.write("O vetor original: " + vetor);

for(let i = 0; i < vetor.length; i++){
    for(let j = 0; j < vetor.length; j++){
        if(vetor[i] < vetor[j]){
            aux = vetor[i];
            vetor[i] = vetor[j];
            vetor[j] = aux;
        }
    }
}

document.write("O vetor organizado em ordem crescente: " + vetor);
