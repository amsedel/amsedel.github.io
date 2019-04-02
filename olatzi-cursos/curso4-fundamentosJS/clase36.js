////ASYNC-AWAIT

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

async function obtenerPersonajes(){

    var ids = [1, 2, 3, 4, 5, 6, 7];
    //un array de promesas
    var promesas = ids.map(id => obtenerPersonaje(id));
    //all es un metodo de promesa

    try{

        var personajes = await Promise.all(promesas); 
        //await lo que hace es que se va a detener la ejecución , en lo
        //que se ejecutan otras cosas, hasta que todas las promesas sean resueltas
        //para que esto funcione hay que colocar un async al inicio de la función
        console.log(personajes);
    }catch(id){
        onError(id);

    }
}
obtenerPersonajes();