
document.querySelector("#login_form").addEventListener("submit", function (event){
    console.log(event);
    event.preventDefault();
    let dataLogin = new FormData(event.target)  ;
    console.log(dataLogin.get("nombre_login"));
    console.log(dataLogin.get("contrasenya_login"));

    fetch( 'api/v1.0/index.php', {
        method:"POST",
        body:dataLogin
    }).then(function (respuesta){
        if(respuesta.ok){
           return respuesta.json();
        }
        else{
            document.getElementById("output_login").textContent = "Nombre de usuario o contraseña incorrectos";
        }
    }).then(function (datos){
        if(datos.rol !== 'admin'){
            window.location = "./app/paginausuario.html"
        }
        else {
            location.href = "./app/paginagerente.html"
        }
        })
});