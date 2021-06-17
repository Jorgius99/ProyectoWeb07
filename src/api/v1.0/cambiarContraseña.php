<?php
include './conexion.php';
$metodo = $_SERVER['REQUEST_METHOD'];
session_start();

if($metodo =='POST') {

    $usuario = $_POST['usuario'];
    $contrasenya = $_POST['contrasenya'];
    $madre = $_POST['madre'];



    $sql1="SELECT * FROM `login` WHERE usuario='$usuario' AND madre='$madre'";
    $a=mysqli_query($conn, $sql1);//

    if(mysqli_num_rows($a)>0){
        $sql = "UPDATE `login` SET contrasenya='$contrasenya' WHERE usuario='$usuario'";
        $result = mysqli_query($conn, $sql);//

        if (mysqli_query($conn, $sql)) {

            echo "Formulario rellenado de forma correcta";

        } else {
            http_response_code(401);
            die();
        }
    }
    else{
        http_response_code(401);
    }

}
