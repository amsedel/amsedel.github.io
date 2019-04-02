package com.ids.dledesma.amazon.model;

public class Serie extends Film{
	

	private int id;
	private int sessionQuantity;
	private Chapter[] chapter;
	private int timeViewed;
	  
	
	public Serie(String title, String genre, String creator, int duration, int sessionQuantity) {
		super(title, genre, creator, duration);
		// TODO Auto-generated constructor stub
		this.sessionQuantity = sessionQuantity;
	}

	  

	public int getId() {
		return id;
	}

}