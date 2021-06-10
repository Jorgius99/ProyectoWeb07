
fetch( '../src/api/v1.0/recibircontacto.php', {
    method:"GET"
}).then(function (respuesta) {

    if (respuesta.ok) {
        return respuesta.json()
    }

}).then(function (datos) {
    var a= JSON.stringify(datos)
    console.log(a)
    for (let i = 0; i < datos.length; i++) {
        console.log(datos[i].nombre)
        console.log(datos[i].apellido)
        console.log(datos[i].correo)
        console.log(datos[i].motivo)
    }
    /*
    inicio main()
     */
    let tableBody = document.getElementById('tbody');
    for (let i = 0; i < datos.length; i++) {
        let varnombre = `<td>${datos[i].nombre}</td>`;
        let varapellido = `<td>${datos[i].apellido}</td>`;
        let varcorreo = `<td>${datos[i].correo}</td>`;
        let varmotivo = `<td>${datos[i].motivo}</td>`;
        tableBody.innerHTML += `<td>${varnombre + varapellido + varcorreo + varmotivo}</td>`;
    }


    /*
    fin main()
     */



})
