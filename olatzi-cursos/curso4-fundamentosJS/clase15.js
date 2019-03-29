//cilo do while

var contador  = 0;

const llueve = () =>Math.random() < 0.25;

do{
contador +=1;
}while(!llueve()) //si no llueve se va a volver a ejecutar
//si llueve deja de ejecutarse
if(contador==1){
    console.log(`Fui a ver si llovía ${contador} vez`);
}else{
    console.log(`Fui a ver si llovía ${contador} veces`);
}
