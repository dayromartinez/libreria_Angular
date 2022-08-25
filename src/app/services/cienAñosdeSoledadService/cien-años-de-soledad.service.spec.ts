import { TestBed } from '@angular/core/testing';
import { CienAñosDeSoledadService } from 'src/app/services/cienAñosdeSoledadService/cien-años-de-soledad.service';


describe('CienAñosDeSoledadService', () => {
  let service: CienAñosDeSoledadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CienAñosDeSoledadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
