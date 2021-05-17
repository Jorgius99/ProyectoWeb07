
console.log(document.querySelector("form"))

document.querySelector("form").addEventListener("submit", function (event){
    console.log(event);
    event.preventDefault();
    let dataContacto = new FormData(event.target)  ;


    fetch( '../src/api/v1.0/contacto.php', {
        method:"POST",
        body:dataContacto

    }).then(function (respuesta){
        if(respuesta.ok){
            return respuesta.json();
        }
        else{
            document.getElementById("output").textContent = "Por favor, complete el formulario";
        }
    })

});