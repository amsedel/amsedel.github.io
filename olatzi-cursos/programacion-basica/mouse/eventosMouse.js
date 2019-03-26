
miCanvas = document.getElementById("areaDibujo");

miCanvas.addEventListener("mouseup", dibujarConMouse);
miCanvas.addEventListener("mousedown", dibujarConMouseOrigen);

var Xorigen;
var Yorigen;
var papel = miCanvas.getContext("2d");

function dibujarLinea(color,xinicial, yinicial, xfinal,yfinal, lienzo){

	//el lapiz sobre el papel, arranca dibujo
	lienzo.beginPath();
	//color de linea
	lienzo.strokeStyle = color;
	//ancho mas grueso
	lienzo.lineWidth = 3;
	//colocar en el lugar, posicion inicial
	lienzo.moveTo(xinicial,yinicial);
	//dibujar una linea exactamente
	lienzo.lineTo(xfinal,yfinal);
	//dibujarla con el estilo q decidimos, cerramos la lìnea
	lienzo.stroke();
	//terminar el trazo, levantar el lapiz, terminar de dibujar
	lienzo.closePath();

}

function dibujarConMouseOrigen(eventoMouseOrigen){
Xorigen = eventoMouseOrigen.clientX;
Yorigen= eventoMouseOrigen.clientY;
//return Xorigen;
//console.log(eventoMouseOrigen);
//console.log(eventoMouseOrigen.clientY);
}

function dibujarConMouse(eventoMouse){

	var colorcito = "teal";

	dibujarLinea(colorcito, Xorigen, Yorigen, eventoMouse.clientX, eventoMouse.clientY, papel);

	//console.log(eventoMouse);
}