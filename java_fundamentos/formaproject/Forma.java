package formaproject;


public abstract class Forma implements ValidaForma {

	public void dibujar() {
		System.out.println("Dibujando Forma");
	}
	
	public void borrar() {
		System.out.println("Borrando forma");
	}
	
	//si se quita el abstract en la clase Forma, se debe definir el método implementado
	//public boolean validar(){
	//	return false;
	//}
	
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
	
	//override, se implementa el metodo abstracto de la interfaz ValidaForma
	public boolean validar(){
		return false;
	}
	
}

class Cuadrado extends Forma{
	
	//private int ladoA;
	
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
	
	//override, se implementa el metodo abstracto de la interfaz ValidaForma
	public boolean validar(){
		return false;
	}
	
}

class Pantalla{
	
	public void mostrarFormas(Forma forma) {
		
		if(forma.validar()){
		forma.dibujar();
		}
	}
	
	public void limpiarPantalla(Forma forma) {
		forma.borrar();
	}
}