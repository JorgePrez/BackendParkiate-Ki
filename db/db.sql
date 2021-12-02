CREATE TABLE users(
	id BIGSERIAL PRIMARY KEY,
    email  VARCHAR(255) NOT NULL UNIQUE,
	nombre  VARCHAR(255),
	telefono  VARCHAR(80),
    imagen VARCHAR(255) NULL,
    password VARCHAR(255) ,
    session_token VARCHAR(255) NULL, 
    creado TIMESTAMP,
    actualizado  TIMESTAMP
);

/**/

INSERT INTO users(
    correo ,
	nombre,
	telefono,
    password, 
    creado ,
    actualizado
)
VALUES (
	'operezjorge@gmail.com',
	'Jorge Pérez',
	'54870012',
	'123456',
	'2021-05-19',
	'2021-05-19'
);

/**/

select * from users


/******************/
SELECT 
 	 id,
	 email,
	 nombre,
	 telefono,
	 imagen,
	 password,
	 session_token,
	 modelo_auto,
	 placa_auto,
	 imagen_auto
FROM
     users
WHERE 
     id = 8
/***************************/

SELECT 
 	 id,
	 email,
	 nombre,
	 telefono,
	 imagen,
	 password,
	 session_token,
	 modelo_auto,
	 placa_auto,
	 imagen_auto
FROM
     users
WHERE 
     email = 'dollys27@gmail.com'




 INSERT INTO servicios(
     id_servicio ,
     id_parqueo,
     direccion,
     nombre_parqueo,
     imagenes, 
     id_usuario,
     nombre_usuario,
     telefono,
     modelo_auto,
     placa_auto,
     fecha,
	 hora_deentrada,
	 hora_desalida,
	 precio,
	 parqueo_control_pagos
 )
 VALUES ('WgWo8gl','6074G5','6a calle , 2-23, Zona 1, Guatemala','Parqueo La Sexta','https://res.cloudinary.com/parkiate-ki/image/upload/v1633747330/z061b3ieu1yabzrswu6u.jpg','16','Jenson Button','56721449','camaro','abc-123','18-11-2021','21:48','22:50','56721449','S')
 /*RETURNING id_servicio*/

/*resenias*/


 INSERT INTO resenias(
     nombre_usuario,
     imagen_usuario,
     fecha,
     calificacion,
     comentario
 )
 VALUES ('Perdrio perez','http:_dasdsadasdasdasd','23/11/2021','3.5','TODO BIEN PERRO') /* RETURNING id_resenias*/

 CREATE TABLE servicios_admin(
	id BIGSERIAL PRIMARY KEY,
      id_servicio VARCHAR(255) NULL ,
     id_parqueo VARCHAR(255) NULL,
     direccion VARCHAR(255) NULL,
     nombre_parqueo VARCHAR(255) NULL,
     imagenes VARCHAR(255) NULL, 
     id_usuario VARCHAR(255) NULL,
     nombre_usuario VARCHAR(255) NULL,
     telefono VARCHAR(255) NULL,
     modelo_auto VARCHAR(255) NULL,
     placa_auto VARCHAR(255) NULL,
     fecha VARCHAR(255) NULL,
	 hora_deentrada VARCHAR(255) NULL,
	 hora_desalida VARCHAR(255) NULL,
	 precio VARCHAR(255) NULL,
	 parqueo_control_pagos VARCHAR(255) NULL
);