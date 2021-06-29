document.querySelector("#bloque-sensores").addEventListener("submit", function (event){
    event.preventDefault();

    let datausuarionuevo = new FormData(event.target)  ;
    fetch( '../api/v1.0/anyadirSensores.php', {
        method:"POST",
        body: datausuarionuevo
    }).then(function (respuesta){
        if(respuesta.ok){
            document.getElementById("output_sensorNuevo").textContent = "Tarea realizada con éxito";
            location.reload()
        }
        else{
            document.getElementById("output_sensorNuevo").textContent = "algo ha fallado";
        }
    })
});