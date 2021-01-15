import { CharactersService } from './../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})

export class CharacterPageComponent implements OnInit {
  characters: any;
  paginationInfo: any;
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters(1);
}
getCharacters(page: any){
  this.charactersService.getCharacters(page).subscribe((res: any) => {
    this.characters = res.results
    this.paginationInfo = {...res.info, page}
    console.log(res);
});
}
}


