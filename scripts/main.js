//var miTitulo = document.querySelector('h2');
//var miTitulo = document.getElementsByTagName("h2")[0];//su equivalente es document.querySelector('h2');
//miTitulo.innerHTML = 'Hello world!';


//document.querySelector('html').onclick = function() {
  //  alert('Ouch! Deja de pincharme!');
//}

var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/mountain.jpg') {
      miImage.setAttribute('src','images/playa.jpg');
    } else {
      miImage.setAttribute('src', 'images/mountain.jpg');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h2');
//localStorage permite almacenar datos en el navegadory recuperarlos luego
function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);//setItem es una funcion de localStorage que permite crear y almacenar un dato
    miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}


if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}