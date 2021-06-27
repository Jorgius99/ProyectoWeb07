<?php
//Importar las clases PHPMailer necesarias en el espacio global
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$mail = new PHPMailer(true);
try {
    //Definir las variables
//-------------------------------------------------
    $nombre = $_POST["nombre_form"];
    $apellido = $_POST["apellido_form"];
    $email = $_POST["correo_form"];
    $mensaje = $_POST["motivo_form"];
    $body = "Nombre: " . $nombre ." <br> Apellido: " . $apellido ." <br> Email: " . $email . "<br> Mensaje: " . $mensaje;
//-------------------------------------------------
    $mail->isSMTP();
    //Habilitar mensajes de SMTP
    //SMTP::DEBUG_OFF = off (para uso en producción)
    //SMTP::DEBUG_CLIENT = mensajes del cliente
    //SMTP::DEBUG_SERVER = mensajes del cliente y del servidor
    $mail->SMTPDebug = 2;
    //Servidor de correo
    $mail->Host = 'smtp.gmail.com';
    //Puerto – 25 para SMTP simple / 465 para SMTP sobre SSL / 587 para SMTP sobre TSL
    $mail->Port = 587;
    //Mecanismo de encriptado - STARTTLS o SMTPS
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    //Autentificación y opciones SMTP
    $mail->SMTPAuth = true;
    //Usuario para la autentificación SMTP – usar la dirección completa para gmail
    $mail->Username ='grupogg07@gmail.com' ;
    //Contraseña para la autentificación SMTP
    $mail->Password =  'Grupo07GTI';
    //Remitente del correo – no tiene por que ser la cuenta usada en el servidor
    //pero puede dar problemas con filtros de spam
    $mail->setFrom('grupogg07@gmail.com',  $nombre, $apellido );
    //Dirección de destino del mensaje
    $mail->addAddress('grupogg07@gmail.com');
    //Contentenido del mensaje
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $email;
    $mail->Body    = $body;

    $mail->send();
    echo '<script>
        alert("EL MENSAJE SE HA ENVIADO CON ÉXITO");
        window.history.go(-1);
        </script>';
} catch (Exception $e) {
    echo "NO SE HA PODIDO ENVIAR EL MENSAJE. ERROR: {$mail->ErrorInfo}";
}
