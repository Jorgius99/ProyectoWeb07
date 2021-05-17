
<?php

$metodo = $_SERVER['REQUEST_METHOD'];

if($metodo ==='POST') {

    $Nombre = $_POST['Nombre'];
    $Apellido = $_POST['Apellido'];
    $correo = $_POST ['correo'];
    $motivo = $_POST ['motivo'];

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "proyectoweb007";

    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn){
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
    $sql = "INSERT INTO * FROM `contacto` WHERE `Nombre`='$Nombre' AND `Apellido`='$Apellido' AND `correo`='$correo' AND `motivo`='$motivo' ";
    $result = mysqli_query($conn, $sql);

}