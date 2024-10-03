let n = prompt("Quantidade de alunos: ")
let i = 0
let cont = 0

while(i < n){
    let nota = parseFloat(prompt("nota do aluno"))
    
    if(nota < 50){
        cont = cont + 0
    }else{
        cont = cont + 1
    }
    i++
}

document.write(`Sao ${n} alunos`)
document.write(`Sao ${cont} alunos aprovados`)