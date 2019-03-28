//var nombre = 'Diana'; //variable global window.nombre

var Diana = { //Esto es una declaración de objeto, clave y valor
    nombre: 'Diana',
    apellido: 'Ledesma',
    edad: 27
}


// function imprimirNombre(persona){
//      //var nombre= persona.nombre.toUpperCase();
//      console.log(persona.nombre.toUpperCase());
//  }
//  imprimirNombre(Diana);
 

function imprimirNombre({nombre}){ //desglosar el objeto en los parámetros
    //var nombre= persona.nombre.toUpperCase();
    console.log(nombre.toUpperCase());
}
imprimirNombre(Diana);
imprimirNombre({nombre:Pepito});
imprimirNombre({apellido:'Ledesma'});//esto da error, se espera el valor nombre

