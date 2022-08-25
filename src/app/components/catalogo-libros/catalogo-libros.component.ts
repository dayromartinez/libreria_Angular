import { Component, OnInit } from '@angular/core';
import { dataLibro } from 'src/interfaces/libroInterfaz';
import { BusquedaLibrosService } from 'src/app/services/busquedaLibrosService/busqueda-libros-por-titulo-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-catalogo-libros',
  templateUrl: './catalogo-libros.component.html',
  styleUrls: ['./catalogo-libros.component.css']
})
export class CatalogoLibrosComponent implements OnInit {

  libros : Array<dataLibro> = [];
  tipoDeBusqueda : string = "Buscar por...";
  searchInput : string = "";

  constructor(private _busquedaLibrosService : BusquedaLibrosService) { }

  ngOnInit(): void {
    if(localStorage.getItem('searchInputNavbar') !== null){
      this.searchBooksByTitle(localStorage.getItem('searchInputNavbar'));
      localStorage.removeItem('searchInputNavbar');
    }else{
      this.listBooksByDefault();
    }
  }

  listBooksByDefault(){
    this._busquedaLibrosService.getBooksByDefault().subscribe({
      next: (v) => {
        let jsonLibros = v?.items;
        let libro : dataLibro = {};
        this.libros = jsonLibros.map((jsonLibro : any) => {

          let infoLibro = jsonLibro?.volumeInfo;
          libro = {
            titulo : infoLibro?.title,
            autor: infoLibro?.authors[0],
            descripcion: infoLibro?.description || "Descripción no disponible",
            editorial: infoLibro?.publisher || "Editorial no disponible",
            fechaPublicacion: infoLibro?.publishedDate || "Fecha de publicación no disponible",
            generos: infoLibro?.categories || ["Géneros no disponibles"],
            idioma: infoLibro?.language || ["Desconocido"],
            imagen: infoLibro?.imageLinks?.thumbnail || "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg",
            numeroPaginas: infoLibro?.pageCount.toString() || "Número de páginas no disponible",
            precio: jsonLibro?.saleInfo?.listPrice?.amount?.toString() || "No disponible",
            valoracion: infoLibro?.averageRating?.toString() || "Valoración no disponible",
            linkDeVenta: infoLibro?.canonicalVolumeLink || "",
            linkPreviewLibro: infoLibro?.previewLink || "",
          }

          return libro;
        })
        console.log(this.libros);
      },
      error: (e) => {console.log(e)},
    })
  }

  searchBooksByTitle(tituloLibro : any) {
    this._busquedaLibrosService.searchBooksByTitle(tituloLibro).subscribe({
      next: (v) => {
        let jsonLibros = v?.items;
        let libro : dataLibro = {};
        this.libros = jsonLibros.map((jsonLibro : any) => {

          let infoLibro = jsonLibro?.volumeInfo;
          libro = {
            titulo : infoLibro?.title,
            autor: infoLibro?.authors?.[0],
            descripcion: infoLibro?.description || "Descripción no disponible",
            editorial: infoLibro?.publisher || "Editorial no disponible",
            fechaPublicacion: infoLibro?.publishedDate || "Fecha de publicación no disponible",
            generos: infoLibro?.categories || ["Géneros no disponibles"],
            idioma: infoLibro?.language || ["Desconocido"],
            imagen: infoLibro?.imageLinks?.thumbnail || "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg",
            numeroPaginas: infoLibro?.pageCount?.toString() || "Número de páginas no disponible",
            precio: jsonLibro?.saleInfo?.listPrice?.amount?.toString() || "No disponible",
            valoracion: infoLibro?.averageRating?.toString() || "Valoración no disponible",
            linkDeVenta: infoLibro?.canonicalVolumeLink || "",
            linkPreviewLibro: infoLibro?.previewLink || "",
          }

          return libro;
        })
        console.log(this.libros);
      },
      error: (e) => {console.log(e)},
    })
  }

  searchBooksByAutor(autor : string) {
    this._busquedaLibrosService.searchBooksByAutor(autor).subscribe({
      next: (v) => {
        let jsonLibros = v?.items;
        let libro : dataLibro = {};
        this.libros = jsonLibros.map((jsonLibro : any) => {

          let infoLibro = jsonLibro?.volumeInfo;
          libro = {
            titulo : infoLibro?.title,
            autor: infoLibro?.authors?.[0],
            descripcion: infoLibro?.description || "Descripción no disponible",
            editorial: infoLibro?.publisher || "Editorial no disponible",
            fechaPublicacion: infoLibro?.publishedDate || "Fecha de publicación no disponible",
            generos: infoLibro?.categories || ["Géneros no disponibles"],
            idioma: infoLibro?.language || ["Desconocido"],
            imagen: infoLibro?.imageLinks?.thumbnail || "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg",
            numeroPaginas: infoLibro?.pageCount?.toString() || "Número de páginas no disponible",
            precio: jsonLibro?.saleInfo?.listPrice?.amount?.toString() || "No disponible",
            valoracion: infoLibro?.averageRating?.toString() || "Valoración no disponible",
            linkDeVenta: infoLibro?.canonicalVolumeLink || "",
            linkPreviewLibro: infoLibro?.previewLink || "",
          }

          return libro;
        })
        console.log(this.libros);
      },
      error: (e) => {console.log(e)},
    })
  }

  onClick() {

    if(this.searchInput.length < 4){
      Swal.fire({
        icon: 'error',
        title: '¡No se ha podido realizar la búsqueda!',
        text: `El campo de texto debe tener como mínimo 4 caracteres.`,
      })
      this.searchInput = "";
      return;
    }

    if(this.tipoDeBusqueda === "Título" || this.tipoDeBusqueda === "Buscar por..."){
      this.searchBooksByTitle(this.searchInput);
      Swal.fire({
        icon: 'success',
        title: '¡Búsqueda realizada con éxito!',
        html: `<p>Los resultados para la búsqueda por título para "<b><i>${this.searchInput}</i></b>" fueron...</p>`
      })
      this.searchInput = "";
    }else{
      this.searchBooksByAutor(this.searchInput);
      Swal.fire({
        icon: 'success',
        title: '¡Búsqueda realizada con éxito!',
        text: `Los resultados para la búsqueda por autor para "${this.searchInput}" fueron...`,
      })
      this.searchInput = "";
    }
  }

}
