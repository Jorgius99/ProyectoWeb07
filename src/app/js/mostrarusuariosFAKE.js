
fetch( '../api/v1.0/mostrarusuarios.php', {
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
        console.log(datos[i].correo)
        console.log(datos[i].telefono)

    }
    let tableBody = document.getElementById('tbody');

    for (let i = 0; i < datos.length; i++) {
        let varId = `<td>${datos[i].id}</td>`;
        let varnombre = `<td>${datos[i].nombre}</td>`;
        let varcorreo = `<td>${datos[i].correo}</td>`;
        let vartelefono = `<td>${datos[i].telefono}</td>`;
        tableBody.innerHTML += `<td>${varId + varnombre + varcorreo + vartelefono}</td>`;
    }
})
