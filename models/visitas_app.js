const db = require('../config/config');
const dayjs = require('dayjs');



const VisitasApp= {};  //mismo nombre que el modelo solo que primera mayuscula



 //Obtener visitsa por id_usuario   visitas/getbyuser


 VisitasApp.getbyuser = (id_usuario) => {
    const sql = `
    select 
     foto_auto_entrada as img_auto,
     deteccion_entrada_salida as numero_placa, 
 tiempo_total ,
   hora_deteccion_entrada as timestamp_entrada,
   hora_deteccion_salida as timestamp_salida ,
   email,
   telefono,
   id_entrada_salida as id_visita,
   nombre_empresa as nombre_parqueo,
   direccion,
   imagenes as imagen_parqueo,
   control_pagos as tipo_registro
   from 
   placas_entrada_salida,
   placas_entrada,
   placas_salida,
   parqueo,
   usuarios_app
   where placas_entrada_salida.id_usuario_app= CAST ($1 AS TEXT) 
   and id_deteccion_entrada=id_placa_entrada and id_deteccion_salida=id_placa_salida
   and placas_entrada_salida.id_parqueo=parqueo.id_parqueo
   and id_usuario_app= CAST (usuarios_app.id AS TEXT)
   order by hora_deteccion_salida desc
    `;

    return db.manyOrNone(sql, id_usuario);
}


VisitasApp.getmostrecent = (id_usuario) => {
    const sql = `
    select 
     foto_auto_entrada as img_auto,
     deteccion_entrada_salida as numero_placa, 
 tiempo_total ,
   hora_deteccion_entrada as timestamp_entrada,
   hora_deteccion_salida as timestamp_salida ,
   email,
   telefono,
   id_entrada_salida as id_visita,
   nombre_empresa as nombre_parqueo,
   direccion,
   imagenes as imagen_parqueo,
   control_pagos as tipo_registro,
   parqueo.id_parqueo
   from 
   placas_entrada_salida,
   placas_entrada,
   placas_salida,
   parqueo,
   usuarios_app
   where placas_entrada_salida.id_usuario_app= CAST ($1 AS TEXT) 
   and id_deteccion_entrada=id_placa_entrada and id_deteccion_salida=id_placa_salida
   and placas_entrada_salida.id_parqueo=parqueo.id_parqueo
   and id_usuario_app= CAST (usuarios_app.id AS TEXT)
   order by hora_deteccion_salida desc limit 1
    `;

    return db.manyOrNone(sql, id_usuario);
}


 //Obtener visitas por id_parqueo   visitas/getbypark
 VisitasApp.getbypark = (id_parqueo) => {
    const sql = `
    select 
 foto_auto_entrada as img_auto,
 deteccion_entrada_salida as numero_placa, 
tiempo_total ,
hora_deteccion_entrada as timestamp_entrada,
hora_deteccion_salida as timestamp_salida ,
email,
telefono,
id_entrada_salida as id_visita,
nombre_empresa as nombre_parqueo,
direccion,
imagenes as imagen_parqueo,
control_pagos as tipo_registro
from 
placas_entrada_salida,
placas_entrada,
placas_salida,
parqueo,
usuarios_app
where placas_entrada_salida.id_parqueo=$1
and id_deteccion_entrada=id_placa_entrada and id_deteccion_salida=id_placa_salida
and placas_entrada_salida.id_parqueo=parqueo.id_parqueo
and id_usuario_app= CAST (usuarios_app.id AS TEXT)
order by hora_deteccion_salida desc

    `;

    return db.manyOrNone(sql, id_parqueo);
}


 //Obtener visitas por id_visita   visitas/getbyid_visita


 VisitasApp.getbyid_visitas = (id_usuario,id_visita) => {
    const sql = `
         DROP view IF EXISTS vista   ;
        CREATE VIEW vista as
         select 
          foto_auto_entrada as img_auto,
          deteccion_entrada_salida as numero_placa, 
      tiempo_total ,
        hora_deteccion_entrada as timestamp_entrada,
        email,
        telefono,
        id_entrada_salida as id_visita,
        nombre_empresa as nombre_parqueo,
        direccion,
        latitude,
        longitude,
        imagenes as imagen_parqueo,
        control_pagos as tipo_registro
        from 
        placas_entrada_salida,
        placas_entrada,
        parqueo,
        usuarios_app
        where placas_entrada_salida.id_usuario_app= CAST ($1 AS TEXT) 
        and id_deteccion_entrada=id_placa_entrada 
        and placas_entrada_salida.id_parqueo=parqueo.id_parqueo
        and id_usuario_app= CAST (usuarios_app.id AS TEXT);
        select * from vista where id_visita=$2;
    `;

    return db.oneOrNone(sql, [
		id_usuario,
	    id_visita
	]);
}

