//Clases JS

class Persona { 

constructor(nombre, apellido, altura ){//metodo constructor

    this.nombre = nombre; 
    this.apellido = apellido;
    this.altura = altura;
}

    saludar(){ //no es necesario agregarle la palabra function ya queda implicito
         console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
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
        saludar(){
            console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolladora`);
        }

    }



// var diana = new Persona('Diana','Ledesma', 1.64);
// var diego = new Persona('Diego','García',1.81);
// var gabi = new Persona('Gabriela','Sánchez', 1.60);

