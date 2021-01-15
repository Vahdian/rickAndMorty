import { ActivatedRoute } from '@angular/router';
import { CharactersService } from './../../../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit {
  character: any;
  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit() {

 this.route.paramMap.subscribe((params: any) => {
 const idCharacter = params.get('idCharacter');
 this.charactersService.getCharacter(idCharacter).subscribe((character) => {
   console.log(character);
   this.character = character;
 });
 });
 }
}
