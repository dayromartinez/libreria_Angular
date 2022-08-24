import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})

export class LibrosComponent implements OnInit {


  status : string = "Formulario no enviado";
  nombreLibro : string = "";
  nombreAutor : string = "";
  generoLibro : string = "";
  displayNombreLibro : boolean = false;
  nombres : Array<string> = ["Cien años de soledad", "La última niebla", "La amortajada", "Que viva la música", "1984"];

  constructor() {
    console.log('constructor LibrosComponent');
  }

  ngOnInit(): void {
    console.log('ngOnInit LibrosComponent');
  }

  onSendForm(){
    this.status = "El formulario se envió, todo bien, todo bonito."
    alert(this.status);
  }

  onDefaultForm(){
    this.nombreLibro = "Cien Años de Soledad"
  }

}
