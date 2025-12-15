import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

  name = signal('Jeremias Ianigro')

  upperCase = signal(true);

  toggleCase() {
    this.upperCase.set(!this.upperCase());
  }

 }
