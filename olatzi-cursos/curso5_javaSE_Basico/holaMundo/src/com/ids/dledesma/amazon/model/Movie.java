package com.ids.dledesma.amazon.model;

public class Movie extends Film{
	
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
	 
	

}
