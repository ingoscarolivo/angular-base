import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Venta } from '../model/venta';


@Injectable()
export class VentaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Venta[]>(`${environment.endpoint}/ventas`, this.http.optsName('consultar ventas'));
  }

  public guardar(venta: Venta) {
    this.http.doPost<Venta, boolean>(`${environment.endpoint}/ventas`, venta,
                                                this.http.optsName('crear/actualizar ventas')).subscribe(data =>{
                                                  console.log("data ok"+data)
                                                }); ;
    return "ok";
  }

  public eliminar(venta: Venta) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/ventas/${venta.titulo}`,
                                                 this.http.optsName('eliminar venta'));
  }
}