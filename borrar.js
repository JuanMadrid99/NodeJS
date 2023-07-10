const a = (texto)=>{
    setTimeout(()=>{// Asincrona
        /* ${} PLATILLA LITERAL
        ()=>{} FUNCIONES FLECHA
        ? : ; OPERADOR TERNARIO*/
    return console.log(`¡${texto}`)
    }
    ,1000);
}
a("Hello");

// console.log("World!");// Sincrona
// output....world hello porque primero van las sincronas y luego van las asincronas


const b = (texto)=>{
    return console.log(`Yo soy ${texto}`); 
}
setTimeout(b,500,"Madrid"); //Asincrono
// console.log("Juan");//sincrono
// sincrono t1 ... t2 .... t3 ........c1...c2...c3
// asincrono lc1...lc2....lc3