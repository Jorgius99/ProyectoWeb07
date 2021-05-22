<?php

$metodo = $_SERVER['REQUEST_METHOD'];
session_start();

if($metodo =='POST') {

    $usuario = $_POST['usuario'];
    $contrasenya = $_POST['contrasenya'];
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $dni = $_POST['dni'];


    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "proyectoweb007";
    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
    $sql = "INSERT INTO `login`(`id`, `usuario`, `contrasenya`, `rol`, `nombre`, `telefono`, `correo`, `DNI/NIF`) VALUES ('','$usuario','$contrasenya',1,'$nombre','$telefono','$correo','$dni')";
    $result = mysqli_query($conn, $sql);//

    if (mysqli_num_rows($result) > 0) {

        echo "todo introducido con exito";

    } else {
        http_response_code(401);
        die();
    }
}
