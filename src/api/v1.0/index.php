<?php

$metodo = $_SERVER['REQUEST_METHOD'];


if($metodo ==='POST') {

    $nombre = $_POST['nombre'];
    $contrasenya = $_POST['contrasenya'];
    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "pruebapagweb";
    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn) {
        die("Error: " . mysqli_connect_error());
    }
    $sql = "SELECT * FROM `usuarios` WHERE `nombre` = '$nombre' and `contrasenya` = '$contrasenya'";
    $result = mysqli_query($conn, $sql);//

    if (mysqli_num_rows($result) > 0) {
        while ($fila = mysqli_fetch_assoc($result)) {

            $respuesta = [];
            $respuesta["id"] = $fila ["id"];
            $respuesta["nombre"] = $fila ["nombre"];
            $respuesta["rol"] = $fila ["rol"];

            $_SESSION["id"] = $fila["id"];
            $_SESSION["nombre"] = $fila["nombre"];
            $_SESSION["rol"] = $fila["rol"];

            header('Content-Type: application/json;');
            echo json_encode($respuesta);

        }
    } else {
        http_response_code(401);
        die();
    }
}

