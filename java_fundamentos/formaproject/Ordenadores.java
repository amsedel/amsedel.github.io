package formaproject;

public class Ordenadores {
	
	private String codigo;
	private float precio;
	private String slogan;
	
	public Ordenadores(String slogan){
		this.slogan = slogan;
		System.out.println("Mi slogan es: " + slogan);
	}
	
	//public Ordenadores(String codigo, double precio, String slogan){
		//this.codigo = codigo;
		//this.precio = precio;
	//	System.out.println("Mi slogan es: ");
	//}
	
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public float getPrecio() {
		return precio;
	}
	public void setPrecio(float precio) {
		this.precio = precio;
	}
	
	public void imprimeCodigo() {
		System.out.println("El código de la portatil es " + codigo);
	}
	
	public void imprimePrecio() {
		System.out.println("El precio de la portatil es " + precio + "pesos");
	}

}




class Portatil extends Ordenadores{
	
	private int peso;
	//private String slogan;
	
	public Portatil(String slogan){
		super(slogan);
		//System.out.println("Ideal para sus viajes");
	}
	
	public void setPeso(int peso){
		this.peso = peso;
	}

	public int getPeso(){
		return this.peso;
	}
	public void imprimePeso() {
		System.out.println("El peso de la portatil es: " + peso*9.81 + "Kg");
	}
	
	
}


class Sobremesa extends Ordenadores{
	
	
	private String tipoTorre;
	
	
	public Sobremesa(String slogan){
		super(slogan);
	//	System.out.println("Es el que más pesa pero el que menos cuesta");
	}
	
	public void setTorre(String tipoTorre){
		this.tipoTorre = tipoTorre;
	}

	public String getTorre(){
		return this.tipoTorre;
	}
	
	
	public void descripcionTorre() {
		System.out.println("La torre es: " + tipoTorre);
	}
}
