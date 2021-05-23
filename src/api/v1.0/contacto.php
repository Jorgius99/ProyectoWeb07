<?php

$metodo = $_SERVER['REQUEST_METHOD'];
$serverNombre = "localhost";
$userNombre = "root";
$password = "";
$dbNombre = "proyectoweb007";
$conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);

if ($metodo == 'POST') {

    $Nombre = $_POST['nombre'];
    $Apellido = $_POST['apellido'];
    $correo = $_POST['correo'];
    $motivo = $_POST['motivo'];


    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }

    $sql = "INSERT INTO `contacto` (`idPeticiones`, `Nombre`, `Apellido`, `correo`, `motivo`) VALUES (NULL, '$Nombre', '$Apellido', '$correo', '$motivo');";
    $result = mysqli_query($conn, $sql);//

    if (mysqli_num_rows($result) > 0) {

        echo "Formulario rellenado de forma correcta";

    } else {
        http_response_code(401);
        die();
    }
}

