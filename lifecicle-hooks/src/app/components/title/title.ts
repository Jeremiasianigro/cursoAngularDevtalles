import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
})
export class Title{

  title = input.required<string>();

  //  ngOnChanges(changes: SimpleChanges) {
  //   if (changes.name) {
  //     console.log(`Previous: ${changes.name.previousValue()}`);
  //     console.log(`Current: ${changes.name.currentValue}`);
  //     console.log(`Is first ${changes.name.firstChange}`);
  //   }
  // }

 }
