
class Square extends HTMLElement{
	//observedAttributes(), es un
	//observador: metodo que observa el estado de los atributos y 
	//trabaja en conjunto de attributeChangedCallback(), que se activa
	//cuando un atributo cambia

	static get observedAttributes(){ return ['c','l'];}

	constructor(){
		super();

		//adjuntamos el shadow root, un DOM de sombra al elemento
		var shadow = this.attachShadow({mode:'open'});

		var div = document.createElement('div');
		var style=document.createElement('style');

		shadow.appendChild(style);
		shadow.appendChild(div);

	}

	//todas las actualizaciones reales se manejan mediante devoluciones
	//de llamada de ciclo de vida


	//connectedCallback(), se ejecuta cada que el elemento se 
	//agrega al DOM
	connectedCallback(){
		console.log('Un elemento cuadro personalizado ha sido añadido a la página');
		updateStyle(this);
	}

	//Devolución de llamada  disconnectedCallback() que registra mensaje de que el elemento del
	//DOM se ha eliminado
	disconnectedCallback(){
		console.log('El elemento cuadro personalizado a sido removido de la página');
	}

	//Devolución de llamada adoptedCallback() que registra un mensaje cuando el elemento
	//ha sido movido a una página diferente

	adoptedCallback(){
		console.log('El elemento cuadro personalizado ha sido movido a una nueva página');		
	}

	//La devolución de llamada attributeChangedCallback(), se ejecuta
	//siempre que uno de los atributos del elemento se cambia de 
	//alguna manera, es posible actuar sobre los atributos 
	//individualemente , observando su nombre y los valores de
	//Atributos antiguos y nuevos.
	//usamos updateStyle dentro de ella para asegurarnos de que el
	//estilo se actualice al modificar los atributos del elemento

	attributeChangedCallback(name, oldValue, newValue){
		console.log('El elemento cuadro personalizado le han cambiado sus atributos')
		updateStyle(this);
	}

}

//registramos nuestro evento personalizado en el CustomElementRegistry uso del define()
customElements.define('custom-square', Square);


//para actualizar el estilo, toma un elemento...
function updateStyle(elem){

	//obtenemos la raíz sombra del elmento
	const shadow = elem.shadowRoot;
	//encontramos el estilo del elemento sombra
	shadow.querySelector('style').textContent=`
	div{
		width: ${elem.getAttribute('l')}px;
		height: ${elem.getAttribute('l')}px;
		background: ${elem.getAttribute('c')};
	}	
	`;
	//agregamos width, background y height al elemento
	

}