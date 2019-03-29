//La verdad oculta de las clases en JS
function heresaDe(prototipoHijo, prototipoPadre){
//tenemos que decirle al prototipo hijo quien es su prototipo padre
//asignarle un prototipo al prototipo  hijo
//funcion llamada comunmente fn o noop, leasignamos una funcion vacia
var fn = function(){ //funcion anonima asignada a var fn
	//a esta función le vamos a asignar el prototipo padre
	//prototipo padre y prototipo hijo son funciones y todas las 
	//funciones tienen el atributo prototype
	fn.prototype = prototipoPadre.prototype; //pasamos el 
	//al prototipo hijo le decimos q su protype es la sig funcion fn
	prototipoHijo.prototype = new fn//para no pisar el prototype del padre, lo asignamos  a otro objeto

	//lo siguiente es asignar la funcion constructora de a clase hija
	prototipoHijo.prototype.constructor = prototipoHijo; //para llamar al constructor del hijo
	//sino se va a estar llamando al del padre

}
}

function Persona(nombre_, apellido_, altura_){//constructor?

    this.nombre = nombre_; 
    this.apellido = apellido_;
    this.altura = altura_;

}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.eresAlto =function(){
	return this.altura > 1.80;
}

//vamos a crear un prototipo subtipo de persona
function Desarrollador (nombre, apellido, altura){ //especie de constructor
	this.nombre = nombre; 
	this.apellido = apellido;
}
//

heresaDe(Desarrollador, Persona); //llamando a la funcion(prototipo hijo, prototipo padre)
//desarrollador y padre son funciones, //la declaracion de herencia se hace antes de pisar
//las funciones



Desarrollador.prototype.saludar = function(){ //vamos a pisar la funcion saludo a persona
	console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolladora`);
}


// var diana = new Persona('Diana','Ledesma', 1.64);
// var diego = new Persona('Diego','García',1.81);
// var gabi = new Persona('Gabriela','Sánchez', 1.60);

