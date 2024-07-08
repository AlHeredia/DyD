import { Inventario } from '../inventario.js';

export class Enano {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 130;
        this.objeto = "Hacha";
        this.magia = 30;
        this.fuerza = 90;
        this.inventario = new Inventario();
    }

    mostrarCaracteristicas() { // Cambia esto a mostrarCaracteristicas
        return `Nombre: ${this.nombre + " el Enano"}<br>Salud: 
        ${this.salud}<br>Objeto: 
        ${this.objeto}<br>Magia: 
        ${this.magia}<br>Fuerza: 
        ${this.fuerza}<br>Inventario: 
        ${this.inventario.mostrarInventario()}`;
    }
}

