<?php
$metodo = $_SERVER['REQUEST_METHOD'];

session_start();
$idUser=$_SESSION["id"];
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
$sql = "SELECT * FROM `parcela` WHERE `idUsuario`='$idUser'";
$result = mysqli_query($conn, $sql);//
    $resultado=array();
    $i=0;
while ($fila = mysqli_fetch_array($result)) {

$respuesta = [];
$respuesta["idParcela"] = $fila ["idParcela"];
$respuesta["coordenadaX"] = $fila ["coordenadaX"];
$respuesta["coordenadaY"] = $fila ["coordenadaY"];
$resultado[$i]=$respuesta;
$i++;

}
    echo json_encode($resultado);

}