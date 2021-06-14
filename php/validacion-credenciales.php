<?php
/* Aquí irá la validacion con PHP*/
validarCredenciales();
function validarCredenciales()
{
    $usuario = $_POST["usuario"];
    $password = $_POST["contrasena"];
    $respuesta = 0;
    // Conectamos a la base de datos
    $conexion = mysqli_connect("localhost", "root", "", "examen");

    // Hacemos el query y comprobamos
    $sqlSelect = "SELECT password FROM admin where usuario='$usuario'";
    $resSelect = mysqli_query($conexion, $sqlSelect);
    $row = $resSelect->fetch_assoc();

    if (mysqli_num_rows($resSelect) > 0) {
        if ($row["password"] == $password) {
            session_start();
            $respuesta = 0; // Credenciales correctas
            echo $respuesta;
        } else {
            $respuesta = -1; // Contrasena incorrecta
            echo $respuesta;
        }
    } else {
        $respuesta = -2; // Usuario incorrecto
        echo $respuesta;
    }
    $conexion->close();
}