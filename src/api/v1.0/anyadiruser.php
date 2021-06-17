<?php
include './conexion.php';
$metodo = $_SERVER['REQUEST_METHOD'];
session_start();

if($metodo =='POST') {

    $usuario = $_POST['usuario'];
    $contrasenya = $_POST['contrasenya'];
    $nombre = $_POST['nombre'];
    $madre = $_POST['madre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $dni = $_POST['dni'];


    $sql = "INSERT INTO `login`(`id`, `usuario`, `contrasenya`, `rol`, `nombre`,`madre`, `telefono`, `correo`, `DNI/NIF`) VALUES ('','$usuario','$contrasenya',1,'$nombre','$madre','$telefono','$correo','$dni')";

    if (mysqli_query($conn, $sql)) {

        echo "Formulario rellenado de forma correcta";

    } else {
        http_response_code(401);
        die();
    }
}
