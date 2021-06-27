<?php
include './conexion.php';
$metodo = $_SERVER['REQUEST_METHOD'];

$conn = mysqli_connect($serverNombre, $userNombre, $password, $dbNombre);

if ($metodo == 'POST') {

    $Nombre = $_POST['nombre_form'];
    $Apellido = $_POST['apellido_form'];
    $correo = $_POST['correo_form'];
    $motivo = $_POST['motivo_form'];

    $sql = "INSERT INTO `contacto` (`idPeticiones`, `Nombre`, `Apellido`, `correo`, `motivo`) VALUES (NULL, '$Nombre', '$Apellido', '$correo', '$motivo')";

    if (mysqli_query($conn, $sql)) {

        include './phpmailer/enviocorreo.php';

        echo "Formulario rellenado de forma correcta";

    } else {
        http_response_code(401);
        die();
    }
}

