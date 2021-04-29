<?php

$metodo = $_SERVER['REQUEST_METHOD'];


if($metodo ==='POST') {//                                           POST

    $nombre = $_POST['nombre'];
    $contrasenya = $_POST['contrasenya'];

    //echo $_POST['content'];

    $serverNombre = "localhost";
    $userNombre = "root";
    $password = "";//escribir los parametros
    $dbNombre = "pruebapagweb";
// Crear la conexión
    $conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);//$conn es una variable en la que se almacenan los datos
// Chequear la conexión
    if (!$conn) {// si es falso
        die("Error: " . mysqli_connect_error());//die lo que hace es cortar la conexion y devuelve Error...
    }
    $sql = "SELECT * FROM `usuarios` WHERE `nombre` = '$nombre' and `contrasenya` = '$contrasenya'"; // (*) eso significa todos los campos
    $result = mysqli_query($conn, $sql);//
//echo mysqli_num_rows($result);//comprobar que esta esto

    if (mysqli_num_rows($result) > 0) {
        while ($fila = mysqli_fetch_assoc($result)) {
            //echo $fila["nombre"] . "<br>";// esto devuelve los datos que pidesen este caso nombre
            //echo json_encode($fila);// no sirve para mi trabajo  pero es para que me recoja los datos en formato json creo q no hay q
            $respuesta = [];
            $respuesta["id"] = $fila ["id"];// esto lo utilizare ara devolver lo de las mediciones
            $respuesta["nombre"] = $fila ["nombre"];// esto lo utilizare ara devolver lo de las mediciones
            $respuesta["rol"] = $fila ["rol"];// esto lo utilizare ara devolver lo de las mediciones

            $_SESSION["id"] = $fila["id"];
            $_SESSION["nombre"] = $fila["nombre"];
            $_SESSION["rol"] = $fila["rol"];

            header('Content-Type: application/json;');//crear respuesta de http
            echo json_encode($respuesta);

        }
    } else {
        http_response_code(401);
        die();
        //echo "no hay usuarios con ese nombre"
    }
}
/*
if($metodo === "GET"){//                                           GET
    session_start();
    if(isset($_SESSION['rol']) && $_SESSION['rol'] !== ''){
        echo json_encode($_SESSION);
    }else{
        http_response_code(401);
        die();
    }
}


if($metodo === 'DELETE'){ //                                           DELETE
    session_start();
    unset($_SESSION['rol']);//es para eleminar variables
    session_destroy();
    http_reponse_code(200);


}*/
