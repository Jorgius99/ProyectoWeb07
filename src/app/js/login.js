
console.log(document.querySelector("form"))

document.querySelector("form").addEventListener("submit", function (event){
    console.log(event);
    event.preventDefault();
    let dataLogin = new FormData(event.target)  ;
    console.log(dataLogin.get("nombre"));
    console.log(dataLogin.get("contrasenya"));

    fetch( '../src/api/v1.0/index.php', {
        method:"POST",
        body:dataLogin
    }).then(function (respuesta){
        if(respuesta.ok){
           return respuesta.json();
        }
        else{
            document.getElementById("output").textContent = "Nombre de usuario o contraseña incorrectos";
        }
    }).then(function (datos){
        if(datos.rol !== 'admin'){
            window.location = "../src/app/paginausuario.html"
        }
        else {
            location.href = "../src/app/paginagerente.html"
        }
        })
});