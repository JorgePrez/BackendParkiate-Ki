const db = require('../config/config');
const dayjs = require('dayjs');





const ReseniasApp = {};  //mismo nombre que el modelo solo que primera mayuscula



 //insertar reseña  resenias_app/create


 
 ReseniasApp.create = (resenia) => {

    let today = dayjs();
    resenia.timestamp_resenia =today.format("YYYY-MM-DD h:mm:ss") ;

 
    const sql =  `


    INSERT INTO resenias_app(
        id_usuario_movil, id_parqueo, timestamp_resenia, calificacion, comentario)
       VALUES ($1,$2,$3,$4,$5) returning id_resenias_app;
    `; 

    //retornar 1 valor o ninguno
    return db.oneOrNone(sql, [
       resenia.id_usuario_movil,
       resenia.id_parqueo,
       resenia.timestamp_resenia,
       resenia.calificacion, 
       resenia.comentario
    ]);
}

//resenias_app/getbypark

ReseniasApp.getbypark = (id_parqueo) => {
    const sql = `
    SELECT id_resenias_app, id_usuario_movil, id_parqueo, timestamp_resenia, calificacion, comentario
    FROM resenias_app WHERE id_parqueo= $1
     order by timestamp_resenia DESC;
    `;

    return db.manyOrNone(sql, id_parqueo);
}

//resenias_app/getfullreviews

ReseniasApp.getfullreviewsmodel = (id_parqueo) => {
    const sql = `
    select nombre AS nombre_usuario,foto_perfil as imagen_usuario, TO_CHAR(timestamp_resenia, 'DD/MM/YYYY') as fecha,calificacion,comentario,id_parqueo from usuarios_app, resenias_app where  usuarios_app.id=   CAST (resenias_app.id_usuario_movil  AS INTEGER) 
    and id_parqueo=$1 order by timestamp_resenia desc
    `;

    return db.manyOrNone(sql, id_parqueo);
}


//resenias_app/getreviews



ReseniasApp.countreviewpark = (id_usuario_movil,id_parqueo) => {
    const sql = `
	select Count(*) 
	as cantidad_resenias 
	from resenias_app 
	where id_usuario_movil=$1 AND id_parqueo=$2 
    `;
    return db.oneOrNone(sql, [
		id_usuario_movil,
	    id_parqueo
	]);

}


//resenias_app/getreview

ReseniasApp.getreview1 = (id_usuario_movil,id_parqueo) => {
    const sql = `
    SELECT id_resenias_app, id_usuario_movil, id_parqueo, timestamp_resenia, calificacion, comentario
	from resenias_app 
	where id_usuario_movil=$1 AND id_parqueo=$2 
    `;
    return db.oneOrNone(sql, [
		id_usuario_movil,
	    id_parqueo
	]);

}

//resewnias_app/updatereview

ReseniasApp.updatereview=  (id_usuario_movil,id_parqueo,calificacion,comentario) =>{


        let today = dayjs();
    timestamp_resenia =today.format("YYYY-MM-DD h:mm:ss") ;

    const sql = `
    UPDATE resenias_app
    SET  timestamp_resenia=$3, calificacion=$4, comentario=$5
    WHERE id_usuario_movil=$1 AND id_parqueo=$2;
        `; 


        return db.oneOrNone(sql, [
             id_usuario_movil ,
             id_parqueo,
             timestamp_resenia,
             calificacion,
             comentario
        ]);


 }


//getreviewController
   

   







module.exports = ReseniasApp