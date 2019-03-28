//cilo do while

var signo = prompt("Cual es tu signo");

//console.log(signo);

switch(signo){
     case 'acuario':
     console.log('Eres acuario');;;
     break;
     case 'picis':
     console.log('Eres picis');;
     break;
     case 'cancer': //por si el usuario lo pone con tilde
     case 'cáncer':
     console.log('Eres cancer');;
     break;
     default:
     console.log('No es un signo zodiacal valido');
     break;
}