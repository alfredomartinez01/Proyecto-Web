function getFormularioActualiza() {
    var form = '<form method="POST" name="confirmar" id="form_data_update" action="php/datos.php" onchange="ocultarDiv(0)">' +
        '<!--identidad-->' +
        '' +
        '<table>' +
        '<caption>Identidad</caption>' +
        '<tr>' +
        '<td><label for="nDeboleta"> No. de boleta: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="nDeboleta" name="nDeboleta" title="escribe boleta" /></td>' +
        '</tr>' +
        '' +
        '<tr>' +
        '<td><label for="nombre"> Nombre(s): </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="nombre" name="nombre" title="escribe nombre" /></td>' +
        '</tr>' +
        '' +
        '' +
        '<tr>' +
        '<td><label for="Apaterno"> Apellido paterno: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="Apaterno" name="Apaterno" title="escribe apellido paterno" />' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="Amaterno"> Apellido Materno: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="Amaterno" name="Amaterno" title="escribe apellido materno" />' +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="Fnacimiento"> Fecha de nacimiento: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="date" id="Fnacimiento" name="Fnacimiento" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label> Genero</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="radio" name="gen" id="M" value="M" />Masculino</td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="radio" name="gen" id="F" value="F" /> Femenino</td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="CURP"> CURP: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="CURP" name="CURP" title="escribe CURP" /></td>' +
        '</tr>' +
        '</table>' +
        '' +
        '' +
        '' +
        '<!--contacto-->' +
        '' +
        '' +
        '<table>' +
        '<caption>Contacto</caption>' +
        '<tr>' +
        '<td><label for="calle">Calle:</label> </td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="calle" name="calle" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="numero">N&uacute;mero:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="numero" name="numero" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="colonia">Colonia:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="text" id="colonia" name="colonia" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="codigo">C&oacute;digo Postal:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="number" id="codigo" name="codigo" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="tel">T&eacute;lefono o celular:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="tel" id="tel" name="tel" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="correo">Correo Electr&oacute;nico:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="email" id="correo" name="correo" /></td>' +
        '</tr>' +
        '</table>' +
        '' +
        '' +
        '<!--Procedencia-->' +
        '' +
        '' +
        '<table>' +
        '<caption>Procedencia</caption>' +
        '<tr>' +
        '<td><label for="EscuelaProcedencia">Escuela de procedencia:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><select name="EscuelaProcedencia" id="Escuela" onChange="mostrar(this.value);">' +
        '<option value="default">--Escoge una opci&oacute;n--</option>' +
        '<option value="CECyT1">CECyT #1: "Gonzalo V&aacute;zquez Vela"</option>' +
        '<option value="CECyT2">CECyT #2: ???Miguel Bernard Perales"</option>' +
        '<option value="CECyT3">CECyT #3: ???Estanislao Ram&iacute;rez Ruiz"</option>' +
        '<option value="CECyT4">CECyT #4: ???L&aacute;zaro C&aacute;rdenas del r&iacute;o"' +
        '</option>' +
        '<option value="CECyT5">CECyT #5: ???Benito Ju&aacute;rez"</option>' +
        '<option value="CECyT6">CECyT #6: ???Miguel Oth&oacute;n de Mendizabal"</option>' +
        '<option value="CECyT7">CECyT #7: ???Cuauht&eacute;moc"</option>' +
        '<option value="CECyT8">CECyT #8: "Narciso Bassols"</option>' +
        '<option value="CECyT9">CECyT #9: ???Juan de Dios B&aacute;tiz"</option>' +
        '<option value="CECyT10">CECyT #10: ???Carlos Vallejo M??rquez"</option>' +
        '<option value="CECyT11">CECyT #11: ???Wilfrido Massieu"</option>' +
        '<option value="CECyT12">CECyT #12: ???Jos?? Mar&iacute;a Morelos"</option>' +
        '<option value="CECyT13">CECyT #13: ???Ricardo Flores Mag&oacute;n"</option>' +
        '<option value="CECyT14">CECyT #14 "Luis Enrique Erro Soler"</option>' +
        '<option value="CECyT15">CECyT #15 "Di&oacute;doro Ant&uacute;nez Echegaray"</option>' +
        '<option value="CET1">CET 1 "Walter Cross Buchanan"</option>' +
        '<option value="otra">Otra</option>' +
        '</select></td>' +
        '</tr>' +
        '<tr id="lesc">' +
        '<td><label id="lotra" for="NombreEscuela">Nombre de la escuela: </label></td>' +
        '</tr>' +
        '<tr id="iesc">' +
        '<td><input type="text" id="NombreEscuela" name="NombreEscuela" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="Estado">Estado de la Rep&uacute;blica</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><select name="estado" id="Estado">' +
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
        '<option value="Nuevo Le??n">Nuevo Le&oacute;n</option>' +
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
        '<td><label for="Promedio">Promedio:</label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><input type="number" step="any" id="Promedio" name="Promedio" /></td>' +
        '</tr>' +
        '<tr>' +
        '<td><label for="Opcion">ESCOM fue tu: </label></td>' +
        '</tr>' +
        '<tr>' +
        '<td><select name="Opcion" id="Opcion">' +
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
        '<input type="text" value="administrador" id="origen" name="origen" style="display: none;">' +
        '<div id="menRev" class="error"></div>' +
        '<input class="boton" type="reset" />' +
        '<input class="boton" type="submit" value="Enviar" id="boton-registrar" onclick="return insertarAlumno()" />';
        '</form>';
        return form;
}
