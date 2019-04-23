
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Circulo circulo1 = new Circulo();
		Forma circulo2 = new Circulo();
		Cuadrado cuadrado1 = new Cuadrado();
		Pantalla myPantalla = new Pantalla();
		
		myPantalla.mostrarFormas(circulo1);
		myPantalla.limpiarPantalla(circulo1);
		myPantalla.mostrarFormas(circulo2);
		myPantalla.limpiarPantalla(circulo2);
		myPantalla.mostrarFormas(cuadrado1);
		myPantalla.limpiarPantalla(cuadrado1);	
		
	}

}
