package com.example.ids.myappis.repositories;
import com.example.ids.myappis.entities.*;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Definir las operaciones de la base de datos relacionadas con el clienteo contacto
 * @author idscomercial
 *
 */

public interface ContactoRepository 
extends JpaRepository<Contacto, Long> {

}
