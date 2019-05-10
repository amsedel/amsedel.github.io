
MVC.View = class View{

	//elem, es el elemento html en este caso hace referencia a un formulario
	constructor(elem, elemRegister, elemDelete, elemDeleteRead){

		//que escuche primero los eventos
		this.eventHandler();
		this.eventHandlerPush();
		this.eventHandlerPushRegister();
		this.eventHandlerSendPushRegister();
		this.eventHandlerSearchDelete();
		this.elem = elem;
		this.elemRegister = elemRegister;
		this.elemDelete = elemDelete;
		this.elemDeleteRead = elemDeleteRead;
		this.validacionRegistroTitulo = {};
		this.flagUpdate;
		this.registerDelete = [];
		this.confirmDelete;

	}

	eventHandler(){
	//manejador de eventos que escucha a disparador dentro del
	//metodo notify, el cuál es ejecutado por el controlador al
	//momento de recibir los datos exitosamente
			document.body.addEventListener('onloadData', (event) => {
			this.generaTablaDatos(event.detail); //.detail para pasarle el data
		});
	}

	eventHandlerPush(){
			document.body.addEventListener('onPushSearch', (event) => {
			this.buscarArticulo(event.detail); });
	}

	eventHandlerPushRegister(){
			document.body.addEventListener('onPushRegister', (event) => {
			this.registrarArticulo(event.detail); });
	}

	eventHandlerSendPushRegister(){
			document.body.addEventListener('onPushSendRegister', (event) => {
			this.validarRegistroTitulo(event.detail); });

	}

	eventHandlerSearchDelete(){
			document.body.addEventListener('onPushSearchDelete', (event) => {
				event.preventDefault()
			this.buscarArticuloEliminar(event.detail); })
	}






	notify(data){
		const onLoadDataEvent = new CustomEvent('onloadData', {detail: data, bubbles : true});
		this.elem.dispatchEvent(onLoadDataEvent);
	}

	notifySearch(data){
		const onPushSearchEvent= new CustomEvent('onPushSearch', {detail: data, bubbles : true});
		this.elem.dispatchEvent(onPushSearchEvent);
	}

	notifyRegister(data){
		const onPushRegisterEvent = new CustomEvent('onPushRegister', {detail: data, bubbles : true});
		this.elem.dispatchEvent(onPushRegisterEvent);
	}

	notifySendRegister(data){

		const onPushSendRegisterEvent = new CustomEvent('onPushSendRegister', {detail: data, bubbles : true});
		this.elemRegister.dispatchEvent(onPushSendRegisterEvent);
	}

	notifyFoundRegisterDelete(data){
		const onPushSearchDeleteEvent = new CustomEvent('onPushSearchDelete', {detail: data, bubbles : true});
		this.elemDelete.dispatchEvent(onPushSearchDeleteEvent);
		console.log('notify')
	}




	generaTablaDatos(datos){
	
		readView.style.display='none';
		register.style.display='block';
		read.style.display='block';

		var tamanioArray = datos.length;
		var elemtr = [];
		var elemtc = [];
		var inputc = [];


	//Genera tabla	
		for(let b = 0; b<tamanioArray; b++){
		elemtr[b]= document.createElement('tr');
		this.elem.appendChild(elemtr[b])
		for(let a = 0; a<4; a++){
		inputc[a] = document.createElement('input');
		inputc[a].setAttribute('type','text');
		inputc[a].setAttribute('disabled','false');
		inputc[a].setAttribute('id', `${b}${a}`)
		elemtc[a]= document.createElement('td');
		elemtc[a].appendChild(inputc[a]);
		elemtr[b].appendChild(elemtc[a]);	
		}
		}

	//Rellenar los campos de la tabla generada

		for(var key in datos){
		for(var j = 0; j<4; j++){
		//console.log(`${key}${j}`);
		var node =document.getElementById(`${key}${j}`);
		if(node != null){
			if(j==0){
				node.value = datos[key].titulo;
			}else if(j==1){
				node.value = datos[key].autor;
			}else if(j==2){
				node.value = datos[key].contenido;
			}else if(j==3){
				node.value = datos[key].palabras_clave;
			}
			}
		}
		} //fin for in
	}//fin de genera tabla datos


	buscarArticulo(datos){
		var buscartext = document.getElementById('buscartext');
		var buscarTitulo;
		var tituloRead = document.getElementById('tituloRead');
		var palabrasClaveRead = document.getElementById('palabrasClaveRead');
		var contenidoRead = document.getElementById('contenidoRead');
		var autorRead =  document.getElementById('autorRead');

		//console.log(datos);
		buscarTitulo = datos.filter((dato) =>{
			if(dato.titulo == buscartext.value){
				readView.style.display='block';
				register.style.display='none';
				read.style.display='none';

				tituloRead.textContent = `${dato.titulo}`;
				palabrasClaveRead.textContent = `Palabras clave: ${dato.palabras_clave}`;
				contenidoRead.textContent = `${dato.contenido}`;
				autorRead.textContent = `Autor: ${dato.autor}`;

				console.log(dato.titulo);
				return dato;
			}
		}) 
		//console.log(buscarTitulo);
		if(buscarTitulo.length==0){
			buscartext.value = "";
			alert('El artículo no existe');
		}
		
	}//fin buscaArticulo


	//Registrar Artículo
	registrarArticulo(data){
		window.location="http://127.0.0.1:8887/html/registrar.html";
	}

	validarRegistroTitulo(datos){
		
		console.log(datos);
		var titulo, autor, articulo, palabras_clave;
		titulo = this.elemRegister.titulo.value;
		var encuentraRegistro = datos.filter((dato) => { return dato.titulo == titulo });

		this.validacionRegistroTitulo = {
			'titulo' : this.elemRegister.titulo.value,
			'autor' : this.elemRegister.autor.value,
			'articulo' : this.elemRegister.articulo.value,
			'palabras_clave' : this.elemRegister.palabras_clave.value,
			'registro' :  {
				'reg' : encuentraRegistro}
		}
		//console.log(titulo, autor, articulo, palabras_clave encuentraRegistro);
	}

	notifySendRegisterOk(){
		this.elemRegister.titulo.value = "";
		this.elemRegister.autor.value = "";
		this.elemRegister.articulo.value = "";
		this.elemRegister.palabras_clave.value ="";
		alert('Tu registro se realizó Exitosamente');
		var preguntaContinuar = confirm("¿Desea guardar un nuevo artículo?");
			if(preguntaContinuar===false){
				window.location="http://127.0.0.1:8887/html/main.html";
			}
	}

	notifySendRegisterRepeat(){
		var msn;
		var preguntaActualizar = confirm("Este título ya existe, ¿Desea actualizar el artículo?");
		 	if(preguntaActualizar){
		 		window.location="http://127.0.0.1:8887/html/actualizar.html";
		 		this.flagUpdate = true;
		 	}else{
		 		msn = document.getElementById('mensaje');
		 		msn.textContent = 'Porfavor modifica el título del artículo para poder guardarlo';
		 		this.flagUpdate = false;
		 	}

	}

	prueba(data){
		alert(data);
	}


	////////////DELETE

	notifyNewPageDelete(){
		window.location="http://127.0.0.1:8887/html/eliminar.html";

	}

	buscarArticuloEliminar(datos){
		console.log(datos);
		var readDelete = document.getElementById('readDelete');
		var eliminarText= document.getElementById('eliminarText');
		eliminarText = eliminarText.value;
		var encuentraRegistro = datos.filter((dato) => { return dato.titulo == eliminarText });
		//console.log(encuentraRegistro[0].id);
		this.registerDelete = encuentraRegistro;
	}

	notifyFoundRegister(registerFoundDelete){

		 tituloDelete.textContent = registerFoundDelete[0].titulo;
		 palabrasClaveDelete.textContent = registerFoundDelete[0].palabras_clave;
		 contenidoDelete.textContent = registerFoundDelete[0].contenido;
		 autorDelete.textContent = registerFoundDelete[0].autor;
		this.notifyConfirm();
	}


	 notifyConfirm(){
	 	
	 	// var preguntaEliminar = confirm("¿Desea eliminar el artículo?");
	 	// if(preguntaEliminar){
	 	// 	this.confirmDelete = true;
	 	// }
	 }


 	}//fin de la clase view



