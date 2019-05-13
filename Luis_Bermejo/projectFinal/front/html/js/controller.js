
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
		this.eventHandlerBtnConfirmDelete();
		this.eventHandlerRead();
		this.eventHandlerBtnUpdateMain();
		this.eventHandlerBtnSearchUpdate();
		this.eventHandlerBtnConfirmUpdate();
		this.regRead;
		//con el objeto props le pasamos las referencias de las clases
		this.model = new props.model(props.endpoint);
		this.view = new props.view(props.elemento, props.elementoRegister, props.elementoSearch, props.elementoDelete,
		 props.elementoDeleteRead, props.elementoRead, props.elementoUpdate, props.elementoUpdateNew);
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

	eventHandlerRead(){
		document.body.addEventListener('onRead', (event) => {
			this.read();
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

	eventHandlerBtnConfirmDelete(){
		document.body.addEventListener('onPushBtnConfirmDelete', (event) => {
		this.articleConfirmDelete();
		});
	}

	eventHandlerBtnUpdateMain(){
		document.body.addEventListener('onPushBtnUpdateMain', (event) => {
		this.redirectPageUpdate();
		});
	}

	eventHandlerBtnSearchUpdate(){
		document.body.addEventListener('onPushBtnSearchUpdate', (event) => {
		this.articleSearchUpdate();
		});
	}

	eventHandlerBtnConfirmUpdate(){
		document.body.addEventListener('onPushBtnConfirmUpdate', (event) => {
		this.articleConfirmUpdate();
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
		window.location="http://127.0.0.1:8887/html/lectura.html";
	}

	read(){
		console.log('json')
		console.log(this.view.jsonLectura)
		this.model.getArticulo() 
		.then(data => {
	//llamamos al método notify alojada en la clase view
	//notificamos a la vista si se encontraron los datos
			this.view.notifyCargaLectura(data);
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

	

	cargaRead(){
		console.log('hi');
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
		if(this.view.registerDelete.length===1){
			console.log('Registro encontrado');
			console.log(this.view.registerDelete)
			this.view.notifyFoundRegister(this.view.registerDelete);
	 	 	//this.model.deleteArticulo(this.view.registerDelete);
	
		 }else{
		 	alert('Archivo no encontrado');
		 }
		}

	articleConfirmDelete(){	
	this.model.deleteArticulo(this.view.registerDelete)
	this.view.confirmarDeleteExitoso();
	}


	redirectPageUpdate(){
		this.view.notifyNewPageUpdate();
	}

	articleSearchUpdate(){
		this.model.getArticulo() 
		.then(data => {
			this.view.notifyFoundRegisterUpdate(data);
			this.getDataRegisterUpdate();
		})
		.catch(console.log);
	}

	getDataRegisterUpdate(){
		if(this.view.registerUpdate.length===1){
			console.log('Registro encontrado');
			console.log(this.view.registerUpdate)
			this.view.notifyFoundRegUpdate(this.view.registerUpdate);
			//alert('Registro Actualizado exitosamente');
		 }else{
		 	alert('Archivo no encontrado');
		 	readUpdate.style.display = 'none';
		 }
		}
	articleConfirmUpdate(){
		this.view.notifyNewDataUpdate();
		//console.log(this.view.jsonUpdateNew)
		this.model.actualizarArticulo(this.view.registerUpdate, this.view.jsonUpdateNew);
		this.view.confirmarUpdateExitoso();
	}
}//fin de la clase