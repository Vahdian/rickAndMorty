import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }
  getCharacters(page = 1){
    return this.http.get('https://rickandmortyapi.com/api/character?page=' + page);
}
  getCharacter(idCharacter: string){
  return this.http.get('https://rickandmortyapi.com/api/character/' + idCharacter);
}
}
