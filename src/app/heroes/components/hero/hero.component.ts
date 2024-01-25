import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  private name: string = "Ironman";
  private edad: number = 45;
  private version: number = 1;
  public mostrarVolverOriginal = false;

  get capitalizedName(){
    return this.name.toUpperCase();
  }
  get edadS(){
    return this.edad;
  }

  changeName() : void {
    this.name = "IronMan" + this.version++;
    this.mostrarVolverOriginal = true;
  }

  volverAlOriginal() : void {
    this.mostrarVolverOriginal = false;
    this.name = "Ironman";
    this.version = 1;
  }

  explotar() : void {
    document.querySelectorAll('h1').forEach( element => {
      element.innerHTML = '<h1> Se ha descontrolaoooo</h1>'}
    );
  }

  testFuncion({variable1 = 'a' , variable2 = 1 , variable3 = new Date()}):void{
    console.log(variable1, variable2,variable3);

  }

  probar(){
    this.testFuncion({variable1:'b',variable2:1,variable3:new Date()});
  }
  
}
