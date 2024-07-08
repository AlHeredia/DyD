import { Inventario } from '../inventario.js';

export class Humano {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 100;
        this.objeto = "Escudo";
        this.magia = 20;
        this.fuerza = 70;
        this.inventario = new Inventario();
    }

    mostrarCaracteristicas() {
        return `Nombre: ${this.nombre + " el Humano"}<br>Salud: 
        ${this.salud}<br>Objeto: 
        ${this.objeto}<br>Magia: 
        ${this.magia}<br>Fuerza: 
        ${this.fuerza}<br>Inventario: 
        ${this.inventario.mostrarInventario()}`;
    }
}
