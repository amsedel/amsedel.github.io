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

import com.example.ids.myappis.entities.Alumno;
import com.example.ids.myappis.services.AlumnoService;

@RestController
@CrossOrigin
public class AlumnoRestController {

	
	@Autowired
	private AlumnoService service;
	
	@GetMapping("/api/alumnos")
	public List<Alumno> consultaAlumno(){
		List<Alumno> alumnos = service.consultaAlumno();
		System.out.println("Lista de Alumnos " + alumnos);
		return alumnos;
	}
	
	@GetMapping("/api/alumnos/{alumnoId}")
	public Alumno consultaAlumno(@PathVariable(name="alumnoId") Long alumnoId) {
		Alumno alumno = service.consultaAlumno(alumnoId);
		System.out.println("Alumno encontrado " + alumno);
		return alumno;
	}
	
	@PostMapping("/api/alumnos")
	public void guardaAlumno(@RequestBody Alumno alumno) {
		service.guardaAlumno(alumno);
		System.out.println("Alumno guardado");
	}
	
	@DeleteMapping("/api/alumnos/{alumnoId}")
	public void borraAlumno(@PathVariable(name="alumnoId") Long alumnoId) {
		service.borraAlumno(alumnoId);
		System.out.println("Alumno borrado : " + alumnoId);
	}
	
	@PutMapping("/api/alumnos/{alumnoId}")
	public void actualizaAlumno(@RequestBody Alumno alumno,
			@PathVariable(name="alumnoId")Long alumnoId) {
		service.guardaAlumno(alumno);
		System.out.println("Alumno actualizado");
	}
}
