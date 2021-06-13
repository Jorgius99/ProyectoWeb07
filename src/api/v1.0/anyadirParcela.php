<?php
$metodo = $_SERVER['REQUEST_METHOD'];
session_start();

if($metodo =='POST'){

    $coordenadaX = $_POST['coordenadaX_parcela'];
    $idUsuario = $_POST['Usuario_parcela'];
    $coordenadaY = $_POST['coordenadaY_parcela'];

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "proyectoweb007";


    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
    $sql1 = "SELECT * FROM `login` WHERE `usuario`=$idUsuario";
    $sql2 = "INSERT INTO `parcela`(`idParcela`,`idUsuario`, `coordenadaX`, `coordenadaY`) VALUES ('','$idUsuario','$coordenadaX','$coordenadaY')";
    $result = mysqli_query($conn, $sql2);//

    if (mysqli_num_rows($result) > 0) {

        echo "todo introducido con exito";

    } else {
        http_response_code(401);
        die();
    }
}
