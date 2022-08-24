import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class RickMortyService {

  api : string = "https://rickandmortyapi.com/api/character";

  constructor(private _http: HttpClient) {}

  getApi(){
    //observable -> son request o peticiones
    return this._http.get<any>(this.api)
  }
}
