import { FavoritesLocalService } from './../../shared/services/local/favorites-local.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoritesLocal: any;

  constructor(private favoritesLocalService: FavoritesLocalService) { }

  ngOnInit(): void {
    this.favoritesLocal = this.favoritesLocalService.getFavorites();
    console.log(this.favoritesLocal, "funciono?")
  }

}
