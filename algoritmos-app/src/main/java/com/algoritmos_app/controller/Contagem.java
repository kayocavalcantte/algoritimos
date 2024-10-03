package com.algoritmos_app.controller;

import com.algoritmos_app.service.ContagemService;
import org.springframework.web.bind.annotation.*;

import java.util.Scanner;

@RestController
@RequestMapping("/contagem")
public class Contagem{
    private ContagemService contagemService;

    public Contagem(ContagemService contagemService){
        this.contagemService = contagemService;
    }

    @GetMapping
    public String Contar(){
        return contagemService.Contar();
    }

}
