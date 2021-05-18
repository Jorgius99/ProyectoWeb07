<?php
$metodo = $_SERVER['REQUEST_METHOD'];

session_start();

if($metodo ==='POST') {

$coordenadaX = $_POST['coordenadaX'];
$coordenadaY = $_POST['coordenadaY'];


$serverNombre = "localhost";
$userNombre = "root";
$password = "";
$dbNombre = "proyectoweb007";
$conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
if (!$conn) {
http_response_code(500);
die("Error: " . mysqli_connect_error());
}
$sql = "SELECT * FROM `parcela` WHERE `coordenadaX`='$coordenadaX' AND `coordenadaY`='$coordenadaY'";
$result = mysqli_query($conn, $sql);//

if (mysqli_num_rows($result) > 0) {
while ($fila = mysqli_fetch_assoc($result)) {

$respuesta = [];
$respuesta["idParcela"] = $fila ["idParcela"];
$respuesta["idUsuario"] = $fila ["idUsuario"];
$respuesta["coordenadaX"] = $fila ["coordenadaX"];
$respuesta["coordenadaY"] = $fila ["coordenadaY"];


$_SESSION["idParcela"] = $fila["idParcela"];
$_SESSION["idUsuario"] = $fila["idUsuario"];
$_SESSION["coordenadaX"] = $fila["coordenadaX"];
$_SESSION["coordenadaY"] = $fila["coordenadaY"];

header('Content-Type: application/json;');
echo json_encode($respuesta);

}

} else {
http_response_code(401);
die();
}
}