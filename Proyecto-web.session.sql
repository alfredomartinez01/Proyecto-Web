INSERT INTO alumno (
    curp,
    noBoleta,
    nombre,
    apPaterno,
    apMaterno,
    fechaNacimiento,
    genero,
    escProcedencia,
    entFedProced,
    nomEsc,
    promedio,
    escom,
    calleYNum,
    Colonia,
    codigoPostal,
    telefono,
    correoElect
  )
VALUES (
    'MARA01111HMSADASD7CRLA',
    '2020630295',
    'Alfredo',
    'Martínez',
    'Ruiz',
    '2001-10-10',
    'masculino',
    'Cecyt3',
    'Esto de México',
    'Estanislao Ramírez Ruiz',
    '8.7',
    'primera',
    'Sandalias 35',
    'Gustavo',
    47562,
    5532983339,
    'alfredomartinezruiz01@gmail.com'
  );

ALTER TABLE alumno MODIFY telefono BIGINT NOT NULL;