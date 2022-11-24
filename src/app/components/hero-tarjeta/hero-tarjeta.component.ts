import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html'
})
export class HeroTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number | undefined

  @Output() heroeSelect: EventEmitter<number>

  constructor( private router: Router) { 
    this.heroeSelect = new EventEmitter();
  }

  ngOnInit() {
  }

 verHeroe() {
  //   console.log(this.index);
  this.router.navigate(['/hero', this.index])
  //this.heroeSelect.emit(this.index);
}


}
