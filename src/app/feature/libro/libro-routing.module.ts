import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { ListarLibroComponent } from './components/listar-libro/listar-libro.component';
import { BorrarLibroComponent } from './components/borrar-libro/borrar-libro.component';
import { LibroComponent } from './components/libro/libro.component';


const routes: Routes = [
  {
    path: '',
    component: LibroComponent,
    children: [
      {
        path: 'crear',
        component: CrearLibroComponent
      },
      {
        path: 'listar',
        component: ListarLibroComponent
      },
      {
        path: 'borrar',
        component: BorrarLibroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }
