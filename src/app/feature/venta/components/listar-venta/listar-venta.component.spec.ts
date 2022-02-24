import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarVentaComponent } from './listar-venta.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { VentaService } from '../../shared/service/venta.service';
import { Venta } from '../../shared/model/venta';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarVentaComponent', () => {
  let component: ListarVentaComponent;
  let fixture: ComponentFixture<ListarVentaComponent>;
  let ventaService: VentaService;
  const listaVentas: Venta[] = [new Venta(1, 1, 20000), new Venta(2, 2, 10000)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarVentaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [VentaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVentaComponent);
    component = fixture.componentInstance;
    ventaService = TestBed.inject(VentaService);
    spyOn(ventaService, 'consultar').and.returnValue(
      of(listaVentas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaVentas.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
