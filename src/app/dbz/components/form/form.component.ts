import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent { 

  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();

  initCharacter(){

  }
  public character : Character = {
    name : ''
  };

  public addCharacter(){
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character)

    this.character.name = '';
    this.character.power = undefined;
  } 
}
