import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkLibro = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkVenta = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));
    linkUsuario = element(by.xpath('/html/body/app-root/app-navbar/nav/a[5]'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickBotonLibros() {
        await this.linkLibro.click();
    }

    async clickBotonVentas() {
        await this.linkVenta.click();
    }

    async clickBotonUsuarios() {
        await this.linkUsuario.click();
    }
}
