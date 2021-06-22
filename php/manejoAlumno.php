<?php
$tipo = $_POST['tipo'];
$operacion = $_POST['operacion'];
$conexion = mysqli_connect('localhost', 'root', '', 'examen');
mysqli_set_charset($conexion,"utf8"); // AQUI AGREGUE UTF-8

$resSelect;
$alumnos = array();

switch ($tipo) {
    case 'boleta':
        if($operacion == 'buscar'){
            buscarBoleta($_POST['boleta']);
            getAlumnosData();
        } else if($operacion == 'actualizar'){
            actualizaDatos($_POST['boleta'], $_POST['correo'], $_POST['telefono']);
        } else if ($operacion == 'select'){
            seleccionarAlumno($_POST['boleta']);
        } else{
            eliminaPorBoleta($_POST['boleta']);
        }
        break;
    case 'curp':
        if($operacion == 'buscar'){
            buscarCurp($_POST['curp']);
            getAlumnosData();
        }  else{
            eliminaPorCurp($_POST['curp']);
        }
        break;
    case 'grupo':
        if($operacion == 'buscar'){
            buscarGrupo($_POST['grupo']);
            getAlumnosData();
        } else{
            eliminaPorGrupo($_POST['grupo']);
        }
        break;
    case 'hora':
        if($operacion == 'buscar'){
            buscarHora($_POST['hora']);
            getAlumnosData();
        }  else{
            eliminaPorHora($_POST['hora']);
        }
        break;
    case 'todo':
        if($operacion == 'buscar'){
            buscarTodo();
            getAlumnosData();
        }else{
            eliminaTodo();
        }
        break;
    mysqli_close($conexion);
}


function buscarBoleta($boleta)
{
    // Hacemos el query y comprobamos
    global $resSelect;
    global $conexion;

    $sqlSelect = "SELECT * FROM alumno where noBoleta='$boleta'";
    $resSelect = mysqli_query($conexion, $sqlSelect);
}

function seleccionarAlumno($boleta){
    global $resSelect;
    global $conexion;
    global $alumnos;

    $sqlSelect = "SELECT * FROM alumno where noBoleta=$boleta";
    $resSelect = mysqli_query($conexion, $sqlSelect);

    $alumno = array();
    $indice = 0;

    while ($row = $resSelect->fetch_assoc()) {        
        $alumno['boleta'] = $row['noBoleta'];
        $alumno['curp'] = $row['curp'];
        $alumno['nombre']= $row['nombre'];
        $alumno['apPaterno']= $row['apPaterno'];
        $alumno['apMaterno'] = $row['apMaterno'];
        $alumno['fechaNac'] = $row['fechaNacimiento'];
        $alumno['genero'] = $row['genero'];
        $alumno['escProcedencia'] = $row['escProcedencia'];
        $alumno['entFedProcedencia'] = $row['entFedProced'];
        $alumno['nomEsc'] = $row['nomEsc'];
        $alumno['promedio'] = $row['promedio'];
        $alumno['escom'] = $row['escom'];
        $alumno['calleYNum'] = $row['calleYNum'];
        $alumno['colonia'] = $row['Colonia'];
        $alumno['codigoPostal'] = $row['codigoPostal'];
        $alumno['telefono'] = $row['telefono'];
        $alumno['correoElect'] = $row['correoElect'];
        array_push($alumnos, $alumno);
        
        $indice++;
    }
    $json = json_encode($alumnos, JSON_UNESCAPED_UNICODE);
    print_r($json);
}

function actualizaDatos($boleta, $correo, $telefono){
    // Hacemos el query y comprobamos
    global $resSelect;
    global $conexion;

    $sqlUpdate = "UPDATE alumno set correoElect = '$correo', telefono = '$telefono' where noBoleta='$boleta'";
    $resUpdate = mysqli_query($conexion, $sqlUpdate);
    echo $resUpdate;
}
function eliminaPorBoleta($boleta){
    // Hacemos el query y comprobamos
    global $conexion;
    $sqlDetele =  "DELETE FROM alumno WHERE noBoleta= '$boleta'";
    $resDelete = mysqli_query($conexion, $sqlDetele);
    echo $resDelete;   
}

