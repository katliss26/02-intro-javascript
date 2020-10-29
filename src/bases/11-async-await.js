


const getImagen = async () => {

    try {
        const apiKey = 'I1TiWv1l0oo0RSmivMr2Vq2UtvwkfMf9';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch (error) {
        console.error(error);
    }
    
}

getImagen().then( console.log );


/*
const apiKey = 'I1TiWv1l0oo0RSmivMr2Vq2UtvwkfMf9';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then( resp => resp.json())
.then(({data}) => {
    console.log(data.images.original.url);
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
})
.catch(console.warn)
*/