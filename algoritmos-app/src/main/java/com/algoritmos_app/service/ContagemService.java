package com.algoritmos_app.service;

import org.springframework.stereotype.Service;

import java.util.Scanner;

@Service
public class ContagemService {
    Scanner prompt = new Scanner(System.in);
    float n, nota, cont = 0, i = 0;

    public String Contar(){
    System.out.println("Quantidade de alunos:");
    n = prompt.nextInt();
        while(i < n){
        System.out.println("Nota do aluno:");
        nota = prompt.nextInt();
        if(nota < 50){
            cont = cont +0;
        }else{
            cont = cont +1;
        }
        i++;
    }
        return "sao " + (int)n + " alunos"  + " e só foram aprovados "+ (int)cont;
//        System.out.println("São " + n + " alunos");
//        System.out.println("São " + cont + " aprovados");
}

}
