import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearVentaComponent } from './crear-venta.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { VentaService } from '../../shared/service/venta.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearVentaComponent', () => {
  let component: CrearVentaComponent;
  let fixture: ComponentFixture<CrearVentaComponent>;
  let ventaService: VentaService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearVentaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [VentaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVentaComponent);
    component = fixture.componentInstance;
    ventaService = TestBed.inject(VentaService);
    spyOn(ventaService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.ventaForm.valid).toBeFalsy();
  });

  it('Registrando venta', () => {
    expect(component.ventaForm.valid).toBeFalsy();
    component.ventaForm.controls.id.setValue('001');
    component.ventaForm.controls.descripcion.setValue('libro test');
    expect(component.ventaForm.valid).toBeTruthy();

    component.cerar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
