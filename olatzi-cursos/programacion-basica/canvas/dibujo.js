var d;
var lienzo; //del canvas obtenemos el lienzo

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

d =document.getElementById("dibujito");
//hay que especificarle a js si un lienzo en 2d o 3d
lienzo=d.getContext("2d");//funcion del objeto canvas q permite obtener el area donde voy a dibujar
var ancho = d.width;//para saber al ancho
console.log(lienzo);

/*
	while(l<lineas){

		yi=10*l;
		xf=10*(l+1);
		dibujarLinea(colorcito,0,yi,xf,300);
		//console.log("Linea " + l)
		l++;

	}
*/


function dibujarLinea(color,xinicial, yinicial, xfinal,yfinal){

	//el lapiz sobre el papel, arranca dibujo
	lienzo.beginPath();
	//color de linea
	lienzo.strokeStyle = color;
	//colocar en el lugar, posicion inicial
	lienzo.moveTo(xinicial,yinicial);
	//dibujar una linea exactamente
	lienzo.lineTo(xfinal,yfinal);
	//dibujarla con el estilo q decidimos, cerramos la lìnea
	lienzo.stroke();
	//terminar el trazo, levantar el lapiz, terminar de dibujar
	lienzo.closePath();

}

function dibujoPorClick(){
	var x = parseInt(texto.value);

	//var lineas = 30;
	var lineas = x;
	var l= 0;
	var yi, xf, yf, xi;
	var colorcito = "blue";
	var espacio = ancho/lineas;

	dibujarLinea(colorcito,1,1,1,ancho); //antialine, no se ve el pixel completo
	dibujarLinea(colorcito,1,ancho-1,ancho-1,ancho);
	dibujarLinea(colorcito,1,1,ancho-1,1);
	dibujarLinea(colorcito,ancho-1,1,ancho-1,ancho-1);

	for(l=0; l<lineas; l++){
		xi=espacio*l;
		yf=espacio*(l+1);
		yi=espacio*l;
		xf=espacio*(l+1);
		dibujarLinea(colorcito,xi,0,ancho,yf);
		dibujarLinea(colorcito,0,yi,xf,ancho);
		//console.log("Linea " + l)
	}

}

