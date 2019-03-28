
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

// ESTO ES UN ARROW FUNCTION
// var esMayorEdad = (persona) => { //ARROW FUNCTIONS
//     return persona.edad >= MAYORIA_DE_EDAD;
//     }
//EESTO ES CASI EQUIVALENTE A 
// var esMayorEdad = function (persona){ //esta función es anónima 
//     return persona.edad >= MAYORIA_DE_EDAD;
//     }
    
// var esMayorEdad = (persona) => { //ARROW FUNCTIONS (si es un parametro persona puede ir sin parentesis)
//     return persona.edad >= MAYORIA_DE_EDAD;
//     }
    
var esMayorEdad = ({edad}) => edad>= MAYORIA_DE_EDAD; //destructurando
    

function imprimirMayorEdad(persona){

    if(esMayorEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} es menor de edad`);
    }
}


function permitirAcceso(persona){
    if(!esMayorEdad(persona)){
        console.log('No tienes acceso');
    }
}

imprimirProfesion(diana);
imprimirMayorEdad(diana);
imprimirProfesion(diego);
imprimirMayorEdad(diego);