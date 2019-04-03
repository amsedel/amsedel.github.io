package com.ids.dledesma.amazon.model;

import java.util.ArrayList;

public class Serie extends Film{
	

	private int id;
	private int sessionQuantity;
	//private Chapter[] chapters;
	private ArrayList<Chapter> chapters;
	private int timeViewed;
	  
	
	public Serie(String title, String genre, String creator, int duration, int sessionQuantity) {
		super(title, genre, creator, duration);
		// TODO Auto-generated constructor stub
		this.sessionQuantity = sessionQuantity;
	}

	  

	public int getId() {
		return id;
	}



	public int getSessionQuantity() {
		return sessionQuantity;
	}



	public void setSessionQuantity(int sessionQuantity) {
		this.sessionQuantity = sessionQuantity;
	}



	public ArrayList<Chapter> getChapters() {
		return chapters;
	}



	public void setChapters(ArrayList<Chapter>chapters) {
		this.chapters = chapters;
	}



	public int getTimeViewed() {
		return timeViewed;
	}



	public void setTimeViewed(int timeViewed) {
		this.timeViewed = timeViewed;
	}

	
}