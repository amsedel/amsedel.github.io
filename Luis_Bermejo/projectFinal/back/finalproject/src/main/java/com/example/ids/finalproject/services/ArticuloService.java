package com.example.ids.finalproject.services;

import java.util.List;

import com.example.ids.finalproject.entities.Articulo;

public interface ArticuloService {
	List<Articulo> consultaArticulo();
	Articulo consultaArticulo(Long articuloId);
	void guardaArticulo(Articulo articulo);
	void borraArticulo(Long articuloId);
	void actualizaArticulo(Articulo articulo);
}
