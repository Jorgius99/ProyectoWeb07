<?php
include './conexion.php';
$metodo = $_SERVER['REQUEST_METHOD'];
if ($metodo == 'GET') {


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
        $respuesta["id"] = $fila ["id"];
            $resultado[$i]=$respuesta;
            $i++;

    }
    echo json_encode($resultado);



}

