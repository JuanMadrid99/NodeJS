function orderProductos(producto){
    return new Promise((resolve, reject)=>{
        console.log(`Ordenando ${producto} de Juan`);
        setTimeout(() => {
            producto === "taza"? resolve("Ordenando una taza de Juan") : reject("Este producto no esta disponible");
        }, 2000);
    });
}

//este se debe procesar antes por eso aplicaremos por eso concateraremos las promesas
function procesarPedido(respuesta){
    return new Promise((resolve)=>{
        console.log("procesando respuesta...");
        console.log(`la respuesta es: "${respuesta}"`);
        setTimeout(()=>{resolve("Gracias por tu compra")},4000)
    });
};
/* //CHAINING PROMISES
orderProductos("taza")//segunda funcion .......esta llamada retorna una promesa
.then((respuesta)=>{    //realizamos un proceso con esa promesa
    console.log(`respuesta recibida ${respuesta} `);
    return procesarPedido(respuesta); //priemra funcion ....se convierte en una nueva promesa...retorn una promesa
}).then((respuestaProcesada)=>{console.log(respuestaProcesada);//..realizamos un promeso con esa nueva promesa
}).catch((error)=>{console.log(error);}); //por si ocurre un error
//metimos la priemra funcion en la segunda para asi asegurar el orden concatenando
 */

// ASYNC AWAIT ...nos permitira escribir codigo asincrono como si fuera sincrono
async function realizarPedido(producto){//le dira a js que tenemos codigo asincrono..todas retronan una promesa
    try {
       const respuesta =await orderProductos(producto); //nos permitira a que esperemos a que ese proceso asincrono se complete antes de continuar la ejecucion de la funcion
       //await solo se puede usar en una funcion async.. van de la mano
        console.log('Respuesta Recibida'); console.log(respuesta);
        const respuestaProcesada = await procesarPedido(respuesta); //espera a que la promesa se cumpla o se rechaze antes de continuar la ejecucion de la funcion
        console.log(respuestaProcesada);
    } catch (error) {
    console.log(error);
    }
}
realizarPedido('lapiz'); //esto tambien retorna una promesa por ende tambien tiene .then y .catch 