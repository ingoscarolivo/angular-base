import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LibroService } from './libro.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Libro } from '../model/libro';
import { HttpResponse } from '@angular/common/http';

describe('LibroService', () => {
  let httpMock: HttpTestingController;
  let service: LibroService;
  const apiEndpointLibroConsulta = `${environment.endpoint}/libros`;
  const apiEndpointLibros = `${environment.endpoint}/libros`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LibroService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(LibroService);
  });

  it('should be created', () => {
    const libroService: LibroService = TestBed.inject(LibroService);
    expect(libroService).toBeTruthy();
  });

  it('deberia listar libros', () => {
    const dummyLibros = [
      new Libro(1,'Libro 1', 30, '50000'), new Libro(2,'Libro 2',20,'10000')
    ];
    service.consultar().subscribe(libros => {
      expect(libros.length).toBe(2);
      expect(libros).toEqual(dummyLibros);
    });
    const req = httpMock.expectOne(apiEndpointLibroConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyLibros);
  });

  it('deberia crear un libro', () => {
    const dummyLibro = new Libro(1, 'Libro 1', 30, '50000');
    service.guardar(dummyLibro).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointLibros);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un libro', () => {
    const dummyLibro = new Libro(1, 'Libro 1', 30, '50000');
    service.eliminar(dummyLibro).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointLibros}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
