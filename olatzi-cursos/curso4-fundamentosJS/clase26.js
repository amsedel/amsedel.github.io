//Clases JS

class Persona { 

constructor(nombre, apellido, altura ){//metodo constructor

    this.nombre = nombre; 
    this.apellido = apellido;
    this.altura = altura;
}

    saludar(fn){ //pasar la funcion responder Saludo como parámetro fn (puede tener cualquier nombre)
        var {nombre,apellido} = this; 
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
         if(fn){//preguntamos si fn esta definida es decir nos pasaron un valor
            //null y 0 en un if siempre son false, tambien string vacio ''
            //cualquier objeto o array aunque esten vacios {} [] van a mandar true
            //una fn se evalua como true
            fn(nombre,apellido,false);
        }
    }

    eresAlto(){
        return this.altura > 1.80;
    }


    }


    class Desarrollador extends Persona{
        constructor(nombre, apellido, altura){
            super(nombre, apellido, altura); //llamando al constructor padre
            //no podemos utilizar this sin antes llamar al constructor del elemento padre
        }

        //pisamos el metodo saludar en persona , es decir lo sobreescribimos
        saludar(fn){

            var nombre = this.nombre;//Esto es equivalente var {nombre, apellido} = this;
            var apellido = this.apellido;

            console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrolladora`);
            
            if(fn){//preguntamos si fn esta definida es decir nos pasaron un valor
                //null y 0 en un if siempre son false, tambien string vacio ''
                //cualquier objeto o array aunque esten vacios {} [] van a mandar true
                //una fn se evalua como true
                fn(nombre,apellido,true)
            }
        }
    }

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`);
    if(esDev){
        console.log(`No sabia que eres desarrollador`);
    }
}

 var diana = new Persona('Diana','Ledesma', 1.64);
 var diego = new Desarrollador('Diego','García',1.81);
 var gabi = new Persona('Gabriela','Sánchez', 1.60);

 //vamos a pasarle la funcion responderSaludo() como parametro
 diana.saludar(responderSaludo);
 diego.saludar(responderSaludo);
 gabi.saludar(); //no es necesario que se le pase la funcion responder saludo
