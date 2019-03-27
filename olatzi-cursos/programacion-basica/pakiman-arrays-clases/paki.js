//alert('paki');

//archivo donde creo mis instancias

//a veces js no muestra el contenido en un array asociativo
var imagenes= []; //imagenes es una variable global
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

//Esto de arriba (array asociativo) es equivalente a un literal o un Object notation:
/*
var imagenes = {
	Cauchin :"vaca.png"
}*/
/*
var cauchin = new Pakiman("Cauchin", 100, 30); //objeto uno de la misma. instancia
var pokacho = new Pakiman("Pokacho", 80, 50); //objeto dos de la misma. instancia
var tocinauro = new Pakiman("Tocinauro", 120, 40);
*/
//console.log(cauchin, pokacho, tocinauro);
//console.log(pokacho);

//pokacho.hablar();
/*
pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();
*/
/*
var coleccion = [];
coleccion.push(pokacho);
coleccion.push(cauchin);
coleccion.push(tocinauro);

console.log(coleccion);
*/

var coleccion = [];
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
//console.log(coleccion);

//bucle for each, solo opera de acuerdo a la cantidad de elementos
//que tengamos en el array, el in nos trae el indice
/*
for(var pakin in coleccion){
	//console.log(pakin);
	console.log(coleccion[pakin])
}
*/
//a partir de javascript 2015 cambia el ciclo, pero despliga lo mismo 
//que el de arriba, mostrando la instancia y no el indice
//in itera sobre el indice y of itera sobre el objeto

for(var pakin of coleccion){
	//console.log(pakin);
	pakin.mostrar();
}

/*
for(var x of imagenes){
	console.log(x);
}*/
for(var x in coleccion[0]){
	console.log(x);
}

