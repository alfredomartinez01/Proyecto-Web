<?php
	$nDeboleta= $_POST["nDeboleta"];
    $nombre= $_POST["nombre"];
    $aPaterno=$_POST["Apaterno"];
    $aMaterno=$_POST["Amaterno"];
	$fNacimiento =$_POST["Fnacimiento"];
	$genero =$_POST["gen"];
	$CURP =$_POST["CURP"];
	$calle =$_POST["calle"];
	$numero =$_POST["numero"];
	$colonia =$_POST["colonia"];
	$codigo =$_POST["codigo"];
	$telefono =$_POST["tel"];
	$email =$_POST["correo"];
	$escuelaP =$_POST["EscuelaProcedencia"];
	$otra=$_POST["NombreEscuela"];
	$estado =$_POST["estado"];
	$promedio =$_POST["Promedio"];
	$opcion =$_POST["Opcion"];


$servername = "localhost";
$username = "root";
$password = "";
$db="datosweb";

// Create connection
$conn = new mysqli($servername, $username, "", $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

	$sql = "INSERT INTO alumno VALUES ($nDeboleta, '$nombre', '$aPaterno', '$aMaterno', '$fNacimiento', '$genero', '$CURP', '$calle', $numero, '$colonia', $codigo,
	'$telefono', '$email', '$escuelaP', '$otra', '$estado', $promedio, '$opcion' )";
	
	if ($conn->query($sql) === TRUE) {
	  echo "New record created successfully";
	} else {
	  echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$conn->close();

	echo "Hola $nombre $aPaterno";
?>