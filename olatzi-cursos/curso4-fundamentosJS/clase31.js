//MANEJANDO EL ORDEN Y EL ASINCRONISMO EN JAVASCRIPT
//HACIENDO MULTIPLES REQUEST
//vamos a realizar un request

const API_URL = 'https://swapi.co/api/';//necesitamos una URL
const PEOPLE_URL = 'people/:id';

//tenemos que llamar al metodo $.get
//el request se hace a otra pagina

const opts = {crossDomain: true};
// $.get(lukeurl, opts, function(dataLuke){
//     //console.log(arguments);//arguments es una funcion que tienen todos
//     //las funciones que nos regresa los argumentos que tiene la función
//     console.log(`Hola soy ${dataLuke.name}`);
// });

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

    $.get(url, opts, function(persona){
        console.log(`Hola soy ${persona.name}`)


        if(callback){
            //sin embargo no estamos invocando al callback al llamar la
            //funcion obtenerPersonaje (solo pasamos funciones), por lo
            //que es necesario, decirle que si nos envian el callbak
            //es necesario llamar la funcion callback();
            callback()
        }

    });
    //el callback (onResponse) se ejecuta cuando se termina el request ()
    
}



//el callback en realidad es la funcion anonima que esta dentro de obtener personaje
//obtenerPersonaje(1,obtenerPersonaje(2)) ,  primero se ejecuta 
//obtenerPersonaje(2) y luego obtenerPersonaje(1)


obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3);
    });
}); 

//la funcion anonima solo se ejecuta si el request es exitoso y quien
//lo ejecuta es el $.get
