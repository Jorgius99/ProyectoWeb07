<?php
include './conexion.php';
$metodo = $_SERVER['REQUEST_METHOD'];

session_start();
$idUser = $_SESSION["id"];

if ($metodo === 'GET') {


    $sql = "SELECT * FROM `parcela` WHERE `idUsuario`='$idUser'";
    $result = mysqli_query($conn, $sql);//
    $resultado = array();
    $i = 0;
    while ($fila = mysqli_fetch_array($result)) {

        $respuesta = [];
        $respuesta["idParcela"] = $fila ["idParcela"];
        $respuesta["coordenadaX"] = $fila ["coordenadaX"];
        $respuesta["coordenadaY"] = $fila ["coordenadaY"];
        $resultado[$i] = $respuesta;
        $i++;
    }
    echo json_encode($resultado);


}