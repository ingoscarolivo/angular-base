import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../shared/service/libro.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-libro',
  templateUrl: './borrar-libro.component.html'
})
export class BorrarLibroComponent implements OnInit {

  notificacion = Swal.mixin({
    toast: true,
    position: 'center'
  });

  libroForm: FormGroup;

  constructor(protected libroServices: LibroService) { }

  ngOnInit() {
    this.construirFormularioLibro();
  }

  borrar() {
    this.libroServices.eliminar(this.libroForm.value).subscribe(
      data => {if (data){
        this.success();
        this.libroForm.reset();
      }},
      error => this.mostrarError(error.error.mensaje)
    );
  }

  private construirFormularioLibro() {
    this.libroForm = new FormGroup({
      id: new FormControl('', [Validators.required])
                                                            });
  }

  success(){
    this.notificacion.fire({
      title: 'Éxito',
      text: 'Se ha eliminado el libro',
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
