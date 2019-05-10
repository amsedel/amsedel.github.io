
MVC.Model = class Model {

	//Endpoint es la URL
	//modelData contendra la información que viene de la BD

	constructor (endpoint){
		this.endpoint = endpoint;
		this.modelData = {};	
	}

	getUsuario(){
		return fetch(`${this.endpoint}`)
		.then(resp => {
			if(resp.ok) {
				//console.log(resp);
				return resp.json();
			}
			return Error("No se pudieron obtener los datos")
		})
		.then(data => {
			console.log(data);
			this.setModelo(data);
			return data;
		})
	}

	setModelo(data){
		//en modelData establecemos los datos provenientes de la
		//respuesta del backend
		this.modelData = data;
	}

 }