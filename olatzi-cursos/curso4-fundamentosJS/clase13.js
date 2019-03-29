
var diana = {
    nombre: 'Diana',
    apellido: "Ledesma",
    edad: 27,
    peso: 57
}

console.log(`Àl inicio del año ${diana.nombre} pesa ${diana.peso} Kg`);

// const aunmentarPeso = (persona) => {persona.peso += 200}
// function aunmentarPeso (persona){
//     return persona.peso +=200
// }

const CAMBIO_PESO = 0.2;
const DIASANIO=365;

const aunmentarPeso = (persona) => persona.peso += CAMBIO_PESO;

const bajarPeso = (persona) => persona.peso -= CAMBIO_PESO;

for(var i = 1; i <=DIASANIO; i++){
    var random = Math.random();

    if(random<=0.25){
        aunmentarPeso(diana);
    }else if (random<.50){
        bajarPeso(diana);
    }
}


console.log(`Ál final del año ${diana.nombre} pesa ${diana.peso.toFixed(2)} Kg`);