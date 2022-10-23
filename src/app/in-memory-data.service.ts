import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Bike', translation: 'Rower' },
      { id: 13, name: 'Wheel', translation: 'Koło' },
      { id: 14, name: 'Can', translation: 'Puszka' },
      { id: 15, name: 'Plate', translation: 'Talerz' },
      { id: 16, name: 'Bowl', translation: 'Miska' },
      { id: 17, name: 'Fork', translation: 'Widelec' },
      { id: 18, name: 'Knife', translation: 'Nóż' },
      { id: 19, name: 'Watch', translation: 'Zegarek' },
      { id: 20, name: 'Screen', translation: 'Ekran' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
