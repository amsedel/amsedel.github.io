package com.example.ids.myappis.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.example.ids.myappis.entities.Contacto;
import com.example.ids.myappis.repositories.ContactoRepository;

@Service
public class ContactoServicesImpl implements ContactoService{

	
	
	@Autowired 
	private ContactoRepository repository;
	
	
	
	@Override
	public List<Contacto> consultaContacto(){
		return repository.findAll();
	}
	
	public Contacto consultaContacto(Long contactoId) {
		Optional<Contacto> contacto = repository.findById(contactoId);
		if(contacto.isPresent()) {
			return contacto.get();
		}
		return new Contacto();
	}
	
	@Override
	public void guardaContacto(Contacto contacto) {
		// TODO Auto-generated method stub
		repository.save(contacto);
		
	}
	
	@Override
	public void borraContacto(Long contactoId) {
		// TODO Auto-generated method stub
		repository.deleteById(contactoId);
	}
	
	@Override
	public void actualizaContacto(Contacto contacto) {
		// TODO Auto-generated method stub
		repository.save(contacto);
	}
	
}
