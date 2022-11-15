import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeAppComponent } from './components/home/home-app/home-app.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
//import { Name4Component } from './';
//import { PageNotFoundComponent } from './';

const routes: Routes = [
  { path: 'home', component: HomeAppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  //{ path: 'path4', component: Name4Component },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
