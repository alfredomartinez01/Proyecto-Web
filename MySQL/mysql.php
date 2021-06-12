<?php
	$conexion = mysqli_connect("localhost","root","","examen");
	
	function verAlumnos()
	{
		global $conexion;
		$sqlSelect = "SELECT * FROM alumno";
		$resSelect = mysqli_query($conexion,$sqlSelect);
		$datos = "<p>";
		while($filas = mysql_fetch_array($resSelest))
		{
			 $datos .="$filas[0] - $filas[1] $filas[2] $filas[3] $filas[4] <br>";	 
		}
		echo $datos;
	}
	
	//CREATE ALUMNO
	function insertarAlumno($curp, $boleta,$nombre,$apPaterno,$apMaterno,$fechaNacimiento,$genero,$escProdencia,$entFed,$nombEsc,$promedio,$escom,$numYCalle,$Col,$codPostal,$tel,$correo)
	{
		global $conexion;
		$sqlInsert = "INSERT INTO alumno VALUES('$curp','$boleta','$nombre', '$apPaterno', '$apMaterno', '$fechaNacimiento', '$genero', '$escProdencia', '$entFed', '$nombEsc', $promedio, '$escom', '$numYCalle', '$Col', $codPostal, $tel ,'$correo')"; 
		$resInsert = mysqli_query($conexion,$sqlInsert);
		$infInsert = mysqli_affected_rows($conexion);
		echo "Se insertaron %infInsert registro(s) a la tabla 'alumno'<br>";	
	}
	
	//READ ALUMNO
	
	function leerAlumno($curp)
	{
		$sqlSelect = "SELECT *FROM alumno WHERE curp='$curp'";
		$resSelect = mysqli_query($conexion, $sqlSelect);
		$infSelect = mysqli_num_rows($resSelect);
		echo "Se tienen $infSelect registro(s) a la tabla 'alumno'<br>";
	}	
	
	//UPDATE ALUMNO
	function actualizarAlumno($curp, $boleta,$nombre,$apPaterno,$apMaterno,$fechaNacimiento,$genero,$escProdencia,$entFed,$nombEsc,$promedio,$escom,$numYCalle,$Col,$codPostal,$tel,$correo)
	{
		$sqlUpdate = "UPDATE alumno SET noBoleta = '$boleta',nombre = '$nombre', apPaterno = '$apPaterno', apMaterno = '$apMaterno', fechaNacimiento = '$fechaNacimiento', genero='$genero', escProdecendia='$escProdencia',entFedProced='$entFed',nomEsc = '$nombEsc',promedio = $promedio, escom = '$escom', calleYNum = '$numYCalle', Colonia = '$Col',codigoPostal = $codPostal, telefono = $tel, correoElect = '$correo' WHERE curp='$curp'";
		$resUpdate = mysqli_query($conexion, $sqlUpdate);
		$infUpdate = mysqli_num_rows($resUpdate);
		echo "Se actualizaron $infUpdate registro(s) a la tabla 'alumno'<br>";
		
	}
	//DELETE ALUMNO
	function eliminarAlumno($curp)
	{
		$sqlDelete = "DELETE FROM alumno WHERE curp = '$curp'";
		$resDelete = mysqli_query($conexion, $sqlDelete);
		$infDelete = mysqli_num_rows($resDelete);
		echo "Se eliminaron $infDelete registro(s) a la tabla 'alumno'<br>";
	}	
	
	//CREATE ADMIN
	function insertarAdmin($usuario, $password)
	{
		global $conexion;
		$sqlInsert = "INSERT INTO admin VALUES('$usuario','$password')"; 
		$resInsert = mysqli_query($conexion,$sqlInsert);
		$infInsert = mysqli_affected_rows($conexion);
		echo "Se insertaron %infInsert registro(s) a la tabla 'admin'<br>";	
	}
	
	//READ ADMIN
	
	function leerAdmin($usuario)
	{
		$sqlSelect = "SELECT *FROM admin WHERE usuario='$usuario'";
		$resSelect = mysqli_query($conexion, $sqlSelect);
		$infSelect = mysqli_num_rows($resSelect);
		echo "Se tienen $infSelect registro(s) a la tabla 'admin'<br>";
	}	
	
	//UPDATE ADMIN
	function actualizarAdmin($password)
	{
		$sqlUpdate = "UPDATE admin SET password = '$password' WHERE usuario='$usuario'";
		$resUpdate = mysqli_query($conexion, $sqlUpdate);
		$infUpdate = mysqli_num_rows($resUpdate);
		echo "Se actualizaron $infUpdate registro(s) a la tabla 'admin'<br>";
		
	}
	//DELETE ADMIN
	function eliminarAdmin($curp)
	{
		$sqlDelete = "DELETE FROM admin WHERE usuario = '$usuario'";
		$resDelete = mysqli_query($conexion, $sqlDelete);
		$infDelete = mysqli_num_rows($resDelete);
		echo "Se eliminaron $infDelete registro(s) a la tabla 'admin'<br>";
	}
	
	
	//CREATE GRUPO
	function insertarGrupo($grupo, $salon)
	{
		global $conexion;
		$sqlInsert = "INSERT INTO grupo VALUES('$grupo','$salon')"; 
		$resInsert = mysqli_query($conexion,$sqlInsert);
		$infInsert = mysqli_affected_rows($conexion);
		echo "Se insertaron %infInsert registro(s) a la tabla 'grupo'<br>";	
	}
	
	//READ GRUPO
	
	function leerGrupo($grupo)
	{
		$sqlSelect = "SELECT *FROM grupo WHERE grupo='$grupo'";
		$resSelect = mysqli_query($conexion, $sqlSelect);
		$infSelect = mysqli_num_rows($resSelect);
		echo "Se tienen $infSelect registro(s) a la tabla 'grupo'<br>";
	}	
	
	//UPDATE GRUPO
	function actualizarGrupo($grupo,$salon)
	{
		$sqlUpdate = "UPDATE grupo SET salon = '$salon' WHERE grupo='$grupo'";
		$resUpdate = mysqli_query($conexion, $sqlUpdate);
		$infUpdate = mysqli_num_rows($resUpdate);
		echo "Se actualizaron $infUpdate registro(s) a la tabla 'grupo'<br>";
		
	}
	//DELETE GRUPO
	function eliminarGrupo($grupo)
	{
		$sqlDelete = "DELETE FROM grupo WHERE grupo = '$grupo'";
		$resDelete = mysqli_query($conexion, $sqlDelete);
		$infDelete = mysqli_num_rows($resDelete);
		echo "Se eliminaron $infDelete registro(s) a la tabla 'grupo'<br>";
	}	
	
	
	//CREATE EXAMEN
	function insertarExamen($idEx, $grupo, $curp)
	{
		global $conexion;
		$sqlInsert = "INSERT INTO examen VALUES($idEx, '$grupo','$curp')"; 
		$resInsert = mysqli_query($conexion,$sqlInsert);
		$infInsert = mysqli_affected_rows($conexion);
		echo "Se insertaron %infInsert registro(s) a la tabla 'examen'<br>";	
	}
	
	//READ EXAMEN
	
	function leerExamen($idEx)
	{
		$sqlSelect = "SELECT *FROM examen WHERE examenID=$idEx";
		$resSelect = mysqli_query($conexion, $sqlSelect);
		$infSelect = mysqli_num_rows($resSelect);
		echo "Se tienen $infSelect registro(s) a la tabla 'examen'<br>";
	}	
	
	//UPDATE EXAMEN
	function actualizarExamen($idEx,$grupo,$curp)
	{
		$sqlUpdate = "UPDATE examen SET grupo = '$grupo',curp = '$curp', WHERE examenID=$idEx";
		$resUpdate = mysqli_query($conexion, $sqlUpdate);
		$infUpdate = mysqli_num_rows($resUpdate);
		echo "Se actualizaron $infUpdate registro(s) a la tabla 'examen'<br>";
		
	}
	//DELETE EXAMEN
	function eliminarExamen($idEx)
	{
		$sqlDelete = "DELETE FROM examen WHERE examenID = $idEx";
		$resDelete = mysqli_query($conexion, $sqlDelete);
		$infDelete = mysqli_num_rows($resDelete);
		echo "Se eliminaron $infDelete registro(s) a la tabla 'examen'<br>";
	}	
	
		
	?>
	