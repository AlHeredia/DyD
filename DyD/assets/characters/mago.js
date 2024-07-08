import { Inventario } from '../inventario.js';

export class Mago {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 80;
        this.objeto = "Cetro";
        this.magia = 200;
        this.fuerza = 60;
        this.inventario = new Inventario();
    }

    mostrarCaracteristicas() {
        return `Nombre: ${this.nombre + " el Mago"}<br>Salud: 
        ${this.salud}<br>Objeto: 
        ${this.objeto}<br>Magia: 
        ${this.magia}<br>Fuerza: 
        ${this.fuerza}<br>Inventario: 
        ${this.inventario.mostrarInventario()}`;
    }
}