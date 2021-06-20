var mediaqueryList = window.matchMedia("(min-width: 800px)");
/* Removemos style de la barra para evitar problemas */
function manejador(EventoMediaQueryList) {
    if (EventoMediaQueryList.matches) {
        let menu = document.getElementById("navegacion");
        menu.removeAttribute("style");
    }
}
// asociamos el manejador de evento
mediaqueryList.addListener(manejador);


/* Cambiando a menu hamburguesa */
function hamburguesa() {
    let menu = document.getElementById("navegacion");

    let imagen = document.getElementById("imagen-menu");

    if (document.getElementById("menu").checked) {
        menu.setAttribute("style",
            "margin: 40px -50px 0px 0px; transition: margin 600ms;");
        imagen.setAttribute("style",
            "transform : scale(1.1, 1.1);");
    }
    if (document.getElementById("menu").checked == false) {
        let menu = document.getElementById("navegacion");
        menu.setAttribute("style",
            "margin: 40px -240px 0px 0px;transition: margin 600ms;");
        imagen.setAttribute("style",
            "transform : scale(1, 1)");
    }
}

/* Cerrando el menu hamburguesa*/
function cerrarMenu() {
    let elementStyle = window.getComputedStyle(document.getElementById("navegacion"));
    if (elementStyle.getPropertyValue('margin') === "40px -50px 0px 0px") {
        document.getElementById("menu").click();
    }
}

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

        case 3: // Contenido para actualizar alumno
            // Mostrando el input para boleta
            var actualizacion = document.getElementById("actualizacion");
            actualizacion.style.display = "block";
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
        fillTable('todo');
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
function selectorOperacion(tipo) {
    var bloque_busqueda = document.getElementById("busqueda");
    var bloque_actualizacion = document.getElementById("actualizacion");
    var bloque_eliminacion = document.getElementById("eliminacion");

    if (bloque_busqueda.style.display != "none") { // Si la busqueda está activa
        fillTable(tipo);
    } else if (bloque_actualizacion.style.display != "none") {// Si la actualizacion está activa
        setInformation();
    } else if (bloque_eliminacion.style.display != "none") {// Si la eliminacion está activa
        deleteInformation(tipo);
    }
}

