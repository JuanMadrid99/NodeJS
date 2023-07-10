// Crear nuestro primer servidor
const http = require('http');

//creamos el servidor y cada vez que reciba solicitud ejecutara la funcion
const servidor = http.createServer((req,res)=>{ //solicitud y respuesta (request and response)
    console.log("solicitud nueva"); // se ejecutara siempre que se llame al servidor 
    res.end('<h1>Resultado final..Hola Mundo</h1>'); //enviamos la respuesta al cliente
}); 

//servidor escucha con el puerto 3000 y una funcion que va a ocurrir cuando el servidor comienze a ejecutarse
const puerto = 3000;
servidor.listen(puerto,()=>{
    console.log(`el servidor esta escuchando en el puerto http://localhost:${puerto}...`); 
});
// Cuando el servidor se inicio, se inicio en el puerto 3000 y se ejecuto la funcion flecha que es el segundo argumento



