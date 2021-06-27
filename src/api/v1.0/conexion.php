<?php

/*
    $serverNombre = "localhost";
    $userNombre = "dmesmun_dmesmun";
    $password = "Proyectoweb_007";
    $dbNombre = "dmesmun_proyectoweb007";


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
