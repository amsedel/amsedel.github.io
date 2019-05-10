
MVC.Controller = class Controller{

	constructor(props){
		//model y view pasan un parámetro respectivamente en su constructor
		//model tiene endPoint:URL
		//view tiene el elemento HTML

		//escucha los eventos primero antes de crear el modelo y este envíe la petición
		this.eventHandler();
		this.eventHandlerBtnSearch();
		this.eventHandlerBtnRegister();
		this.eventHandlerBtnSendRegister();
		this.eventHandlerBtnDeleteMain();
		this.eventHandlerBtnSearchDelete();
		//con el objeto props le pasamos las referencias de las clases
		this.model = new props.model(props.endpoint);
		this.view = new props.view(props.elemento, props.elementoRegister, props.elementoDelete, props.elementoDeleteRead);
	}


	eventHandler(){
		document.body.addEventListener('onloadApp', (event) => {
			this.getData();
		});
	}

	eventHandlerBtnSearch(){
		document.body.addEventListener('onPushBtn', (event) => {
			this.getDataArticulo();
		});
	}

	eventHandlerBtnRegister(){
		document.body.addEventListener('onPushBtnRegister', (event) => {
			this.getDataRegister();
		});
	}

	eventHandlerBtnSendRegister(){
		document.body.addEventListener('onPushBtnSendRegister', (event) => {
		this.getDataSendRegister();
		});
	}

	eventHandlerBtnDeleteMain(){
		document.body.addEventListener('onPushBtnDeleteMain', (event) => {
		this.redirectPageDelete();
		});
	}

	eventHandlerBtnSearchDelete(){
		document.body.addEventListener('onPushBtnSearchDelete', (event) => {
		this.articleSearchDelete();
		});
	}


	getData(){
	//llamamos al método getArticulo alojada en la clase Model
		this.model.getArticulo() 
		.then(data => {
	//llamamos al método notify alojada en la clase view
	//notificamos a la vista si se encontraron los datos
			this.view.notify(data);
		})
		.catch(console.log);
	}

	getDataArticulo(){
		this.model.getArticulo() 
		.then(data => {
			this.view.notifySearch(data);
		})
		.catch(console.log);
	}

	getDataRegister(){
		this.model.getArticulo() 
		.then(data => {
			this.view.notifyRegister(data);
		})
		.catch(console.log);
	}

	getDataSendRegister(){
		this.model.getArticulo() 
		.then(data => {
			this.view.notifySendRegister(data);		
			this.getDataSendRegisterPost();
		})
		//.then(this.getDataSendRegisterPost())
		.catch(console.log);		
	}

	getDataSendRegisterPost(){
		//sconsole.log(this.view.validacionRegistroTitulo);
		 if(this.view.validacionRegistroTitulo.registro.reg.length ===0){
		 	this.model.postArticulo(this.view.validacionRegistroTitulo);
		 	this.view.notifySendRegisterOk();	
		}else{
			this.view.notifySendRegisterRepeat();
			if(this.view.flagUpdate){
				//manda informacion a actualizar 
				//console.log('mandando información al metodo actualizar de view')
				this.view.prueba(this.view.validacionRegistroTitulo);
			}
		}
}

///eliminar
	redirectPageDelete(){
		this.view.notifyNewPageDelete();	
	}

	articleSearchDelete(){
		this.model.getArticulo() 
		.then(data => {
			this.view.notifyFoundRegisterDelete(data);
			this.getDataRegisterDelete();
		})
		.catch(console.log);
	}

	getDataRegisterDelete(){
		let ya_existe = false
		if(this.view.registerDelete.length===1){
			console.log('Registro encontrado');
			console.log(this.view.registerDelete)
			this.view.notifyFoundRegister(this.view.registerDelete);

			

	 	// 	this.model.deleteArticulo(this.view.registerDelete);
	
		 }else{
		 	alert('Archivo no encontrado');
		 }
		}
		


}//fin de la clase