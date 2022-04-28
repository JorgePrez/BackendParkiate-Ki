const db = require('../config/config');
const crypto = require('crypto');




const Adminservicio = {};  //mismo nombre que el modelo solo que primera mayuscula





  //Obtener todo un servicio a traves de un id


  Adminservicio.findById = (id_servicio) => {
    const sql = `
    SELECT 
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
FROM
   servicios_admin
WHERE 
   id_servicio =$1
    `
    return db.oneOrNone(sql, id_servicio);
}


Adminservicio.findservisById = (id_servicio) => {
    const sql = `
    SELECT 
    id_servicio ,
    id_parqueo,
    direccion,
    nombre_parqueo,
    imagenes, 
    id_usuario,
    nombre_usuario,
    telefono,
    imagen_auto,
    placa_auto,
    fecha,
    hora_deentrada,
    hora_desalida,
    precio,
    parqueo_control_pagos,
    estado
FROM
   servicios
WHERE 
   id_servicio =$1
    `
    return db.oneOrNone(sql, id_servicio);
}


 //creando servicios

 Adminservicio.create = (adminservicio) => {

 
     const sql =  `
     INSERT INTO servicios_admin(
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
 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING id
     `; 
 
     //retornar 1 valor o ninguno
     return db.oneOrNone(sql, [
        adminservicio.id_servicio ,
        adminservicio.id_parqueo,
        adminservicio.direccion,
        adminservicio.nombre_parqueo,
        adminservicio.imagenes, 
        adminservicio.id_usuario,
        adminservicio.nombre_usuario,
        adminservicio.telefono,
        adminservicio.modelo_auto,
        adminservicio.placa_auto,
        adminservicio.fecha,
        adminservicio.hora_deentrada,
        adminservicio.hora_desalida,
        adminservicio.precio,
        adminservicio.parqueo_control_pagos
     ]);
 }


 
 Adminservicio.createwithparamas = (id_servicio,id_parqueo,direccion,nombre_parqueo,imagenes,id_usuario,nombre_usuario,telefono,modelo_auto,placa_auto,fecha,hora_deentrada,hora_desalida,precio,parqueo_control_pagos) => {

 
    const sql =  `
    INSERT INTO servicios_admin(
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
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING id
    `; 

    //retornar 1 valor o ninguno
    return db.oneOrNone(sql, [
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
    ]);
}


Adminservicio.createservicio = (id_servicio,id_parqueo,direccion,nombre_parqueo,imagenes,id_usuario,nombre_usuario,telefono,imagen_auto,placa_auto,fecha,hora_deentrada,hora_desalida,precio,parqueo_control_pagos,estado) => {

 
    const sql =  `
    INSERT INTO servicios(
       id_servicio ,
       id_parqueo,
       direccion,
       nombre_parqueo,
       imagenes, 
       id_usuario,
       nombre_usuario,
       telefono,
       imagen_auto,
       placa_auto,
       fecha,
       hora_deentrada,
       hora_desalida,
       precio,
       parqueo_control_pagos,
       estado
   )
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16) RETURNING id
    `; 

    //retornar 1 valor o ninguno
    return db.oneOrNone(sql, [
       id_servicio ,
       id_parqueo,
       direccion,
       nombre_parqueo,
       imagenes, 
       id_usuario,
       nombre_usuario,
       telefono,
       imagen_auto,
       placa_auto,
       fecha,
       hora_deentrada,
       hora_desalida,
       precio,
       parqueo_control_pagos,
       estado
    ]);
}





 //Actualizar los campos cuando por medio del QR ya fue el creado el servicio


 Adminservicio.updateqr = (adminservicio) =>{

    const sql = `
    UPDATE 
       servicios_admin
    SET 
    id_parqueo=$2,
    direccion=$3,
    nombre_parqueo=$4,
    imagenes=$5, 
    id_usuario=$6,
    nombre_usuario=$7,
    telefono=$8,
    modelo_auto=$9,
    placa_auto=$10,
    fecha=$11,
    hora_deentrada=$12,
    hora_desalida=$13,
    precio=$14,
    parqueo_control_pagos=$15
    WHERE
        id_servicio = $1
        `; 

        return db.none(sql, [
            adminservicio.id_servicio ,
            adminservicio.id_parqueo,
            adminservicio.direccion,
            adminservicio.nombre_parqueo,
            adminservicio.imagenes, 
            adminservicio.id_usuario,
            adminservicio.nombre_usuario,
            adminservicio.telefono,
            adminservicio.modelo_auto,
            adminservicio.placa_auto,
            adminservicio.fecha,
            adminservicio.hora_deentrada,
            adminservicio.hora_desalida,
            adminservicio.precio,
            adminservicio.parqueo_control_pagos,
        ]);
 }


 
 Adminservicio.updateplaca = (placa_auto,id_parqueo) =>{

    const sql = `
    UPDATE 
    servicios
 SET 
 estado='finalizado'
 WHERE
     placa_auto = $1 AND id_parqueo=$2
        `; 


        return db.oneOrNone(sql, [
             placa_auto ,
             id_parqueo,
        ]);


 }




 //Actualziar en admin servicios a la hora de registrar en la app (junto con el registro de serviciones normales)

 
