function validacion(){
    //alert("hola");
    ocultarDiv();
    if(true){
        /*Obtención de los elementos */
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
        if(nDeboleta == ""){
            setMessage("Llena campo 'No. de boleta'");
            return false;
        }
        else if(!(/^(P(P|E)|[0-9]{2})[0-9]{8}$/.test(nDeboleta))){ 
            setMessage("Introduce un numero de boleta valido");
            return false;
        }
        
        // Nombre -lista
        else if(nombre == ""){
            setMessage("Llena campo 'Nombre(s)'");
            return false;
        }
        else if(!(/^[A-Z]{1}[a-z]+$|^[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+$|^[a-z]+$|^[a-z]+\s[a-z]+$/.test(nombre))){
            setMessage("Solo puedes introducir letras en el campo 'Nombre(s)'");
            return false;
        }

        // Apellido paterno -lista
        else if(Apaterno == ""){
            setMessage("Llena campo 'Apellido Paterno'");
            return false;
        }
        else if(!(/^([A-Z]{1}([a-z]+\s*)*)+$|^([a-z]\s*)+$/.test(Apaterno))){
            setMessage("Solo puedes introducir letras en el campo 'Apellido Paterno'");
            return false;
        }

        // Apellido materno -lista
        else if(Amaterno == ""){
            setMessage("Llena campo 'Apellido Materno'");
            return false;
        }
        else if(!(/^([A-Z]{1}([a-z]+\s*)*)+$|^([a-z]\s*)+$/.test(Amaterno))){
            setMessage("Solo puedes introducir letras en el campo 'Apellido Materno'");
            return false;
        }

        // Fecha de nacimiento -lista (CHECAR)
        else if(Fnacimiento == ""){
            setMessage("Llena campo 'Fecha de Nacimiento'");
            return false;
        }
        /*else if(!(/^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(Fnacimiento))){
            setMessage("Introduce una fecha de nacimiento valida");
            return false;
        }*/
        
        // Genero -lista
        else if(!(gen[0].checked || gen[1].checked)){
            setMessage("Selecciona un genero");
            return false;
        }

        // CURP -lista
        else if(curp==""){
            setMessage("Llena campo 'CURP'");
            return false;
        }
        else if(!(curp == "")){
            if(!(/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/.test(curp))){ 
                setMessage("Introduce un CURP valido");
                if(enviar_curp()){
                    setMessage("Ya se ha registrado ese CURP");
                    console.log("Hola, entre");
                }
                return false;
            }
        }
        /*else if(!(/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/.test(curp))){
            setMessage("Introduce un CURP valido");
            return false;
        }*/

        /*Validación de Contacto */
        // calle - lista
        else if(calle==""){
            setMessage("Llena campo 'Calle'");
            return false;
        }
        else if(!(/^([A-Za-z]+\s*)+$/.test(calle))){
            setMessage("Solo puedes introducir letras en el campo 'Calle'");
            return false;
        }

        // Numero de calle -lista
        else if(numeroC==""){
            setMessage("Llena campo 'Número'");
            return false;
        }
        else if(!(/^[0-9]+$|^[Ss](\/)*[Nn]$/.test(numeroC))){
            setMessage("Introduce un número o indica S/N");
            return false;
        }

        // Colonia - lista
        else if(colonia==""){
            setMessage("Llena campo 'Colonia'");
            return false;
        }
        else if(!(/^([A-Za-z]+\s*)+$/.test(colonia))){
            setMessage("Solo puedes introducir letras en el campo 'Colonia'");
            return false;
        }

        // Codigo Postal - lista
         else if(codigoP==""){
            setMessage("Llena campo 'Código Postal'");
            return false;
        }
        else if(!(/^[0-9]{5}$/.test(codigoP))){
            setMessage("El campo 'Código Postal' debe componerse de 5 digitos");
            return false;
        }

        // Telefono - lista
        else if(tel==""){
            setMessage("Llena campo 'Télefono o celular'");
            return false;
        }
        else if(!(/^[0-9]{10}$/.test(tel))){
            setMessage("El campo 'Código Postal' debe componerse de 10 digitos");
            return false;
        }

        // Correo electronico - lista
        else if(correo==""){
            setMessage("Llena campo 'Correo Electronico'");
            return false;
        }
        else if( !(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(correo)) ){
            setMessage("Introduce un correo valido");
            return false;
        }

        /*Validación de Procedencia */
        // Escuela de procedencia (select/list) - lista
        else if( escuela == null || escuela == 0 ){
            setMessage("Selecciona una opcion en 'Escuela de Procedencia'");
            return false;
        }
        else if(escuela == 17 && otraEsc == ""){
            setMessage("Llena campo 'Nombre de la escuela'");
            return false;
        }

        // Estado de la republica (select/list) -lista
        else if( estado == null || estado == 0 ){
            setMessage("Selecciona una opcion en 'Estado de la República'");
            return false;
        }
        

        // promedio (number) - lista
        if(!(/^[0-9]{1,2}(\.[0-9]{1,2})*$/.test(promedio))){
            setMessage("El campo 'Promedio' debe componerse de 1 numero entero y máximo 2 decimales");
            return false;
        }

        // opcion (select/list) - lista
        else if( opcion == null || opcion == 0 ){
            setMessage("Selecciona una opcion en 'ESCOM fue tu'");
            return false;
        }
    }
    //confirmar_envio();
    setTimeout(function(){confirmar_envio();}, 10);
    return false;
}


function setMessage(mensaje){
    cajita = document.getElementById("menRev");
    cajita.style.display = 'inline';
    cajita.textContent = mensaje;
}

function ocultarDiv(){
    cajita = document.getElementById("menRev");
    cajita.textContent = "";
    cajita.style.display = 'none';
}

function comprobarCurp() {
    // Conexion con AJAX
    var curp = document.getElementById("CURP").value;

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "./php/existenciaCurp.php");
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    ajax.onload = function () {
      var response = this.responseText;
      console.log(response);
      if (response == "0") { // Credenciales correctas
        setMessage("Ya se ha registrado ese CURP");
      } else if (response == "-1") {
        // Mostramos mensaje de contraseña incorrecta
        console.log("Todo bien");
      } else {
        // Mostramos mensaje de usuario no encontrados
        console.log("Algo ha sucedido");
      }
    }
  }

  function enviar_curp(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
            console.log(this.status) // do something; the request has completed
        }
    }
    var data = document.getElementById("CURP"); //id de formulario
    //var formdata = new FormData(data);
    ajax.open("POST", "./php/existenciaCurp.php"); //direccion de a donde se va a enviar
    ajax.send(data);
}