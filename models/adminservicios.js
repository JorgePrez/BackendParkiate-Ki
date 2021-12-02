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


 //creando parqueos

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





module.exports = Adminservicio;