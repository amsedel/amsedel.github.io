
public class Forma {

	public void dibujar() {
		System.out.println("Dibujando Forma");
	}
	
	public void borrar() {
		System.out.println("Borrando forma");
	}
	
}

class Circulo extends Forma{
	
	
	public void dibujar() {
		System.out.println("Calculando diámetro");
		System.out.println("Dibujando círculo");
		hacerOtraCosa();
	}
	
	public void borrar() {
		System.out.println("Borrando círculo...");
	}
	
	public void hacerOtraCosa() {
		System.out.println("Haciendo otras cositas ssshhh...");
	}
}

class Cuadrado extends Forma{
	
	public void dibujar() {
		super.dibujar();
		System.out.println("Dibujando lado A");
		System.out.println("Dibujando lado B");
		System.out.println("Dibujando lado C");
		System.out.println("Dibujando lado D");
	}
	
	public void borrar() {
		System.out.println("Borrando cuadrado");
	}
}

class Pantalla{
	
	public void mostrarFormas(Forma forma) {
		forma.dibujar();
	}
	
	public void limpiarPantalla(Forma forma) {
		forma.borrar();
	}
}