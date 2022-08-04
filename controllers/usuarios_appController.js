
//el controlador debe tener el mismo nombre que el modelo solo que en plural usersController

const Usuario_app = require('../models/usuarios_app'); //const modelo mayuscula primer User
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = {



//////////////////////////////////    //Register -> usuarios_app/register ///////////////////////////////
    async register_controller(req, res, next) {

        try {
            const usuario_app = req.body; 
            const data = await Usuario_app.register(usuario_app);
        
            return res.status(201).json({
                success : true,
                message: 'El registro de usuario se realizo correctamente',
                data: data.id 
        
        
            });
            
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Hubo un error con el registro del usuario',
                error: error
        
            });
        }
        
        },



   /////////////////////////////////////// Login -> usuarios_app/login ///////////////////////////////////
   async login_controller(req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const myUsuarioapp = await Usuario_app.findByEmail(email);

        if (!myUsuarioapp) {
            return res.status(401).json({
                success: false,
                message: 'El email no fue encontrado'
            });
        }

        if (Usuario_app.isPasswordMatched(password, myUsuarioapp.password)) {
           
              //ESTA ES LA INFORMACION QUE LE RETONARMOS AL USUARIO UNA VEZ QUE EL CLIENTE HAGA LOGIN

            const data = {
                id: myUsuarioapp.id,
                email: myUsuarioapp.email,
                nombre: myUsuarioapp.nombre,
                telefono: myUsuarioapp.telefono,
                foto_perfil: myUsuarioapp.foto_perfil,
                timestamp_creacion: myUsuarioapp.timestamp_creacion,
                id_visita_actual: myUsuarioapp.id_visita_actual

            }

            return res.status(201).json({
               // success: true,
                data: data,
                message: 'El usuario ha sido autenticado',
                success: true,
            });
        }
        else {
            return res.status(401).json({
                success: false,
                message: 'La contraseña es incorrecta'
            });
        }

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Error al momento de hacer login',
            error: error
        });
    }
},     


    ///////////////////////////////////////////////////user by id -> usuarios_app/getuser///////////////////////////////


async getuserController(req, res, next) {
    try {
       // const id = req.params.id;
        const id_usuario= req.body.id_usuario;
        const data = await Usuario_app.getUser(id_usuario);    
        console.log(`Usuario: ${data}`);



        if (!data) {
            return res.status(401).json({
                success: false,
                message: 'Usuario con id no fue encontrado'
            });
        }
        else{
              //return res.status(201).json(data);
        return res.status(201).json({
            message: 'Datos de usuario obtenidos correctamente',
            data: data ,
            success: true,    
        });

        }

      
        
    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Error al obtener el usuario por ID'
        });
    }
},


    ///////////////////////////////////////////////////user by email -> usuarios_app/getuserbyemail///////////////////////////////


async getuserbyemailController(req, res, next) {
    try {
       // const id = req.params.id;
        const email= req.body.email;
        const data = await Usuario_app.findByEmail(email);    
        console.log(`Usuario: ${data}`);


        if (!data) {
            return res.status(401).json({
                success: false,
                message: 'Usuario con email no fue encontrado'
            });
        }
        else{
              //return res.status(201).json(data);
        return res.status(201).json({
            message: 'Datos de usuario obtenidos correctamente',
            data: data ,
            success: true,    
        });

        }

      
        
    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Error al obtener el usuario por email'
        });
    }
},



//// Actualizar datos de usuario -> usuarios_app/modifyuser

async update(req, res, next) {
    try {

        console.log(req.body);
        
        const user = req.body;
      //  console.log(`Datos enviados del usuario: ${JSON.stringify(user)}`);

      /*  const files = req.files;

        if (files.length > 0) {
            const pathImage = `image_${Date.now()}`; // NOMBRE DEL ARCHIVO
            const url = await storage(files[0], pathImage);

            if (url != undefined && url != null) {
                user.image = url;
            }
        }*/

        const data = await Usuario_app.update(user);


        return res.status(201).json({
            success: true,
            message: 'Los datos del usuario se actualizaron correctamente'
        });

    

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Hubo un error con la actualizacion de datos del usuario',
            error: error
        });
    }
},


async autosbyuserc(req, res, next) {


 
    try {
        const id_usuario= req.body.id_usuario;
        const data = await Usuario_app.getautosbyuser(id_usuario);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar los autos por usuario`,
            success: false,
            error: error
        });
    
}

},

    




   




};