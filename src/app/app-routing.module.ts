import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { HomePageComponent } from './../../../rickAndMorty/src/app/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailPageComponent } from './pages/characters-page/pages/character-detail-page/character-detail-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'characters', component: CharacterPageComponent},
  {path: 'characters/:idCharacter', component: CharacterDetailPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'favorites', component: FavoritesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
