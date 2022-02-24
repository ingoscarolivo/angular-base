import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarLibroComponent } from './listar-libro.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LibroService } from '../../shared/service/libro.service';
import { Libro } from '../../shared/model/libro';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarLibroComponent', () => {
  let component: ListarLibroComponent;
  let fixture: ComponentFixture<ListarLibroComponent>;
  let libroService: LibroService;
  const listaLibros: Libro[] = [new Libro(1, 'Libro 1',30, '50000'), new Libro(2, 'Libro 2', 60, '10000')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarLibroComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [LibroService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarLibroComponent);
    component = fixture.componentInstance;
    libroService = TestBed.inject(LibroService);
    spyOn(libroService, 'consultar').and.returnValue(
      of(listaLibros)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listarLibros.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
