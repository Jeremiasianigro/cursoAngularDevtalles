import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const data = localStorage.getItem('dragonball-characters');
  return data ? JSON.parse(data) : [];
}


@Injectable({providedIn: 'root'})
export class DragonballService {
  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('dragonball-characters', JSON.stringify(this.characters()));
  });

  addCharacter(Character: Character) {
    this.characters.update((characters) => [...characters, Character]);
  }
}
