import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LibroService } from '@libro/shared/service/libro.service';
import { Libro } from '@libro/shared/model/libro';

@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html'
})
export class ListarLibroComponent implements OnInit {
  public listarLibros: Observable<Libro[]>;

  constructor(protected libroService: LibroService) { }

  ngOnInit() {
    this.listarLibros = this.libroService.consultar();
  }

}
