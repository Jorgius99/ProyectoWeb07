<?php
$serverNombre= "localhost";
$userNombre="root";
$password="";
$dbNombre="usuarios_07";

$conn=mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);

if (!$conn){
    die("Error: ".mysqli_connect_error());
}
