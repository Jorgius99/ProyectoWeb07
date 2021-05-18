
console.log(document.querySelector("form"))

document.querySelector("form").addEventListener("submit", function (event){
    console.log(event);
    event.preventDefault();
    let dataContacto = new FormData(event.target)  ;


    fetch( '../src/api/v1.0/contacto.php', {
        method:"POST",
        body:dataContacto

    })
        .then(function (res) {

            console.log(res);
            res.json().then(data => console.log(data))

        })

});