
MVC.Controller = class Controller{

	constructor(props){
		//model y view pasan un parámetro respectivamente en su constructor
		//model tiene endPoint:URL
		//view tiene el elemento HTML

		//escucha los eventos primero antes de crear el modelo y este envíe la petición
		this.eventHandler();

		//con el objeto props le pasamos las referencias de las clases
		this.model = new props.model(props.endpoint);
		this.view = new props.view(props.elemento);
	}


	eventHandler(){
		document.body.addEventListener('onloadApp', (event) => {
			this.getData();
		});
	}

	getData(){
	//llamamos al método getUsuario alojada en la clase Model
		this.model.getUsuario() 
		.then(data => {
	//llamamos al método notify alojada en la clase view
	//notificamos a la vista si se encontraron los datos
			this.view.notify(data);
		})
		.catch(console.log);
	}


}