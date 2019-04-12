


let decirNombre = function(obj){
	obj.hablar = function(){
		console.log(this.nombre);
	}
}

const BETO = {
	nombre: 'Beto',
	edad: 22
};

const JUAN = {
	nombre: 'Juan',
	edad: 25
};

decirNombre(JUAN);
decirNombre(BETO);

JUAN.hablar(); //Juan
BETO.hablar(); //Beto