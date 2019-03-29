

//vamos a realizar un request

const API_URL = 'https://swapi.co/api/';//necesitamos una URL
const PEOPLE_URL = 'people/:id';

//tenemos que llamar al metodo $.get
//el request se hace a otra pagina

const lukeurl=`${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = {crossDomain: true};
// $.get(lukeurl, opts, function(dataLuke){
//     //console.log(arguments);//arguments es una funcion que tienen todos
//     //las funciones que nos regresa los argumentos que tiene la función
//     console.log(`Hola soy ${dataLuke.name}`);
// });
const onResponse = function(dataLuke){
    //console.log(arguments);//arguments es una funcion que tienen todos
    //las funciones que nos regresa los argumentos que tiene la función
    console.log(`Hola soy ${dataLuke.name}`);
}
$.get(lukeurl, opts, onResponse);
//la funcion anonima solo se ejecuta si el request es exitoso y quien
//lo ejecuta es el $.get