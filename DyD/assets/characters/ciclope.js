import { Inventario } from '../inventario.js';

export class Ciclope {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 300;
        this.objeto = "Martillo";
        this.magia = 10;
        this.fuerza = 200;
        this.inventario = new Inventario();
    }

    mostrarCaracteristicas() {
        return `Nombre: ${this.nombre + " el Ciclope"}<br>Salud: 
        ${this.salud}<br>Objeto: 
        ${this.objeto}<br>Magia: 
        ${this.magia}<br>Fuerza: 
        ${this.fuerza}<br>Inventario: 
        ${this.inventario.mostrarInventario()}`;
    }
}
