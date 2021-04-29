document.querySelector("form").addEventListener("submit", function (event){
    //console.log;
    event.preventDefault();//para q no envie cuando hagas enter el submit
    let dataLogin = new FormData(event.target); //aqui se almacena los datos en la variable esa
    console.log(dataLogin.get("nombre"));
    console.log(dataLogin.get("contrasenya"));


    fetch( 'http://localhost/src/api/v1.0/index.php', {//               mirar esoooo es donde redirrige
        method:"POST",
        body:dataLogin
    }).then(function (respuesta){
        if(respuesta.ok){//si la repuesta devuleve un ok
            return respuesta.json();
        }
    }).then(function (datos){
        if(dataLogin.get("nombre")=="usuario" && dataLogin.get("contrasenya")=="1234"){
            document.getElementById("output").textContent = "bienvenido ," + datos.nombre + "!";// div del index L22
            setTimeout(function (){
                window.location = "../src/app/paginausuario.html"
            }, 3000);
        }else{
            document.getElementById("output").textContent = "bienvenido ," + datos.nombre + "!";// div del index L22
            setTimeout(function (){
                location.href = "../src/app/paginagerente.html"
            }, 3000);
        }

        })
});

