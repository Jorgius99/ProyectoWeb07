document.querySelector("#bloque-parcela").addEventListener("submit", function (event){
    event.preventDefault();

    console.log("cualquier cosa")
    let datausuarionuevo = new FormData(event.target)  ;
    fetch( '../api/v1.0/anyadirParcela.php', {
        method:"POST",
        body: datausuarionuevo
    }).then(function (respuesta){
        if(respuesta.ok){
            document.getElementById("output_parcelaNueva").textContent = "Tarea realizada con éxito";
        }
        else{
            document.getElementById("output_parcelaNueva").textContent = "algo ha fallado";
        }
    })
});