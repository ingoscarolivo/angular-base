import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../shared/service/libro.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {

  notificacion = Swal.mixin({
    toast: true,
    position: 'center'
  });

  libroForm: FormGroup;
  constructor(protected libroServices: LibroService) { }

  ngOnInit() {
    this.construirFormularioLibro();
  }

  crear() {
    console.log("ingreso al guardar un libro");
    this.libroServices.guardar(this.libroForm.value).subscribe(
      data => {if (data){
        this.success();
        this.libroForm.reset();
      }},
      error => this.mostrarError(error.error.mensaje)
    );
  }

  private construirFormularioLibro() {
    this.libroForm = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      unidades: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required])
                                                            });
  }

  success(){
    this.notificacion.fire({
      title: 'Éxito',
      text: 'Se ha creado el libro',
      icon: 'success'
    });
  }

    mostrarError(mensaje){
      this.notificacion.fire({
        title: 'Error',
        text: mensaje,
        icon: 'error'
      });
    }
}
