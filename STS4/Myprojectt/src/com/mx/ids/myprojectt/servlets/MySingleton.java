package com.mx.ids.myprojectt.servlets;

public class MySingleton {
	
	private static MySingleton instance = null;
	private static final String MESSAGE = "Yeah! Yeah!!";
	private static final Integer ID = 1;
	
	private MySingleton() {}
	
	public static MySingleton getInstance() {
		if(instance == null) {
			instance = new MySingleton();
		}
		return instance;
	}
	
	public static String getMessage() {
		return MESSAGE;
	}
	
	@Override
	
	public String toString() {
		return super.toString() + " ID: " + ID;
	}

}
