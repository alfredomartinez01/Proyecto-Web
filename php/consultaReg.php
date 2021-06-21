<?php
//guardamos los datos obtenidos de la consulta

	$CURP =$_POST["CURP"];
  	
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

//hacemos consulta en BD

//consultamos tabla Examen
$sql = "SELECT * FROM examen WHERE curp ='$CURP'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
$id=$row["examenID"];
$grupo=$row["grupo"];
$hora=substr($row["hora"], 0,5);
$CurpExam=$row["curp"];
  }

}
//Consultamos tabla grupo
$sql = "SELECT * FROM grupo WHERE grupo ='$grupo'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
$grupo2=$row["grupo"];
$salon=$row["salon"];
  }

}


//Consultamos tabla alumno
$sql = "SELECT * FROM alumno where curp='$CURP'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
$curp2=$row["curp"];
$nDeboleta=$row["noBoleta"];
$nombre=$row["nombre"];
$aPaterno=$row["apPaterno"];
$aMaterno=$row["apMaterno"];
$fNacimiento=substr($row["fechaNacimiento"],0,11);
$genero=$row["genero"];
$escuelaP=$row["escProcedencia"];
$estado=$row["entFedProced"];
$otra=$row["nomEsc"];
$promedio=$row["promedio"];
$opcion=$row["escom"]; 
$calle=$row["calleYNum"];
$colonia=$row["Colonia"];
$codigo=$row["codigoPostal"];
$telefono=$row["telefono"];
$email=$row["correoElect"];
  }
} else {
    echo'<script type="text/javascript">
    alert("Lo sentimo :( hubo un error al consultar tus datos, intente de nuevo");
    window.location.href="../consultar-registro.html";
    </script>';
}
	 mysqli_close($conn);
// SE GENERA PDF
     include("pdf2/tfpdf.php");
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
         $pdf->Cell(0,8,'CURP: '.$curp2,0,1);
         $pdf->SetX(95);
         $pdf->Cell(0,10,'Dirección',0,1);
         $pdf->Cell(0,8,'Calle y número: '.$calle ,0,1);
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
         $pdf->Output('I', 'registro.pdf');
     



?>