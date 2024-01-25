import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy()">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>`
})

export class CounterComponent implements OnInit {
    constructor() { }

    public counter:number = 3;

    increaseBy():void{
      this.counter++;
    }
    reset():void{
      this.counter=10;
    }
  
    decreaseBy(value : number):void{
      this.counter-=value;
    }

    ngOnInit() { }
}