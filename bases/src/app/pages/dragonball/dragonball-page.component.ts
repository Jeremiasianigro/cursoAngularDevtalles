import { Component, signal} from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.component.html'
})

export class dragonballPageComponent  {

  name= signal('Gohan');
  power= signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Trunks', power: 3000 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };
    // this.characters().push(newCharacter);
    this.characters.update(characters => [...characters, newCharacter]);
    this.resetFields();

  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
