//importamos el json 
const curso = require('./curso.json');
// console.log(curso);
// console.log(curso.Nombre);

const usuario = {
    "Nombre":"Juan Madrid",
    "grado":"ingenieria",
    "mascotas":["Nino","Pichu"],
    "Masculino":true
}

//Objeto -> Cadena de caracteres
let usuarioJSON = JSON.stringify(usuario); //string en formato json 
console.log(usuarioJSON); //cadena de texto

//Cadena de caracteres a objeto
let usuarioInfo = JSON.parse(usuarioJSON);
console.log(usuarioInfo); //objeto

let texto = {"text":'cadena de texto'};
let objeto = JSON.parse(texto);
// console.log(objeto);