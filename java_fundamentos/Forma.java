public class Forma{


		public static void main(String[] args) {
		// TODO Auto-generated method stub
		Cuadrado c = new Cuadrado();
		c.gritar();
		c.setLadoA(4);
		System.out.println(c.getLadoA());

	}


	private String color;
	private String nombre;


public Forma(){
	System.out.println("Soy una forma geométrica");
}

public void setNombre(String nombre){
	this.nombre = nombre;
}

public String getNombre(){
	return this.nombre;
}
public void setColor(String color){
this.color = color;
}

public String getColor(){
	return this.color;
}

public void gritar(){
	System.out.println("YEA YEA YEA!!!");
}
}

class Cuadrado extends Forma{
	private int ladoA;


public Cuadrado(){
	System.out.println("Soy un cuadrado");
}

public void setLadoA(int size){
	this.ladoA=size;
}

public int getLadoA(){
	return this.ladoA;
}

}

class Circulo extends Forma{
	private int radio;


public Circulo(){
	System.out.println("Soy un circulo");
}

public void setLadoA(int size){
	this.radio=size;
}

public int getLadoA(){
	return this.radio;
}
}

class Triangulo extends Forma{
	private int anguloA;


public Triangulo(){
	System.out.println("Soy un triángulo");
}

public void setLadoA(int size){
	this.anguloA=size;
}

public int getLadoA(){
	return this.anguloA;
}
}