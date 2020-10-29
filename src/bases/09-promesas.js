import { getHeroeById } from './08-imp-exp';

/*const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const p1 = getHeroeById(2);
        resolve(p1);
        //reject(p1);
    }, 2000);
});

promesa.then(
    (heroe) => {
        console.log('heroe', heroe);
    }
).catch( err => console.warn(err));*/

const getHeroeByIdAsync= (id) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            } else {
                reject('¡El superheroe no existe!');
            }
        }, 2000);
    })
);

getHeroeByIdAsync(3)
    .then( console.log )
    .catch( console.error );