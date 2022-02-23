import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Libro } from '../model/libro';


@Injectable()
export class LibroService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Libro[]>(`${environment.endpoint}/libros`, this.http.optsName('consultar libros'));
  }

  public guardar(libro: Libro) {
    this.http.doPost<Libro, boolean>(`${environment.endpoint}/libros`, libro,
                                                this.http.optsName('crear/actualizar libros')).subscribe(data =>{
                                                  console.log("data ok"+data)
                                                }); ;
    return "ok";
  }

  public eliminar(libro: Libro) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/libros/${libro.titulo}`,
                                                 this.http.optsName('eliminar libro'));
  }
}