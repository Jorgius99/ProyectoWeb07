<?php

$metodo = $_SERVER['REQUEST_METHOD'];

session_start();

if($metodo ==='POST') {

    $nombre = $_POST['nombre'];
    $contrasenya = $_POST['contrasenya'];


    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "proyectoweb007";
    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
    $sql = "SELECT * FROM `login` WHERE `usuario`='$nombre' AND `contrasenya`='$contrasenya'";
    $result = mysqli_query($conn, $sql);//

    if (mysqli_num_rows($result) > 0) {
        while ($fila = mysqli_fetch_assoc($result)) {

            $respuesta = [];
            $respuesta["id"] = $fila ["id"];
            $respuesta["rol"] = $fila ["rol"];
            $respuesta["usuario"] = $fila ["usuario"];
            $respuesta["contrasenya"] = $fila ["contrasenya"];

            $_SESSION["id"] = $fila["id"];
            $_SESSION["usuario"] = $fila["usuario"];
            $_SESSION["rol"] = $fila["rol"];
            $_SESSION["nombre"] = $fila["nombre"];

            header('Content-Type: application/json;');
            echo json_encode($respuesta);

        }

    } else {
        http_response_code(401);
        die();
    }
}