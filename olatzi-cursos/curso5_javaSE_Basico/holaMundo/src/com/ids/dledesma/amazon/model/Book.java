package com.ids.dledesma.amazon.model;

import java.util.Date;

public class Book extends Publications implements IVisualizable {

	  private int id;
	  private String isbn;
	  private boolean readed;
	  private int timeReaded;
	  
	  
	  public Book(String title, Date editionDate, String editorial, String[] authors , String isbn, boolean readed, int timeReaded) {
		super(title, editionDate, editorial, authors);
		// TODO Auto-generated constructor stub
		this.isbn = isbn;
		this.readed = readed;
		this.timeReaded = timeReaded;
	}
	  
	  
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getIsbn() {
		return isbn;
	}


	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}


	public boolean isReaded() {
		return readed;
	}


	public void setReaded(boolean readed) {
		this.readed = readed;
	}


	public int getTimeReaded() {
		return timeReaded;
	}


	public void setTimeReaded(int timeReaded) {
		this.timeReaded = timeReaded;
	}

	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Title: " + getTitle() + 
				"\nEdition year: " + getEditionDate() + 
				"\nEditorial: " + getEditorial() +
				"\nAuthors: " + getAuthors();
	}


	@Override
	public Date startToSee(Date dateI) {
		// TODO Auto-generated method stub
		return dateI;
	}


	@Override
	public void stopToSee(Date dateI, Date datef) {
		// TODO Auto-generated method stub
		
		if(datef.getSeconds()>dateI.getSeconds()) {
			setTimeReaded(datef.getSeconds() - dateI.getSeconds());
		} else {
			setTimeReaded(0);
		}
		
	}
	  
}
