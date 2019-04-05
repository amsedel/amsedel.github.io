<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%--variable de Inicializacion --%>
<% int i = 0; %>
<form action = "./abc123" method = "get">

<%--Comentario jsp --%>

<table>
<tr>
<td><label>Usuario: </label></td>
<td><input type="text" name="usuario"></td>
<td><label>Clave: </label></td>
<td><input type="password" name="password"></td>
<td><label>Empresa: </label></td>
<td><input type="text" name="empresa"></td>
</tr>
<tr><td><input type = "submit" value="Enviar"></td></tr>
</table>


<%--Codificar un bloque de codigo, <% %> se conocen como scripteps --%>
<% for(i=0; i<10; i++){%>
<label>Hola <%=i %> </label>
<%--Concatenamos con = --%>
<%} %>

</form>
</body>
</html>