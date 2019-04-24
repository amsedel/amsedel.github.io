package com.mx.ids.myprojectt.servlets;

public class TestMySingleton {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Test my Singleton");
		
		//MySingleton mySingletonInstance = new MySingleton();
		
		MySingleton mySingletonInstance = MySingleton.getInstance();
		
		System.out.println("Mensaje : " + MySingleton.getMessage() + 
				 " ID : " + mySingletonInstance);
	}

}
