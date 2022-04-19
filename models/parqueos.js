const db = require('../config/config');




const Parqueo = {};  //mismo nombre que el modelo solo que primera mayuscula



//Obteniedo todos los parqueos

Parqueo.getAll = () => {
    // con `` se puede usar ${}
    const sql = `
    SELECT 
    * 
    FROM 
    parqueo
    `;

    return db.manyOrNone(sql); //retornmar muchos o ningun usuario
	// (en caso que la tabla este vacio)
    //es decir que nos retorna un arreglo []

}



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



Parqueo.findbyid = (id_parqueo) => {
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
        id_parqueo = $1
    `;

    return db.oneOrNone(sql, id_parqueo);
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


Parqueo.findreviews = (id_parqueo,nombre_usuario) => {
    const sql = `
	select Count(*) 
	as cantidad_resenias 
	from resenias 
	where id_parqueo=$1 AND nombre_usuario=$2 
    `;
    return db.oneOrNone(sql, [
		id_parqueo,
	    nombre_usuario,
	]);

}

Parqueo.findUsers = (correoo,contrasenia) => {
    const sql = `
	select Count(*) 
	as cantidad_espacios 
	from duenio 
	where correoo=$1 AND contrasenia=$2 
    `;
    return db.oneOrNone(sql, [
		correoo,
	    contrasenia,
	]);

}

Parqueo.UserbyCorreo = (correoo) => {
    const sql = `
	select id_duenio,
	nombre,
	dpi,
	nit,
	telefono,
	correoo
	 from duenio 
	 where correoo=$1

    `;
    return db.oneOrNone(sql, correoo);


}



Parqueo.UserbyId = (id_duenio) => {
    const sql = `
	select id_duenio,
	nombre,
	dpi,
	nit,
	telefono,
	correoo
	 from duenio 
	 where id_duenio=$1

    `;
    return db.oneOrNone(sql, id_duenio);


}

Parqueo.findParks = (id_duenio,id_parqueo) => {
    const sql = `
	select Count(*) 
	as cantidad_espacios 
	from duenio,parqueo
	where duenio.id_duenio=parqueo.id_duenio AND parqueo.id_duenio=$1 AND id_parqueo =$2
    `;
    return db.oneOrNone(sql, [
		id_duenio,
	    id_parqueo,
	]);

}









 





module.exports = Parqueo;