import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusquedaLibrosService {

  urlSearchDefault : string = "https://www.googleapis.com/books/v1/volumes?q=%27%27+intitle:%27Cien%20a%C3%B1os%20de%20soledad%27&maxResults=12&key=%20AIzaSyDqNrqlxSCcYdzWw0uiFbQPdQ_QJ4SVVMM";
  urlSearchByTitle : Array<string> = ["https://www.googleapis.com/books/v1/volumes?q=%27%27+intitle:%27", "", "%27&maxResults=12&key=%20AIzaSyDqNrqlxSCcYdzWw0uiFbQPdQ_QJ4SVVMM"];
  urlSearchByAutor : Array<string> = ["https://www.googleapis.com/books/v1/volumes?q=%27%27+inauthor:%27", "", "%27&maxResults=12&key=%20AIzaSyDqNrqlxSCcYdzWw0uiFbQPdQ_QJ4SVVMM"]
  urlSearch : string = "";


  constructor(private _http: HttpClient) {}

  getBooksByDefault(){
    return this._http.get<any>(this.urlSearchDefault)
  }

  searchBooksByTitle(tituloLibro : string){
    this.urlSearchByTitle[1] = tituloLibro.toLowerCase().trim();
    this.urlSearch = this.urlSearchByTitle.join();
    return this._http.get<any>(this.urlSearch);
  }

  searchBooksByAutor(nombreAutor : string){
    this.urlSearchByAutor[1] = nombreAutor.toLowerCase().trim();
    this.urlSearch = this.urlSearchByAutor.join();
    return this._http.get<any>(this.urlSearch);
  }
}
