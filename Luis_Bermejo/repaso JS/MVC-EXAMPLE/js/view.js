
MVC.View = class View{
	
	constructor(elem){
	//que escuche primero los eventos
	this.eventHandler();

	this.elem = elem;

	}


	eventHandler(){
		document.body.addEventListener('onLoadData', (event) => {
			this.updateView(event.detail);
		});
	}

	notify(data){
		//console.log(data);
		const onLoadDataEvent = new CustomEvent('onLoadData', { detail: data, bubbles: true});
		this.elem.dispatchEvent(onLoadDataEvent);
	}

	updateView(datos){
		for(let key in datos){
			const node = this.elem.querySelector(`#${key}`);
			if(node != null){
				console.log(node);
				node.value = datos[key];
			}else{
				console.log(`no de encontro ${key}`);
			}
		}
		
	}

}