/* esto sera un modulo */
function saludar(nombre){
    return `Hola ${nombre}`;
}
function holamundo(){
    return "Hola Mundo";
}
//console.log(module.exports); //{} es un objeto vacio proque no se ha exportado nada todavia se le agrega punto tal cual un objeto para agregar la propiedad
module.exports.saludar = saludar; 
module.exports.holamundo = holamundo;
// module .exports.nombre cualquiera pero ese nombre tendra al exportar 
//console.log(module.exports.saludar); // se agrego la funcion saludar en el modulo 

//OTRA MANERA DE EXPORTAR VARIOS
module.exports = {
    saludar:saludar,
    holamundo:holamundo
};

/*  forma segun ES 
const _saludar = saludar;
export { _saludar as saludar }; */