/* Agrega el contenido a la tabla después de hacer una búsqueda */
function fillTable(tipo) {
    /* Elimina contenido de la tabla */
    var filas = document.getElementsByTagName("td");
    while (filas.length > 0) {
        for (var i = 0; i < filas.length; i++) {
            filas[i].parentNode.removeChild(filas[i]);
        }
    }
    /* Validacion de los datos */

    /* Peticiones dependiendo del campo */
    var alumnos = [];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/manejoAlumno.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    switch (tipo) {
        case "boleta":
            var boleta = document.getElementById("boleta").value;

            xhr.onload = function () {
                var response = this.responseText;
                alumnos = JSON.parse(response);
            }
            var informacion = "tipo=" + tipo + "&operacion=buscar" + "&boleta=" + boleta;
            xhr.send(informacion);
            break;
        case "curp":
            var curp = document.getElementById("curp").value;
            xhr.onload = function () {
                var response = this.responseText;
                alumnos = JSON.parse(response);
            }
            var informacion = "tipo=" + tipo + "&operacion=buscar" + "&curp=" + curp;
            xhr.send(informacion);
            break;
        case "grupo":
            var grupo = document.getElementById("grupo").value;
            xhr.onload = function () {
                var response = this.responseText;
                alumnos = JSON.parse(response);
            }
            var informacion = "tipo=" + tipo + "&operacion=buscar" + "&grupo=" + grupo;
            xhr.send(informacion);
            break;
        case "hora":
            var hora = document.getElementById("hora").value;
            xhr.onload = function () {
                var response = this.responseText;
                alumnos = JSON.parse(response);
            }
            var informacion = "tipo=" + tipo + "&operacion=buscar" + "&hora=" + hora;
            xhr.send(informacion);
            break;
        case "todo":
            xhr.onload = function () {
                var response = this.responseText;
                alumnos = JSON.parse(response);
            }
            var informacion = "tipo=" + tipo + "&operacion=buscar";
            xhr.send(informacion);
            break;
    }

    /* Inserción en la tabla */
    if (alumnos.length > 0) {
        /* Muestra la tabla */
        var tabla = document.getElementById("tabla-alumnos");
        tabla.style.display = "block";
        /* Oculta mensaje de error */
        var error = document.getElementById("no-Busca");
        error.style.display = "none";

        for (let i = 1; i < 11; i++) {
            var row = document.getElementById(`tr-${i}`); // Obtenemos cada fila
            var cell;

            for (let o = 0; o < alumnos.length; o++) {
                var cell = document.createElement('td');
                switch (i) {
                    case 1:
                        if (alumnos[o].boleta)
                            cell.innerHTML = alumnos[o].boleta;
                        break;
                    case 2:
                        if (alumnos[o].curp)
                            // Arreglamos problemas de longitud
                            var texto = document.createTextNode((alumnos[o].curp).slice(0, 13));
                        cell.appendChild(texto);
                        cell.appendChild(document.createElement("wbr"));
                        texto = document.createTextNode((alumnos[o].curp).slice(13, 18));
                        cell.appendChild(texto);
                        break;
                    case 3:
                        if (alumnos[o].nombre)
                            cell.innerHTML = alumnos[o].nombre;
                        break;
                    case 4:
                        if (alumnos[o].fechaNac)
                            cell.innerHTML = (alumnos[o].fechaNac).slice(0, 10);
                        break;
                    case 5:
                        if (alumnos[o].telefono)
                            cell.innerHTML = alumnos[o].telefono;
                        break;
                    case 6:
                        if (alumnos[o].correoElect) {
                            // Arreglamos problemas de longitud
                            var texto = document.createTextNode((alumnos[o].correoElect).slice(0, 15));
                            cell.appendChild(texto);
                            for (var k = 15; k < (alumnos[o].correoElect).length; k += 15) {
                                cell.appendChild(document.createElement("wbr"));
                                texto = document.createTextNode((alumnos[o].correoElect).slice(k, k + 15));
                                cell.appendChild(texto);
                            }
                        }
                        break;
                    case 7:
                        if (alumnos[o].grupo)
                            cell.innerHTML = alumnos[o].grupo;
                        break;
                    case 8:
                        if (alumnos[o].hora)
                            cell.innerHTML = (alumnos[o].hora).slice(0, 5);
                        break;
                    case 9:
                        if (alumnos[o].escProcedencia)
                            cell.innerHTML = alumnos[o].escProcedencia;
                        break;
                    case 10:
                        if (alumnos[o].entFedProcedencia)
                            cell.innerHTML = alumnos[o].entFedProcedencia;
                        break;
                }
                row.appendChild(cell);
            }
        }
        return alumnos.length;
    } else {
        /* Muestra mensaje de error */
        var error = document.getElementById("no-Busca");
        error.style.display = "block";
    }

}

/* Muestra el contenido del usuario */
function setInformation() {
    /* Validacion de los datos */
    var boleta = document.getElementById("actualizarPorboleta").value;

    if (validar("boleta", boleta)) {
        /* Realiza la peticion */
        /* Peticiones dependiendo del campo */
        var alumno = [];
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "../php/manejoAlumno.php", false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


        xhr.onload = function () {
            var response = this.responseText;
            alumno = JSON.parse(response);
        }
        var informacion = "tipo=boleta" + "&operacion=buscar" + "&boleta=" + boleta;

        xhr.send(informacion);
        if (alumno.length > 0) {
            /* Oculta mensaje de error */
            var error = document.getElementById("no-EncuentraActualiza");
            error.style.display = "none";
            var error = document.getElementById("actualizacion-invalida");
            error.style.display = "none";

            var datos = document.getElementById('datos-alumno');
            datos.style.display = "block";

            var boleta = document.getElementById('alumno-boleta');
            boleta.innerHTML = "Número de boleta: " + alumno[0].boleta;

            var telefono = document.getElementById('alumno-telefono');
            telefono.value = alumno[0].telefono;
            telefono.setAttribute("onchange", `muestraActualizar(${alumno[0].boleta})`);

            var correo = document.getElementById('alumno-correo');
            correo.value = alumno[0].correoElect;
            correo.setAttribute("onchange", `muestraActualizar(${alumno[0].boleta})`);

            // Desabilitando el botón
            var boton_eliminacion = document.getElementById('boton-eliminar-datos');
            boton_eliminacion.style.display = "none";
        } else {
            /* Muestra mensaje de error y datos */
            var error = document.getElementById("no-EncuentraActualiza");
            error.style.display = "block";
            var datos = document.getElementById('datos-alumno');
            datos.style.display = "none";
        }
    } else {
        /* Muestra mensaje de error y datos */
        var error = document.getElementById("actualizacion-invalida");
        error.style.display = "block";
        var datos = document.getElementById('datos-alumno');
        datos.style.display = "none";
    }



}

