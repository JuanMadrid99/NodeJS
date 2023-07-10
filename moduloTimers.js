/*Contiene funciones que ejecutan codigo luego de un cierto periodo de tiempo

+setTimeout(); Para ejecutar codigo luego de un numero especifico de milisegundos
setTimeout(funcion,retraso(tiempo),argumentos de la funcion,agumento 2 si nesecita)

+setImmediate(); Para ejecutar codigo asincrono en la proxima iteracion del ciclo de eventos (lo mas pronto posible)
setImmediate(funcion,argumento1,argumento2);  // se ejecutara despues del codigo sincrono, se ejecuta lo mas rapido de forma asincrona

+setInterval(); Para ejecutar codigo un numero infinito de veces con un retraso especifico en milisegundos
setInterval(funcion,intervalo,argumento1,argumento2); se ejecutara cada intervalo definido
 */

/* Ejemplos */
const Tiempo = (nombre, profesion) => console.log(`Yo soy ${nombre} y soy ${profesion}`);

Tiempo("juan",'ingeniero');
setTimeout(Tiempo,5000,'Madrid','Ingeniero');

console.log("Antes de setImmediate()"); //codigo sincrono
setImmediate(Tiempo,"Ramon","Ingles"); // codigo asincrono que se ejecutara inmediatamente despues de todo los sincrono
console.log("Despues de setImmediate()");//codigo sincrono
// Antes de setImmediate()
// Despues de setImmediate()
// Yo soy Ramon y soy Ingles

setInterval(Tiempo,1500,"JUAN","INGENIERO");
