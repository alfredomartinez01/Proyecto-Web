function mostrar(id) {
    elemento = document.getElementById("lesc");
    elemento1 = document.getElementById("iesc");
    if (id == "otra") {
        elemento.style.display = 'inline';
        elemento1.style.display = 'inline';
    }
    else {
        elemento.style.display = 'none';
        elemento1.style.display = 'none';
    }
}

function confirmar_envio() {
    var boleta = document.confirmar.nDeboleta.value;
    var nombre = document.confirmar.nombre.value;
    var apaterno = document.confirmar.Apaterno.value;
    var amaterno = document.confirmar.Amaterno.value;
    var Fnac = document.confirmar.Fnacimiento.value;
    var genero = document.confirmar.gen.value;
    var curp = document.confirmar.CURP.value;
    var calle = document.confirmar.calle.value;
    var num = document.confirmar.numero.value;
    var colonia = document.confirmar.colonia.value;
    var cp = document.confirmar.codigo.value;
    var tel = document.confirmar.tel.value;
    var email = document.confirmar.correo.value;
    var Escuela = document.confirmar.EscuelaProcedencia.value;
    var otra = document.confirmar.NombreEscuela.value;
    var estado = document.confirmar.estado.value;
    var promedio = document.confirmar.Promedio.value;
    var opcion = document.confirmar.Opcion.value;

    res_confirm = confirm("Holaaaaa" + " " + nombre + " " + apaterno + " " + amaterno + " " +
    "verifica que los datos que ingresaste sean correctos:" + "\n" +
    "Nombre: " + nombre + "\n" +
    "Apellido paterno: " + apaterno + "\n" +
    "Apellido materno: " + amaterno + "\n" +
    "Número de boleta: " + boleta + "\n" +
    "Fecha de nacimiento:" + Fnac + "\n" +
    "Género: " + genero + "\n" +
    "CURP: " + curp + "\n" +
    "contacto:\n " +
    "Calle: " + calle + "\n" +
    "Número: " + num + "\n" +
    "Colonia: " + colonia + "\n" +
    "Código postal: " + cp + "\n" +
    "Télefono/celular: " + tel + "\n" +
    "E-mail: " + email + "\n" +
    "Prodecencia: " + Escuela + "\n" +
    "Procedencia: " + otra + "\n" +
    "Estado de la República: " + estado + "\n" +
    "Promedio: " + promedio + "\n" +
    "Opción: " + opcion + "\n");

    if (res_confirm) {
        return true;
    } else{
        return false;
    }
}