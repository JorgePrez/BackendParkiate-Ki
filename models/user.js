//referencia a la tabla users pero en singular 

const db = require('../config/config');
const crypto = require('crypto');




const User = {};  //mismo nombre que el modelo solo que primera mayuscula


User.getAll = () => {
    // con `` se puede usar ${}
    const sql = `
    SELECT 
    * 
    FROM 
    users
    `;

    return db.manyOrNone(sql); //retornmar muchos o ningun usuario (en caso que la tabla este vacio)
    //es decir que nos retorna un arreglo []

}

User.findByid = (id,callback) => {
    const sql =  `
    SELECT 
    id,
   email,
   nombre,
   telefono,
   imagen,
   password,
   session_token,
   modelo_auto,
   placa_auto,
   imagen_auto,
   tipo_auto
FROM
   users
WHERE 
   id =$1
     `; 

 return db.oneOrNone(sql, id).then(user =>{callback(null,user); })    


}

User.findByUserId = (id) => {
    const sql = `
    SELECT 
    id,
   email,
   nombre,
   telefono,
   imagen,
   password,
   session_token,
   modelo_auto,
   placa_auto,
   imagen_auto,
   tipo_auto
FROM
   users
WHERE 
   id =$1
    `
    return db.oneOrNone(sql, id);
}


User.findByEmail = (email) => {

    const sql =  `
    SELECT 
    id,
   email,
   nombre,
   telefono,
   imagen,
   password,
   session_token,
   modelo_auto,
   placa_auto,
   imagen_auto,
   tipo_auto
FROM
   users
WHERE 
   email = $1    
        `; 
        return db.oneOrNone(sql,email);
  

}


User.create = (user) => {

    const myPasswordHashed  = crypto.createHash('md5').update(user.password).digest('hex');
    user.password = myPasswordHashed;

 
     const sql =  `
 INSERT INTO users(
     email ,
     nombre,
     telefono,
     imagen,
     password, 
     creado ,
     actualizado,
     modelo_auto,
     placa_auto,
     imagen_auto,
     tipo_auto
 )
 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING id
     `; 
 
     //retornar 1 valor o ninguno
     return db.oneOrNone(sql, [
         user.email,
         user.nombre,
         user.telefono,
         user.imagen,
         user.password,
         new Date(),
         new Date(),
         user.modelo_auto,
         user.placa_auto,
         user.imagen_auto,
         user.tipo_auto
     ]);
 }


 




 User.update = (user) =>{

    const sql = `
    UPDATE 
       users
    SET 
        email = $2,
        nombre = $3,
        telefono = $4, 
        imagen =$5
    WHERE
        id = $1
        `; 

        return db.none(sql, [
            user.id,
            user.email,
            user.nombre,
            user.telefono,
            user.imagen,
        ]);
 }


 User.updateauto = (user) =>{

    const sql = `
  
    UPDATE 
       users
    SET 
        modelo_auto = $2,
        placa_auto = $3,
        imagen_auto = $4, 
        tipo_auto =$5
    WHERE
        id = $1
        `; 

        return db.none(sql, [
            user.id,
            user.modelo_auto,
            user.placa_auto,
            user.imagen_auto,
            user.tipo_auto,
        ]);
 }


User.isPasswordMatched = (userPassword , hash) =>{
    const myPasswordHashed  = crypto.createHash('md5').update(userPassword).digest('hex');
    if(myPasswordHashed=== hash ){
        return true;
    }
    return false;
}


module.exports = User;