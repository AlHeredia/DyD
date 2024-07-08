import { Inventario } from '../inventario.js';

export class Barbaro {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 150;
        this.objeto = "Espada";
        this.magia = 0;
        this.fuerza = 100;
        this.inventario = new Inventario();
    }

    mostrarCaracteristicas() {
        return `Nombre: ${this.nombre + " el Barbaro"}<br>Salud: 
        ${this.salud}<br>Objeto: 
        ${this.objeto}<br>Magia: 
        ${this.magia}<br>Fuerza: 
        ${this.fuerza}<br>Inventario: 
        ${this.inventario.mostrarInventario()}`;
    }
}
