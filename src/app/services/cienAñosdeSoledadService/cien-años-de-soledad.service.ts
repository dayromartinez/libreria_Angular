import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CienAñosDeSoledadService {

  api : string = "https://www.googleapis.com/books/v1/volumes?q=%27%27+intitle:%27Cien%20a%C3%B1os%20de%20soledad%20(edici%C3%B3n%20ilustrada)%27&maxResults=1&key=%20AIzaSyDqNrqlxSCcYdzWw0uiFbQPdQ_QJ4SVVMM";

  constructor(private _http: HttpClient) {}

  getApi(){
    return this._http.get<any>(this.api)
  }
}
