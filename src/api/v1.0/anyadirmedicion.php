<?php
$metodo = $_SERVER['REQUEST_METHOD'];

session_start();

<<<<<<< HEAD
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
if ($metodo === 'POST') {

=======
$idSensor=$_SESSION["idsensor"];
if ($metodo === 'POST') {
$temp=$_POST['temperatura'];
$hum=$_POST['humedad'];
$sal=$_POST['salinidad'];
$lum=$_POST['luminosidad'];
>>>>>>> develop

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "proyectoweb007";
    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
<<<<<<< HEAD
    $sql = "INSERT INTO `mediciones` (`idSensor`, `idMedicion`, `temperatura`, `humedad`, `salinidad`, `luminosidad`) VALUES ('$id', NULL ,'$temp','$hum','$sal','$lum')";
    $result = mysqli_query($conn, $sql);
=======
    $sql = "INSERT INTO `contacto` (`idSensor`, `idMedicion`, `temperatura`, `humedad`, `salinidad`, `luminosidad`) VALUES ('$idSensor', NULL ,'$temp','$hum','$sal','$lum')";
    $result = mysqli_query($conn, $sql);//
    echo $result;


>>>>>>> develop


}