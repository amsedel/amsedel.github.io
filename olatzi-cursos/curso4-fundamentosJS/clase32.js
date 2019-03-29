

const API_URL = 'https://swapi.co/api/';//necesitamos una URL
const PEOPLE_URL = 'people/:id';


const opts = {crossDomain: true};

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

    $.get(url, opts, callback).fail(function(){
        console.log(`Sucedio un error, no se puede obtener el personaje ${id}`);
    });


    // alternativo, su arraw function
    // .get(url, opts, callback)
    // .fail(()=>{
    //     console.log(`Sucedio un error, no se puede obtener el personaje ${id}`);
    // });
    //encadenamos el metodo .fail() que recibe otro callback q se ejecuta si ocurre algun error
    
}



//el callback en realidad es la funcion anonima que esta dentro de obtener personaje
//obtenerPersonaje(1,obtenerPersonaje(2)) ,  primero se ejecuta 
//obtenerPersonaje(2) y luego obtenerPersonaje(1)


obtenerPersonaje(1, function(personaje){
    console.log(`Hola soy ${personaje.name}`);
    obtenerPersonaje(2, function(personaje){
        console.log(`Hola soy ${personaje.name}`);
        obtenerPersonaje(3, function(personaje){
            console.log(`Hola soy ${personaje.name}`);
        });
    });
}); 

//la funcion anonima solo se ejecuta si el request es exitoso y quien
//lo ejecuta es el $.get
