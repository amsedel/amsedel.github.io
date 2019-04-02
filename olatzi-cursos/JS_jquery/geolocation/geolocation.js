
(function(){


	if (navigator.geolocation) {

		navigator
		.geolocation
		.getCurrentPosition(getCoords, errorFound);

		function errorFound(err) {
			alert("Ocurrió un error: " + err.code);
			//el err.code puede devolver:
			// 0: se desconoce el error
			// 1: permiso denegado
			// 2: posicion no esta disponible
			// 3:Timeout
		}

		function getCoords(position){
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			// alert(`Tu posición es: ${lat} ; ${lon}`)
			console.log('tu posicion es: ' + lat + ' , ' + lon);

			var p = document.getElementById("miP");
			p.innerHTML = 'tu posicion es: ' + lat + ' , ' + lon;
		}

	}else{
		alert('Porfavor actualiza tu navegador');
	}


})();

