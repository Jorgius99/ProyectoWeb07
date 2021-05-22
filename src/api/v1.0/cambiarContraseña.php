<?php

$metodo = $_SERVER['REQUEST_METHOD'];
session_start();

if($metodo =='POST') {

    $usuario = $_POST['usuario'];
    $contrasenya = $_POST['contrasenya'];


    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";
    $dbNombre = "proyecto007";
    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);
    if (!$conn) {
        http_response_code(500);
        die("Error: " . mysqli_connect_error());
    }
    $sql1="SELECT * FROM `login` WHERE usuario='$usuario'";
    $a=mysqli_query($conn, $sql1);//
    if(mysqli_num_rows($a)>0){
        $sql = "UPDATE `login` SET contrasenya='$contrasenya' WHERE usuario='$usuario'";
        $result = mysqli_query($conn, $sql);//

        if (mysqli_num_rows($result) > 0) {

            echo "todo introducido con exito";

        } else {
            http_response_code(401);
            die();
        }
    }
    else{
        http_response_code(401);
    }

}
