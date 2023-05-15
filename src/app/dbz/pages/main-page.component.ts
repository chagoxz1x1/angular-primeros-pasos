import { Character } from './../interfaces/characters.interface';
import { Component,  } from '@angular/core';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  constructor(private dbzService: dbzService){}

  get character(): Character[]{
      return [...this.dbzService.characters]
    }
  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character)
  }
}
