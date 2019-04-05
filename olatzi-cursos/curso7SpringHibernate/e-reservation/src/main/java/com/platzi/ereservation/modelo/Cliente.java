/**
 * 
 */
package com.platzi.ereservation.modelo;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import lombok.Data;

/**
 * Clase que representa la clase cliente
 * @author idscomercial
 *
 */

@Data
@Entity
@Table(name = "cliente") 

public class Cliente {
	
	@Id
	@GeneratedValue (generator="system-uuid")
	@GenericGenerator (name= "system-uuid", strategy="uuid2")
	private String idCli;
	private String nombreCli;
	private String apellidoCli;
	private String identificacionCli;
	private String direccionCli;
	private String telefonoCli;
	private String emailCli;
	
	@OneToMany(mappedBy = "cliente") //mapeo debe ser bidireccional
	private Set<Reserva> reservas;
	
	public Cliente() {
		// TODO Auto-generated constructor stub
	}
	
	
}
