document.querySelector("form").addEventListener("submit", function (event){
    event.preventDefault();

    let datacontacto = new FormData(event.target);
    fetch( '../src/api/v1.0/contacto.php', {
        method:"POST",
        body: datacontacto
    }).then(function (respuesta){
        if(respuesta.ok){
            document.getElementById("output").textContent = "Tarea realizada con éxito";
        }
        else{
            document.getElementById("output").textContent = "Algo ha falado";
        }
    })
});