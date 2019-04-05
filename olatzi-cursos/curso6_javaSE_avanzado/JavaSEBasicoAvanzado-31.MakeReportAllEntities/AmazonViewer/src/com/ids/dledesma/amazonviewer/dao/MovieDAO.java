package com.ids.dledesma.amazonviewer.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import static com.ids.dledesma.amazonviewer.db.DataBase.*;
import com.anncode.amazonviewer.model.Movie;
import com.ids.dledesma.amazonviewer.db.IDBConection;
//import com.mysql.jdbc.Connection;


public interface MovieDAO extends IDBConection{
	//hereda connectToDB
	
	//traer un listado de peliculas
	
	//firma, devolver objeto tipo movie
	default Movie setMovieViewed(Movie movie) {
		return movie;
	}
	
	//traer listado de peliculas, si puede ser llamado
	//desde otra clse, prite no lo permite
	
	default ArrayList<Movie> read(){
		ArrayList<Movie> movies = new ArrayList();
		
		try(Connection connection = connectToDB()){
			String query = "SELECT * FROM " + TMOVIE + ";";
			PreparedStatement prepareStatement = connection.prepareStatement(query);
			ResultSet rs = prepareStatement.executeQuery(); //ejecutar el query
			//Resulset nos ayuda iterar los datos
			
			while(rs.next()) {
				//Con next revisara tupla por tupla
				Movie movie = new Movie(
						rs.getString(TMOVIE_TITLE), 
						rs.getString(TMOVIE_GENRE), 
						rs.getString(TMOVIE_CREATOR), 
						Integer.valueOf(rs.getString(TMOVIE_DURATION)),
						Short.valueOf(rs.getString(TMOVIE_YEAR)));
				//con getString accedemos al nombre de la columna para traerlo
				movie.setId(Integer.valueOf(rs.getString(TMOVIE_ID)));
				movies.add(movie);
			}
			
			
		}catch(SQLException e) {
			
		}
		
		return movies;
	}
	
	//marcar que peliculas estan vistas y cuales no
	private boolean getMovieViewed() {
		return false;
	}
	
	//tambien puede convivir es un metodo abstracto
}
