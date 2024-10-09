const apiBase = 'http://localhost:8080/api/operacoes';
    
async function fetchAPI(url, options = {}) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        const result = await response.text();
        document.getElementById("result").innerHTML = result;
    } catch (error) {
        document.getElementById("result").innerHTML = `Erro ao chamar API: ${error.message}`;
    }
}

function contagemAprovados() {
    const quantidade = prompt("Quantidade de alunos:");
    const notas = prompt("Notas dos alunos (separadas por vírgula):").split(',').map(Number);

    const params = new URLSearchParams({
        quantidade: quantidade,
        notas: notas.join(",")
    }).toString();

    fetchAPI(`${apiBase}/contagem-aprovados?${params}`);
}

function fibonacci() {
    const termos = prompt("Digite a quantidade de termos:");
    fetchAPI(`${apiBase}/fibonacci?termos=${termos}`);
}

function mdc() {
    const a = prompt("Digite o primeiro número:");
    const b = prompt("Digite o segundo número:");

    const params = new URLSearchParams({
        a: a,
        b: b
    }).toString();

    fetchAPI(`${apiBase}/mdc?${params}`);
}

function numeroPrimo() {
    const numero = prompt("Digite o número:");
    fetchAPI(`${apiBase}/numero-primo?numero=${numero}`);
}

function ordenacao() {
    const vetor = prompt("Digite os números do vetor (separados por vírgula):").split(',').map(Number);

    fetchAPI(`${apiBase}/ordenacao`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vetor)
    });
}

function somador() {
    const numeros = prompt("Digite os números para somar (separados por vírgula):").split(',').map(Number);

    fetchAPI(`${apiBase}/somador`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(numeros)
    });
}

function trocaVariaveis() {
    const a = prompt("Digite o valor de a:");
    const b = prompt("Digite o valor de b:");

    const params = new URLSearchParams({
        a: a,
        b: b
    }).toString();

    fetchAPI(`${apiBase}/troca-variaveis?${params}`);
}