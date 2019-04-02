package comp.ids.dledesma.project;

import java.util.Date;

import com.ids.dledesma.amazon.model.Movie;


public class Project {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	//  Movie movie = new Movie ("Coco", "Animation",(short)2017);
		//movie.title ="Rambo";
	//	movie.setTitle("Rambo");
	//	movie.showData();
		//showMenu();
	}
	
public static void showMenu() {
	int exit = 0;
	
	do {
		
		System.out.println("Bienvenidos");
		System.err.println("");
		System.out.println("Selecciona el numero de opción deseada");
		System.out.println("1.-Movies");
		System.out.println("2.-Series");
		System.out.println("3.- Books");
		System.out.println("4.- Magazines");
		System.out.println("5.- Report");
		System.out.println("6.- Report Today");
		System.out.println("0.- Exit");
		
		//Leer la respuesta del espacio
		
		//Scanner sc = new Scanner(System.in);
		int response = 1;
		//int response = Integer.valueOf(sc.nextLine());
		
		switch(response) {
		case 0:
			break;
		case 1: 
			showMovies();
			break;
		case 2:
			showSeries();
			break;
		case 3:
			showBooks();
			break;
		case 4:
			showMagazines();
			break;
		case 5:
			makeReport();
			break;
		case 6:
			//Date date = new Date();
			makeReport(new Date());
			break;
		default:
			System.out.println();
			System.out.println("Seleciona una opción");
			System.out.println();
			break;
		}
		
	}while(exit != 0); 
} //fin del metodo showMenu



		
public static void showMovies(){
	//como se van a mostrat las peliculas
	int exit = 0; //vairable local
	
	do {
		System.out.println();
		System.out.println("MOVIES");
		System.out.println();
	}while(exit !=0);
	
}
public static void showSeries(){
	int exit = 0; //vairable local
	
	do {
		System.out.println();
		System.out.println("SERIES");
		System.out.println();
	}while(exit !=0);
}
public static void showChapters(){
	int exit = 0; //vairable local
	
	do {
		System.out.println();
		System.out.println("CHAPTERS");
		System.out.println();
	}while(exit !=0);
}
public static void showBooks(){
	int exit = 0; //vairable local
	
	do {
		System.out.println();
		System.out.println("BOOKS");
		System.out.println();
	}while(exit !=0);
}
public static void showMagazines(){
	
	int exit = 0; //vairable local
	
	do {
		System.out.println();
		System.out.println("MAGAZINES");
		System.out.println();
	}while(exit !=0);
}


public static void makeReport() {
	
}

public static void makeReport(Date date) {
	
}
		
	}
		
	


