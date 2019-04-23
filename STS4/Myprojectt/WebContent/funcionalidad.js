var cifra=0, countSuma = 0, countResta = 0, countMulti=0, countDiv=0, countPor=0, countMasMenos=0;
		var num2;
		var valores= {
				operacion : '',
				operA : '',				
				operB : ''
				}

		/*Eventos personalizados*/

		var eventClean = new Event('cleanScreen');
		var eventSuma = new Event('sumar');
		var eventResta = new Event('restar');
		var eventMultiplicacion = new Event('multiplicar');
		var eventDivision = new Event('dividir');
		var eventPorcentaje = new Event('porcentual');
		var eventNegPos = new Event('negPos');

		var s =document.getElementById('suma');
		s.addEventListener('sumar', suma);

		var re = document.getElementById('resta');
		re.addEventListener('restar', resta);

		var m = document.getElementById('multiplica');
		m.addEventListener('multiplicar',multiplicacion);

		var d = document.getElementById('divide');
		d.addEventListener('dividir', division);

		var p = document.getElementById('porcentaje');
		p.addEventListener('porcentual',porcentaje);

		var mm = document.getElementById('negPos');
		mm.addEventListener('negPos', masMenos);

		ac.addEventListener('cleanScreen', cleanView);
		var inOut= document.getElementById('inputOutput');


		//para que no exista un reseteo del número al introducir otro número
		//introduje un contador cifra, que se resetea cada que el usuario
		//introduce un signo de operación

		function viewValue(numero){
			if(cifra===0){
			inOut.textContent =numero;
			num2 = numero;
			cifra++;
			}else{
			num2 = num2.concat(numero);
			inOut.textContent =num2;
			cifra++;
			}		
		}

		//esta función sirve para resolver el problema de las operaciones en serie, sin que el usuario
		//ejecute un igual
		//estos contadores son para la operación inmediata a la primera, ya que por ejemplo
		//si el usuario suma por primera vez countSuma=1, pero si después el usuario, realiza 
		//otra operación, el programa no la reconozca como la primera operación y paresca que aun falta 
		//introducir el parámetro B
		function getValue(signo){
			var valueA = document.getElementById('inputOutput');
			valores.operacion=signo;
			cifra=0;
			if (signo =='+') {
				countSuma++;
			}
			if (signo=='-') {
				countResta++;
			}
			if (signo=='*') {
				countMulti++;
			}
			if (signo=='/') {
				countDiv++;
			}
			if (signo=='%') {
				valores.operA = valueA.textContent;
				countPor++;
			}
			if (signo=='+/-') {
				valores.operA = valueA.textContent;
				countMasMenos++;
			}
			console.log(valores);	

			if((countSuma>1 || (countResta>=1 || countMulti>=1 || countDiv>=1 || countPor>=1 || countMasMenos>=1)) && 
			   (countResta>1 || (countSuma>=1 || countMulti>=1 || countDiv>=1 || countPor>=1 || countMasMenos>=1)) && 
			   (countMulti>1 || (countSuma>=1 || countResta>=1 || countDiv>=1 || countPor>=1 || countMasMenos>=1)) &&
			   (countDiv>1 || (countSuma>=1 || countResta>=1 || countMulti>=1 || countPor>=1 || countMasMenos>=1)) ){

				var valueB = document.getElementById('inputOutput');
				valores.operB=valueB.textContent;
				console.log(valores.operB);
				operacion();
			}else{
				valores.operA = valueA.textContent;	
			}

			//console.log(valores);

		}

		//Al dar un igual, se resetean todos los contadores, y se establece el valor del parámetro B

		function getValue2(resultado){
			cifra=0;
			countSuma = 0; countPor=0; countMulti=0;
			countResta = 0; countDiv=0; countMasMenos=0;
			var valueB = document.getElementById('inputOutput');
			valores.operB = valueB.textContent;
			//console.log(valores.operB)
			operacion();
		}

		//se hace un cambio de tipo de variable, ya que los valores ingresados vienen en formato string
		//luego se compara la operación que el usuario desea y se mandan llamar las funciones, encargadas de
		//tales operaciones
		function operacion(){
			// var a = parseFloat(valores.operA);
			// var b = parseFloat(valores.operB);
			if(valores.operacion == '+'){
				s.dispatchEvent(eventSuma);
			}else if(valores.operacion == '-'){
				re.dispatchEvent(eventResta);
			}else if(valores.operacion == '*'){
				m.dispatchEvent(eventMultiplicacion);
			}else if(valores.operacion == '/'){
				d.dispatchEvent(eventDivision);
			}else if(valores.operacion == '%'){
				p.dispatchEvent(eventPorcentaje);
			}else if(valores.operacion == '+/-'){
				mm.dispatchEvent(eventNegPos);
			}
		}

		function suma(){
			var a = parseFloat(valores.operA);
			var b = parseFloat(valores.operB);
			var r = a+b;
			valores.operA = r;
			var result = document.getElementById('inputOutput');
			result.textContent = r;
			console.log(r);
			return r;
		}

		function resta(){
			var a = parseFloat(valores.operA);
			var b = parseFloat(valores.operB);
			var r = a-b;
			valores.operA = r;
			var result = document.getElementById('inputOutput');
			result.textContent = r;
			console.log(r);
			return r;
		}

		function multiplicacion(){
			var a = parseFloat(valores.operA);
			var b = parseFloat(valores.operB);
			var r = a*b;
			valores.operA = r;
			var result = document.getElementById('inputOutput');
			result.textContent = r;
			console.log(r);
			return r;
		}

		function division(){
			var a = parseFloat(valores.operA);
			var b = parseFloat(valores.operB);
			var r = a/b;
			r = r.toFixed(3);
			valores.operA = r;
			var result = document.getElementById('inputOutput');
			result.textContent = r;
			console.log(r);
			return r;
		}

		function porcentaje(){
			var a = parseFloat(valores.operA);
			var r = a/100;
			r = r.toFixed(3);
			valores.operA = r;
			var result = document.getElementById('inputOutput');
			result.textContent = r;
			console.log(r);
			return r;

		}

		function masMenos(){
			var a = parseFloat(valores.operA);
			var r = a*(-1);
			valores.operA = r;
			console.log(r);
			var result = document.getElementById('inputOutput');
			result.textContent = r;
			console.log(r);
			return r;
		}

		function reset(){
			cifra=0;
			countSuma = 0;
			countResta = 0;
			ac.dispatchEvent(eventClean);
		}

		function cleanView(){
			var rst = document.getElementById('inputOutput');
			rst.textContent ='0';
		}
