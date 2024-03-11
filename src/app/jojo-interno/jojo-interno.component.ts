import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-jojo-interno',
  templateUrl: './jojo-interno.component.html',
  styleUrls: ['./jojo-interno.component.scss']
})


export class JojoInternoComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  flag : boolean  = true
  matris : number[][] = [
    [2 , 2, 2],
    [2 , 2, 2],
    [2 , 2, 2]
  ]
  vencedor : number = 2

  verificador (x : number, y : number, flag : number) {
    this.matris[x][y] = flag;

    for(let coluna = 0; coluna < 3; coluna ++) {
      if(this.matris[coluna][y] != flag){
        break
      }
      if(coluna == 2){
        this.vencedor = flag;
        this.vencer(flag)
      }
    }

    for(let linha = 0; linha < 3; linha ++) {
      if(this.matris[x][linha] != flag){
        break
      }
      if(linha == 2){
        this.vencedor = flag;
        this.vencer(flag)
      }
    }

    this.verificarDiagPrinc(flag)
    this.verificarDiagSec(flag)
  }

  verificarDiagPrinc(flag: number) {
    for(let coluna = 0; coluna < 3; coluna++){
      for(let linha = 0; linha < 3; linha++){
        if(coluna == linha){
          if(this.matris[coluna][linha] != flag){
            return
          }
        }
      }
      if(coluna == 2) {
        this.vencedor = flag;
        this.vencer(flag)
      }
    }
  }
  
  verificarDiagSec(flag : number) {
    let ve = 2;
    for(let coluna = 0; coluna < 3; coluna++){
      for(let linha = 0; linha < 3; linha++){
        if(linha == ve){
          ve--;
          console.log(this.matris)
          if(this.matris[coluna][linha] != flag){
            return
          }
        }
      }
    }
    this.vencedor = flag
    this.vencer(flag)
  }

  onClick(x : number, y : number, z : number) {
    if(this.flag == true) {
      let elemento = this.el.nativeElement.querySelector(`.check-${z}`);
      this.renderer.setStyle(elemento , 'opacity', '1');
      this.verificador(x, y, 0)
      
    }
    if(this.flag == false) {
      let elemento = this.el.nativeElement.querySelector(`.ball-${z}`);
      this.renderer.setStyle(elemento , 'opacity', '1');
      this.verificador(x, y, 1)
    }
    

    this.flag = !this.flag
    }
    
  vencer(flag : number) {
    let grid = this.el.nativeElement.querySelector(`.grid`)
    let bigBall = this.el.nativeElement.querySelector(`.big-ball`)
    let bigCheck = this.el.nativeElement.querySelector(`.big-check`)
    this.renderer.setStyle(grid , 'display', 'none');
    if(flag == 1){
      this.renderer.setStyle(bigBall , 'display', 'block');
    }
    if(flag == 0){
      this.renderer.setStyle(bigCheck , 'display', 'inline-block');
    }
  }
}


