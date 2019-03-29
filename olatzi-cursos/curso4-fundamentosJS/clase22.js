//Como funcionan las clases en javaScript

function Persona(nombre_, apellido_, altura_){//constructor?
 //para guardarlo dentro de este objeto, se puede hacer referencia a 
// ese objeto dentro de esta función como "this" que se acaba de construir 
//this hace referencia al objeto 
 //this.nombre : nombre hace referencia a un atributo, mientras que
 //la variable nombre q se le asigna es el parámetro
    this.nombre = nombre_; //estamos asignando el atributo nombre
    this.apellido = apellido_; //estamos asignando el atributo apellido
    this.altura = altura_;
    //return this; está implicito en la funcion y no es necesario ponerlo
    //implicitamenteJS retorna this cuando llamamos a la funcion con
    //la palabra new;
}


//dentro del prototipo de persona va a existir un atributo saludar
//que va a ser una función
// Persona.prototype.saludar = function(){
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
// }
//su arrow function queda:
Persona.prototype.saludar = () =>{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

// Persona.prototype.eresAlto = function(){
//     return this.altura>1.80
// }
//su arrow function queda:
Persona.prototype.eresAlto = () => this.altura > 1.80;

var diana = new Persona('Diana','Ledesma', 1.64); //new se utiliza para crear nuevos objetos dado un prototipo
//new hace que se cree un nuevo objeto y se le asigne un prototipo
//se ejecute un constructor , retornando el objeto q se acaba de construir
//esto creo un nuevo objeto con el prototipo de persona
var diego = new Persona('Diego','García',1.81);
var gabi = new Persona('Gabriela','Sánchez', 1.60);


diego.eresAlto();
diana.eresAlto();
gabi.eresAlto();

//al pasar las funciones como arrow function genero error
