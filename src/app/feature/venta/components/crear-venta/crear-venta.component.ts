import { Component, OnInit } from '@angular/core';
import { VentaService } from '../../shared/service/venta.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-venta',
  templateUrl: './crear-venta.component.html',
  styleUrls: ['./crear-venta.component.css']
})
export class CrearVentaComponent implements OnInit {
  ventaForm: FormGroup;
  constructor(protected ventaServices: VentaService) { }

  ngOnInit() {
    this.construirFormularioVenta();
  }

  cerar() {
    console.log("ingreso al guardar");
    this.ventaServices.guardar(this.ventaForm.value);
  }

  private construirFormularioVenta() {
    this.ventaForm = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      unidades: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required])
                                                            });
  }

}
