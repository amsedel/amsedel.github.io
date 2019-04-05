package com.ids.dledesma.amazonviewer.db;

import java.sql.Connection;
import java.sql.DriverManager;
import static com.ids.dledesma.amazonviewer.db.DataBase.*; //importar clases con datos estaticos, importando clase DataBase

public interface IDBConection {

	
	 //objeto conexión, al generar se duvuelve la instancia de la sesión
	//objeto connection
	default Connection connectToDB() {
		Connection connection = null; //objeto de tipo connection
		
		try {
			//llamar al driver como paquete
			Class.forName("com.mysql.jdbc.Driver"); //tal cual debe escribisse
			
			//objeto Driver clase q me ayuda a conectarme a la base DB
			//las BD de mysql sieompre salen por el puerto 3306
			connection = DriverManager.getConnection(URL+DB, USER, PASSWORD); 
			//la dirección de coneccion a la BD
			
			if(connection != null) {
				System.out.println("Se establecio la conexión");
				
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace(); //solo para fines de debugg, no se vea el error
			
		}finally {
			return connection;
		}
	}
	
}
