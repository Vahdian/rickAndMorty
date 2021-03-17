import { FavoritesComponent } from './pages/favorites/favorites.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './core/gallery/gallery.component';
import { PaginatorComponent } from './shared/components/paginator/paginator.component';
import { CharacterDetailPageComponent } from './pages/characters-page/pages/character-detail-page/character-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationsComponent } from './pages/locations/locations.component';
import { PriorityNamePipe } from './shared/pipes/priority-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    CharacterPageComponent,
    GalleryComponent,
    PaginatorComponent,
    CharacterDetailPageComponent,
    ContactPageComponent,
    LocationsComponent,
    PriorityNamePipe,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
