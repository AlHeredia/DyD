import { Humano } from './characters/humano.js';
import { Elfo } from './characters/elfo.js';
import { Barbaro } from './characters/barbaro.js';
import { Ciclope } from './characters/ciclope.js';
import { Enano } from './characters/enano.js';
import { Mago } from './characters/mago.js';

let personajes = [];

window.crearPersonaje = function() {
    const nombre = document.getElementById('nombre').value;
    const raza = document.getElementById('raza').value;
    let personaje;

    if (raza === 'humano') {
        personaje = new Humano(nombre);
    } else if (raza === 'elfo') {
        personaje = new Elfo(nombre);
    } else if (raza === 'barbaro') {
        personaje = new Barbaro(nombre);
    } else if (raza === 'ciclope') {
        personaje = new Ciclope(nombre);
    } else if (raza === 'enano') {
        personaje = new Enano(nombre);
    } else if (raza === 'mago') {
        personaje = new Mago(nombre);
    }

    if (nombre === "") {
        alert("Debes indicar un nombre.");
    } else {
        personajes.push(personaje);
        mostrarPersonajes();
        alert("Personaje creado exitosamente.");

        if (personajes.length > 1) {
            document.getElementById('formar-equipo-btn').classList.remove('hidden');
        }
    }
};

window.mostrarPersonajes = function() {
    const contenedor = document.getElementById('personajes');
    contenedor.innerHTML = ''; // Limpiar contenido previo

if (personajes.length === 0) {
        alert("No hay ningún personaje creado. Por favor, crea un personaje primero.");
        return; // Sale de la función si no hay personajes
    }
    
    personajes.forEach(personaje => {
        const div = document.createElement('div');
        div.className = 'personaje';
        div.innerHTML = personaje.mostrarCaracteristicas(); // Asegúrate de que cada clase tenga esta función
        contenedor.appendChild(div);
    });
};

window.agregarObjeto = function() {
    const objeto = prompt("Ingresa el nombre del objeto:");
    if (personajes.length === 0) {
        alert("No hay ningún personaje creado. Por favor, crea un personaje primero.");
        return; // Sale de la función si no hay personajes
    }
    
    personajes.forEach(personaje => {
        personaje.inventario.agregarObjeto({ nombre: objeto });
    });
    alert("Objeto agregado al inventario.");
};

window.formarEquipo = function() {
    alert("El equipo se ha formado exitosamente.");
    document.getElementById('iniciar-aventura-btn').classList.remove('hidden');
};

window.iniciarAventura = function() {
    window.location.href = 'assets/Zones/viaje.html';
};
