//Transformar un array, map

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

// const esAlta = (persona) => {
//     return persona.altura > 1.8;
// }
//es equivalente a:
//const esAlta = persona => persona.altura > 1.8;
//es equivalente a (desglosandola sin la variable persona):
const esAlta = ({altura}) => altura > 1.8;


var personas = [sacha , alan,martin, dario, vicky, paula]; //arreglo de objetos

//filter va a iterar pasando cada uno de los elementos
var personasAltas = personas.filter(esAlta); //esto es equivalente a
// var personasAltas = personas.filter(function(persona){
//     return persona.altura > 1.8;
// });

// const pasarAlturaACms = (persona) =>{
//     persona.altura *=100; //  persona.altura  = persona.altura *100
//     return persona;
// }

//para retornar un nuevo array:
 // const pasarAlturaACms = (persona) =>{
 //     return { //se regresa un nuevo objeto (diferente) para que el objeto no se sobreescriba
 //         ...persona,
 //         altura: persona.altura *100 //  persona.altura  = persona.altura *100
 //     }
 // }
//OTRA FORMA DE DECLARAR LO DE ARRIBA ES:

const pasarAlturaACms = persona =>({
    ...persona, //hacemos una copia del objeto, 
    altura: persona.altura*100
})

var personasCms = personas.map(pasarAlturaACms);

//console.log(personasAltas);
console.log(personasCms);