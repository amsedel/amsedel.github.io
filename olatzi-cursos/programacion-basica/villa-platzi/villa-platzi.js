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
document.addEventListener("keydown",moverKey); //evento para mover un pollo con teclas

//literales o json
var fondo = {
	url: "tile.png",
	cargaOk: false
}

var vaca = {
	url: "vaca.png",
	cargaOk: false
}

var cerdo = {
	url: "cerdo.png",
	cargaOk: false
}

var pollo = {
	url: "pollo.png",
	cargaOk: false
}

//////////teclas
var teclas = {
	UP : 38,
	DOWN : 40,
	LEFT : 37,
	RIGHT : 39
};

//coordenadas para pollo 
var xv = aleatorio(420,0);
var yv = aleatorio(420,0);
var movimiento = 10;

//random de cerdos y vacas
var cantidad = aleatorio(20,5); //genera un numero random entre 5 y 25 para vacas
var cantidadCerdos = aleatorio(12,3);//cantidad de cerdos

fondo.imagen = new Image(); //clase Image, estamos instanciando
fondo.imagen.src = fondo.url; //cargar fuente de la imagen, mediante la propiedad src
//si la imagen escorrecta se dispara un evento de carga (load)
//en el evento load es cuando debemos agregar la imagen
fondo.imagen.addEventListener("load", cargarFondo);

//agregando los animales
//vacas
vaca.imagen = new Image(); //vaca.imagen en realidad es el nombre del objeto
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
//cerdos
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);
//pollo
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

//para que todo funciones, es necesario a que se lance el evento de carga para entonces comenzar a pintar
//o poner las imagenes, primero es necesario que cargue el fondo para que la vaca el cerdo y el pollo
//no queden ocultos

function cargarFondo(){
 fondo.cargaOk = true; //si  ya cargo, pasa a dibujar
 dibujar();
}

function cargarVacas(){
 vaca.cargaOk = true;
 dibujar();
}

function cargarCerdos(){
 cerdo.cargaOk = true;
 dibujar();
}

function cargarPollo(){
 pollo.cargaOk = true;
 dibujar();
}


function dibujar(){
 //al papel le vamos agregar la imagen
 var v,c,p;
if(fondo.cargaOk == true){
 papel.drawImage(fondo.imagen, 0, 0);
}
if(pollo.cargaOk == true){
	//console.log(cantidad);
	for (p=0; p<cantidad; p++){ //ciclo for para dibujar varias pollos

	 x = aleatorio(7,0);
	 y = aleatorio(7,0);
	 x = x * 60; //para separar los pollos
	 y = y * 60; //para separar los pollos
 	papel.drawImage(pollo.imagen, x, y);
 	}//fin de for
}if (cerdo.cargaOk==true) {
	for(c=0;c<cantidadCerdos;c++){
	var xc = aleatorio(420,0);
	var yc = aleatorio(420,0);
	papel.drawImage(cerdo.imagen,xc,yc);
	}//fin for
}if (vaca.cargaOk==true){
	papel.drawImage(vaca.imagen,xv,yv);
	//console.log(xp + " " + yp);
}//fin if
}//fin de funciÛn dibujar

function moverKey(eventoTecla){
//console.log(xv + " " + yv);
	switch(eventoTecla.keyCode)
	{
		case teclas.UP:
		//dibujar();
		yv = yv-movimiento;//recordar el movimiento
		dibujar();
		break;
		case teclas.DOWN:
		//dibujar();
		yv = yv+movimiento;//recordar el movimiento
		dibujar();
		break;
		case teclas.LEFT:
		//dibujar();
		xv = xv-movimiento;//recordar el movimiento
		dibujar();
		break;
		case teclas.RIGHT:
		//dibujar();
		xv = xv+movimiento;//recordar el movimiento
		dibujar();
		break;
		default:
		console.log('Otra tecla');
		break;
	}
	//console.log(eventoTecla.keyCode);
}

function aleatorio(maxi,min){
	var resultado;
	resultado= Math.floor(Math.random()*(maxi-min+1))+min;
	return resultado;
}