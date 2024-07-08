export class Inventario {
    constructor() {
        this.objetos = [];
    }

    agregarObjeto(objeto) {
        this.objetos.push(objeto);
    }

    mostrarInventario() {
        return this.objetos.map(objeto => objeto.nombre).join(", ");
    }
}
