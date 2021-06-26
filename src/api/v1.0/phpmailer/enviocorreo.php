<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';


$mail = new PHPMailer(true);

try {

    $nombre = $_POST["nombre_form"];
    $apellido = $_POST["apellido_form"];
    $email = $_POST["correo_form"];
    $mensaje = $_POST["motivo_form"];

    $body = "Nombre: " . $nombre ." <br> Apellido: " . $apellido ." <br> Email: " . $email . "<br> Mensaje: " . $mensaje;

    $mail->isSMTP();

    $mail->SMTPDebug = 2;

    $mail->Host = 'smtp.gmail.com';

    $mail->Port = 587;

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    $mail->SMTPAuth = true;

    $mail->Username ='grupogg07@gmail.com' ;

    $mail->Password =  'Grupo07GTI';


    $mail->setFrom('grupogg07@gmail.com',  $nombre);

    $mail->addAddress('grupogg07@gmail.com', 'CLIENTE');

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $nombre;
    $mail->Body    = $body;

    $mail->send();
    echo '<script>
        alert("Mensaje enviado con éxito");
        window.history.go(-1);
        </script>';

} catch (Exception $e) {
    echo "Ha habido un error. Mailer Error: {$mail->ErrorInfo}";
}