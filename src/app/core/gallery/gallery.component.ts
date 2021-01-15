import { FavoritesLocalService } from './../../shared/services/local/favorites-local.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() list: any;
  constructor(private favoritesLocalService: FavoritesLocalService) { }

  ngOnInit(): void {
  }
  addToFavorites($event: any, newFavorite: any){
    console.log(newFavorite)
    $event.stopPropagation();
    this.favoritesLocalService.addFavorite(newFavorite);
  }
}
