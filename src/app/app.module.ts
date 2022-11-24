import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

//Routes
import { AppRoutingModule } from "./app.routing.module";

//Service
import { HeroesService } from "./services/heroes.service";

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeAppComponent } from './components/home/home-app/home-app.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from "./components/hero/hero.component";
import { SearchHeroeComponent } from "./components/search-heroe/search-heroe.component";
import { HeroTarjetaComponent } from "./components/hero-tarjeta/hero-tarjeta.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeAppComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    SearchHeroeComponent,
    HeroTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