/* Activa el botón de actualizar */
function muestraActualizar(boleta) {
    var boton_eliminacion = document.getElementById('boton-eliminar-datos');
    boton_eliminacion.style.display = "block";
    boton_eliminacion.setAttribute("onclick", `actualiza(${boleta})`);
}
/* Actualiza los datos de contacto */
function actualiza(boleta) {
    var telefono = document.getElementById('alumno-telefono');
    var correo = document.getElementById('alumno-correo');

    /* Realiza petición para actualización de los datos */
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/manejoAlumno.php", false);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var response;
    xhr.onload = function () {
        response = this.responseText;
    }
    var informacion = "tipo=boleta" + "&operacion=actualizar" + "&boleta=" + boleta + "&correo=" + correo.value + "&telefono=" + telefono.value;

    xhr.send(informacion);
    if (response == "1") {
        alert(`Alumno con boleta ${boleta} actualizado correctamente`);
        menu(3);
    } else {
        console.log(response);
        /* Muestra mensaje de error */
        var error = document.getElementById("no-Actualiza");
        error.style.display = "block";
    }

}
function deleteInformation(tipo) {
    /* Validacion de los datos */

    // Reutilizamos filTable para saber el número de registros    
    var registros = fillTable(tipo);
    /* Oculta la tabla */
    var tabla = document.getElementById("tabla-alumnos");
    tabla.style.display = "none";
    if (registros) {
        if (confirm(`Serán eliminados ${registros} registros`)) {
            /* Obtiene el número de registros */
            /* Peticiones dependiendo del campo */
            var response;
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "../php/manejoAlumno.php", false);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            switch (tipo) {
                case "boleta":
                    var boleta = document.getElementById("boleta").value;

                    xhr.onload = function () {
                        vresponse = this.responseText;
                    }
                    var informacion = "tipo=" + tipo + "&operacion=eliminar" + "&boleta=" + boleta;
                    xhr.send(informacion);
                    break;
                case "curp":
                    var curp = document.getElementById("curp").value;
                    xhr.onload = function () {
                        response = this.responseText;
                    }
                    var informacion = "tipo=" + tipo + "&operacion=eliminar" + "&curp=" + curp;
                    xhr.send(informacion);
                    break;
                case "grupo":
                    var grupo = document.getElementById("grupo").value;
                    xhr.onload = function () {
                        response = this.responseText;
                    }
                    var informacion = "tipo=" + tipo + "&operacion=eliminar" + "&grupo=" + grupo;
                    xhr.send(informacion);
                    break;
                case "hora":
                    var hora = document.getElementById("hora").value;
                    xhr.onload = function () {
                        response = this.responseText;
                    }
                    var informacion = "tipo=" + tipo + "&operacion=eliminar" + "&hora=" + hora;
                    xhr.send(informacion);
                    break;
                case "todo":
                    xhr.onload = function () {
                        response = this.responseText;
                    }
                    var informacion = "tipo=" + tipo + "&operacion=eliminar";
                    xhr.send(informacion);
                    break;
            }
            console.log(response);
            if (response) {
                alert(`${registros} registros fueron eliminados`);
                /* Oculta mensaje de error */
                var error = document.getElementById("no-Actualiza");
                error.style.display = "none";
            } else {
                /* Muestra mensaje de error */
                var error = document.getElementById("no-Busca");
                error.style.display = "block";
            }
        }
    } else {
        /* Muestra mensaje de error */
        var error = document.getElementById("no-Busca");
        error.style.display = "block";
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

    /* Elimina actualizacion */
    var actualizacion = document.getElementById("actualizacion");
    actualizacion.style.display = "none";
    var datos_actualizacion = document.getElementById("datos-alumno");
    datos_actualizacion.style.display = "none";

    /* Elimina las opciones de eliminacion */
    var eliminacion = document.getElementById("eliminacion");
    eliminacion.style.display = "none";

    /* Oculta mensajes de error */
    var errors = document.getElementsByClassName("notFound");
    for (var i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}
function validar(tipo, dato) {
    switch (tipo) {
        case "boleta":
            if (!(/^(P(P|E)|[0-9]{2})[0-9]{8}$/.test(dato))) {
                return false;
            } else {
                return true;
            }
        case "curp":
            if (!(/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/.test(curp))) {
                return false;
            } else {
                return true;
            }
        case "grupo":
            return true;
    }
}