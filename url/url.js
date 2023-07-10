const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1') //clase disponible de forma global
// crear una URL apartir de uan cadenas de caracteres...direecion de la solicitud
// parametros Query  ..../programacion?cursos=vistas&nivel=1

console.log(miURL.hostname); //www.ejemplo.org
console.log(miURL.pathname); //curos/programacion
console.log(miURL.search); //?ordenar=vistas&nivel=1
console.log(miURL.searchParams); //URLSearchParams { 'ordenar' => 'vistas', 'nivel' => '1' ....es un objeto
console.log(miURL.searchParams.get('ordenar')); //vistas

console.log(miURL.protocol); //https:
