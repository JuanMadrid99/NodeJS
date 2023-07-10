/* File System
Modulo que contiene funcionalidad muy util para trabajar con el sistema de archivos.
Operaciones Utiles: Leer, Modificar, Copiar, Eliminar, Cambiar Nombre.
Todos los metodos son asincronos por defecto, Pero puedes escoger versiones sincronas de estos metodos agregando Sync a sus nombres */

// Incluir el modulo 
const fs = require('fs');

const archivo = fs.readFileSync('main.html','utf-8');
// fs.readFile('ARCHIVO','CODIFICACION') 
// lo podemos guardar a una constante
console.log(archivo);

// Le cambia el nombre al archivo
fs.renameSync('main.html','main.html');

//Añade codigo al final del archivo
fs.appendFileSync('main.html','<p>Parrafo inyectado</p>');

//Reemplazar todo el contenido del archivo
fs.writeFileSync('main.js','Contenido Nuevo');

// Borrar un archivo
fs.unlinkSync('main.js');

//Al ser sincronos es te codigo se ejecutrara en orden de escritura
