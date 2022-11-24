import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from "../../services/heroes.service";




@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
})
export class SearchHeroeComponent implements OnInit {

  heroes:any[] = [];
  termino:string = '';

  constructor( private activatedRouter: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router) {}

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {
      this.termino = params['termino']
      this.heroes = this.heroesService.buscarHeroes( params['termino'])
      console.log(this.heroes);
    })

    // verHeroe(i: number) {
    //   this.router.navigate(['/hero', i])
    // }
  }
}
