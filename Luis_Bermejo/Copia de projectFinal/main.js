
MVC.controllerInstance = new MVC.Controller({
	model : MVC.Model,
	view : MVC.View,
	elemento: document.querySelector('#login_form'),
	endpoint : 'http://localhost:8080/api/usuarios'
});
		
function detonante(){
document.body.dispatchEvent(new Event('onloadApp'));

}

//el controlador esta esperando el evento onloadApp



