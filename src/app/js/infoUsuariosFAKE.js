fetch( '../api/v1.0/infoUsuarios.php', {
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
    let selectUsuarios = document.getElementById('Users');
    let labelID = document.getElementById('id');

    for (let i = 0; i < datos.length; i++) {
        let varnombre = `<option value=" ${datos[i].nombre}">${datos[i].nombre}</option>`;
        selectUsuarios.appendChild(varnombre);
        let varId = `${datos[i].id}`;
        labelID.innerHTML += `${varId}`;
    }


})
