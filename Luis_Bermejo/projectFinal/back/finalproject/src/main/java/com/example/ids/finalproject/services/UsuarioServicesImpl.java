package com.example.ids.finalproject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.example.ids.finalproject.entities.Usuario;
import com.example.ids.finalproject.repositories.UsuarioRepository;


@Service
public class UsuarioServicesImpl implements UsuarioService{
	
	@Autowired
	private UsuarioRepository repository;
	
	@Override
	public List<Usuario> consultaUsuario(){
		return repository.findAll();
	}
	
	public Usuario consultaUsuario(Long usuarioId) {
	Optional<Usuario> usuario = repository.findById(usuarioId);
	if(usuario.isPresent()) {
		return usuario.get();
	}
	return new Usuario();
	}
	
	@Override
	public void guardaUsuario(Usuario usuario) {
		// TODO Auto-generated method stub
		repository.save(usuario);
		
	}
	
	@Override
	public void borraUsuario(Long usuarioId) {
		// TODO Auto-generated method stub
		repository.deleteById(usuarioId);
	}
	
	@Override
	public void actualizaUsuario(Usuario usuario) {
		// TODO Auto-generated method stub
		repository.save(usuario);
	}
}
