export class Venta {

    idLibro: number;
    idUsuario: number;
    unidadVenta: number;


    constructor(idLibro: number, idUsuario: number, unidadVenta: number) {
        this.idLibro = idLibro;
        this.idUsuario = idUsuario;
        this.unidadVenta = unidadVenta;
    }
}
