<?php
include './conexion.php';
$metodo = $_SERVER['REQUEST_METHOD'];
session_start();

if($metodo =='POST') {

    $coordenadaX = $_POST['coordenadaX_sensores'];
    $idParcela = $_POST['idParcela'];
    $coordenadaY = $_POST['coordenadaY_sensores'];


    $sql = "INSERT INTO `sensores`(`idParcela`, `idSensor`, `coordenadaX`, `coordenadaY`) VALUES ('$idParcela','','$coordenadaX','$coordenadaY')";


    if (mysqli_query($conn, $sql)) {
        echo "todo introducido con exito";
    } else {
        http_response_code(401);
        die();
    }
}