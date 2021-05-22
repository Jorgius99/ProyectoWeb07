
document.querySelector("form").addEventListener("submit", function (event){
    event.preventDefault();

    let datausuarionuevo = new FormData(event.target)  ;
    if(datausuarionuevo.get("contrasenya")==datausuarionuevo.get("newContrasenya")){
        fetch( 'api/v1.0/cambiarContraseña.php', {
            method:"POST",
            body: datausuarionuevo
        }).then(function (respuesta){
            if(respuesta.ok){
                document.getElementById("output").textContent = "tarea realizada con éxito";
            }
            else{
                document.getElementById("output").textContent = "usuario no encontrado";
            }
        })
    }
    else{
        document.getElementById("output").textContent="Las contraseñas no coinciden"
    }

});