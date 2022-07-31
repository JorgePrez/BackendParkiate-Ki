const db = require('../config/config');




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
   where placas_entrada_salida.id_servicio_app= CAST ($1 AS TEXT) 
   and id_deteccion_entrada=id_placa_entrada and id_deteccion_salida=id_placa_salida
   and placas_entrada_salida.id_parqueo=parqueo.id_parqueo
   and id_servicio_app= CAST (usuarios_app.id AS TEXT)
   order by hora_deteccion_salida desc
    `;

    return db.manyOrNone(sql, id_usuario);
}

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
and id_servicio_app= CAST (usuarios_app.id AS TEXT)
order by hora_deteccion_salida desc

    `;

    return db.manyOrNone(sql, id_parqueo);
}



 //Obtener visitas por id_parqueo   visitas/getbypark







module.exports = VisitasApp;