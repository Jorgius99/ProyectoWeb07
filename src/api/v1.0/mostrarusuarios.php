<?php
$metodo = $_SERVER['REQUEST_METHOD'];
if ($metodo == 'GET') {

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "proyectoweb007";


    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
    $sql = "SELECT * FROM `login` WHERE `rol`='usuario'";
    $result = mysqli_query($conn, $sql);
    $resultado=array();
    $i=0;
    while ($fila = mysqli_fetch_array($result)) {
        $respuesta = [];
        $respuesta["nombre"] = $fila ["nombre"];
        $respuesta["correo"] = $fila ["correo"];
        $respuesta["telefono"] = $fila ["telefono"];
        $respuesta["DNI"] = $fila ["DNI/NIF"];
            $resultado[$i]=$respuesta;
            $i++;

    }
    echo json_encode($resultado);



}

