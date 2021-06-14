<?php
include("pdf2/tfpdf.php");
session_start();


  
    //referencia a la clase phpmailer
    use  PHPMailer \ PHPMailer \ PHPMailer ;
    use  PHPMailer \ PHPMailer \ Exception ;
    
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
    $mail -> setFrom ( 'registro.escom.webmx@gmail.com' , 'Adminnistración de ESCOM' );
    $mail -> addAddress ("kit_586@hotmail.es");     // Agrega un destinatario 

    // Contenido 
    $mail -> isHTML ( true );                                  // Establecer el formato de correo electrónico en HTML 
    $mail -> Subject = 'Registro de datos' ;
    $mail -> Body     = 'Bienvenido. Tu registro fue exitoso' ;
    
   $mail -> send();
   
} catch ( Exception  $e ) {
     echo  'No se pudo enviar el mensaje. Error de envío:', $mail-> ErrorInfo;
}

?>