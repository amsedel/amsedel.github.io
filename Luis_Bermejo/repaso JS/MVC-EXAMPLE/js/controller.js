

MVC.Controller = class Controller{

constructor(props){
	//que escuche los eventos primero antes de crear el moelo que es el que envía la peticion
	this.eventHandler();


	//props es un objeto donde le pasamos la referencia de las clases

	this.model = new props.model(props.endpoint); //hacemos una instancia de modelo
	this.view = new props.view(props.contentElement); //hacemos una instancia de view

}

eventHandler(){
	document.body.addEventListener('onloadApp', (event) => {
		this.getData();
	});
}



getData(){
	this.model.getPersona()
	.then(data => {
		this.view.notify(data);
	})
	.catch(console.log)
}

}