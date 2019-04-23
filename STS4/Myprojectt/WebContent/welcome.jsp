<%@ page import="java.util.Calendar"%>
<%@ page import="java.util.Date"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>Hoy es : 
<%=new Date() %>
</h1>
<hr>
<section>
<%Calendar ahora = Calendar.getInstance();
int hora = ahora.get(Calendar.HOUR_OF_DAY);
%>
<b>Hola mundo <i>
<%if(hora>20 || hora <6 ){ %>
buenas noches
<% } else if (hora>= 6 && hora <=12){%>
buenos dias
<% } else {%>
buenas tardes
<%} %>
</i></b>
<hr>
<h3>Location : 
	<%=request.getRequestURL() %> ...
</h3>
</section>

</body>
</html>