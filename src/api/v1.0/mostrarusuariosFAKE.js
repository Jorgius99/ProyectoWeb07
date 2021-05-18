<<<<<<< Updated upstream
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
=======

// JavaScript para mostrar en el gerente los usuarios que tiene registrados en la página

fetch( '../src/api/v1.0/mostrarusuarios.php', {
    method:"get"

})
    .then(function (respuesta) {

        if(respuesta.ok){
            return respuesta.json()
        }

    })

    .then( function (datos){
      /*
      main tabla
       */
        console.log(datos)

         var contenedor = document.getElementById('datos');
        for (let i = 0; i < datos.length; i++) {
            let dato = datos.length[i];
            contenedor.innerHTML += <tr>
                <td>$datos.nombre</td>
                <td>$datos.telefono</td>
                <td>$datos.correo</td>
                <td>$datos.DNI/NIF</td>
            </tr>
        }

        for (let i = 0; i < datos.length; i++) {
            let dato = datos.length[i];
            contenedor.appendChild(crearfiladato(dato));
        }

        function crearfiladato(dato){
            let fila = document.createElement("tr");
            let celdaNombre = document.createElement("td");
            celdaNombre.textContent = datos.Nombre;
        }
        /*
>>>>>>> Stashed changes
        fin main
         */
    })







































<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
