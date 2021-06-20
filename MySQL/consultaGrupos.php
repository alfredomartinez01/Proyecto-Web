<?php
//CONEXION
	$conexion = mysqli_connect("localhost","root","061998","examenModificado");
	
	// FUNCION PARA MOSTRAR TODOS LOS ALUMNOS CON SU GRUPO, HORA, SALON
	function mostrarTodosAlumnos()
	{
		$sqlSelect = "select a.noBoleta, a.nombre, a.apPaterno, a.apMaterno, b.grupo, b.hora, c.salon from alumno a, examen b, grupo c where a.curp = b.curp and b.grupo = c.grupo";
		$resSelect = mysqli_query($conexion, $sqlSelect);
		$infSelect = mysqli_num_rows($resSelect);
		echo "Se tienen $infSelect registro(s) a la tabla 'alumno'<br>";
	}
	
	//FUNCION PARA MOSTRAR UN ALUMNO EN ESPECIFICO CON SU NOMBRE, GRUPO, HORA, SALON
	
	function mostrarAlumno($curp)
	{
		$sqlSelect = "select a.noBoleta, a.nombre, a.apPaterno, a.apMaterno, b.grupo, b.hora, c.salon from alumno a, examen b, grupo c where a.curp = b.curp and b.grupo = c.grupo and a.curp=$curp";
		$resSelect = mysqli_query($conexion, $sqlSelect);
		$infSelect = mysqli_num_rows($resSelect);
		echo "Se tienen $infSelect registro(s) a la tabla 'alumno'<br>";
	}
	
	
	//FUNCION PARA MOSTRAR TODOS LOS ALUMNOS DE UN ESPECIFICO EXAMEN CON SU NOMBRE, GRUPO, HORA, SALON
	
	function mostrarExamen($examenId)
	{
		$sqlSelect = "select a.noBoleta, a.nombre, a.apPaterno, a.apMaterno, b.grupo, b.hora, c.salon from alumno a, examen b, grupo c where a.curp = b.curp and b.grupo = c.grupo and b.examenID=$examenID";
		$resSelect = mysqli_query($conexion, $sqlSelect);
		$infSelect = mysqli_num_rows($resSelect);
		echo "Se tienen $infSelect registro(s) a la tabla 'alumno'<br>";
	}
	
	
	//FUNCION PARA MOSTRAR TODOS ALUMNOS CON SU NOMBRE, HORA, SALON DE UN GRUPO 
	
	function mostrarExamenesdeGrupo($grupo)
	{
		$sqlSelect = "select a.noBoleta, a.nombre, a.apPaterno, a.apMaterno, b.grupo, b.hora, c.salon from alumno a, examen b, grupo c where a.curp = b.curp and b.grupo = c.grupo and c.grupo= $grupo";
		$resSelect = mysqli_query($conexion, $sqlSelect);
		$infSelect = mysqli_num_rows($resSelect);
		echo "Se tienen $infSelect registro(s) a la tabla 'alumno'<br>";
	}
?>