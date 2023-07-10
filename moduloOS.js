// Contiene funcionalidad para obtener información sobre el sistema operativo en el cual se ejecuta la aplicacion
//Nesecita ser importado 
const os = require('os');
//import os from 'os'; ES

console.log(os.type());// nos dara el sistema operativo

console.log(os.homedir());// directorio principal del sistema operativo...home directory

console.log(os.uptime());// cuando tiempo lleva ejecutandose el sistema

console.log(os.userInfo());// informacion sobre el usuario
