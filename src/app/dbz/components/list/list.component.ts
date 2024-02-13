import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })), //Not sure if this init state is necessary here, please leave a comment and I edit this answer.
    transition(':enter', [
      style({ opacity: '0' }),
      animate('0.1s 300ms ease-in', style({ opacity: '1' }))
    ]),
    transition(':leave', [
      style({ opacity: '1' }),
      animate('0.1s ease-out', style({ opacity: '0' }))
    ])
  ])]
})
export class ListComponent {


  
  @Input()
  public characterList : Character[] = [];

  @Output()
  public onDeleteElement : EventEmitter<string> = new EventEmitter();
  
  public deleteElement(id : string) : void{
    console.log('Eliminaremos caracter: ' + id);
    this.onDeleteElement.emit(id);
  }
 }
