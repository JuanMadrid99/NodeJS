const EventEmitter = require('events'); // EventEmitter con inicial mayuscula para clases usualmente

// ejemplo
const emisorProductos = new EventEmitter(); // creando una nueva instancia

// event hander, funciones que esperan a que suceda un evento
emisorProductos.on('compra',(total)=>{
    console.log(`Se realizo una compra por ${total} dls`);
});

emisorProductos.emit('compra',500); //se emitio una compra (evento compra) por 500 dls