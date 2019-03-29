var nombre = 'Diana'; //variable global window.nombre

//sucede un efecto de lado, no se recomienda
// function imprimirNombre(){
//     nombre= nombre.toUpperCase();
//     console.log(nombre);
// }
// imprimirNombre();

function imprimirNombre(n){
     n= nombre.toUpperCase();
     console.log(n);
 }
 imprimirNombre('Diana');