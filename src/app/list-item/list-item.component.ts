import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() alphaNumeric: any = {};
  @Output() emitText = new EventEmitter<any>();

  firstSixCharacters?: any;

  newCharacter?: string;
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {}

  hoverEffect() {
    this.startsWithVowel(this.alphaNumeric);
    this.secondFunction(this.alphaNumeric);
  }

  startsWithVowel(character: any) {
    
    this.firstFunction(character);
    

    
  }

  firstFunction(character: any) {
    const vowels = 'aeiouAEIOU';

    if (vowels.indexOf(character[0]) !== -1) {
      // Split the string in array for easy access/manipulation by indexing
      const Split_String = character.split('');

      // Target the first word
      Split_String[0] = Split_String[0].toUpperCase();
      

      // Target the last word
      Split_String[Split_String.length - 1] =
        Split_String[Split_String.length - 1].toUpperCase();

      // Join the array into a single word
      const Joined_Back = Split_String.join('');
      return (this.alphaNumeric = Joined_Back);
    } else {
      const Split_String = character.split('');

      // Target the first word
      return (this.alphaNumeric =
        character[0].toLowerCase() + character.slice(1).toUpperCase());
    }
  }

  secondFunction(character: any) {
    if (character.length < 6) {
      console.log('less than');
      this.alphaNumeric = character += '0';
    } else {
      this.firstSixCharacters = character.substring(0, 6);
      const Split_String = this.firstSixCharacters.split('');
     
      console.log(this.firstSixCharacters);
    }
  };

}
