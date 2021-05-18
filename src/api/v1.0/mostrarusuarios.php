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
    $sql = "SELECT * FROM `login`";
    $result = mysqli_query($conn, $sql);
    while ($fila = mysqli_fetch_assoc($result)) {
        $respuesta = [];
        $respuesta["nombre"] = $fila ["nombre"];
        $respuesta["correo"] = $fila ["correo"];
        $respuesta["telefono"] = $fila ["telefono"];
        $respuesta["DNI/NIF"] = $fila ["DNI/NIF"];
        echo json_encode($respuesta);
        echo " ";
    }
    //echo json_encode($respuesta);

}

