import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  heroe:any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private heroesServices: HeroesService ) { 
    this.activatedRoute.params.subscribe( params => {
      this.heroe = heroesServices.getHeroe(params['id'])
    })
  }

  ngOnInit(): void {
  }

}
