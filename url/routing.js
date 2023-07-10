/* Manejar las solicitudes del cliente en base a ciertos criterios.principlamente el metodo y el camino */
//El método de la solicitud HTTP. De esta forma el servidor sabe qué tipo de operación se realizará....GET, POST, PUT, DELETE...ETC
// EI path (camino) de Ia solicitud HTTP. De esta forma el servidor sabe el recurso específico que se usará (o que se modificara o eliminara).
//metodo + path + como manejarlo..que, donde y como
//hora 6 del tutorial 

const http = require('http');
const cursos = require('./cursos')// alternativa con desetructuracion const {infoCursos} = require('./cursos)

//creamos el servidor
const servidor = http.createServer((req,res)=>{
    //el servidor recibira una solicitud
    //extraer el metodo 
const {method} = req; //desestructuracion  //const metodo = req.method

switch (method) {
    case 'GET': 
        return manejarSolicitudGET(req,res);
    case 'POST':
        return manejarSolicitudPOST(req,res);
    default:
        res.statusCode = 501;
        res.end(`El metodo (${method}) usado no puede ser manejado por el servidor`);
        break;
}
})
function manejarSolicitudGET(req,res){
    const path = req.url;
    if(path === '/'){ // si estamos en la pagina principal de la aplicacion
        res.writeHead(200, {'content-TypeError':'application/json'}); //escribimos en la cabecera
        res.statusCode = 200; // toda la solicitud se pudo procesar adecuadamente
        return res.end("Bienvenidos a primir servidor y API creados con NodeJs")
    }
    else if(path === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos)); //del modulo cursos que importamos sacamos el objeto infocursos y lo pasamos a JSON
    }
    else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return  res.end(JSON.stringify(cursos.infoCursos.programacion))
    }
    else
    {res.statusCode = 404;
    return res.end("El recurso solicitado no existe");}
}
function manejarSolicitudPOST(req,res){
    const path = req.url;
    if(path === '/cursos/programacion'){
        let cuerpo = '';//representa la informacio nque se va recibir
        req.on('data',(contenido)=>{cuerpo += contenido.toString()});
        res.statusCode = 200;

        req.on('end',()=>{
            console.log(cuerpo);
            console.log(typeof cuerpo);
            //convertir un objeto de javascript
            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            //accedimos al a propiedades del cuerpo de la solicitud con nodejs
            console.log(cuerpo.titulo);
            res.end("El servidor recibio una solicitud POST para /cursos/programacion");
        })
    }
}
const PUERTO = 3000;
servidor.listen(PUERTO,()=>{
    console.log("El servidor esta escuchando la solicitud en el puerto: "+PUERTO);
})