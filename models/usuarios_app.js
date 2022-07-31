//referencia a la tabla users pero en singular 

const db = require('../config/config');
const crypto = require('crypto');

const dayjs = require('dayjs');
 




const Usuario_app = {};  //mismo nombre que el modelo solo que primera mayuscula

//let today = dayjs();




///////////////////////////////////////////////Register -> usuarios_app/register/////////////////////////////// 
Usuario_app.register = (usuario_app) => {

    const myPasswordHashed  = crypto.createHash('md5').update(usuario_app.password).digest('hex');
    usuario_app.password = myPasswordHashed;
    let today = dayjs();
    usuario_app.timestamp_creacion =today.format("YYYY-MM-DD h:mm:ss") ;
    usuario_app.foto_perfil='https://res.cloudinary.com/parkiate-ki/image/upload/v1658885293/detalles/profile_f9zx3b_caevlc.png';
    usuario_app.id_visita_actual='N';

            const sql =  `
        INSERT INTO usuarios_app(  email, password, nombre, telefono, foto_perfil, timestamp_creacion,id_visita_actual)
        VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id
            `; 
 
     //retornar 1 valor o ninguno
     return db.oneOrNone(sql, [
        usuario_app.email,
        usuario_app.password,
        usuario_app.nombre,
        usuario_app.telefono,
        usuario_app.foto_perfil,
        usuario_app.timestamp_creacion,
        usuario_app.id_visita_actual

   
     ]);



 }

///////////////////////////////////////////////////Login -> usuarios_app/login///////////////////////////////



Usuario_app.findByEmail = (email) => {

            const sql =  `
            SELECT id, email, password, nombre, telefono, foto_perfil, timestamp_creacion,id_visita_actual
            FROM usuarios_app 
            WHERE email = $1   
                `; 
        return db.oneOrNone(sql,email);
  

}




    Usuario_app.isPasswordMatched = (userPassword , hash) =>{
        const myPasswordHashed  = crypto.createHash('md5').update(userPassword).digest('hex');
        if(myPasswordHashed=== hash ){
            return true;
        }
        return false;
    }


    ///////////////////////////////////////////////////user by id -> usuarios_app/getuser///////////////////////////////


    Usuario_app.getUser = (id) => {

        const sql =  `
        SELECT id, email, password, nombre, telefono, foto_perfil, timestamp_creacion,id_visita_actual
        FROM usuarios_app 
        WHERE id = $1   
            `; 
    return db.oneOrNone(sql,id);


}


//////////////////////////////Actualizar datos de usuario -> usuarios_app/modifyuser


Usuario_app.update = (user) =>{

    const sql = `
    UPDATE 
       usuarios_app
    SET 
        nombre = $2,
        telefono = $3, 
        foto_perfil =$4,
        id_visita_actual=$5
    WHERE
        id = $1
        `; 

        return db.none(sql, [
            user.id,
            user.nombre,
            user.telefono,
            user.foto_perfil,
            user.id_visita_actual
        ]);
 }





    



module.exports = Usuario_app;