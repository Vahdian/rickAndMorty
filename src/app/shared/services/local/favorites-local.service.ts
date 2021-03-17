import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesLocalService {

favorites : string[] = [];

constructor() { }

addFavorite(newFavorite: any) {
  this.favorites.push(newFavorite); 
}

getFavorites(){
  return this.favorites;
}
}
