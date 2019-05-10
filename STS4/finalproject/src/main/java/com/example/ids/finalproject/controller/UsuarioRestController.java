package com.example.ids.finalproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.ids.finalproject.entities.Usuario;
import com.example.ids.finalproject.services.UsuarioService;

@RestController
@CrossOrigin
public class UsuarioRestController {
	
	@Autowired
	private UsuarioService service;
	
	@GetMapping("/api/usuarios")
	public List<Usuario> consultaUsuario(){
		List<Usuario> usuarios = service.consultaUsuario();
		System.out.println("Lista de Usuarios " + usuarios);
		return usuarios;
	}
	
	@GetMapping("/api/usuarios/{usuarioId}")
	public Usuario consultaUsuario(@PathVariable(name="usuarioId") Long usuarioId) {
		Usuario usuario = service.consultaUsuario(usuarioId);
		System.out.println("Usuario encontrado " + usuario);
		return usuario;
	}
	
	@PostMapping("/api/usuarios")
	public void guardaUsuario(@RequestBody Usuario usuario) {
		service.guardaUsuario(usuario);
		System.out.println("Usuario guardado");
	}
	
	@DeleteMapping("/api/usuarios/{usuarioId}")
	public void borraUsuario(@PathVariable(name="usuarioId") Long usuarioId) {
		service.borraUsuario(usuarioId);
		System.out.println("Usuario borrado : " + usuarioId);
	}
	
	@PutMapping("/api/usuarios/{usuarioId}")
	public void actualizaUsuario(@RequestBody Usuario usuario,
			@PathVariable(name="usuarioId")Long usuarioId) {
		service.guardaUsuario(usuario);
		System.out.println("Usuario actualizado");
	}

}
