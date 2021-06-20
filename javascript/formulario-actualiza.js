function setformulario() {
    var form = '<form name="confirmar" id="form_data_update" onsubmit="return validacion()">' +
        '<!--identidad-->' +
        '<table>' +
        '<caption>Identidad:</caption>' +
        '<tr>' +
        '<td><label for="nDeboleta-actualiza"> No. de boleta: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="nDeboleta-actualiza" name="nDeboleta-actualiza" title="escribe boleta" /></td>' +
        '</tr>' +
        '' +
        '<tr>' +
        '<td><label for="nombre-actualiza"> Nombre(s): </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="nombre-actualiza" name="nombre" title="escribe nombre" /></td>' +
        '</tr>' +
        '' +
        '' +
        '<tr>' +
        '<td><label for="Apaterno-actualiza"> Apellido paterno: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="Apaterno-actualiza" name="Apaterno-actualiza" title="escribe apellido paterno" />' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="Amaterno-actualiza"> Apellido Materno: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="Amaterno-actualiza" name="Amaterno-actualiza" title="escribe apellido materno" />' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="Fnacimiento-actualiza"> Fecha de nacimiento: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="date" id="Fnacimiento-actualiza" name="Fnacimiento-actualiza" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label> Genero: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="radio" name="gen-actualiza" id="M-actualiza" value="M" />Masculino</td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="radio" name="gen-actualiza" id="F-actualiza" value="F" /> Femenino</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="CURP-actualiza"> CURP: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="CURP-actualiza" name="CURP-actualiza" title="escribe CURP" /></td>' +
        '</tr>' +
        '</table>' +
        '' +
        '' +
        '' +
        '<!--contacto-->' +
        '' +
        '' +
        '<table>' +
        '<caption>Contacto:</caption>' +
        '<tr>' +
        '<td><label for="calle-actualiza">Calle:</label> </td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="calle-actualiza" name="calle-actualiza" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="numero-actualiza">N&uacute;mero:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="numero-actualiza" name="numero-actualiza" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="colonia-actualiza">Colonia:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="colonia-actualiza" name="colonia-actualiza" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="codigo-actualiza">C&oacute;digo Postal:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="number" id="codigo-actualiza" name="codigo-actualiza" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="tel-actualiza">T&eacute;lefono o celular:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="tel-actualiza" id="tel-actualiza" name="tel-actualiza" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="correo-actualiza">Correo Electr&oacute;nico:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="email" id="correo-actualiza" name="correo-actualiza" /></td>' +
        '</tr>' +
        '</table>' +
        '' +
        '' +
        '<!--Procedencia-->' +
        '' +
        '' +
        '<table>' +
        '<caption>Procedencia:</caption>' +
        '<tr>' +
        '<td><label for="Escuela-actualiza">Escuela de procedencia:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><select name="Escuela-actualiza" id="Escuela-actualiza" onChange="mostrar(this.value);">' +
        '<option value="default">--Escoge una opci&oacute;n--</option>' +
        '<option value="CECyT1">CECyT #1: "Gonzalo V&aacute;zquez Vela"</option>' +
        '<option value="CECyT2">CECyT #2: “Miguel Bernard Perales"</option>' +
        '<option value="CECyT3">CECyT #3: “Estanislao Ram&iacute;rez Ruiz"</option>' +
        '<option value="CECyT4">CECyT #4: “L&aacute;zaro C&aacute;rdenas del r&iacute;o"</option>' +
        '<option value="CECyT5">CECyT #5: “Benito Ju&aacute;rez"</option>' +
        '<option value="CECyT6">CECyT #6: “Miguel Oth&oacute;n de Mendizabal"</option>' +
        '<option value="CECyT7">CECyT #7: “Cuauht&eacute;moc"</option>' +
        '<option value="CECyT8">CECyT #8: "Narciso Bassols"</option>' +
        '<option value="CECyT9">CECyT #9: “Juan de Dios B&aacute;tiz"</option>' +
        '<option value="CECyT10">CECyT #10: “Carlos Vallejo Márquez"</option>' +
        '<option value="CECyT11">CECyT #11: “Wilfrido Massieu"</option>' +
        '<option value="CECyT12">CECyT #12: “José Mar&iacute;a Morelos"</option>' +
        '<option value="CECyT13">CECyT #13: “Ricardo Flores Mag&oacute;n"</option>' +
        '<option value="CECyT14">CECyT #14 "Luis Enrique Erro Soler"</option>' +
        '<option value="CECyT15">CECyT #15 "Di&oacute;doro Ant&uacute;nez Echegaray"</option>' +
        '<option value="CET1">CET 1 "Walter Cross Buchanan"</option>' +
        '<option value="otra">Otra</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr id="Lesc-actualiza">' +
        '<td><label id="lotra" for="NombreEscuela-actualiza">Nombre de la escuela: </label></td>' +
        '</tr>' +
        '<tr id="iesc-actualiza">' +
        '<td><input type="text" id="NombreEscuela-actualiza" name="NombreEscuela-actualiza" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="Estado-actualiza">Estado de la Rep&uacute;blica</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><select name="Estado-actualiza" id="Estado-actualiza">' +
        '<option value="default">--Escoge una opci&oacute;n--</option>' +
        '<option value="Aguascalientes">Aguascalientes</option>' +
        '<option value="BC">Baja California</option>' +
        '<option value="BCS">Baja California Sur</option>' +
        '<option value="Campeche">Campeche</option>' +
        '<option value="Chiapas">Chiapas</option>' +
        '<option value="Chihuahua">Chihuahua</option>' +
        '<option value="CDMX">Ciudad de M&eacute;xico</option>' +
        '<option value="Coahuila">Coahuila</option>' +
        '<option value="Colima">Colima</option>' +
        '<option value="Durango">Durango</option>' +
        '<option value="Edo de Mexico">Estado de M&eacute;xico</option>' +
        '<option value="Guanajuato">Guanajuato</option>' +
        '<option value="Guerrero">Guerrero</option>' +
        '<option value="Hidalgo">Hidalgo</option>' +
        '<option value="Jalisco">Jalisco</option>' +
        '<option value="Michoacan">Michoac&aacute;n</option>' +
        '<option value="Morelos">Morelos</option>' +
        '<option value="Nayarit">Nayarit</option>' +
        '<option value="Nuevo León">Nuevo Le&oacute;n</option>' +
        '<option value="Oaxaca">Oaxaca</option>' +
        '<option value="Puebla">Puebla</option>' +
        '<option value="Queretaro">Quer&eacute;taro</option>' +
        '<option value="Quintana Roo">Quintana Roo</option>' +
        '<option value="SL Potosi;">San Luis Potos&iacute;</option>' +
        '<option value="Sinaloa">Sinaloa</option>' +
        '<option value="Sonora">Sonora</option>' +
        '<option value="Tabasco">Tabasco</option>' +
        '<option value="Tamaulipas">Tamaulipas</option>' +
        '<option value="Tlaxcala">Tlaxcala</option>' +
        '<option value="Veracruz">Veracruz</option>' +
        '<option value="Yucatan">Yucat&aacute;n</option>' +
        '<option value="Zacatecas">Zacatecas</option>' +
        '</select></td>' +
        '</tr>' +
        '' +
        '<tr>' +
        '<td><label for="Promedio-actualiza">Promedio: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="number" step="any" id="Promedio-actualiza" name="Promedio-actualiza" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="Opcion-actualiza">ESCOM fue tu: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><select name="Opcion-actualiza" id="Opcion-actualiza">' +
        '<option value="default">--Escoge una opci&oacute;n--</option>' +
        '<option value="Primera_opcion">Primera opci&oacute;n</option>' +
        '<option value="Segunda_opcion">Segunda opci&oacute;n</option>' +
        '<option value="Tercera_opcion">Tercer opci&oacute;n</option>' +
        '<option value="Cuarta_opcion">Cuarta opci&oacute;n</option>' +
        '</select></td>' +
        '</tr>' +
        '</table>' +
        '' +
        '<br>' +
        '<!-- Envio y reseto de informacion -->' +
        '<input class="boton" type="reset" />' +
        '<input class="boton" type="submit" value="Enviar" />' +
        '<!--<input type="submit" onclick="confirmar_envio()" name="Envio" value="Enviar"/><br>-->' +
        '</form>';

    document.write(form);
}
setformulario();
