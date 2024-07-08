<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de Personajes</title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <script src="assets/funciones.js" type="module"></script>
    <script src="assets/inventario.js" type="module"></script>
</head>
<body>
    <h1>Crear Personaje</h1>
    <input type="text" id="nombre" placeholder="Ingresa el nombre del personaje">
    <select id="raza">
        <option value="humano">Humano</option>
        <option value="elfo">Elfo</option>
        <option value="barbaro">Barbaro</option>
        <option value="ciclope">Ciclope</option>
        <option value="enano">Enano</option>
        <option value="mago">Mago</option>
    </select>

    <button id="crear-btn" onclick="crearPersonaje()">Crear Personaje</button>
    <button id="mostrar-btn" onclick="mostrarPersonajes()">Mostrar Personajes</button>
    <button id="agregar-objeto-btn" onclick="agregarObjeto()">Agregar Objeto</button>
    
    <h2>Características del Personaje</h2>
    <div id="personajes"></div>

    <button id="formar-equipo-btn" class="special hidden" onclick="formarEquipo()">Formar Equipo</button>
    <button id="iniciar-aventura-btn" class="special hidden" onclick="iniciarAventura()">Iniciar Aventura</button>

    <audio id="background-audio" autoplay loop>
        <source src="assets/media/background.mp3" type="audio/mpeg">
        Tu navegador no soporta el elemento de audio.
    </audio>
</body>
</html>

