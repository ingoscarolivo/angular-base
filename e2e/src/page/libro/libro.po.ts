import { by, element } from 'protractor';

export class LibroPage {
    private linkCrearlibro = element(by.id('linkCrearLibro'));
    private linkListarLibros = element(by.id('linkListarLibro'));
    private inputIdlibro = element(by.id('idLibro'));
    private inputTituloLibro = element(by.id('tituloLibro'));
    private listaLibros = element.all(by.css('ul.libros li'));

    async clickBotonCrearLibros() {
        await this.linkCrearlibro.click();
    }

    async clickBotonListarProductos() {
        await this.linkListarLibros.click();
    }

    async ingresarId(idTitulo) {
        await this.inputIdlibro.sendKeys(idTitulo);
    }

    async ingresarTitulo(tituloLibro) {
        await this.inputTituloLibro.sendKeys(tituloLibro);
    }

    async contarLibros() {
        return this.listaLibros.count();
    }
}
