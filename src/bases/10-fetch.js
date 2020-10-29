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