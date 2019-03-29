//CICLO WHILE
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

const CAMBIO_PESO = 0.3;
const DIASANIO=365;
const META = diana.peso - 3;

const aunmentarPeso = (persona) => persona.peso += CAMBIO_PESO;
const bajarPeso = (persona) => persona.peso -= CAMBIO_PESO;
const comeMucho = () => Math.random() <0.3;
const realizaDeporte = () => Math.random() < 0.4;


// for(var i = 1; i <=DIASANIO; i++){
//     var random = Math.random();

//     if(random<=0.25){
//         aunmentarPeso(diana);
//     }else if (random<.50){
//         bajarPeso(diana);
//     }
// }
var dias = 0;

while(diana.peso > META) {
    //debugger
    if(comeMucho()){
        aunmentarPeso(diana);
    }
    if(realizaDeporte()){
        bajarPeso(diana);
    }
    dias +=1;
}

console.log(`Pasaron ${dias} días hasta que ${diana.nombre} bajo 3Kg`);

