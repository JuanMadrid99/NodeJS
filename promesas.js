// Objeto que representa el eventual resultado (o error) de una operaci6n asincrona.
//una promesa de javascript es un objeto, ese objeto de asocia a una callback function
// Las promesas tienen un método .then(), con el cual podemos decidir qué occure cuando se completa Ia promesa (éxito o error).
const promesaCumplida = false; // educativo
const miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        promesaCumplida? resolve("Promesa Cumplida"): reject("Promesa No cumplida");},3000)
});//esos parametros tienen valores asignados automaticamente y son funcione que nos van a permitir determinar si la promesa fue exitosa o no 

/* // Que ocurre si la promesa fue cumplida
miPromesa.then((valor)=>{ //valor es lo que va con el resolve ("Promesa Cumplida"), SE ASOCIA AL EXITO DE LA PROMESA
    console.log(valor); // se imprime lo asignado a resolve
}); */

const manejarPromesaCumplida = (valor)=>{console.log(valor);}
const manejarPromesaNOCumplida = (razonRechazo)=>{console.log(razonRechazo);}

miPromesa.then(manejarPromesaCumplida,manejarPromesaNOCumplida);


/* EJEMPLO */
const estatusPedido = ()=>{
    return  Math.random()<0.8;
};
const miPedidoDePizza = new Promise((resolve,reject)=>{
    setTimeout(()=>{estatusPedido()? resolve("Pedido Exitoso"):reject("Pedido Fallido");} ,3000)
});

/* METODO TRADICIONAL
const pedidoConfirmado = (mensajeConfirmado)=>{
    console.log(mensajeConfirmado);
};

const pedidoRechazado = (mensajeRechazado)=>{
    console.log(mensajeRechazado);
};

miPedidoDePizza.then(pedidoConfirmado,pedidoRechazado); 
con .catch()  miPedidoDePizza.then(pedidoConfirmado).catch(pedidoRechazado);*/

// concatenamos los metodos por METHOD CHAINING..encadenamiento de metodos 
miPedidoDePizza
    .then((mensajeConfirmado)=>{console.log(mensajeConfirmado)})
    .then(null,(mensajeRechazado)=>{console.log(mensajeRechazado)});

//  .CATCH()  Metodo de promeso que solo se ejecutara si la promesa es rechazada 
miPedidoDePizza
    .then((mensajeConfirmado)=>{console.log(mensajeConfirmado)})
    .catch((mensajeRechazado)=>{console.log(mensajeRechazado)});

