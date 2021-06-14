
document.querySelector("#contactanos_form").addEventListener("submit", function (event){
    event.preventDefault();
    let datacontacto = new FormData(event.target);
    fetch( 'api/v1.0/contacto.php', {
        method:"POST",
        body: datacontacto
    }).then(function (respuesta){
        if(respuesta.ok){
            document.getElementById("output_form").textContent = "Tarea realizada con éxito";
        }
        else{
            document.getElementById("output_form").textContent = "Algo ha falado";
        }
    })
});