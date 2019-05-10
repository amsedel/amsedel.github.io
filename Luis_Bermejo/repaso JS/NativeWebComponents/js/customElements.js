class PopUpInfo extends HTMLElement{

			constructor(){
				super(); //siempre debe ser lo primero en llamarse y establecer la cadena de prototipo correcta

				//Dentro del constructor, definimos toda la funcionalidad que tendrá el elemento cuando se instancia una instancia de él. En este caso, adjuntamos una raíz de sombra al elemento personalizado

				//creamos el shadow root
				var shadow =this.attachShadow({mode:'open'});

				//creamos spans
				var wrapper = document.createElement('span');
				wrapper.setAttribute('class','wrapper');
				var icon = document.createElement('span');
				icon.setAttribute('class','icon');
				//tabindex=0, significa que el elemento debe ser enfocado
				icon.setAttribute('tabindex',0);
				var info = document.createElement('span');
				info.setAttribute('class','info');

				//tomamos el atributo de contenido y ponemos dentro de el la información del span
				var text = this.getAttribute('text');
				info.textContent = text;

				//insertar el ícono
				var imgUrl;
				if(this.hasAttribute('img')){
					imgUrl = this.getAttribute('img');
				}else{
					imgUrl = 'img/default.png';
				}

				var img = document.createElement('img');
				img.src = imgUrl;
				icon.appendChild(img);

				//Creamos algo de estilo y se lo aplicamos al shadow dom
				var style = document.createElement('style');
				//style.textContent = '.wrapper{font-size:2em; color:purple;} img{display:block; width:20%;}';

				style.textContent=`
				.wrapper {
					position: relative;
					top:100px;
				}
				.info {
					font-size: 0.9rem;
					width: 200px;
					display: inline-block;
					border: 2px solid black;
					padding: 8px;
					background: rgb(224,224,224);
					border-radius: 10px;
					opacity: 0;
					transition: 0.6s all;
					position: absolute;
					bottom: 20px;
					left: 15px;
					z-index: 3;
				}
				img {
					width: 1.5rem;
				}
				.icon:hover + .info, .icon:focus + .info {
					opacity: 1;
				}
				`;


				//adjuntamos los elementos creados al shadow DOM

				shadow.appendChild(style);
				shadow.appendChild(wrapper);
				wrapper.appendChild(icon);
				wrapper.appendChild(info);
			}

		}

		//registramos nuestro evento personalizado en el CustomElementRegistry uso del define()

		customElements.define('popup-info', PopUpInfo);
