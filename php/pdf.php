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
    $pdf->Cell(0,8,'Nombre: '.$nombre, 0,1);
    $pdf->Cell(0,8,'Apellido Paterno: ' .$aPaterno ,0,1);
    $pdf->Cell(0,8,'Apellido Materno: '.$aMaterno,0,1);
    $pdf->Cell(0,8,'Fecha de Nacimiento: '.$fNacimiento,0,1);
    $pdf->Cell(0,8,'Género: '.$genero,0,1);
    $pdf->Cell(0,8,'CURP: '.$CURP,0,1);
    $pdf->SetX(95);
    $pdf->Cell(0,10,'Dirección',0,1);
    $pdf->Cell(0,8,'Calle: '.$calle,0,1);
    $pdf->Cell(0,10,'Número: ' .$numero,0,1);
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
    $pdf->Output('I', 'registro.pdf');

    echo'<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos enviados</title>
    <link rel="stylesheet" href="estilo.css">
    <link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon">
    </head>
    <body>
    </body>
    </html>';
?>