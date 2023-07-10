const http = require('http');
const servidor = http.createServer((req,res)=>{
    console.log("===> req(solicitud)");
    // console.log(req); //Muestra todo el ojeto 
    /* console.log(req.url); //mostrar la ruta del dominio de la pagina
    console.log(req.method); //mostrar el proposito de esa solicitud...GET, POST, PUT, DELETE..ETC
    console.log(req.headers); //Mostrar las cabeceras de la solicitud */

    console.log("===> res(respuesta)");
    console.log(res.statusCode); //codigo de estado...200 ok
    // res.statusCode = 404; // se puede cambiar 
    // console.log(res.statusCode); //404 not found
    res.setHeader('content-type', 'application/json'); // nos permite configurar un elemento de la cabecera
    // //nos permite agregar ese tipo de archivo en la cabecera
    console.log(res.getHeader());//nos permite obtener los elementos de las cabeceras

    res.end("<h1>Hola Mundo</h1> Good");
    })

const PUERTO = 3000;
servidor.listen(PUERTO,()=>{
    console.log(`EL servidor esta escuchando en el puerto: ${PUERTO}...`);
    console.log("ingrese a http://localhost:3000/");
});

