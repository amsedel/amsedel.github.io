//alert('hola');
//var z;
/*
for(var i=0; i<10; i++){
z= aleatorio(10,20); //funciona con numeros negativos
document.write(z + " , ")
}

document.write(z);*/


//limite es de 420 = 500-80px

var vp =document.getElementById('villaplatzi');
var papel = vp.getContext("2d"); 

var fondo = {
	url: "tile.png",
	cargaOk: false
}

var vaca = {
	url: "vaca.png",
	cargaOk: false
}

var cantidad = aleatorio(25,5);

fondo.imagen = new Image(); //clase Image, estamos instanciando
fondo.imagen.src = fondo.url; //cargar fuente de la imagen, mediante la propiedad src
//si la imagen escorrecta se dispara un evento de carga (load)
//en el evento load es cuando debemos agregar la imagen
fondo.imagen.addEventListener("load", cargarFondo);

//agregando los animales

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);


function cargarFondo(){
 //al papel le vamos agregar la imagen
 //papel.drawImage(fondo, 0, 0);
 fondo.cargaOk = true;
 dibujar();
}

function cargarVacas(){
 //al papel le vamos agregar la imagen
 //papel.drawImage(vaca, 10, 10);
 vaca.cargaOk = true;
 dibujar();
}
/*
function cargarCerdos(){
 //al papel le vamos agregar la imagen
 papel.drawImage(cerdo, 60, 50);
}

function cargarPollos(){
 //al papel le vamos agregar la imagen
 papel.drawImage(pollo, 100, 200);
}
*/

function dibujar(){
 //al papel le vamos agregar la imagen
if(fondo.cargaOk == true){
 papel.drawImage(fondo.imagen, 0, 0);
}
if(vaca.cargaOk == true){

	
	console.log(cantidad);
	for (v=0; v<cantidad; v++){

	var x = aleatorio(420,0);
	var y = aleatorio(420,0);
	// x = x * 80; //para separar las vacas
	// y = y * 80; //para separar las vacas
 	papel.drawImage(vaca.imagen, x, y);
 	}//fin de for
}//fin de if

}



function aleatorio(maxi,min){
	var resultado;
	resultado= Math.floor(Math.random()*(maxi-min+1))+min;
	return resultado;
}