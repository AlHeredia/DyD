import { Inventario } from '../inventario.js';

export class Elfo {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 150;
        this.objeto = "Arco";
        this.magia = 100;
        this.fuerza = 30;
        this.inventario = new Inventario();
    }

    mostrarCaracteristicas() {
        return `Nombre: ${this.nombre + " el Elfo"}<br>Salud: 
        ${this.salud}<br>Objeto: 
        ${this.objeto}<br>Magia: 
        ${this.magia}<br>Fuerza: 
        ${this.fuerza}<br>Inventario: 
        ${this.inventario.mostrarInventario()}`;
    }
}
