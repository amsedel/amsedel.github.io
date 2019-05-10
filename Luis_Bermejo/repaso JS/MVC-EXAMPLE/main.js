
MVC.controllerInstance = new MVC.Controller({
	model: MVC.Model,
	view : MVC.View,
	contentElement : document.querySelector('#contact_form'),
	endpoint: './model/persona.json'
});

document.body.dispatchEvent(new Event('onloadApp'));
//el controlador esta esperando el evento onloadApp