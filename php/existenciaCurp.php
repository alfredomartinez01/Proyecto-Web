<?php
    curpExistente();
    function curpExistente(){
        $curp = $_POST["CURP"];
        $respuesta = true;
        // Conectamos a la base de datos
        $conexion = mysqli_connect("localhost", "root", "root", "examen");

        // Hacemos el query y comprobamos
        $sqlSelect = "SELECT curp FROM alumno where curp='$curp'";
        $resSelect = mysqli_query($conexion, $sqlSelect);
        $row = $resSelect->fetch_assoc();

        if (mysqli_num_rows($resSelect) > 0) {
            if ($row["curp"] == $curp) {
                $respuesta = true; // El curp ya existe
                echo $respuesta;
            } 
        } 
        else {
            $respuesta = false; // No se ha registrado ese curp antes
            echo $respuesta;
        }
        $conexion->close();
    }
?>