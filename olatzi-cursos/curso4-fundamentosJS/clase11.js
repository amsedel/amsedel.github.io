
var diana = {
    nombre: 'Diana',
    apellido: "Ledesma",
    edad: 27,
    ingeniero: false,
    cocinero:false,
    cantante:false,
    dj:false
}

var diego = {
    nombre: 'Diana',
    apellido: "Ledesma",
    edad: 17,
    ingeniero: false,
    cocinero:true,
    cantante:false,
    dj:false
}

function imprimirProfesion(persona){
console.log(`${persona.nombre} es:`);

if(persona.ingeniero){
console.log('Ingeniero');
}else{
console.log('no es Ingeniero');
}

if(persona.cocinero){
    console.log('cocinero');
    }
if(persona.cantante){
console.log('cantante');
}
if(persona.dj){
console.log('dj');
    }

}

const MAYORIA_DE_EDAD= 18; //definir una constante

function esMayorEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
    }
    

function imprimirMayorEdad(persona){

    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} es menor de edad`);
    }
}



imprimirProfesion(diana);
imprimirMayorEdad(diana);
imprimirProfesion(diego);
imprimirMayorEdad(diego);