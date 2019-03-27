//clase billete, con dos atributos, valor y cantidad

//clase billete

class Billete {
	constructor(v, c){
		this.valor = v;
		this.cantidad = c;
	}
}

//caja


var caja = [];
var entregado =[];

caja.push(new Billete(50,20));
caja.push(new Billete(20,30));
caja.push(new Billete(10,10));

var dinero;
var div = 0;
var papeles = 0;


//algoritmo

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");

function entregarDinero(){

var t = document.getElementById("dinero");
dinero =parseInt(t.value);

	for( var bi of caja){
		//console.log(bi);
		if(dinero > 0){
			div = Math.floor(dinero / bi.valor);
			//console.log(div);
			if(div > bi.cantidad){
				papeles = bi.cantidad;
			}else{
				papeles = div;
			}

			entregado.push(new Billete (bi.valor, papeles));
			dinero = dinero - (bi.valor * papeles);
		}
	}
			if(dinero > 0){
				resultado.innerHTML = "No puedo darte esa cantidad";
				//console.log("No tengo dinero");
				//document.write("No tengo dinero")
			}else{
				//console.log(entregado);
				for(var e of entregado){

					if(e.cantidad > 0){
						// += indica que es su valor màs lo otro resultado.innerHTML += resultado.innerHTML + e.cantidad + " billetes de $ " + e.valor + "<br>"
						resultado.innerHTML += e.cantidad + " billetes de $ " + e.valor + "<br>";
					}
				}
			}

}






