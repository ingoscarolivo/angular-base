import { NgModule } from '@angular/core';

import { LibroRoutingModule } from './libro-routing.module';
import { BorrarLibroComponent } from './components/borrar-libro/borrar-libro.component';
import { ListarLibroComponent } from './components/listar-libro/listar-libro.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { LibroComponent } from './components/libro/libro.component';
import { SharedModule } from '@shared/shared.module';
import { LibroService } from './shared/service/libro.service';


@NgModule({
  declarations: [
    CrearLibroComponent,
    ListarLibroComponent,
    BorrarLibroComponent,
    LibroComponent
  ],
  imports: [
    LibroRoutingModule,
    SharedModule
  ],
  providers: [LibroService]
})
export class LibroModule { }
