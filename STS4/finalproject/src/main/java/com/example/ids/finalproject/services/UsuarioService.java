package com.example.ids.finalproject.services;

import java.util.List;
import com.example.ids.finalproject.entities.Usuario;

public interface UsuarioService {
	List<Usuario> consultaUsuario();
	Usuario consultaUsuario(Long usuarioId);
	void guardaUsuario(Usuario usuario);
	void borraUsuario(Long usuarioId);
	void actualizaUsuario(Usuario usuario);
}
