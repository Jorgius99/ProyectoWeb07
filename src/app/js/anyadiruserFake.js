document.querySelector("form").addEventListener("submit", function (event){
    event.preventDefault();

    let datausuarionuevo = new FormData(event.target)  ;
    fetch( '../api/v1.0/anyadiruser.php', {
        method:"POST",
        body: datausuarionuevo
    }).then(function (respuesta){
        if(respuesta.ok){
            document.getElementById("output").textContent = "Tarea realizada con éxito";
        }
        else{
            document.getElementById("output").textContent = "algo ha fallado";
        }
    })
});