

const API_URL = 'https://swapi.co/api/';//necesitamos una URL
const PEOPLE_URL = 'people/:id';


const opts = {crossDomain: true};

function obtenerPersonaje(id){
//retornar una promesa
return new Promise((resolve, reject) => {
    //hacemos llamado asincrono
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $
    .get(url, opts, function(data){ 
        resolve(data)
    })
    .fail(() => reject(id)) //rechazamos la promesa

}//cierre de la funcion
)//cierre de promise
}//cierre funcion personaje

function onError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`)
}
//óbeteniendo valores de la promesa
obtenerPersonaje(1)
.then(personaje => { //la data es el  personaje 
console.log(`El personaje 1 es ${personaje.name}`);
return obtenerPersonaje(2);
})
.then(personaje => { //la data es el  personaje 
    console.log(`El personaje 2 es ${personaje.name}`);
    return obtenerPersonaje(3);
})
.then(personaje => { //la data es el  personaje 
    console.log(`El personaje 2 es ${personaje.name}`);
    return obtenerPersonaje(4);
})
.then(personaje => { //la data es el  personaje 
    console.log(`El personaje 2 es ${personaje.name}`);
})
.catch(onError);  //no estamos invocando solo pasamos la referencia
// .catch(function(id){
//     console.log('Sucedio un error');
// })