<?php
session_start();
$metodo = $_SERVER['REQUEST_METHOD'];

$idParcela=$_SESSION["Parcelas"].["idParcela"];

if($metodo ==='GET') {

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "proyectoweb007";
    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
    $sql = "SELECT * FROM `sensores` WHERE `idParcela`='$idParcela'";
    $result = mysqli_query($conn, $sql);//
    $resultado=array();
    $i=0;
    while ($fila = mysqli_fetch_array($result)) {

        $respuesta = [];
        $respuesta["idSensor"] = $fila ["idSensor"];
        $respuesta["coordenadaX"] = $fila ["coordenadaX"];
        $respuesta["coordenadaY"] = $fila ["coordenadaY"];
        $resultado[$i]=$respuesta;
        $i++;

    }
    echo json_encode($resultado);

}
