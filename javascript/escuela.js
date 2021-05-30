function mostrar(id) {
    elemento = document.getElementById("lesc");
    elemento1 = document.getElementById("iesc");
    if (id == "otra") {
        elemento.style.display = 'inline';
        elemento1.style.display = 'inline';
    }
    else{
        elemento.style.display = 'none';
        elemento1.style.display = 'none';
    }
}
