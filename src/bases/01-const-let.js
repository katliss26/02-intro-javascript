// Variables y Constantes

const nombre   = 'Katherin';
const apellido = 'Carrero';

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado )
// Importancia de los ambitos
if ( true ) {
    const nombre = 'Peter';
    console.log(nombre)
}

console.log( valorDado );