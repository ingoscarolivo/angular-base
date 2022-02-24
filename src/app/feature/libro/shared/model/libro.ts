export class Libro {

    id: number;
    titulo: string;
    unidades: number;
    precio: string;

    constructor(id: number, titulo: string, unidades: number, precio: string) {
        this.id = id;
        this.titulo = titulo;
        this.unidades = unidades;
        this.precio = precio;
    }

}
