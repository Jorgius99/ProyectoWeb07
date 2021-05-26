<?php
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
$temp = $_POST["temperatura"];
$hum = $_POST["humedad"];
$sal = $_POST["salinidad"];
$lum = $_POST["luminosidad"];
if ($metodo === 'POST') {



    //$medicion = json_decode($_GET['medicion']);



    /*
    $hum=$_POST['humedad'];
    $sal=$_POST['salinidad'];
    $lum=$_POST['luminosidad'];
    */

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "proyectoweb007";
    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
    $sql = "INSERT INTO `mediciones` (`idSensor`, `idMedicion`, `temperatura`, `humedad`, `salinidad`, `luminosidad`) VALUES (6, NULL ,'$temp','$hum','$sal','$lum')";
    $result = mysqli_query($conn, $sql);


}