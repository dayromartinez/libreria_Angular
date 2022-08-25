import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchInputNavbar : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    let url = window.location?.pathname;
    if(url === "/catalogo_libros"){
      Swal.fire({
        icon: 'error',
        title: '¡No se ha podido realizar la búsqueda!',
        text: `Al estar ubicados en esta página, debes realizar la búsqueda en el campo de texto designado para esta función.`,
      })
      this.searchInputNavbar = "";
      return;
    }

    localStorage.setItem('searchInputNavbar', this.searchInputNavbar);
    Swal.fire({
      icon: 'success',
      title: '¡Búsqueda realizada con éxito!',
      html: `<p>Los resultados para la búsqueda por título para "<b><i>${this.searchInputNavbar}</i></b>" fueron...</p>`
    })
    this.searchInputNavbar = "";
  }

}
