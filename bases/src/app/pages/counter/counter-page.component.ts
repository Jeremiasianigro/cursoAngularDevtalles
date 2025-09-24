import { Passanger } from './../../../../../typescript-intro01/src/topics/11-optinonal-chaining';
import { Component } from '@angular/core';

@Component({
  template:
  `<h1>Counter: {{counter}}</h1>
  <button (click)="increaseBy(1)">+1</button>

  `
})

export class CounterPageComponent {

  counter = 10;

  increaseBy(value: number){
    this.counter += value;}
}
