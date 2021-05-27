<?php
$metodo = $_SERVER['REQUEST_METHOD'];
$id=$_GET['sensor'];
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
    $sql = "SELECT * FROM `mediciones` WHERE `idSensor`='$id'";
    $result = mysqli_query($conn, $sql);
    $resultado=array();
    $i=0;
    while ($fila = mysqli_fetch_array($result)) {
        $respuesta = [];
        $respuesta["temperatura"] = $fila ["temperatura"];
        $respuesta["humedad"] = $fila ["humedad"];
        $respuesta["salinidad"] = $fila ["salinidad"];
        $respuesta["luminosidad"] = $fila ["luminosidad"];
        $resultado[$i]=$respuesta;
        $i++;

    }
    echo json_encode($resultado);



}