//Obtener visitas actuales (usuarios dentro de parqueo)
VisitasApp.obteniendoactuales = (id_parqueo) => {
    const sql = `
    select 
    foto_auto_entrada as img_auto,
    deteccion_entrada_salida as numero_placa, 
      tiempo_total ,
  hora_deteccion_entrada as timestamp_entrada,
  email,
  telefono,
  id_entrada_salida as id_visita,
  nombre_empresa as nombre_parqueo,
  direccion,
  imagenes as imagen_parqueo,
  control_pagos as tipo_registro
  from 
  placas_entrada_salida,
  placas_entrada,
  parqueo,
  usuarios_app
  where placas_entrada_salida.id_parqueo=$1
  and tiempo_total='NA'
  and id_deteccion_entrada=id_placa_entrada 
  and placas_entrada_salida.id_parqueo=parqueo.id_parqueo
  and id_usuario_app= CAST (usuarios_app.id AS TEXT)
  order by hora_deteccion_entrada desc
    `;

    return db.manyOrNone(sql, id_parqueo);
}

//OBTENER TODO EL LISTADO DE VISITAS ACTUALES


VisitasApp.allvisitas = (id_parqueo) => {
    const sql = `
    select 
    foto_auto_entrada as img_auto,
    deteccion_entrada_salida as numero_placa, 
tiempo_total ,

  id_usuario_app  ,
  hora_deteccion_entrada as timestamp_entrada,
  hora_deteccion_salida as timestamp_salida ,

  id_entrada_salida as id_visita,
  nombre_empresa as nombre_parqueo,
  direccion,
  imagenes as imagen_parqueo,
  control_pagos as tipo_registro
  from 
  placas_entrada_salida,
  placas_entrada,
  placas_salida,
  parqueo
  where placas_entrada_salida.id_parqueo=$1 
  and id_deteccion_entrada=id_placa_entrada and id_deteccion_salida=id_placa_salida
  and placas_entrada_salida.id_parqueo=parqueo.id_parqueo
  order by hora_deteccion_salida desc
    `;

    return db.manyOrNone(sql, id_parqueo);
}


VisitasApp.allvisitasactual = (id_parqueo) => {
    const sql = `
    select 
    foto_auto_entrada as img_auto,
    deteccion_entrada_salida as numero_placa, 
      tiempo_total ,
      id_usuario_app,
  hora_deteccion_entrada as timestamp_entrada,
  id_entrada_salida as id_visita,
  nombre_empresa as nombre_parqueo,
  direccion,
  imagenes as imagen_parqueo,
  control_pagos as tipo_registro
  from 
  placas_entrada_salida,
  placas_entrada,
  parqueo
  where placas_entrada_salida.id_parqueo=$1 and tiempo_total='NA'
  and id_deteccion_entrada=id_placa_entrada 
  and placas_entrada_salida.id_parqueo=parqueo.id_parqueo
  order by hora_deteccion_entrada desc
    `;

    return db.manyOrNone(sql, id_parqueo);
}
























module.exports = VisitasApp;