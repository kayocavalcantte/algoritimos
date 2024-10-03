let n;
let numero = 0;

n = prompt("Quantos números deseja somar?");
n = parseInt(n); 

for (let i = 0; i < n; i++) {
    numero += parseFloat(prompt("Digite o número:")); 
}

document.write("A soma é: " + numero);
