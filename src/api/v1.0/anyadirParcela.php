<?php
include './conexion.php';
$metodo = $_SERVER['REQUEST_METHOD'];
session_start();




if($metodo =='POST'){

    $coordenadaX = $_POST['coordenadaX_parcela'];
    $idUsuario = $_POST['Usuario_parcela'];
    $coordenadaY = $_POST['coordenadaY_parcela'];

    //$sql1 = "SELECT * FROM `login` WHERE `usuario`=$idUsuario";
    $sql2 = "INSERT INTO `parcela`(`idParcela`,`idUsuario`, `coordenadaX`, `coordenadaY`) VALUES ('','$idUsuario','$coordenadaX','$coordenadaY')";



    if (mysqli_query($conn, $sql2)) {

        echo "todo introducido con exito";

    } else {
        http_response_code(401);
        die($sql2);
    }
}
