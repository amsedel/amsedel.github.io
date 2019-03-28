
var diana = {
    nombre: 'Diana',
    apellido: "Ledesma",
    edad: 27,
    ingeniero: false,
    cocinero:false,
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

imprimirProfesion(diana);