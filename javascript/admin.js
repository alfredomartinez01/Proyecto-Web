function menu(number) {
    limpiarPaginas();

    switch (number) {
        case 1: // Contenido para registrar alumno
            // Mostrando el frame de registro
            var registro = document.getElementById("formulario");
            registro.style.display = "block";
            document.getElementById("formulario_registro").src = "../formulario.html";
            break;

        case 2: // Contenido para buscar alumno
            // Mostrando y limpiando el select para la búsqueda
            var busqueda = document.getElementById("busqueda");
            busqueda.style.display = "block";
            var selector = document.getElementById("tipo_busqueda");
            selector.selectedIndex = 0;
            break;

        case 4: // Contenido para eliminar alumno
            // Mostrando y limpiando el select para la búsqueda
            var eliminacion = document.getElementById("eliminacion");
            eliminacion.style.display = "block";
            var selector = document.getElementById("tipo_eliminacion");
            selector.selectedIndex = 0;
            break;
    }
}

/* Agrega el formulario para las búsquedas*/
function selectorBusqueda() {
    /* Limpiando las busquedas anteiores */
    limpiarPaginas();
    /* Recoloca la búsqueda */
    var busqueda = document.getElementById("busqueda");
    busqueda.style.display = "block";

    var selector = document.getElementById("tipo_busqueda");
    var seleccionado = selector.options[selector.selectedIndex].value;

    if (seleccionado == "boleta") {
        /* Agregando sus elementos */
        var boleta = document.getElementById("form-boleta");
        boleta.style.display = "block";

    } else if (seleccionado == "curp") {
        /* Agregando sus elementos */
        var boleta = document.getElementById("form-curp");
        boleta.style.display = "block";

    } else if (seleccionado == "grupo") {
        /* Agregando sus elementos */
        var boleta = document.getElementById("form-grupo");
        boleta.style.display = "block";

    } else if (seleccionado == "hora") {
        /* Agregando sus elementos */
        var boleta = document.getElementById("form-hora");
        boleta.style.display = "block";

    } else if (seleccionado == "todos") {
        setInformation('todo');
    }
}

/* Agrega el formulario para las eliminaciones*/
function selectorEliminacion() {
    /* Limpiando las busquedas anteiores */
    limpiarPaginas();
    /* Recoloca la búsqueda */
    var busqueda = document.getElementById("eliminacion");
    busqueda.style.display = "block";

    var selector = document.getElementById("tipo_eliminacion");
    var seleccionado = selector.options[selector.selectedIndex].value;

    if (seleccionado == "boleta") {
        /* Agregando sus elementos */
        var boleta = document.getElementById("form-boleta");
        boleta.style.display = "block";

    } else if (seleccionado == "curp") {
        /* Agregando sus elementos */
        var boleta = document.getElementById("form-curp");
        boleta.style.display = "block";

    } else if (seleccionado == "grupo") {
        /* Agregando sus elementos */
        var boleta = document.getElementById("form-grupo");
        boleta.style.display = "block";

    } else if (seleccionado == "hora") {
        /* Agregando sus elementos */
        var boleta = document.getElementById("form-hora");
        boleta.style.display = "block";

    } else if (seleccionado == "todos") {
        deleteInformation('todo');
    }
}

/* Selecciona que funcion se va llamar en cuestion de en qué pestaña está el usuario */
function selectorOperacion(tipo){
    var bloque_busqueda = document.getElementById("busqueda");
    if(bloque_busqueda.style.display != "none"){ // Si la busqueda está activa
        setInformation(tipo);
    }
    else{ // Su la eliminación está activa
        deleteInformation(tipo);
    }
}

/* Agrega el contenido a la tabla después de hacer una búsqueda */
function setInformation(tipo) {
    /* Elimina contenido de la tabla */
    var filas = document.getElementsByTagName("td");
    while (filas.length > 0) {
        for (var i = 0; i < filas.length; i++) {
            filas[i].parentNode.removeChild(filas[i]);
        }
    }
    /* Muestra la tabla */
    var tabla = document.getElementById("tabla-alumnos");
    tabla.style.display = "block";

    /* Validacion de los datos */

    /* Peticiones dependiendo del campo */
    var alumnos = [];
    switch (tipo) {
        case "todo":
            /* Espacio para la peticion */
            console.log("hola");
            break;
    }

    // Alumnos a mostrar
    alumnos = [
        {
            "boleta": 2020654545,
            "curp": "MARA011ASJDKJASDHJD",
            "nombre": "Alfredo Rodrigo Lopez Rodriguez",
            "fechaNac": "2001-11-16",
            "telefono": 5532983339,
            "correo": "alfredomartinezruiz01@gmail.com",
            "grupo": "2CM14",
            "hora": "13:00",
            "escuela": "Centro de estudios científicos y tecnológicos No. 3",
            "estado": "Ciudad de México"
        },
        {
            "boleta": 2020654545,
            "curp": "MARA011ASJDKJASDHJD",
            "nombre": "Alfredo Rodrigo Lopez Rodriguez",
            "fechaNac": "2001-11-16",
            "telefono": 5532983339,
            "correo": "alfredomartinezruiz01@gmail.com",
            "grupo": "2CM14",
            "hora": "13:00",
            "escuela": "Centro de estudios científicos y tecnológicos No. 3",
            "estado": "Ciudad de México"
        }
    ];



    /* Inserción en la tabla */
    for (let i = 1; i < 11; i++) {
        var row = document.getElementById(`tr-${i}`); // Obtenemos cada fila
        var cell;

        for (let o = 0; o < alumnos.length; o++) {
            var cell = document.createElement('td');
            switch (i) {
                case 1:
                    cell.innerHTML = alumnos[o].boleta;
                    break;
                case 2:
                    cell.innerHTML = alumnos[o].curp;
                    break;
                case 3:
                    cell.innerHTML = alumnos[o].nombre;
                    break;
                case 4:
                    cell.innerHTML = alumnos[o].fechaNac;
                    break;
                case 5:
                    cell.innerHTML = alumnos[o].telefono;
                    break;
                case 6:
                    cell.innerHTML = alumnos[o].correo;
                    break;
                case 7:
                    cell.innerHTML = alumnos[o].grupo;
                    break;
                case 8:
                    cell.innerHTML = alumnos[o].hora;
                    break;
                case 9:
                    cell.innerHTML = alumnos[o].escuela;
                    break;
                case 10:
                    cell.innerHTML = alumnos[o].estado;
                    break;
            }
            row.appendChild(cell);
        }
    }
}
function deleteInformation(tipo){
    /* Validacion de los datos */

    /* Obtiene el número de registros */
    var registros = 16;

    /* Confirma la eliminación de los registros */
    if(confirm(`Serán eliminados ${registros} registros`)){
        // Se eliminan
        alert(`${registros} registros fueron eliminados`);
    } else{
        alert("No se eliminó ningún registro");
    }
}

/* Limpia en contenido de las pestañas */
function limpiarPaginas() {
    /* Elimina registro */
    var registro = document.getElementById("formulario");
    registro.style.display = "none";

    /* Elimina las opciones de búsqueda */
    var busqueda = document.getElementById("busqueda");
    busqueda.style.display = "none";
    /* Elimina busqueda */
    var busquedas = document.getElementsByClassName("datos_consulta");
    for (var i = 0; i < busquedas.length; i++) {
        busquedas[i].style.display = "none";
    }
    /* Elimina la tabla */
    var tabla = document.getElementById("tabla-alumnos");
    tabla.style.display = "none";

    /* Elimina las opciones de eliminacion */
    var busqueda = document.getElementById("eliminacion");
    busqueda.style.display = "none";
}