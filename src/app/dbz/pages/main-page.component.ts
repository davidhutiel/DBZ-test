import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent implements OnInit {
  
    public characters: Character[] = [
    {
      name: 'Krilin',
      power: 100,
    },
    { 
        name: 'Goku', 
        power: 1000 
    },
  ];

  ngOnInit() {}
}