// JavaScript para mostrar en el gerente los usuarios que tiene registrados en la página
fetch('../api/v1.0/mostrarusuarios.php', {
    method: "GET"

}).then(function (respuesta) {

        if (respuesta.ok) {
            return respuesta.json()
        }

    }).then(function (datos) {

        /*
        main tabla
         */
    console.log(datos)


    /*
        fin main
         */
    })







































