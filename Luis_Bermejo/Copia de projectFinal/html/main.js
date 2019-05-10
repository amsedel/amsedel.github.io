MVC.controllerInstance = new MVC.Controller({
	model : MVC.Model,
	view : MVC.View,
	elemento: document.querySelector('#cuerpo'),
	elementoRegister: document.querySelector('#registro_form'),
	elementoDelete: document.querySelector('#eliminar_form'),
	elementoDeleteRead: document.querySelector('#readDelete'),
	endpoint : 'http://localhost:8080/api/articulos'
});
		

document.body.dispatchEvent(new Event('onloadApp'));


function search(){
document.body.dispatchEvent(new Event('onPushBtn'));
}

function registrar(){
document.body.dispatchEvent(new Event('onPushBtnRegister'));
}

function consultaTitulo(){
document.body.dispatchEvent(new Event('onPushBtnSendRegister'));
}

function deletedMain(){
document.body.dispatchEvent(new Event('onPushBtnDeleteMain'));
}

function searchDelete(){
document.body.dispatchEvent(new Event('onPushBtnSearchDelete'));	
}
	
function confirmDelete(){
	document.body.dispatchEvent(new Event('onPushBtnConfirmDelete'));	
}
