import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeAppComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
