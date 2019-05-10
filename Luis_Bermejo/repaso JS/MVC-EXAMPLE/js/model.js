
MVC.Model = class Model{
	//definición
	//propiedad endpoint ->url
	constructor(endpoint){

		this.endpoint = endpoint;
		this.modelData = {};
	}

	getPersona(){
		return fetch(`${this.endpoint}`)
		.then(resp => {
			if (resp.ok) {
				console.log(resp);
				return resp.json();
			}
			return Error("No se pudieron obtener los datos");
		})
		.then(data => {
			console.log(data);	
			this.setModelo(data);
			return data;
		})
	}

	setModelo(data){
		this.modelData = data;
	}


}