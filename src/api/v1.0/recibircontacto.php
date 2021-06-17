<?php
include './conexion.php';
$metodo = $_SERVER['REQUEST_METHOD'];
if ($metodo == 'GET') {

    $sql = "SELECT * FROM `contacto`";
    $result = mysqli_query($conn, $sql);
    $resultado = array();
    $i = 0;
    while ($fila = mysqli_fetch_array($result)) {
        $respuesta = [];
        $respuesta["nombre"] = $fila ["Nombre"];
        $respuesta["apellido"] = $fila ["Apellido"];
        $respuesta["correo"] = $fila ["correo"];
        $respuesta["motivo"] = $fila ["motivo"];
        $resultado[$i] = $respuesta;
        $i++;

    }
    echo json_encode($resultado);


}
