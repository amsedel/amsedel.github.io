package comp.ids.dledesma.project;

import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

import com.ids.dledesma.amazon.model.Movie;



public class Project {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		showMenu();
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
		
		//Leer la respuesta del usuario
		
		Scanner sc = new Scanner(System.in);
		//parseo
		int response = Integer.valueOf(sc.nextLine());
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
	ArrayList<Movie> movies = Movie.makeMoviesList();
	do {
		System.out.println();
		System.out.println("MOVIES");
		System.out.println();
		
		for(int i = 0; i<movies.size(); i++) {
			//obtenemos el objeto con movies.get(i)
			System.out.println(i+1 + ".- " + movies.get(i).getTitle()+ "Visto: " + movies.get(i).isViewed());
		}
		
		//System.out.println("0. Regresar al Menu");
		//System.out.println();
		
		//Leer respuesta del usuario
		
		//Scanner sc = new Scanner(System.in);
		//int response = Integer.valueOf(sc.nextLine());
		
		//if(response == 0){
	//		showMenu();
	//	}
		
		Scanner sc = new Scanner(System.in);
		int response = Integer.valueOf(sc.nextLine());
		
		
		Movie movieSelected = movies.get(response-1);
		movieSelected.setViewed(true);
		Date dateI = movieSelected.startToSee(new Date());
		
		//termine de verla
		
		for(int i=0; i<100; i++){
			System.out.println("...................");
		}
		
		//termine de verla
		
		movieSelected.stopToSee(dateI, new Date());
		System.out.println();
		System.out.println("Viste: " + movieSelected);
		System.out.println("Por " + movieSelected.getTimeViewed() + "milisegundos");
		System.out.println("0. Regresar al Menu");
		System.out.println();
		
		Scanner sc2 = new Scanner(System.in);
		int response2 = Integer.valueOf(sc.nextLine());
		if(response2 == 0){
			showMenu();
		}
		
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
		
	


