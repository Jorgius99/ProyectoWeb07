<?php
include './conexion.php';
$metodo = $_SERVER['REQUEST_METHOD'];

session_start();

//$idSensor=$_SESSION["idsensor"];
//$medicion=array();
/*
$tempe = $_GET['$temp'];
$hume = $_GET['$hum'];
$sali = $_GET['$sal'];
$lumi = $_GET['$lum'];
*/
$id=$_POST["idsensor"];
$temp = $_POST["temperatura"];
$hum = $_POST["humedad"];
$sal = $_POST["salinidad"];
$lum = $_POST["luminosidad"];
$fecha = $_POST["fecha"];
$hora = $_POST["hora"];

if ($metodo === 'POST') {



    $sql = "INSERT INTO `mediciones` (`idSensor`, `idMedicion`, `temperatura`, `humedad`, `salinidad`, `luminosidad`,`hora`,`fecha`) VALUES ('$id', NULL ,'$temp','$hum','$sal','$lum','$hora','$fecha')";

    if (mysqli_query($conn, $sql)) {

        echo "Formulario rellenado de forma correcta";

    } else {
        http_response_code(401);
        die();
    }

}