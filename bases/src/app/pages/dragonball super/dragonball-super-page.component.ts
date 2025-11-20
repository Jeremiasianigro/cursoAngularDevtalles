import { Component, signal} from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add';
import { Character } from '../../interfaces/character.interface';





@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})

export class dragonballSuperPageComponent  {

  name= signal('');
  power= signal(0);
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 15000
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 13000
    }

  ]);

  addCharacter(Character: Character) {
    this.characters.update(characters => [...characters, Character]);


  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
