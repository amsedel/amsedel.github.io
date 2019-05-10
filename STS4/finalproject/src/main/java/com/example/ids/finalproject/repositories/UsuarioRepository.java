package com.example.ids.finalproject.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.ids.finalproject.entities.Usuario;

public interface UsuarioRepository 
extends JpaRepository<Usuario, Long>{

}
