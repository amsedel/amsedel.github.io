package com.ids.dledesma.amazon.model;

import java.util.Date;

public class Publications {
	
	private String title;
	private Date editionDate;
	private String editorial;
	private String[] authors;
	
	
	public Publications(String title, Date editionDate, String editorial, String[] authors) {
		super();
		this.title = title;
		this.editionDate = editionDate;
		this.editorial = editorial;
		this.authors = authors;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public Date getEditionDate() {
		return editionDate;
	}


	public void setEditionDate(Date editionDate) {
		this.editionDate = editionDate;
	}


	public String getEditorial() {
		return editorial;
	}


	public void setEditorial(String editorial) {
		this.editorial = editorial;
	}


	public String[] getAuthors() {
		return authors;
	}


	public void setAuthors(String[] authors) {
		this.authors = authors;
	}
	
	
	

}
