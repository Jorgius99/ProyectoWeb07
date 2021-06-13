<?php
$metodo = $_SERVER['REQUEST_METHOD'];
session_start();

if($metodo =='POST') {

    $coordenadaX = $_POST['coordenadaX_sensores'];
    $idParcela = $_POST['idParcela'];
    $coordenadaY = $_POST['coordenadaY_sensores'];

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "proyectoweb007";


    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
    $sql = "INSERT INTO `sensores`(`idParcela`, `idSensor`, `coordenadaX`, `coordenadaY`) VALUES ('$idParcela','','$coordenadaX','$coordenadaY')";
    $result = mysqli_query($conn, $sql);//

    if (mysqli_num_rows($result) > 0) {
        echo "todo introducido con exito";
    } else {
        http_response_code(401);
        die();
    }
}