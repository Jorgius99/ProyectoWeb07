

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var idSensor = getParameterByName('sensor');

fetch('../src/api/v1.0/obtenerMediciones.php?sensor=' + idSensor, {
    method: "GET"
}).then(function (respuesta) {

    if (respuesta.ok) {
        return respuesta.json()
    }
}).then(function a(datos) {
   /* for (let i = 0; i < datos.length; i++) {
        console.log("temperatura=" + datos[i].temperatura);
        console.log("humedad=" + datos[i].humedad);
        console.log("salinidad=" + datos[i].salinidad);
        console.log("luminosidad=" + datos[i].luminosidad);

    }
    */
    var t = function (event) {
        var aux = []
        for (let i = 0; i < datos.length; i++) {
            aux.push({
                year: i.toString(),
                value: parseFloat(datos[i].temperatura)
            })

        }
        //console.log(aux)
        new Morris.Line({
            element: 'myfirstchart',
            data: aux,
            xkey: 'year',
            ykeys: ['value'],
            labels: ['Value']
        });
        location.reload()
    };
    var bt = document.querySelector('#temp');
    bt.addEventListener('click', t);

   //-------------------------------------------------
    var h = function (event) {
       location.reload()
        var aux = []
        for (let i = 0; i < datos.length; i++) {
            aux.push({
                year: i.toString(),
                value: parseFloat(datos[i].humedad)
            })

        }
        //console.log(aux)
        new Morris.Line({
            element: 'myfirstchart',
            data: aux,
            xkey: 'year',
            ykeys: ['value'],
            labels: ['Value']
        });

    };
    var bh = document.querySelector('#hum');
    bh.addEventListener('click', h);
    //--------------------------------------------------
    var s = function (event) {
        var aux = []
        for (let i = 0; i < datos.length; i++) {
            aux.push({
                year: i.toString(),
                value: parseFloat(datos[i].salinidad)
            })

        }
        //console.log(aux)
        new Morris.Line({
            element: 'myfirstchart',
            data: aux,
            xkey: 'year',
            ykeys: ['value'],
            labels: ['Value']
        });
        location.reload()

    };
    var bs = document.querySelector('#sal');
    bs.addEventListener('click', s);
    //-----------------------------------------------
    var l = function (event) {
        var aux = []
        for (let i = 0; i < datos.length; i++) {
            aux.push({
                year: i.toString(),
                value: parseFloat(datos[i].luminosidad)
            })

        }
        //console.log(aux)
        new Morris.Line({
            element: 'myfirstchart',
            data: aux,
            xkey: 'year',
            ykeys: ['value'],
            labels: ['Value']
        });
        location.reload()

    };
    var bl = document.querySelector('#lum');
    bl.addEventListener('click', l);


})

/*
function temp(datos) {
    var aux = []
    for (let i = 0; i < datos.length; i++) {
        aux.push({
            year: i.toString(),
            value: parseFloat(datos[i].temperatura)
        })

    }
    console.log(aux)
    new Morris.Line({
        element: 'myfirstchart',

        data: aux,
        // The name of the data record attribute that contains x-values.
        xkey: 'year',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Value']
    });

}

function hum(datos) {
    var aux = []
    for (let i = 0; i < datos.length; i++) {
        aux.push({
            year: i.toString(),
            value: parseFloat(datos[i].humedad)
        })

    }
    console.log(aux)
    new Morris.Line({
        element: 'myfirstchart',

        data: aux,
        // The name of the data record attribute that contains x-values.
        xkey: 'year',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Value']
    });

}

function sal(datos) {
    var aux = []
    for (let i = 0; i < datos.length; i++) {
        aux.push({
            year: i.toString(),
            value: parseFloat(datos[i].salinidad)
        })

    }
    console.log(aux)
    new Morris.Line({
        element: 'myfirstchart',

        data: aux,
        // The name of the data record attribute that contains x-values.
        xkey: 'year',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Value']
    });

}

function lum(datos) {
    var aux = []
    for (let i = 0; i < datos.length; i++) {
        aux.push({
            year: i.toString(),
            value: parseFloat(datos[i].luminosidad)
        })

    }
    console.log(aux)
    new Morris.Line({
        element: 'myfirstchart',

        data: aux,
        // The name of the data record attribute that contains x-values.
        xkey: 'year',
        // A list of names of data record attributes that contain y-values.
        ykeys: ['value'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Value']
    });

}


 */



/*
  var aux=[]
    for (let i = 0; i < datos.length; i++) {
        aux.push({
            medicion: i,
            temperatura: parseFloat(datos[i].temperatura)
        })

    }
*/