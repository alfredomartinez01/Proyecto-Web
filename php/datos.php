<?php

use  PHPMailer\PHPMailer\PHPMailer;
use  PHPMailer\PHPMailer\SMTP;
use  PHPMailer\PHPMailer\Exception;
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
$conn = mysqli_connect('localhost', 'root', '', 'examen');
mysqli_set_charset($conn, "utf8"); // AQUI AGREGUE UTF-8

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else { // Si la conexión es correcta 

    //(curp, noBoleta, nombre, apPaterno, apMaterno, fechaNacimiento, genero, escProcedencia, entFedProced, nomEsc, promedio, escom, calleYNum, Colonia, codigoPostal, telefono, correoElect)    
    $sql = "INSERT INTO alumno VALUES('$CURP', '$nDeboleta', '$nombre', '$aPaterno', '$aMaterno', '$fNacimiento', '$genero', '$escuelaP', '$estado', '$otra', $promedio, '$opcion', '$callenum', '$colonia', $codigo, $telefono,'$email')";

    if (mysqli_query($conn, $sql)) { // Si se guarda correctamente
        //insertar Alumno en grupo 
        for ($i = 1; $i <= 20; $i++) { //el rango son el numero de grupos
            if ($i >= 1 && $i <= 12) {
                $gpo = "1CM" . $i;
            } else {
                $gpo = "1CV" . $i;
            };
            $sql = "SELECT * FROM examen WHERE grupo ='$gpo'";
            $resultado = mysqli_query($conn, $sql);
            $numFilas = mysqli_num_rows($resultado);
            //echo "Tenemos $numFilas en grupo $i  ";

            if ($numFilas < 26) {
                if ($i >= 1 && $i <= 6) {
                    $hora = "08:00";
                } else if ($i >= 7 && $i <= 12) {
                    $hora = "10:00";
                } else if ($i >= 13 && $i <= 18) {
                    $hora = "12:00";
                } else if ($i >= 19 && $i <= 24) {
                    $hora = "14:00";
                };
                $insertSql = "INSERT INTO examen (grupo, hora, curp) VALUES ('$gpo', '$hora', '$CURP' )";
                if (mysqli_query($conn, $insertSql)) {

                    //consultamos tabla Examen
                    $sql = "SELECT * FROM examen WHERE curp ='$CURP'";
                    $result = mysqli_query($conn, $sql);

                    if (mysqli_num_rows($result) > 0) {
                        // output data of each row
                        while ($row = mysqli_fetch_assoc($result)) {
                            $id = $row["examenID"];
                            $grupo = $row["grupo"];
                            $hora1 = $row["hora"];
                            $CurpExam = $row["curp"];
                        }
                    }

                    //Consultamos tabla grupo
                    $sql = "SELECT * FROM grupo WHERE grupo ='$grupo'";
                    $result = mysqli_query($conn, $sql);

                    if (mysqli_num_rows($result) > 0) {
                        // output data of each row
                        while ($row = mysqli_fetch_assoc($result)) {
                            $grupo2 = $row["grupo"];
                            $salon = $row["salon"];
                        }
                    }

                    // En este punto ya tenemos el grupo, salón y hora del alumno
                    //echo $grupo."\n";
                    //echo $salon."\n";
                    //echo $hora1."\n";

                    // Ahora imprimimos la página
                    mysqli_close($conn);

                    //iniciamos session
                    session_start();
                    $_SESSION["boleta"] = $nDeboleta;
                    $_SESSION["nombre"] = $nombre;
                    $_SESSION["paterno"] = $aPaterno;
                    $_SESSION["materno"] = $aMaterno;
                    $_SESSION["fnacimiento"] = $fNacimiento;
                    $_SESSION["gen"] = $genero;
                    $_SESSION["curp"] = $CURP;
                    $_SESSION["calle"] = $calle;
                    $_SESSION["numero"] = $numero;
                    $_SESSION["colonia"] = $colonia;
                    $_SESSION["cp"] = $codigo;
                    $_SESSION["tel"] = $telefono;
                    $_SESSION["correo"] = $email;
                    $_SESSION["proce"] = $escuelaP;
                    $_SESSION["proce2"] = $otra;
                    $_SESSION["estado"] = $estado;
                    $_SESSION["prom"] = $promedio;
                    $_SESSION["opc"] = $opcion;
                    $_SESSION["grupo"] = $grupo;
                    $_SESSION["hora"] = $hora;
                    $_SESSION["salon"] = $salon;

                    if ($origen == "alumno") {
                        echo '<head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Datos Guardados</title>
                            <link rel="stylesheet" href="../css/estilo.css">
                            <link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
                            <style type="text/css">
                            #mensaje{
                            color:#006797;
                            margin-bottom:70px;
                            }

                            p{
                                text-align: center; 
                                font-size: 30px;
                                margin-top:190px;
                            }

                            #mensaje #boton{
                                height: 40px;
                                width: 110px;
                                margin-right: 30px;
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
                                margin-bottom: 0px;
                                font-size: 20px;
                                text-decoration:none ;
                                background-color: #00669C;
                                padding: 10px;
                            }
                            
                            #mensaje a:hover{
                                
                                background-color: #7D0F3F;
                            }
                            footer{
                                margin: 0px;
                                position: fixed;
                                bottom: 0;
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
                                        <a href="../index.html" target="">Inicio</a>
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
                    } else { //Mandamos el correo  en caso de que el origen sea administrador
                        include("pdf2/tfpdf.php");

                        class PDF extends tFPDF
                        {
                            // Cabecera de página
                            function Header()
                            {
                                // Logo
                                $this->Image('../img/header.png', 0, 0, 210); //left, top, escala 
                                $this->SetX(66);
                                $this->SetFont('Helvetica', 'B', 20);
                                $this->SetTextColor(182, 182, 183);
                                $this->Cell(0, 70, 'DATOS DEL ALUMNO:');
                                $this->Ln(50);
                            }

                            // Pie de página
                            function Footer()
                            {
                                // Posición: a 1.5 cm del final
                                $this->Image('../img/footer_pdf.png', 0, 262, 210);
                                $this->SetY(-10);
                                // Arial italic 8
                                $this->SetFont('Helvetica', '', 9);
                                $this->SetTextColor(255, 255, 255);
                                // Número de página
                                $this->Cell(10, 10, 'Pagina ' . $this->PageNo() . '/{nb}', 0, 0, 'C');
                            }
                        }
                        // Creación del objeto de la clase heredada

                        $pdf = new PDF();
                        $pdf->AliasNbPages();
                        $pdf->AddPage();
                        $pdf->AddFont('DejaVu', '', 'DejaVuSansCondensed.ttf', true);
                        $pdf->SetFont('DejaVu', '', 12);
                        $pdf->Cell(0, 8, 'Número de boleta: ' . $nDeboleta, 0, 1);
                        $pdf->Cell(0, 8, 'Nombre: ' . $nombre, 0, 1);
                        $pdf->Cell(0, 8, 'Apellido Paterno: ' . $aPaterno, 0, 1);
                        $pdf->Cell(0, 8, 'Apellido Materno: ' . $aMaterno, 0, 1);
                        $pdf->Cell(0, 8, 'Fecha de Nacimiento: ' . $fNacimiento, 0, 1);
                        $pdf->Cell(0, 8, 'Género: ' . $genero, 0, 1);
                        $pdf->Cell(0, 8, 'CURP: ' . $CURP, 0, 1);
                        $pdf->SetX(95);
                        $pdf->Cell(0, 10, 'Dirección', 0, 1);
                        $pdf->Cell(0, 8, 'Calle y número: ' . $calle . '/' . $numero, 0, 1);
                        $pdf->Cell(0, 10, 'Colonia: ' . $colonia, 0, 1);
                        $pdf->Cell(0, 10, 'Código Postal: ' . $codigo, 0, 1);
                        $pdf->Cell(0, 10, 'Teléfono: ' . $telefono, 0, 1);
                        $pdf->Cell(0, 8, 'E-mail: ' . $email, 0, 1);
                        $pdf->SetX(93);
                        $pdf->Cell(0, 10, 'Procedencia', 0, 1);
                        $pdf->Cell(0, 8, 'Escuela de procedencia: ' . $escuelaP, 0, 1);
                        $pdf->Cell(0, 8, 'Escuela de procedencia: ' . $otra, 0, 1);
                        $pdf->Cell(0, 10, 'Estado de la República: ' . $estado, 0, 1);
                        $pdf->Cell(0, 8, 'Promedio: ' . $promedio, 0, 1);
                        $pdf->Cell(0, 10, 'Número de opción: ' . $opcion, 0, 1);
                        $pdf->SetX(97);
                        $pdf->Cell(0, 10, 'Examen', 0, 1);
                        $pdf->Cell(0, 10, 'Grupo: ' . $grupo, 0, 1);
                        $pdf->Cell(0, 10, 'Salón: LAB' . $salon . '               Hora: ' . $hora . ' Horas', 0, 1);
                        $doc = $pdf->Output('', 'S');

                         //referencia a la clase phpmailer
                        
                        require  'enviar/Exception.php' ;
                        require  'enviar/PHPMailer.php' ;
                        require  'enviar/SMTP.php' ;

                        $mail = new  PHPMailer ( true );
                        
                        try {
                            // Configuración del servidor 
                           $mail -> SMTPDebug = 0;                    // Habilita la salida de depuración detallada 
                           $mail -> isSMTP();                                            // Enviar usando SMTP 
                           $mail -> Host        = 'smtp.gmail.com';                     // Configure el servidor SMTP para enviar a través de 
                           $mail -> SMTPAuth    = true ;                                   // Habilita la autenticación SMTP 
                           $mail -> Username    = 'registro.escom.webmx@gmail.com' ;     // Nombre de usuario SMTP 
                           $mail -> Password    = 'W3b3sc0m' ;                               // Contraseña SMTP 
                           $mail -> SMTPSecure = 'tls';//PHPMailer :: ENCRYPTION_STARTTLS ;     // Habilite el cifrado TLS; Se recomienda `PHPMailer :: ENCRYPTION_SMTPS` 
                           $mail -> Port = 587;                              // Puerto TCP para conectarse, use 465 para `PHPMailer :: ENCRYPTION_SMTPS` arriba
                       
                           // Destinatarios 
                           $mail -> setFrom ( 'registro.escom.webmx@gmail.com' , 'Admin de ESCOM' );
                           $mail -> addAddress ($email);     // Agrega un destinatario 
                       
                           // Archivos adjuntos 
                           $mail -> AddStringAttachment ( $doc, 'registro.pdf');         // Agregar archivos adjuntos 
                       
                           // Contenido 
                           $mail -> isHTML ( true );                                  // Establecer el formato de correo electrónico en HTML 
                           $mail -> Subject = 'Registro de datos' ;
                           $mail -> Body     = 'Bienvenido. Tu registro fue exitoso' ;
                           
                          $mail -> send();                    
                          header("Location: ../administrador.html");
                       } catch ( Exception  $e ) {
                            echo  'No se pudo enviar el mensaje. Error de envío:', $mail-> ErrorInfo;
                       }
                    }
                } else {
                    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                }
                break;
            }
        }
    } else {
        echo'<script type="text/javascript">
        alert("Hubo un error al guardar tus datos, posiblemente el registro ya existe, intente de nuevo");
        window.history.back(-1);
        </script>';
    }
}
