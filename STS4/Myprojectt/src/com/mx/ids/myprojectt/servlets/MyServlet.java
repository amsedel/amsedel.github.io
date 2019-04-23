package com.mx.ids.myprojectt.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 
 * @author idscomercial
 *
 */

@WebServlet("/MyHelloServlet")

public class MyServlet extends HttpServlet {
	
	
	private static final long serialVersionUID = 1L;
	
	@Override
	protected void doGet(HttpServletRequest req,
			HttpServletResponse resp)
				throws ServletException, IOException{
		
		resp.setContentType("text/html");
		
		PrintWriter output = resp.getWriter();
		output.println("<HTML>");
		output.println("<body>");
		output.println("<h3>HELLO !! FROM MY SERVLET !! </h3>");
		output.println("<hr>");
		output.println("<h3>Location :  ");
		output.println(req.getRequestURL());
		output.println("</h3> ");
		output.println("</body>");
		output.println("</HTML>");
		
	}
	
	@Override	
	protected void doPost(HttpServletRequest req,
			HttpServletResponse resp)
					throws ServletException, IOException{
		doGet(req,resp);
	}
	
	}
	
	


