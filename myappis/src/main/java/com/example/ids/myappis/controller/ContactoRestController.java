package com.example.ids.myappis.controller;

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

import com.example.ids.myappis.entities.Contacto;
import com.example.ids.myappis.services.ContactoService;

/**
 * Clase que rrepresenta nuestro servicio web de contacto que expone las operaciones de service
 * Utilizamos RequestMapping para que pueda ser utilozado por otras aplicaciones, se escribe una url a través de la cual recibimos peticiones 
 * @author idscomercial
 *
 */
@RestController
@CrossOrigin
public class ContactoRestController {

	
	@Autowired
	private ContactoService service;
	
	@GetMapping("/api/contactos")
	public List<Contacto> consultaContacto(){
		List<Contacto> contactos = service.consultaContacto();
		System.out.println("Lista de Contactos " + contactos);
		return contactos;
	}
	
	@GetMapping("/api/contactos/{contactoId}")
	public Contacto consultaContacto(@PathVariable(name="contactoId") Long contactoId) {
		Contacto contacto = service.consultaContacto(contactoId);
		System.out.println("Contacto encontrado " + contacto);
		return contacto;
	}
	
	@PostMapping("/api/contactos")
	public void guardaContacto(@RequestBody Contacto contacto) {
		service.guardaContacto(contacto);
		System.out.println("Contacto guardado");
	}
	
	@DeleteMapping("/api/contactos/{contactoId}")
	public void borraContacto(@PathVariable(name="contactoId") Long contactoId) {
		service.borraContacto(contactoId);
		System.out.println("Contacto borrado : " + contactoId);
	}
	
	@PutMapping("/api/contactos/{contactoId}")
	public void actualizaContacto(@RequestBody Contacto contacto,
			@PathVariable(name="contactoId")Long contactoId) {
		service.guardaContacto(contacto);
		System.out.println("Contacto actualizado");
	}
	
}
