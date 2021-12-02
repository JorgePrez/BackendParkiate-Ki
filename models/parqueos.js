const db = require('../config/config');




const Parqueo = {};  //mismo nombre que el modelo solo que primera mayuscula




//Obteniendo historial de parqueos
Parqueo.findByKeyWord = (akeyword) => {
    const sql = `
    SELECT
        id_parqueo,
        id_duenio,
        nombre_empresa,
		direccion,
		capacidad_maxima,
		media_hora,
		hora,
		dia,
		mes,
		lunes_apertura,
		lunes_cierre,
		domingo_apertura,
		domingo_cierre,
		detalles,
		imagenes,
		latitude,
		longitude,
		martes_apertura,
		martes_cierre,
		miercoles_apertura,
		miercoles_cierre,
		jueves_apertura,
		jueves_cierre,
		viernes_apertura,
		viernes_cierre,
		sabado_apertura,
		sabado_cierre,
		control_pagos
    FROM
        parqueo
 
    WHERE
        nombre_empresa ILIKE $1 OR direccion ILIKE $1
    `;

    return db.manyOrNone(sql, akeyword);
}


Parqueo.findPrize = (id_parqueo) => {
    const sql = `
    SELECT
        media_hora ,
        hora
    FROM
        parqueo
    WHERE
        id_parqueo = $1
    `;

    return db.oneOrNone(sql, id_parqueo);
}


Parqueo.findSlots = (id_parqueo) => {
    const sql = `
	select Count(*) 
	as espacios_ocupados 
	from servicios_admin 
	where id_parqueo=$1 AND precio='Por Definir' 
    `;
    return db.oneOrNone(sql, id_parqueo);
}



 





module.exports = Parqueo;