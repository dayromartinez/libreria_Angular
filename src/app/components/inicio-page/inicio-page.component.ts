import { Component, OnInit } from '@angular/core';
import { CienAñosDeSoledadService } from 'src/app/services/cienAñosdeSoledadService/cien-años-de-soledad.service';
import { dataLibro } from 'src/interfaces/libroInterfaz';

@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css']
})
export class InicioPageComponent implements OnInit {

  libro : dataLibro = {};

  constructor(private _cienAñosDeSoledad: CienAñosDeSoledadService) { }

  ngOnInit(): void {
    this.getApi()
  }

  getApi(){
    //Suscribe -> oyente que está atento a los eventos que acontezcan al observable al que está suscrito.
    this._cienAñosDeSoledad.getApi().subscribe({
      next: (v) => {
        let jsonLibro = v?.items[0];
        let infoLibro = jsonLibro.volumeInfo;
        this.libro = {
          titulo : infoLibro?.title,
          autor: infoLibro?.authors[0],
          descripcion: infoLibro?.description || "Descripción no disponible",
          editorial: infoLibro?.publisher || "Editorial no disponible",
          fechaPublicacion: infoLibro?.publishedDate || "Fecha de publicación no disponible",
          generos: infoLibro?.categories || ["Géneros no disponibles"],
          idioma: infoLibro?.language || ["Desconocido"],
          imagen: infoLibro?.imageLinks?.thumbnail || "https://edit.org/images/cat/portadas-libros-big-2019101610.jpg",
          numeroPaginas: infoLibro?.pageCount.toString() || "Número de páginas no disponible",
          precio: jsonLibro?.saleInfo?.listPrice?.amount?.toString() || "Lo sentimos. Este libro se encuentra agotado :(",
          valoracion: infoLibro?.averageRating?.toString() || "Valoración no disponible"
        }
        console.log(this.libro);
      },
      error: (e) => {console.log(e)},
    });
  }

}
