import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getMiddle(string: any) {
    let middle = Math.floor(string.length / 2);

    if (string.length % 2 === 0) {
      return string[middle - 1] + string[middle];
    } else {
      return string[middle];
    }
  }
 
}
