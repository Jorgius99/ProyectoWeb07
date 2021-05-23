
<?php

$metodo = $_SERVER['REQUEST_METHOD'];
session_start();

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

    $sql = "INSERT INTO `contacto` (`Nombre`, `Apellido`, `correo`, `motivo`) VALUES ('$Nombre' ,'$Apellido', '$correo','$motivo' )";
    $result = mysqli_query($conn, $sql);//

    if (mysqli_num_rows($result) > 0) {
        echo "Formulario rellenado de forma correcta";
    } else {
        http_response_code(401);
        die();
    }
}

