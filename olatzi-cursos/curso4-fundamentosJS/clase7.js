//vACCEDER A LOS OBJETOS ES DECIR DESTRUCTURAR

var Diana = { //Esto es una declaración de objeto, clave y valor
    nombre: 'Diana',
    apellido: 'Ledesma',
    edad: 27
}


// function imprimirNombre(persona){ //desglosar el objeto en los parámetros
//     //accediendo al atributo nombre
// var { nombre } = persona //var nombre = persona.nombre son equivalentes
//     console.log(nombre.toUpperCase());
// }
// imprimirNombre(Diana);

function imprimirNombre(persona){ //desglosar el objeto en los parámetros
    //accediendo al atributo nombre
var { nombre } = persona; //var nombre = persona.nombre son equivalentes
var { edad } = persona;
var Apellido = persona.apellido; //la otra forma valida
    console.log(`Mi nombre es ${nombre} ${Apellido} y tengo ${edad}` );
}
imprimirNombre(Diana);
 