//vACCEDER A LOS OBJETOS ES DECIR DESTRUCTURAR

var Diana = { //Esto es una declaración de objeto, clave y valor
    nombre: 'Diana',
    apellido: 'Ledesma',
    edad: 27
}


function imprimirNombre(persona){ //desglosar el objeto en los parámetros
    //accediendo al atributo nombre
var { nombre } = persona //var nombre = persona.nombre son equivalentes
    console.log(nombre.toUpperCase());
}
imprimirNombre(Diana);

function cumpleanos(persona){
    return { //desglosamos a la persona dentro de este nuevo objeto
        ...persona,
        edad:persona.edad += 1 //se modifica en el objeto
    }
}

//cumpleanos(Diana);