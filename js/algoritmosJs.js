function contagemAprovados() {
    let n = prompt("Quantidade de alunos: ");
    let i = 0;
    let cont = 0;

    while (i < n) {
        let nota = parseFloat(prompt("Nota do aluno: "));
        if (nota >= 50) {
            cont++;
        }
        i++;
    }

    document.getElementById("result").innerHTML = `São ${n} alunos. <br> São ${cont} alunos aprovados.`;
}

function fibonacci() {
    let a = 0, b = 1, i = 2;
    let n = prompt("Digite a quantidade de termos: ");
    let resultado = `${a}, ${b}, `;

    while (i < n) {
        let c = a + b;
        resultado += `${c}, `;
        a = b;
        b = c;
        i++;
    }

    document.getElementById("result").innerHTML = resultado.slice(0, -2);
}

function mdc() {
    let a = prompt("Digite o primeiro número: ");
    let b = prompt("Digite o segundo número: ");
    let resultado;

    if (a % b === 0 || b % a === 0) {
        resultado = a > b ? `O MDC é: ${a}` : `O MDC é: ${b}`;
    } else {
        resultado = `O MDC é: ${a * b}`;
    }

    document.getElementById("result").innerHTML = resultado;
}

function numeroPrimo() {
    let a = prompt("Digite um número: ");
    let resultado;

    if (a <= 1) {
        resultado = `O número ${a} não é primo.`;
    } else if (a === 2) {
        resultado = `O número ${a} é primo.`;
    } else {
        let isPrimo = true;
        for (let i = 2; i <= Math.sqrt(a); i++) {
            if (a % i === 0) {
                isPrimo = false;
                break;
            }
        }
        resultado = isPrimo ? `O número ${a} é primo.` : `O número ${a} não é primo.`;
    }

    document.getElementById("result").innerHTML = resultado;
}

function ordenacao() {
    let n = prompt("Quantos números terá seu vetor?");
    let vetor = [];

    for (let i = 0; i < n; i++) {
        vetor[i] = parseFloat(prompt("Digite o " + (i + 1) + "° valor: "));
    }

    let vetorOrdenado = vetor.slice().sort((a, b) => a - b);
    document.getElementById("result").innerHTML = `O vetor original: ${vetor.join(", ")} <br> O vetor organizado em ordem crescente: ${vetorOrdenado.join(", ")}`;
}

function somador() {
    let n = prompt("Quantos números deseja somar?");
    n = parseInt(n);
    let numero = 0;

    for (let i = 0; i < n; i++) {
        numero += parseFloat(prompt("Digite o número:"));
    }

    document.getElementById("result").innerHTML = `A soma é: ${numero}`;
}

function trocaVariaveis() {
    let a = 10, b = 20, aux = 0;
    aux = a;
    a = b;
    b = aux;

    document.getElementById("result").innerHTML = `Valor a: ${a} <br> Valor b: ${b} <br> Valor aux: ${aux}`;
}
