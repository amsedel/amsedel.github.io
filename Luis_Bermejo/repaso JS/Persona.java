public static void main(Strin[]args) {
	Persona p = new Persona();
	p.setNombre("Luis");
	System.out.println(p.getNombre);

}

public class Persona {

	private String nombre;
	private int edad;
	
	public Persona() {
		System.out.println("Creando objeto persona... ok");
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public String getNombre() {
		return this.nombre;
	}
	
	public void setEdad(int edad) {
		this.edad=edad;
	}
	public int getEdad() {
		return this.edad;
	}
}