Adminservicio.update = (adminservicio) =>{

    const sql = `
    UPDATE 
       servicios_admin
    SET 
    hora_desalida=$2,
    precio=$3
    WHERE
        id_servicio = $1
        `; 

        return db.none(sql, [
            adminservicio.id_servicio ,
            adminservicio.hora_desalida,
            adminservicio.precio,
        ]);
 }


 Adminservicio.updatetrue = (adminservicio) =>{

    const sql = `
    UPDATE 
       servicios
    SET 
    hora_desalida=$2,
    precio=$3,
    estado='Pagado'
    WHERE
        id_servicio = $1
        `; 

        return db.none(sql, [
            adminservicio.id_servicio ,
            adminservicio.hora_desalida,
            adminservicio.precio,
        ]);
 }


 Adminservicio.findByUser = (id_usuario) => {
    const sql = `
    SELECT
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
    FROM
        servicios_admin
    WHERE
        id_usuario = $1
	ORDER BY id DESC 
    `;

    return db.manyOrNone(sql, id_usuario);
}


Adminservicio.findByPark = (id_parqueo) => {
    const sql = `
    SELECT
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
    FROM
        servicios_admin
    WHERE
        id_parqueo = $1
	ORDER BY id DESC 
    `;

    return db.manyOrNone(sql, id_parqueo);
}

//Obtener servicios por parque con imagen de vehiculo



Adminservicio.findByPark = (id_parqueo) => {
    const sql = `
    SELECT
    id_servicio ,
      id_parqueo,
      direccion,
      nombre_parqueo,
      imagenes, 
      id_usuario ,
      nombre_usuario,
      users.telefono,
      users.modelo_auto,
      users.placa_auto,
      fecha,
      hora_deentrada,
      hora_desalida,
      precio,
      parqueo_control_pagos,
      users.imagen_auto
  FROM 
      servicios_admin, users 
  WHERE
       CAST ( id_usuario AS INTEGER) =  users.id  AND id_parqueo = $1
  ORDER BY servicios_admin.id DESC  
    `;

    return db.manyOrNone(sql, id_parqueo);
}


Adminservicio.findByParkActuales = (id_parqueo) => {
    const sql = `
    SELECT
    id_servicio ,
      id_parqueo,
      direccion,
      nombre_parqueo,
      imagenes, 
      id_usuario ,
      nombre_usuario,
      users.telefono,
      users.modelo_auto,
      users.placa_auto,
      fecha,
      hora_deentrada,
      hora_desalida,
      precio,
      parqueo_control_pagos,
      users.imagen_auto
  FROM 
      servicios_admin, users 
  WHERE
       CAST ( id_usuario AS INTEGER) =  users.id  AND id_parqueo = $1 AND precio='Por Definir'
  ORDER BY servicios_admin.id DESC  
    `;

    return db.manyOrNone(sql, id_parqueo);
}


Adminservicio.findhistoria = (id_parqueo) => {
    const sql = `
    SELECT
    id_servicio ,
      id_parqueo,
      direccion,
      nombre_parqueo,
      imagenes, 
      id_usuario ,
      nombre_usuario,
      servicios.imagen_auto   ,
         servicios.placa_auto,
      users.telefono,
      fecha,
      hora_deentrada,
      hora_desalida,
      precio,
      parqueo_control_pagos,
      estado
  FROM 
      servicios, users 
  WHERE
       CAST ( id_usuario AS INTEGER) =  users.id  AND id_parqueo = $1 
  ORDER BY servicios.id DESC  
    `;

    return db.manyOrNone(sql, id_parqueo);
}

Adminservicio.findhistoriaactuales = (id_parqueo) => {
    const sql = `
    SELECT
    id_servicio ,
      id_parqueo,
      direccion,
      nombre_parqueo,
      imagenes, 
      id_usuario ,
      nombre_usuario,
      servicios.imagen_auto   ,
         servicios.placa_auto,
      users.telefono,
      fecha,
      hora_deentrada,
      hora_desalida,
      precio,
      parqueo_control_pagos,
      estado
  FROM 
      servicios, users 
  WHERE
       CAST ( id_usuario AS INTEGER) =  users.id  AND id_parqueo = $1 AND precio='Por Definir'
  ORDER BY servicios.id DESC  
    `;

    return db.manyOrNone(sql, id_parqueo);
}








Adminservicio.findService = (id_servicio) => {
    const sql = `
	select Count(*) 
	as servicio_bool 
	from servicios_admin 
	where id_servicio=$1 
    `;
    return db.oneOrNone(sql, id_servicio);
}


Adminservicio.findServicefinish = (id_servicio) => {
    const sql = `
	select Count(*) 
	as servicio_bool 
	from servicios_admin 
	where id_servicio=$1 AND precio='Por Definir'
    `;
    return db.oneOrNone(sql, id_servicio);


}












module.exports = Adminservicio;