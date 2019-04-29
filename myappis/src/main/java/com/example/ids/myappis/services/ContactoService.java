package com.example.ids.myappis.services;
import com.example.ids.myappis.entities.*;
import java.util.List;

public interface ContactoService {
	List<Contacto> consultaContacto();
	Contacto consultaContacto(Long contactoId );
	void guardaContacto(Contacto contacto);
	void borraContacto(Long contactoId);
	void actualizaContacto(Contacto contacto);

}
