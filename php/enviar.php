<?php
include("pdf2/tfpdf.php");
session_start();
$nDeboleta=$_SESSION["boleta"];
$nombre=$_SESSION["nombre"];
$aPaterno=$_SESSION["paterno"];
$aMaterno=$_SESSION["materno"];
$fNacimiento=$_SESSION["fnacimiento"];
$genero=$_SESSION["gen"];
$CURP=$_SESSION["curp"];
$calle=$_SESSION["calle"];
$numero=$_SESSION["numero"];
$colonia=$_SESSION["colonia"];
$codigo=$_SESSION["cp"];
$telefono=$_SESSION["tel"];
$email=$_SESSION["correo"];
$escuelaP=$_SESSION["proce"];
$otra=$_SESSION["proce2"];
$estado=$_SESSION["estado"];
$promedio=$_SESSION["prom"];
$opcion=$_SESSION["opc"]; 
$grupo=$_SESSION["grupo"];
$hora=$_SESSION["hora"]; 
$salon=$_SESSION["salon"];


class PDF extends tFPDF
{
      // Cabecera de página
      function Header()
      {
          // Logo
          $this->Image('../img/header.png',0,0,210); //left, top, escala 
          $this->SetX(66);
          $this->SetFont('Helvetica','B',20);
          $this->SetTextColor(182,182,183);
          $this->Cell(0,70,'DATOS DEL ALUMNO:');
          $this->Ln(50);
      }

      // Pie de página
      function Footer()
      {
          // Posición: a 1.5 cm del final
          $this->Image('../img/footer_pdf.png',0,262,210);
          $this->SetY(-10);
          // Arial italic 8
          $this->SetFont('Helvetica','',9);
          $this->SetTextColor(255,255,255);
          // Número de página
          $this->Cell(10,10,'Pagina '.$this->PageNo().'/{nb}',0,0,'C');
      }
  }

  // Creación del objeto de la clase heredada
  
  $pdf = new PDF();
  $pdf->AliasNbPages();
  $pdf->AddPage();
  $pdf->AddFont('DejaVu','','DejaVuSansCondensed.ttf',true);
  $pdf->SetFont('DejaVu','',12);
    $pdf->Cell(0,8,'Número de boleta: '.$nDeboleta,0,1);
    $pdf->Cell(0,8,'Nombre: '.$nombre, 0,1);
    $pdf->Cell(0,8,'Apellido Paterno: ' .$aPaterno ,0,1);
    $pdf->Cell(0,8,'Apellido Materno: '.$aMaterno,0,1);
    $pdf->Cell(0,8,'Fecha de Nacimiento: '.$fNacimiento,0,1);
    $pdf->Cell(0,8,'Género: '.$genero,0,1);
    $pdf->Cell(0,8,'CURP: '.$CURP,0,1);
    $pdf->SetX(95);
    $pdf->Cell(0,10,'Dirección',0,1);
    $pdf->Cell(0,8,'Calle y número: '.$calle.'/'.$numero,0,1);
    $pdf->Cell(0,10,'Colonia: ' .$colonia,0,1);
    $pdf->Cell(0,10,'Código Postal: ' .$codigo,0,1);
    $pdf->Cell(0,10,'Teléfono: ' .$telefono,0,1);
    $pdf->Cell(0,8,'E-mail: '.$email,0,1);
    $pdf->SetX(93);
    $pdf->Cell(0,10,'Procedencia',0,1);
    $pdf->Cell(0,8,'Escuela de procedencia: '.$escuelaP,0,1);
    $pdf->Cell(0,8,'Escuela de procedencia: '.$otra,0,1);
    $pdf->Cell(0,10,'Estado de la República: ' .$estado,0,1);
    $pdf->Cell(0,8,'Promedio: '.$promedio,0,1);
    $pdf->Cell(0,10,'Número de opción: ' .$opcion,0,1);
    $pdf->SetX(97);
    $pdf->Cell(0,10,'Examen',0,1);
    $pdf->Cell(0,10,'Grupo: ' .$grupo,0,1);
    $pdf->Cell(0,10,'Salón: LAB'.$salon.'               Hora: '.$hora.' Horas',0,1);
    $doc=$pdf->Output('', 'S');

    
    //referencia a la clase phpmailer
    use  PHPMailer\PHPMailer\PHPMailer;
    use  PHPMailer\PHPMailer\SMTP;
    use  PHPMailer\PHPMailer\Exception;
    
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

  
   echo'<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Datos enviados</title>
        <link rel="stylesheet" href="../css/estilo.css">
        <link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
        <style type="text/css">

         #mensaje{
        margin-top:150px;
        margin-botton:200px;
        color:#006797;
        }

         p{
            text-align: center; 
            font-size: 30px;
            margin-top:200px;
        }

         #mensaje #boton{
            height: 40px;
            width: 110px;
            margin-right: 30px;
            margin-top:100px;
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

        #envia{
            margin-top:700px;
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
        <p>Tus datos se enviaron correctamente</p>
        
        </div>

        </div>

        </main>
    
        <footer id="envia">
            <div class="contenedor">
                <div class="redes">
                    <a class="icon-face" target="_blank" href="https://www.facebook.com/escomipnmx/"><img src="../img/fb.png"  alt="link facebook"></a>
                    <a class="icon-twitter" target="_blank" href="https://twitter.com/escomunidad"><img src="../img/twitt.png" alt="link twitter"></a>
                </div>
            </div>
        </footer>
        
    
        </body>
    </html>';
   
} catch ( Exception  $e ) {
     echo  'No se pudo enviar el mensaje. Error de envío:', $mail-> ErrorInfo;
}





?>