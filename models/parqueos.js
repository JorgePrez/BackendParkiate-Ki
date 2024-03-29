const db = require('../config/config');
const crypto = require('crypto');


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


//Obteniendo todos los slots de un parqueo
Parqueo.allslots = (id_parqueo) => {
    const sql = `
    SELECT
	id_slot, codigo, estado, reservas, img_slot, timestamp_cambio_ocupado, timestamp_cambio_vacio
    FROM  slots WHERE id_parqueo = $1  ORDER by codigo
    `;

    return db.manyOrNone(sql, id_parqueo);
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


Parqueo.findbyidFirebase = (id_parqueo) => {
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
	control_pagos,
	id_firebase
    FROM
        parqueo
    WHERE
        id_parqueo = $1
    `;

    return db.oneOrNone(sql, id_parqueo);
}


Parqueo.findActualVisit = (id_entrada_salida) => {
    const sql = `
	SELECT 
      parqueo.id_parqueo,
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
  control_pagos,
  id_firebase
    from parqueo, placas_entrada_salida where parqueo.id_parqueo=placas_entrada_salida.id_parqueo
    AND id_entrada_salida=$1
    `;

    return db.oneOrNone(sql, id_entrada_salida);
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
	correoo
	 from duenio 
	 where correoo=$1

    `;
    return db.oneOrNone(sql, correoo);


}



Parqueo.UserbyId = (id_duenio) => {
    const sql = `
	select id_duenio,
	email,
	id_parqueo
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

//Obteniendo la ultimas placas 

/*
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

}*/


//Obtener placas de entrada
Parqueo.placaentrada = (id_parqueo) => {
    const sql = `
	select id_placa_entrada,link_entrada 
	from 
	placas_entrada 
	where 
	hora_deteccion_entrada =(select max(hora_deteccion_entrada) from placas_entrada) AND id_parqueo=$1
    `;
	return db.oneOrNone(sql, id_parqueo);


}

//Obtener placas de salida

Parqueo.placasalida = (id_parqueo) => {
    const sql = `
	select id_placa_salida,link_salida
	 from
	  placas_salida 
	  where hora_deteccion_salida = (select max(hora_deteccion_salida) from placas_salida) 
	AND id_parqueo=$1
    `;
	return db.oneOrNone(sql, id_parqueo);


}

// SEGUN UN ID DE UNA IMAGEN RETORNANA UN TEXTO EL CUAL CORRESPONDE AL NUMERO DE PLACA

Parqueo.deteccion_entrada = (id_placa_entrada,numerodeplaca) =>{

    const sql = `
    UPDATE 
    placas_entrada
 SET 
 deteccion_entrada=$2
 WHERE
     id_placa_entrada = $1 
        `; 


        return db.oneOrNone(sql, [
             id_placa_entrada ,
             numerodeplaca,
        ]);


 }


 Parqueo.deteccion_salida = (id_placa_salida,numerodeplaca) =>{

    const sql = `
    UPDATE 
    placas_salida
 SET 
 deteccion_salida=$2
 WHERE
     id_placa_salida = $1 
        `; 


        return db.oneOrNone(sql, [
             id_placa_salida ,
             numerodeplaca,
        ]);


 }




 //-----------------------------LOGIN----------------------------------------

				//Datos de adminitrador por email

				Parqueo.findByEmail = (email) => {

					const sql =  `select id_duenio,email,password,id_parqueo from duenio where email=$1`; 
					return db.oneOrNone(sql,email);
				

				}


				//Funcion para comprobar contraseña de usuario administrador de parqueo

				Parqueo.isPasswordMatched = (adminPassword , hash) =>{
					const myPasswordHashed  = crypto.createHash('md5').update(adminPassword).digest('hex');
					if(myPasswordHashed=== hash ){
						return true;
					}
					return false;
				}
//----------------------------------------------------------------------------------------------




//RUTA PARA OBTENER SLOTS DE PARQUEO



Parqueo.getslots = (id_parqueo) => {
    const sql = `	
select codigo,estado,img_slot,timestamp_cambio_ocupado, timestamp_cambio_vacio  from slots where id_parqueo=$1
ORDER BY codigo
    `;
    return db.manyOrNone(sql, id_parqueo);


}




 





module.exports = Parqueo;