package com.example.ids.myappis.services;


import java.util.List;

import com.example.ids.myappis.entities.Alumno;

public interface AlumnoService {
    List<Alumno> consultaAlumno();
    Alumno consultaAlumno(Long alumnoId);
    void guardaAlumno(Alumno alumno);
    void borraAlumno(Long alumnoId);
    void actualizaAlumno(Alumno alumno);

}