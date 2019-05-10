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

import com.example.ids.finalproject.entities.Articulo;
import com.example.ids.finalproject.services.ArticuloService;



@RestController
@CrossOrigin
public class ArticuloRestController {
	
	@Autowired
	private ArticuloService service;
	
	@GetMapping("/api/articulos")
	public List<Articulo> consultaArticulo(){
		List<Articulo> articulos = service.consultaArticulo();
		System.out.println("Lista de Articulos " + articulos);
		return articulos;
	}
	
	@GetMapping("/api/articulos/{articuloId}")
	public Articulo consultaUsuario(@PathVariable(name="articuloId") Long articuloId) {
		Articulo articulo = service.consultaArticulo(articuloId);
		System.out.println("Articulo encontrado " + articulo);
		return articulo;
	}
	
	@PostMapping("/api/articulos")
	public void guardaArticulo(@RequestBody Articulo articulo) {
		service.guardaArticulo(articulo);
		System.out.println("Articulo guardado");
	}

	@DeleteMapping("/api/articulos/{articuloId}")
	public void borraArticulo(@PathVariable(name="articuloId") Long articuloId) {
		service.borraArticulo(articuloId);
		System.out.println("Articulo borrado : " + articuloId);
	}
	
	@PutMapping("/api/articulos/{articuloId}")
	public void actualizaArticulo(@RequestBody Articulo articulo,
			@PathVariable(name="articuloId")Long articuloId) {
		service.guardaArticulo(articulo);
		System.out.println("Articulo actualizado");
	}
}
