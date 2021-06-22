<?php
//guardamos los datos obtenidos del formulario 
$nDeboleta = $_POST["nDeboleta"];
$nombre = $_POST["nombre"];
$aPaterno = $_POST["Apaterno"];
$aMaterno = $_POST["Amaterno"];
$fNacimiento = $_POST["Fnacimiento"];
$genero = $_POST["gen"];
$CURP = $_POST["CURP"];
$calle = $_POST["calle"];
$numero = $_POST["numero"];
$colonia = $_POST["colonia"];
$codigo = $_POST["codigo"];
$telefono = $_POST["tel"];
$email = $_POST["correo"];
$escuelaP = $_POST["EscuelaProcedencia"];
$otra = $_POST["NombreEscuela"];
$estado = $_POST["estado"];
$promedio = $_POST["Promedio"];
$opcion = $_POST["Opcion"];

$origen = $_POST["origen"];

$callenum = $calle . ' ' . $numero;

//iniciamos la conexion a la BD
$servername = 'localhost';
$username = 'root';
$password = '';
$db = 'examen';

// Create connection
$conn = mysqli_connect($servername, $username, $password, $db);
mysqli_set_charset($conn, "utf8"); // AQUI AGREGUE UTF-8

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else { // Si la conexión es correcta 

    //(curp, noBoleta, nombre, apPaterno, apMaterno, fechaNacimiento, genero, escProcedencia, entFedProced, nomEsc, promedio, escom, calleYNum, Colonia, codigoPostal, telefono, correoElect)    
    $sql = "UPDATE alumno set curp = '$CURP', noBoleta = $nDeboleta, nombre = '$nombre', apPaterno = '$aPaterno', apMaterno = '$aMaterno', fechaNacimiento = '$fNacimiento', genero = '$genero', escProcedencia = '$escuelaP', entFedProced = '$estado', nomEsc = '$otra', promedio = $promedio, escom = '$opcion', calleYNum = '$callenum', Colonia = '$colonia', codigoPostal = $codigo, telefono = $telefono, correoElect = '$email' where curp = '$CURP'";

    if (mysqli_query($conn, $sql)) { // Si se guarda correctamente
        echo "Registro actualizado correctamente. ";
        header("Location: ../administrador.html");
    } else {
        echo'<script type="text/javascript">
        alert("Hubo un error al guardar tus datos, posiblemente el registro ya existe, intente de nuevo");
        window.history.back(-1);
        </script>';
    }
}