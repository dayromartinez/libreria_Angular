import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.css']
})

export class RickAndMortyComponent implements OnInit {

  personajes : Array<string> = [];

  constructor(private _rickAndMorty: RickMortyService) { }

  ngOnInit() : void {

  }

  getApi(){
    //Suscribe -> oyente que está atento a los eventos que acontezcan al observable al que está suscrito.
    this._rickAndMorty.getApi().subscribe({
      next: (v) => {
        this.personajes = v.results.map((personaje: { name: string; })=> {
          return personaje.name;
        })
      },
      error: (e) => {console.log(e)},
    });
  }

}
