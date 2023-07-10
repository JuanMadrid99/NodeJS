// Provee informaci6n sobre el proceso de Node.js que se estå ejecutando.
// Y tambioen puede tner cierto control sobre el proceso 
// console.log(process);
// console.log(process.env); //Enviroment...ambiente de ejecucion 

console. log(process.argv) ; // arg de argumento 
// da un arreglo
/* [
  'C:\\Program Files\\nodejs\\node.exe',  UBICACION DE NODE
  'c:\\Users\\Usuario\\js node\\moduloProcess.js'  UBICACION DEL PROGRAMA
] */
//ejecutar node 
// [node, app.js, 6, 7 ]
//   0     1      2  3
/* [
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\Usuario\\js node\\moduloProcess.js',
    '6',
    '7'
  ] */

console.log(process.argv[2]); //6
console.log(process.argv[3]); //7
// node moduloProcess.js 6 7 
for(let i = 2; i<process.argv.length; i++ ){
//Se inicia en 2 porque el indice 0 es de node y el 1 es de el archivo (moduloProcess.js) 
    console.log(process.argv[i]);
}
console.log(process.memoryUsage());