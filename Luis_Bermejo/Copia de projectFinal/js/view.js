
MVC.View = class View{

	//elem, es el elemento html en este caso hace referencia a un formulario
	constructor(elem){

		//que escuche primero los eventos
		this.eventHandler();
		this.elem = elem;
		this.nombre;
		this.password;
	}

	eventHandler(){
	//manejador de eventos que escucha a disparador dentro del
	//metodo notify, el cuál es ejecutado por el controlador al
	//momento de recibir los datos exitosamente
			document.body.addEventListener('onloadData', (event) => {
			this.valida(event.detail); //.detail para pasarle el data
		});

	}

	notify(data){
		const onLoadDataEvent = new CustomEvent('onloadData', {detail: data, bubbles : true});
		this.elem.dispatchEvent(onLoadDataEvent);
	}

	valida(datos){
		this.nombre = this.elem.nombre.value;
		this.password = this.elem.password.value;

		//console.log(this.nombre, this.password);
		//console.log(datos);

		var n = datos.filter((dato) => { return dato.nombre == this.nombre && dato.password == this.password});

		this.elem.nombre.value = "";
		this.elem.password.value = "";

		 if(n.length===0){
		 	//console.log('Usuario o Password incorrecto');
		 	alert('Usuario o Password incorrecto')
		 }else if(n.length===1){
		 	//console.log('Bienvenido');
		 	window.location="http://127.0.0.1:8887/html/main.html";

		 }

	}


 }