import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes : string[] = ['Spiderman', 'Batman' , 'Hulk', ' Wonder woman', 'Superman'];
  public heoreBorrado? : string;
  borrarUltimoHeroe() : void {
    this.heoreBorrado = this.heroes.pop();
  }
}
