function menu(number) {
    var contenedor = document.getElementById("content");
    eliminarHijos(contenedor);

    switch (number) {
            case 1: // Contenido para registrar alumno

            /* Agregando el titulo de seccion */
            var titulo_seccion = document.createElement("h3");
            titulo_seccion.appendChild(document.createTextNode("Registro de datos de alumno"));
            titulo_seccion.style.width = '430px';
            contenedor.appendChild(titulo_seccion);
            

            /* Agregando instrucciones */
            var instrucciones = document.createElement("p");
            instrucciones.appendChild(document.createTextNode("Ingrese los datos del alumno a registrar."));
            instrucciones.setAttribute("id", "instrucciones");
            contenedor.appendChild(instrucciones);

            /* Agregando formulario */
            var formulario = document.createElement("form");
            formulario.setAttribute("action", "");
            formulario.setAttribute("method", "");

            /* Agregando el formulario */
            var formulario = document.createElement("div");
            formulario.setAttribute("id", "formulario");

            var iframe = document.createElement("iframe");
            iframe.setAttribute("src", "../formulario.html");
            iframe.setAttribute("id", "formulario_registro")
            iframe.setAttribute("scrolling", "no");

            formulario.appendChild(iframe)
            contenedor.appendChild(formulario);            
            break;

        case 2:

            /* Agregando el titulo de seccion */
            var titulo_seccion = document.createElement("h3", {id:"titulo_seccion"});
            titulo_seccion.appendChild(document.createTextNode("Búsqueda de alumno"));
            titulo_seccion.style.width = '430px';
            contenedor.appendChild(titulo_seccion);
            

            /* Agregando instrucciones */
            var instrucciones = document.createElement("p", "instrucciones");
            instrucciones.appendChild(document.createTextNode("Ingrese los datos de búsqueda"));
            instrucciones.setAttribute("id", "instrucciones");
            contenedor.appendChild(instrucciones);
            
            /* Agregando opción para escoger busqueda */
            var select = document.createElement("select");
            var titulo_select = document.createElement("label");
            titulo_select.setAttribute("for", "tipo_busqueda");
            titulo_select.setAttribute("id", "instruccion_busqueda");
            titulo_select.appendChild(document.createTextNode("Escoge el tipo de búsqueda a realizar: "));
            select.setAttribute("name", "tipo_busqueda");
            select.setAttribute("id", "tipo_busqueda");
            // Agreando sus opciones
            var opcion = [];
            for(var i = 0; i <= 5; i++){
                opcion.push(document.createElement("option"));
            }
            opcion[1].setAttribute("value", "boleta");
            opcion[2].setAttribute("value", "curp");
            opcion[3].setAttribute("value", "grupo");
            opcion[4].setAttribute("value", "hora");
            opcion[5].setAttribute("value", "todos");

            opcion[0].appendChild(document.createTextNode("-- Seleccione una opción --"));
            opcion[1].appendChild(document.createTextNode("Número de boleta"));
            opcion[2].appendChild(document.createTextNode("CURP"));
            opcion[3].appendChild(document.createTextNode("Grupo asignado"));
            opcion[4].appendChild(document.createTextNode("Hora de inicio"));
            opcion[5].appendChild(document.createTextNode("Todos los registros"));

            for(var i = 0; i <= 5; i++){
                select.appendChild(opcion[i]);
            }
            select.setAttribute("onchange","selectorBusqueda()");
            contenedor.appendChild(titulo_select);
            contenedor.appendChild(select);            

            /*var tabla = document.createElement("table", {id:"tabla"});
            
            // Agregando la fila
            var fila = document.createElement("tr");
            var texto;

            // Agregando la columnas a la fila
            var celda;
            for(var i=0; i<5; i++){
                texto = document.createTextNode("Holi");
                celda = document.createElement("td");
                celda.appendChild(texto);
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);

            var contenedor = document.getElementById('content');
            contenedor.appendChild(tabla);*/
    }
}
function selectorBusqueda(){
    var selector = document.getElementById("tipo_busqueda");
    var seleccionado = selector.options[selector.selectedIndex].value;

    /* Creamos el formulario para enviar los datos */
    var formulario = document.createElement("form");
    formulario.setAttribute("action", "consultaBusqueda.php");
    formulario.setAttribute("method", "");
    formulario.setAttribute("id", "formulario_busqueda");

    var labels = document.createElement("label");
    var inputs = document.createElement("input");

    var contenedor = document.getElementById("content");
    eliminarInputsLabels();

    if(seleccionado == "boleta"){
        /* Agregando campos de busqueda por boleta y curp */
        labels.setAttribute("for", "boleta");
        labels.appendChild(document.createTextNode("Por número de boleta: "));        
        labels.setAttribute("class", "labels");

        inputs.setAttribute("type", "number");
        inputs.setAttribute("id", "boleta");
        inputs.setAttribute("name", "boleta");
        inputs.setAttribute("class", "inputs");
        formulario.appendChild(labels);
        formulario.appendChild(inputs);

        inputs = document.createElement("input");
        inputs.setAttribute("type", "submit");        
        inputs.setAttribute("class", "button");        
        inputs.setAttribute("value", "Buscar");
        formulario.appendChild(inputs);        

        contenedor.appendChild(formulario);        

    } else if(seleccionado == "curp"){
        labels = document.createElement("label");
        inputs = document.createElement("input");
        labels.setAttribute("for", "curp");
        labels.appendChild(document.createTextNode("Por CURP: "));
        labels.setAttribute("class", "labels");
        
        inputs.setAttribute("type", "text");
        inputs.setAttribute("id", "curp");
        inputs.setAttribute("name", "curp");
        inputs.setAttribute("class", "inputs");
        formulario.appendChild(labels);
        formulario.appendChild(inputs);

        inputs = document.createElement("input");
        inputs.setAttribute("type", "submit");        
        inputs.setAttribute("class", "button");        
        inputs.setAttribute("value", "Buscar");
        formulario.appendChild(inputs);        

        contenedor.appendChild(formulario);  

    } else if(seleccionado == "grupo"){
        labels = document.createElement("label");
        inputs = document.createElement("input");
        labels.setAttribute("for", "grupo");
        labels.appendChild(document.createTextNode("Por grupo asignado: "));
        labels.setAttribute("class", "labels");
        
        inputs.setAttribute("type", "text");
        inputs.setAttribute("id", "grupo");
        inputs.setAttribute("name", "grupo");
        inputs.setAttribute("class", "inputs");
        formulario.appendChild(labels);
        formulario.appendChild(inputs);
        
        inputs = document.createElement("input");
        inputs.setAttribute("type", "submit");        
        inputs.setAttribute("class", "button");        
        inputs.setAttribute("value", "Buscar");
        formulario.appendChild(inputs);        

        contenedor.appendChild(formulario); 
    } else if(seleccionado == "hora"){
        
        labels = document.createElement("label");
        inputs = document.createElement("input");
        labels.setAttribute("for", "hora");
        labels.appendChild(document.createTextNode("Por hora de inicio: "));
        labels.setAttribute("class", "labels");

        inputs.setAttribute("type", "time");
        inputs.setAttribute("id", "hora");
        inputs.setAttribute("name", "hora");
        inputs.setAttribute("class", "inputs");
        formulario.appendChild(labels);
        formulario.appendChild(inputs);
        
        inputs = document.createElement("input");
        inputs.setAttribute("type", "submit");        
        inputs.setAttribute("class", "button");        
        inputs.setAttribute("value", "Buscar");
        formulario.appendChild(inputs);        

        contenedor.appendChild(formulario); 

    } else if(seleccionado == "todos"){
        contenedor.appendChild(formulario);
        var formulario = document.getElementById("formulario_busqueda");
        formulario.submit();
        
    } 
}
function eliminarHijos(elemento){
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

/* Elimina las etiquetas de los inputs y labels*/}
function eliminarInputsLabels(){
    var inputs = document.getElementsByClassName("inputs");
    var labels = document.getElementsByClassName("labels");
    var buttons = document.getElementsByClassName("button");

    for(var i = 0; i < inputs.length; i++) {
        inputs[i].parentNode.removeChild(inputs[i]);
    }
    for(var i = 0; i < labels.length; i++) {
        labels[i].parentNode.removeChild(labels[i]);
    }
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].parentNode.removeChild(buttons[i]);
    }
}