function buscarCurp($curp){
    // Hacemos el query y comprobamos
    global $resSelect;
    global $conexion;

    $sqlSelect = "SELECT * FROM alumno where curp='$curp'";
    $resSelect = mysqli_query($conexion, $sqlSelect);
}
function eliminaPorCurp($curp){
    // Hacemos el query y comprobamos
    global $conexion;
    $sqlDetele =  "DELETE FROM alumno WHERE curp = '$curp'";
    $resDelete = mysqli_query($conexion, $sqlDetele);
    echo $resDelete;      
}
function buscarGrupo($grupo){
    // Hacemos el query y comprobamos
    global $resSelect;
    global $conexion;
   
    $sqlSelect =  "SELECT * FROM alumno WHERE curp = (select curp from examen where grupo = '$grupo')";
    $resSelect = mysqli_query($conexion, $sqlSelect);
}
function eliminaPorGrupo($grupo){
    // Hacemos el query y comprobamos
    global $conexion;
    $sqlDetele =  "DELETE FROM alumno WHERE curp = (select curp from examen where grupo = '$grupo')";
    $resDelete = mysqli_query($conexion, $sqlDetele);
    echo $resDelete;  
}
function buscarHora($hora){
    // Hacemos el query y comprobamos
    global $resSelect;
    global $conexion;

    $sqlSelect =  "SELECT * FROM alumno WHERE curp = (select curp from examen where hora = '$hora')";
    $resSelect = mysqli_query($conexion, $sqlSelect);
}
function eliminaPorhora($hora){
    // Hacemos el query y comprobamos
    global $conexion;
    $sqlDetele =  "DELETE FROM alumno WHERE curp = (select curp from examen where hora = '$hora')";
    $resDelete = mysqli_query($conexion, $sqlDetele);
    echo $resDelete;    
}
function buscarTodo(){
    // Hacemos el query y comprobamos
    global $resSelect;
    global $conexion;

    $sqlSelect = "SELECT * FROM alumno";
    $resSelect = mysqli_query($conexion, $sqlSelect);
}
function eliminaTodo(){
    // Hacemos el query y comprobamos
    global $conexion;
    $sqlDetele =  "DELETE FROM ALUMNO";
    $resDelete = mysqli_query($conexion, $sqlDetele);
    echo $resDelete;
}

// Lectura de datos
function getAlumnosData()
{
    global $conexion;
    global $alumnos;
    global $resSelect;
    $alumno = array();
    $indice = 0;

    while ($row = $resSelect->fetch_assoc()) {
        
        $alumno['boleta'] = $row['noBoleta'];
        $alumno['curp'] = $row['curp'];
        $nombre = $row['nombre'];
        $paterno = $row['apPaterno'];
        $materno = $row['apMaterno'];
        $nombre = "$nombre $paterno $materno";
        $alumno['nombre'] = $nombre;
        $alumno['fechaNac'] = $row['fechaNacimiento'];
        $alumno['telefono'] = $row['telefono'];
        $alumno['correoElect'] = $row['correoElect'];

        /* Ejecutando query para hora y grupo */
        $curp = $row['curp'];
        $sqlSelectExamen = "SELECT * FROM examen where curp='$curp'";
        $resExamen = mysqli_query($conexion, $sqlSelectExamen);
        while ($examen = $resExamen->fetch_assoc()) {
            $alumno['grupo'] = $examen['grupo'];
            $alumno['hora'] = $examen['hora'];
        }
        $alumno['escProcedencia'] = $row['escProcedencia'];
        $alumno['entFedProcedencia'] = $row['entFedProced'];
        array_push($alumnos, $alumno);
        
        $indice++;
    }
       
    $json = json_encode($alumnos, JSON_UNESCAPED_UNICODE);
    print_r($json);
    
}
