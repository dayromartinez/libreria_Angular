import { TestBed } from '@angular/core/testing';

import { BusquedaLibrosService } from './busqueda-libros-por-titulo-service.service';

describe('BusqiedaLibrosPorTituloServiceService', () => {
  let service: BusquedaLibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaLibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
