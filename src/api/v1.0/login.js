document.querySelector("form").addEventListener("submit", function (event){
    //console.log;
    event.preventDefault();
    let dataLogin = new FormData(event.target);
    console.log(dataLogin.get("nombre"));
    console.log(dataLogin.get("contrasenya"));


    fetch( 'http://localhost/src/api/v1.0/index.php', {
        method:"POST",
        body:dataLogin
    }).then(function (respuesta){
        if(respuesta.ok){
            return respuesta.json();
        }
    }).then(function (datos){
        if(dataLogin.get("nombre")=="usuario" && dataLogin.get("contrasenya")=="1234"){
            document.getElementById("output").textContent = "bienvenido ," + datos.nombre + "!";
            setTimeout(function (){
                window.location = "../src/app/paginausuario.html"
            }, 3000);
        }else{
            document.getElementById("output").textContent = "bienvenido ," + datos.nombre + "!";
            setTimeout(function (){
                location.href = "../src/app/paginagerente.html"
            }, 3000);
        }

        })
});

