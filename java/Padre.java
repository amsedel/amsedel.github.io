

public class Padre {

	public void tarea() {
		System.out.println("Tarea del padre");
	}
	
	public void tarea(String value) {
		System.out.println("Sobrecarga con string: " + value);
	}
	
	public void tarea(Integer num) {
		System.out.println("Sobrecarga con integer: " + num);
	}
	
}

class Hijo extends Padre{
	
	//@override
	public void tarea() {
		super.tarea();//tarea del padre
		tarea(1);//tarea del hijo
		
		System.out.println("Tarea del hijo... ");
	}
	
}