//alert('dame empleo');

//imprimier numero 1 100
//div 3 fizz
//div 5 buzz
//div 3 y 5 fizz buzz

var numeros = 100;
var divisible = false;

/*
for(var i=1; i<=100; i++){

	divisible=false;

	if (i%3 == 0) {//modulo
	document.write("Fizz"); //s es divisible imprime fizz
	divisible=true;
	} 

	if(i%5 == 0){
	document.write("Buzz");
	divisible=true;
	}

	if(!divisible){ //si no es divisible
	document.write(i); //si no es divisible, imprime el numero
	}

	document.write("<br>");
}*/

for(var i=1; i<=100; i++){

	if (i%3 == 0) {//modulo
	document.write("Fizz"); //s es divisible imprime fizz
	} 

	if(i%5 == 0){
	document.write("Buzz");
	}

	if(i%3 != 0 && i%5 != 0){ //si no es divisible
	document.write(i); //si no es divisible, imprime el numero
	}

	document.write("<br>");
}