const db = require('../config/config');




const Resenia = {};  //mismo nombre que el modelo solo que primera mayuscula



 //creando parqueos

 Resenia.create = (resenia) => {

 
     const sql =  `
     
 INSERT INTO resenias(
    nombre_usuario,
    imagen_usuario,
    fecha,
    calificacion,
    comentario,
    id_parqueo
)
VALUES ($1,$2,$3,$4,$5,$6) RETURNING id_resenias
     `; 
 
     //retornar 1 valor o ninguno
     return db.oneOrNone(sql, [
        resenia.nombre_usuario,
        resenia.imagen_usuario,
        resenia.fecha,
        resenia.calificacion, 
        resenia.comentario,
        resenia.id_parqueo

     ]);
 }


 //Obteniendo las reseñas por parqueo


 Resenia.findById = (id_parqueo) => {
    const sql = `
    SELECT
    nombre_usuario,
     imagen_usuario,
     fecha,
     calificacion,
      comentario, 
      id_parqueo
  
 FROM	 
      resenias
  WHERE
      id_parqueo = $1
  ORDER BY id_resenias DESC 
    `;

    return db.manyOrNone(sql, id_parqueo);
}







module.exports = Resenia;