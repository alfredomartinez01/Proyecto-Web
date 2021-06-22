function insertarAlumno(operacion) {
    /*Obtención de los elementos */
    var error = false; // Si encuentra algún error se vuelve verdadera
    //ocultarDiv();
    var nDeboleta = document.getElementById("nDeboleta").value;
    var nombre = document.getElementById("nombre").value;
    var Apaterno = document.getElementById("Apaterno").value;
    var Amaterno = document.getElementById("Amaterno").value;
    var Fnacimiento = document.getElementById("Fnacimiento").value;
    var gen = document.getElementsByName('gen');
    var curp = document.getElementById("CURP").value;

    var calle = document.getElementById("calle").value;
    var numeroC = document.getElementById("numero").value;
    var colonia = document.getElementById("colonia").value;
    var codigoP = document.getElementById("codigo").value;
    var tel = document.getElementById("tel").value;
    var correo = document.getElementById("correo").value;

    var escuela = document.getElementById("Escuela").selectedIndex;
    var otraEsc = document.getElementById("NombreEscuela").value;
    var estado = document.getElementById("Estado").selectedIndex;
    var promedio = document.getElementById("Promedio").value;
    var opcion = document.getElementById("Opcion").selectedIndex;

    /*Validación de Identidad */
    //Numero de Boleta -lista
    if (nDeboleta == "") {
        setMessage("Llena campo 'No. de boleta'");
        error = true;
    }
    else if (!(/^(P(P|E)|[0-9]{2})[0-9]{8}$/.test(nDeboleta))) {
        setMessage("Introduce un numero de boleta valido");
        error = true;
    }

    // Nombre -lista
    else if (nombre == "") {
        setMessage("Llena campo 'Nombre(s)'");
        error = true;
    }
    else if (!(/^([A-ZÁÉÍÓÚ\u00d1a-záéíóú\u00f1]+\s*){1,2}$/.test(nombre))) {
        setMessage("Solo puedes introducir letras en el campo 'Nombre(s)'");
        error = true;
    }

    // Apellido paterno -lista
    else if (Apaterno == "") {
        setMessage("Llena campo 'Apellido Paterno'");
        error = true;
    }
    else if (!(/^([A-ZÁÉÍÓÚ\u00d1a-záéíóú\u00f1]+\s*)+$/.test(Apaterno))) {
        setMessage("Solo puedes introducir letras en el campo 'Apellido Paterno'");
        error = true;
    }

    // Apellido materno -lista
    else if (Amaterno == "") {
        setMessage("Llena campo 'Apellido Materno'");
        error = true;
    }
    else if (!(/^([A-ZÁÉÍÓÚ\u00d1a-záéíóú\u00f1]+\s*)+$/.test(Amaterno))) {
        setMessage("Solo puedes introducir letras en el campo 'Apellido Materno'");
        error = true;
    }

    // Fecha de nacimiento -lista (CHECAR)
    else if (Fnacimiento == "") {
        setMessage("Llena campo 'Fecha de Nacimiento'");
        error = true;
    }
    /*else if(!(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(Fnacimiento))){
        setMessage("Introduce una fecha de nacimiento valida");
        return false;
    }*/

    // Genero -lista
    else if (!(gen[0].checked || gen[1].checked)) {
        setMessage("Selecciona un genero");
        error = true;
    }

    // CURP -lista
    else if (curp == "") {
        setMessage("Llena campo 'CURP'");
        error = true;
    }
    else if (!(/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/.test(curp))) {
        setMessage("Introduce un CURP valido");
        error = true;
    }

    /*Validación de Contacto */
    // calle - lista
    else if (calle == "") {
        setMessage("Llena campo 'Calle'");
        error = true;
    }
    else if (!(/^([A-ZÁÉÍÓÚ\u00d1a-záéíóú\u00f1]+\s*)+$/.test(calle))) {
        setMessage("Solo puedes introducir letras en el campo 'Calle'");
        error = true;
    }

    // Numero de calle -lista
    else if (numeroC == "") {
        setMessage("Llena campo 'Número'");
        error = true;
    }
    else if (!(/^[0-9]+$|^[Ss](\/)*[Nn]$/.test(numeroC))) {
        setMessage("Introduce un número o indica S/N");
        error = true;
    }

    // Colonia - lista
    else if (colonia == "") {
        setMessage("Llena campo 'Colonia'");
        error = true;
    }
    else if (!(/^([A-ZÁÉÍÓÚ\u00d1a-záéíóú\u00f1]+\s*)+$/.test(colonia))) {
        setMessage("Solo puedes introducir letras en el campo 'Colonia'");
        error = true;
    }

    // Codigo Postal - lista
    else if (codigoP == "") {
        setMessage("Llena campo 'Código Postal'");
        error = true;
    }
    else if (!(/^[0-9]{5}$/.test(codigoP))) {
        setMessage("El campo 'Código Postal' debe componerse de 5 digitos");
        error = true;
    }

    // Telefono - lista
    else if (tel == "") {
        setMessage("Llena campo 'Télefono o celular'");
        error = true;
    }
    else if (!(/^[0-9]{10}$/.test(tel))) {
        setMessage("El campo 'Teléfono' debe componerse de 10 digitos");
        error = true;
    }

    // Correo electronico - lista
    else if (correo == "") {
        setMessage("Llena campo 'Correo Electronico'");
        error = true;
    }
    else if (!(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(correo))) {
        setMessage("Introduce un correo valido");
        error = true;
    }

    /*Validación de Procedencia */
    // Escuela de procedencia (select/list) - lista
    else if (escuela == null || escuela == 0) {
        setMessage("Selecciona una opcion en 'Escuela de Procedencia'");
        error = true;
    }
    else if (escuela == 17 && otraEsc == "") {
        setMessage("Llena campo 'Nombre de la escuela'");
        error = true;
    }

    // Estado de la republica (select/list) -lista
    else if (estado == null || estado == 0) {
        setMessage("Selecciona una opcion en 'Estado de la República'");
        error = true;
    }


    // promedio (number) - lista
    if (!(/^[0-9]{1,2}(\.[0-9]{1,2})*$/.test(promedio))) {
        setMessage("El campo 'Promedio' debe componerse de 1 numero entero y máximo 2 decimales");
        error = true;
    }

    // opcion (select/list) - lista
    else if (opcion == null || opcion == 0) {
        setMessage("Selecciona una opcion en 'ESCOM fue tu'");
        error = true;
    }


    if (!error) { // No encontró ningún error
        //Mostramos la información
        if (confirmar_envio()) {
            if (operacion == 1) { // Se trata de una actualización
                // Envíamos la información a la base de datos por ajax
                var ajax = new XMLHttpRequest();
                ajax.open("POST", "../php/actualizarAlumno.php", false); //direccion de a donde se va a enviar
                ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                ajax.onload = function () {
                    var response = this.responseText;
                    console.log(response);
                }
                var data = document.getElementById("form_data"); //id de formulario
                var formdata = new FormData(data);

                ajax.send(formdata);
                return true;
            } else { // Se trata de una inserción
                // Envíamos la información a la base de datos por ajax
                var ajax = new XMLHttpRequest();
                ajax.open("POST", "../php/datos.php", false); //direccion de a donde se va a enviar
                ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                ajax.onload = function () {
                    var response = this.responseText;
                    console.log(response);
                }
                var data = document.getElementById("form_data"); //id de formulario
                var formdata = new FormData(data);

                ajax.send(formdata);
                return true;
            }

        } else {
            return false;
        }
    } else {
        return false;
    }
}

function setMessage(mensaje) {
    cajita = document.getElementById("menRev");
    cajita.style.display = 'block';
    cajita.textContent = mensaje;
}
function ocultarDiv(opcion) {
    if (opcion == 0) {
        cajita = document.getElementById("menRev");
        cajita.textContent = "";
        cajita.style.display = 'none';
    }
}