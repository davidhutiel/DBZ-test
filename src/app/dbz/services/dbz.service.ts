import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[] = [
        {
          id: uuid(),
          name: 'Ramon',
          power: 100,
        },
        { 
            id: uuid(),
            name: 'Manolo', 
            power: 1000 
        },
        { 
          id: uuid(),
          name: 'Pepe', 
          power: 5000 
      },
      ];
    
      public saveNewCharacter(character : Character):void{
        this.characters.push(JSON.parse(JSON.stringify({id: uuid(),...character})));
        //this.characters.push(character);
      }
    
      public deleteCharacterById(id : string):void{
        if((this.characters.length===1)){
          this.characters.splice(0, 1, {id: uuid(), name:'Eliminado el último',power:0});
        } else {
          this.characters = this.characters.filter(character => character.id !== id);
        }
        
      }
    
}