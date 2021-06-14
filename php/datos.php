<?php
//guardamos los datos obtenidos del formulario 
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

    $callenum=$calle.' '.$numero;
   // echo $callenum;
//iniciamos la conexion a la BD
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db="examen";
    // Create connection
    $conn = mysqli_connect("localhost", "root", "", "examen");
    $conn->set_charset("utf8");
    // Check connection
   if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    }
    /*echo "Connected successfully";*/

	  $sql = "INSERT INTO alumno VALUES('$CURP', '$nDeboleta', '$nombre', '$aPaterno', '$aMaterno', '$fNacimiento', '$genero', '$escuelaP', '$estado', '$otra', $promedio, '$opcion', '$callenum', '$colonia', $codigo, $telefono, '$email')";
	//(curp, noBoleta, nombre, apPaterno, apMaterno, fechaNacimiento, genero, escProcedencia, entFedProced, nomEsc, promedio, escom, calleYNum, Colonia, codigoPostal, telefono, correoElect)
	 if (mysqli_query($conn, $sql)) {
	  //echo "New record created successfully";
	  } else {
        echo'<script type="text/javascript">
        alert("Hubo un error al guardar tus datos, posiblemente el registro ya existe, intente de nuevo");
        window.location.href="../formulario.html";
        </script>';
	  }
	 mysqli_close($conn);
//iniciamos session
      session_start();
    $_SESSION["boleta"]=$nDeboleta;
    $_SESSION["nombre"]=$nombre;
    $_SESSION["paterno"]= $aPaterno;
    $_SESSION["materno"]=$aMaterno;
    $_SESSION["fnacimiento"]=$fNacimiento;
    $_SESSION["gen"]=$genero;
    $_SESSION["curp"]=$CURP;
    $_SESSION["calle"]=$calle;
    $_SESSION["numero"]=$numero;
    $_SESSION["colonia"]=$colonia;
    $_SESSION["cp"]=$codigo;
    $_SESSION["tel"]=$telefono;
    $_SESSION["correo"]=$email;
    $_SESSION["proce"]=$escuelaP;
    $_SESSION["proce2"]=$otra;
    $_SESSION["estado"]=$estado;
    $_SESSION["prom"]=$promedio;
    $_SESSION["opc"]=$opcion; 
        
    echo'<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Datos Guardados</title>
        <link rel="stylesheet" href="../css/estilo.css">
        <link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
        <style type="text/css">
        #mensaje{
        margin-top:150px;
        margin-botton:100px;
        color:#006797;
        }

         p{
            text-align: center; 
            font-size: 30px;
            margin-top:250px;
        }

        #mensaje #boton{
            height: 40px;
            width: 110px;
            margin-right: 30px;
            margin-top:150px;
            margin-bottom: 100px;
            background-color: #00669C;
            color: white;
            border-radius: 10px;
            cursor: pointer;
            font-size: 15px;
            border: 0px;
        
        }
        
        #mensaje a{
            display:block;
            height: auto;
            width: 180px;
            text-align: center; 
            color: #fff;
            border-radius: 10px;
            margin:auto;
            margin-top:50px;
            margin-bottom: 100px;
            font-size: 20px;
            text-decoration:none ;
            background-color: #00669C;
            padding: 10px;
        }
        
        #mensaje a:hover{
            
            background-color: #7D0F3F;
        }

        </style>


        </head>
    
        <body>
        <header>
            <div class="contenedor">
                <img class="escom" src="../img/logo_escom.png">
                <h1> Escuela Superior de C&oacute;mputo </h1>
                <img class="ipn" src="../img/logo_ipn.png">
            
                <nav> 
                    <a href="../main.html" target="">Inicio</a>
                </nav>
        
            </div>
        </header>
    
       
        <main>
        <div class="contenedor">
        <div id="mensaje">
        <p>Tus datos se gurdaron correctamente</p>
        <a href="pdf.php" target="_blank"> Generar pdf</a>
        <a href="enviar.php" target="_blank"> Enviar por correo </a>
        </div>

        </div>

        </main>
    
        <footer>
            <div class="contenedor">
                <div class="redes">
                    <a class="icon-face" target="_blank" href="https://www.facebook.com/escomipnmx/"><img src="../img/fb.png"  alt="link facebook"></a>
                    <a class="icon-twitter" target="_blank" href="https://twitter.com/escomunidad"><img src="../img/twitt.png" alt="link twitter"></a>
                </div>
            </div>
        </footer>
    
    
        </body>
    </html>';
?>