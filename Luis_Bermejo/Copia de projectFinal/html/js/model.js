
MVC.Model = class Model {

	//Endpoint es la URL
	//modelData contendra la información que viene de la BD

	constructor (endpoint){
		this.endpoint = endpoint;
		this.modelData = {};	
	}

	getArticulo(){
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


	postArticulo(registroArticulo){
		fetch(this.endpoint,{
			method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({'titulo':registroArticulo.titulo, 
								  'autor':registroArticulo.autor, 
								  'contenido': registroArticulo.articulo, 
								  'palabras_clave':registroArticulo.palabras_clave})
		})
		.then(resp => {return resp.text()})
		.then(data => {
			console.log(data)
		})
		.catch(err => {
			console.log(err)
		});
		
	}

	deleteArticulo(registroArticuloDelete){
		let url=`${this.endpoint}/${registroArticuloDelete[0].id}` 

		fetch(url, {
  		method: 'DELETE',
  		headers: {'Content-Type': 'application/json'},
  		body: JSON.stringify({'id': registroArticuloDelete[0].id}),
  		
		})
		.then(res => res.text()) 
		.then(res => console.log(res))

	}


 }