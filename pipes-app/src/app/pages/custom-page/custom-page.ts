import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { HeroColorPipe } from "../../pipes/heroColor-pipe";

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanFlyPipe, HeroColorPipe,],
  templateUrl: './custom-page.html',
})
export default class CustomPage {

  name = signal('Jeremias Ianigro')

  upperCase = signal(true);

  toggleCase() {
    this.upperCase.set(!this.upperCase());
  }

  heroes = signal(heroes)

 }
