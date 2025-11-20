import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAddComponent {

  name= signal('');
  power= signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      // id: this.characters().length + 1,
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power()
    };
    // this.characters().push(newCharacter);
    // this.characters.update(characters => [...characters, newCharacter]);
    // console.log({ newCharacter });
    this.newCharacter.emit(newCharacter);
    this.resetFields();

  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
