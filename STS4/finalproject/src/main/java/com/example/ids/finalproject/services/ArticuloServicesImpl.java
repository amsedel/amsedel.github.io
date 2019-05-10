package com.example.ids.finalproject.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ids.finalproject.entities.Articulo;
import com.example.ids.finalproject.repositories.ArticuloRepository;




@Service
public class ArticuloServicesImpl implements ArticuloService {

	@Autowired
	private ArticuloRepository repository;
	
	@Override
	public List<Articulo> consultaArticulo(){
		return repository.findAll();
	}
	
	public Articulo consultaArticulo(Long articuloId) {
		Optional<Articulo> articulo = repository.findById(articuloId);
		if(articulo.isPresent()) {
			return articulo.get();
		}
		return new Articulo();
	}
	
	@Override
	public void guardaArticulo(Articulo articulo) {
		// TODO Auto-generated method stub
		repository.save(articulo);
	}
	
	@Override
	public void borraArticulo(Long articuloId) {
		// TODO Auto-generated method stub
		repository.deleteById(articuloId);
	}
	
	@Override
	public void actualizaArticulo(Articulo articulo) {
		// TODO Auto-generated method stub
		repository.save(articulo);
	}
}
