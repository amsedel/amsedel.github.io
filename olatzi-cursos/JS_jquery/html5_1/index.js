
var t = document.querySelector("myTemplate");
var clone = document.importNode(t.content, true); 
//importar el contenido del nodo externo
clone.querySelector("h1").innerHTML = "Platzi";
clone.querySelector("p").innerHTML= "Aprende a crear el fututo de internet";

 //agregamos al documento
 document.body.appendChild(clone);