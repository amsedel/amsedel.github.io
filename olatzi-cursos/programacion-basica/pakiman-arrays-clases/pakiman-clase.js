
//creando una clase
class Pakiman{
	constructor(n, v, a) //funcion que se dispara cuando se crea un objeto
	{
		this.imagen = new Image();
		this.nombre = n;
		this.vida = v;
		this.ataque = a;
		this.tipo = "tierra"; //this es un indicador de la instancia en donde estoy o bloque de codigo
		//es un indicador de que la variable es de la clase Pakiman
		this.imagen.src = imagenes[this.nombre];
	}
	//función hablar no tengo que escribir la palabra function porque se entiende
	//que es una funcion ya que estoy dentro de una clase, sin embargo los parentesis
	//deben ir pegados al nombre de la función
	hablar(){ 
		alert(this.nombre);
	}

	mostrar(){
		document.body.appendChild(this.imagen);
		document.write("<p>");
		document.write("<strong>" + this.nombre + "</strong><br>");
		document.write("Vida: " + this.vida + "<br>");
		document.write("Ataque: " + this.ataque + "<br>");
		document.write("</p>");
		document.write("<hr>");
	}

}
