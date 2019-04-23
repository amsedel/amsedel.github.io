package formaproject;

public class MainOrdenadores {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Portatil portatil1 = new Portatil("Ideal para sus viajes");
		//Sobremesa sobremesa1 = new Sobremesa();
		
		//final String slogan_portatil = "Ideal para sus viajes";
		//final String slogan_sobremesa = "Es el que más pesa pero el que menos cuesta";
		
		portatil1.setCodigo("12345MDF");
		portatil1.imprimeCodigo();
		portatil1.setPrecio(5690.70f);
		portatil1.imprimePrecio();
		portatil1.setPeso(1);
		portatil1.imprimePeso();
		
		
		//sobremesa1.setTorre("descripción tipo torre");
		//sobremesa1.descripcionTorre();
	}

}
