import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visor : string = '0';
  operacao! : number;
  valor1! : number;
  valor2! : number;
  jaFoiCalculado: boolean = false;

  constructor() {}

  adicionarNumero(valor: string){
    if (this.jaFoiCalculado){
      this.visor=valor;
      this.jaFoiCalculado=false;
    }
    else if (valor === '.' && this.visor.includes('.')) {
      return;
    }
    else if((this.visor.length === 1) && (this.visor === '0')){
    this.visor=valor;
    } else{
      this.visor+=valor;
      }
  }

  zerar(){
    this.visor = '0';
  }

  reativarCalculo() {
    this.jaFoiCalculado = false;
  }
  

  adicionarOperacao(valor: number){
      this.operacao = valor;
      this.valor1 = +this.visor;
      this.zerar();
  }

  calcular(){
    if(this.jaFoiCalculado){
      return;
    }

    this.valor2 = +this.visor;
    switch(this.operacao){
      case 0 : { this.visor = "" + (this.valor1 + this.valor2);
      break;
    }
      case 1 : { this.visor = "" + (this.valor1 - this.valor2);
      break;
    }
      case 2 : { this.visor = "" + (this.valor1 * this.valor2);
      break;
    }
      case 3 : { this.visor = "" + (this.valor1 / this.valor2);
      break;
    }
      case 4 : { this.visor = "" + (this.valor1 * -1);
      break;
    }
      case 5 : { this.visor = "" + (this.valor1 / 100);
      break;
    }
    }
    this.valor1 = +this.visor;
    this.jaFoiCalculado = true;
  }
}
