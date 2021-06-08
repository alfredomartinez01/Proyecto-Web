function menu(number) {
    limpiarContenido();

    switch (number) {
            case 1: // Contenido para registrar alumno

            // Mostrando el frame de registro
            var registro = document.getElementById("formulario");
            registro.style.display = "block";
            break;

        case 2: // Contenido para buscar alumno

            // Motrando el select para la búsqueda
            var busqueda = document.getElementById("busqueda");
            console.log(busqueda);
            busqueda.style.display = "block"; 
            break;
    }
}
/* Agrega el formulario para las búsquedas*/
function selectorBusqueda(){ 
    /* Limpiando las busquedas anteiores */
    var busquedas = document.getElementsByClassName("formulario_busqueda");
    
    for(var i = 0; i< busquedas.length; i++){
        busquedas[i].style.display = "none";
    }

    var selector = document.getElementById("tipo_busqueda");
    var seleccionado = selector.options[selector.selectedIndex].value;
  
    if(seleccionado == "boleta"){
        /* Agregando sus elementos */  
        var boleta = document.getElementById("bus_boleta");
        boleta.style.display = "block";

    } else if(seleccionado == "curp"){         
        /* Agregando sus elementos */  
        var boleta = document.getElementById("bus_curp");
        boleta.style.display = "block";

    } else if(seleccionado == "grupo"){
        /* Agregando sus elementos */  
        var boleta = document.getElementById("bus_grupo");
        boleta.style.display = "block";
        
    } else if(seleccionado == "hora"){     
        /* Agregando sus elementos */  
        var boleta = document.getElementById("bus_hora");
        boleta.style.display = "block";  

    } else if(seleccionado == "todos"){
        var formulario = document.getElementById("bus_todos");
        formulario.submit();        
    } 
}
function limpiarContenido(){
    /* Elimina registro */
    var registro = document.getElementById("formulario");
    registro.style.display = "none";

    /* Elimina busqueda */
    var busqueda = document.getElementById("busqueda");
    busqueda.style.display = "none";

    var busquedas = document.getElementsByClassName("formulario_busqueda");
    for(var i = 0; i< busquedas.length; i++){
        busquedas[i].style.display = "none";
    }
}
