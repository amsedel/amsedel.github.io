package com.ids.dledesma.platziweb.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ServletLogin
 */
@WebServlet(description = "Servlet para manipular la peticion de Login", urlPatterns = { "/abc123" })
public class ServletLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public ServletLogin() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		//procesar peticiones
		String usuario = request.getParameter("usuario"); //recibimos la info que llega
		String empresa = request.getParameter("empresa");
		PrintWriter escritor = response.getWriter(); //hacemos un escritor
		if(usuario !=null && empresa !=null) {
			if(empresa.equals("ids")) {
				escritor.println("Bienvenido a ids");
			}else {
				escritor.println("Bienvenido");
			}
		}else {
				escritor.println("Usuario incorrecto");
		}
		
		escritor.close();//cerramos escritor
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
