<?php
include './conexion.php';
$metodo = $_SERVER['REQUEST_METHOD'];

$idParcela = $_GET['$parcela'];

if($metodo ==='GET') {


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
