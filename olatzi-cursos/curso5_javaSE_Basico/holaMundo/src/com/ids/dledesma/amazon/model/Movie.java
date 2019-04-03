package com.ids.dledesma.amazon.model;

import java.util.ArrayList;
import java.util.Date;

public class Movie extends Film implements IVisualizable{
	
	  private int id;
	  private int timeViewed;
	  
	 

	public Movie(String title, String genre, String creator, int duration, short year) {
		super(title, genre, creator, duration); //referencia al constructor del padre
		setYear(year);
	}

	
	
	public void showData() {
		//imprimir los datos que estan en movie

	}
	
	/*
	//getter
	public String getTitle(){
		return title;
	}
	//setter
	public void setTitle(String title) {
		//asignar , this hace referencia a la clase donde esta ubicado
		//tambien nos sirva para diferenciar entre la variable local y la global
		this.title = title;
	}*/



	public int getId() {
		return id;
	}

	public int getTimeViewed() {
		return timeViewed;
	}

	public void setTimeViewed(int timeViewed) {
		this.timeViewed = timeViewed;
	}
	 
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Title: " + getTitle() + 
				"\nYear: " + getGenre() + 
				"\nCreator: " + getCreator() +
				"\nDuration: " + getDuration();
//		Algo a tener en cuenta, es que si tenemos un método toString definido, 
//		al mostrar el objeto sin mas (sin invocar nada, sin invocar el metodo), 
//		ejecutara por defecto este método
		
	}



	@Override
	public Date startToSee(Date dateI) {
		// TODO Auto-generated method stub
		return dateI;
	}



	@Override
	public void stopToSee(Date dateI, Date datef) {
		// TODO Auto-generated method stub
		
		if(datef.getTime()>dateI.getTime()) {
			setTimeViewed((int)(datef.getTime() - dateI.getTime()));
		} else {
			setTimeViewed(0);
		}
		
	}
	
	public static ArrayList<Movie> makeMoviesList(){
		ArrayList<Movie> movies = new ArrayList();
		
		for(int i = 1; i<=5; i++) {
			
			movies.add(new Movie("Movie " + i, "Genero" + i, "Creador" + i,120+i, (short)(2017+i)));
			
		}
		
		
		return movies;
	}
	
	

}
