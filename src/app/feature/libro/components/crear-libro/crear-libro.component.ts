import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../shared/service/libro.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {
  libroForm: FormGroup;
  constructor(protected libroServices: LibroService) { }

  ngOnInit() {
    this.construirFormularioLibro();
  }

  cerar() {
    console.log("ingreso al guardar");
    this.libroServices.guardar(this.libroForm.value);
  }

  private construirFormularioLibro() {
    this.libroForm = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      unidades: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required])
                                                            });
  }

}
