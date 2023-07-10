/* File System
Modulo que contiene funcionalidad muy util para trabajar con el sistema de archivos.
Operaciones Utiles: Leer, Modificar, Copiar, Eliminar, Cambiar Nombre.
Todos los metodos son asincronos por defecto, Pero puedes escoger versiones sincronas de estos metodos agregando Sync a sus nombres */

// Incluir el modulo 
const fs = require('fs');

fs.readFile('main.html','utf-8',(error,contenido) => {
    error?console.log(error):console.log(contenido);
    console.log("Aunque falle el programa sigue ejecutandose");
    // console.log(error)==throw error/; pero se con throw se detiene la ejecucion del programa 
});
// fs.readFile('ARCHIVO','CODIFICACION', FUNCION)

// Le cambia el nombre al archivo
fs.rename('main.html','main.html',(error)=>{
            //nombre - cambio
 if(error){
    throw error
 }
 console.log("Nombre cambiado existosamente");
});

//Añade codigo al final del archivo
fs.appendFile('main.html','<p>Parrafo inyectado</p>',(error)=>{
    if(error){throw error};
    console.log("Parrafo añadido");
});

//Reemplazar todo el contenido del archivo
fs.writeFile('main.js','Contenido Nuevo',(err)=>{
    if(err){throw err}
    console.log("Contenido reemplazado exitosamente");
});

// Borrar un archivo
fs.unlink('main.js',(error)=>{
    if (error) { throw error}
    console.log("Archivo Eliminado");
});

//Al ser asincronos es te codigo no se ejecutrara en orden de escritura
