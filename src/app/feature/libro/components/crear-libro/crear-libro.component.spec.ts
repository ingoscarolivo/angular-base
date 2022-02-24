import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearLibroComponent } from './crear-libro.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LibroService } from '../../shared/service/libro.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearLibroComponent', () => {
  let component: CrearLibroComponent;
  let fixture: ComponentFixture<CrearLibroComponent>;
  let libroService: LibroService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLibroComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [LibroService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLibroComponent);
    component = fixture.componentInstance;
    libroService = TestBed.inject(LibroService);
    spyOn(libroService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.libroForm.valid).toBeFalsy();
  });

  it('Registrando libro', () => {
    expect(component.libroForm.valid).toBeFalsy();
    component.libroForm.controls.id.setValue(1);
    component.libroForm.controls.titulo.setValue('libro test');
    component.libroForm.controls.unidades.setValue(20);
    component.libroForm.controls.precio.setValue('20000');
    expect(component.libroForm.valid).toBeTruthy();

    component.crear();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
