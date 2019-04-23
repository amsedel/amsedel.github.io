<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Calculadora</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<style type="text/css">
		tbody>tr>td:hover{
			background-color: #e5e5e5; 
		}
		.container{
			margin-top: 25vh;
		}
	</style>
</head>
<body>

	<div class="container">
		<div class="row justify-content-center">
			<div class="col-sm-3">
					<table cellspacing="0"class="table table-bordered table-Light ">
						<thead>
							<tr>
								<th colspan="4" id="inputOutput" class="btn-secondary text-right display-4">0</th>
							</tr>
						</thead>
						<tbody class="text-center">
							<tr>
								<td id="ac" onclick="reset();" >AC</td>
								<td id="negPos" onclick="getValue('+/-'); " >+/-</td>
								<td id="porcentaje" onclick="getValue('%');" >%</td>
								<td id="divide" onclick="getValue('/');" class="btn-warning text-white">÷</td>
							</tr>
							<tr>
								<td id="siete" onclick="viewValue('7');" >7</td>
								<td id="ocho" onclick="viewValue('8');" >8</td>
								<td id="nueve" onclick="viewValue('9');" >9</td>
								<td id="multiplica" onclick="getValue('*');" class="btn-warning text-white ">×</td>
							</tr>
							<tr>
								<td id="cuatro" onclick="viewValue('4');" >4</td>
								<td id="cinco" onclick="viewValue('5');" >5</td>
								<td id="seis" onclick="viewValue('6');" >6</td>
								<td id="resta" onclick="getValue('-');" class="btn-warning text-white " >-</td>
							</tr>
							<tr>
								<td id="uno" onclick="viewValue('1');" >1</td>
								<td id="dos" onclick="viewValue('2');" >2</td>
								<td id="tres" onclick="viewValue('3');" >3</td>
								<td id="suma" onclick="getValue('+');" class="btn-warning text-white ">+</td>
							</tr>
							<tr>
								<td colspan="2" id="cero" onclick="viewValue('0');" >0</td>
								<td id="punto" onclick="viewValue('.');" > . </td>
								<td id="resultado" onclick="getValue2('resultado');" class="btn-warning text-white " >=</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
	</div>

	<script src="funcionalidad.js"></script>

</body>
</html>