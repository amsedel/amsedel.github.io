//alert("Todo bien");
//las teclas son un objeto de todo
//keyup, presiona la tecla
//keydown suelta la tecla

//objeto teclas, (JSON), internamente los navegadores estructuran un objeto
var teclas = {
	UP : 38,
	DOWN : 40,
	LEFT : 37,
	RIGHT : 39
};

console.log(teclas);

document.addEventListener("keydown",dibujarTeclado); //es en el documento donde aplicamos el evento de teclas
var cuadrito = document.getElementById('areaDeDibujo');
var papel = cuadrito.getContext("2d");
var x =150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);//centro

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


function dibujarTeclado(eventoTecla){
/*
	if (eventoTecla.keyCode == teclas.UP) {
		console.log("arriba");
	}*/
	//eventoTecla es lo que cambia
var colorcito = "green",
	movimiento = 1;

	switch(eventoTecla.keyCode)
	{
		case teclas.UP:
		//console.log("arriba");
		dibujarLinea(colorcito, x, y, x, y-movimiento,papel);
		y = y-movimiento;//recordar el movimiento
		break;
		case teclas.DOWN:
		//console.log("abajo");
		dibujarLinea(colorcito, x, y, x, y+movimiento,papel);
		y = y+movimiento;//recordar el movimiento
		break;
		case teclas.LEFT:
		dibujarLinea(colorcito, x, y, x-movimiento, y, papel);
		x = x-movimiento;//recordar el movimiento
		//console.log("izq");
		break;
		case teclas.RIGHT:
		//console.log("izq");
		dibujarLinea(colorcito, x, y, x+movimiento, y,papel);
		x = x+movimiento;//recordar el movimiento
		break;
		default:
		console.log('Otra tecla');
		break;
	}

	//console.log('tecla oprimida');
	//console.log(eventoTecla.keyCode);
}