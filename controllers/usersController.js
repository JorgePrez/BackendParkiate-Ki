
//el controlador debe tener el mismo nombre que el modelo solo que en plural usersController

const User = require('../models/user'); //const modelo mayuscula primer User
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const { updateauto } = require('../models/user');

module.exports = {
    
    async getAll(req,res,next){

        try{
            const data = await User.getAll(); //obtneido todos los usuarios que nos devuelve la consulta, 
            //await espera que se haga la consulta y despues sigue econ el condigo
            console.log(`Usuarios: ${data}`);
            return res.status(201).json(data);  //http response : Cidugis de estadi de resoyestas HTTP

        }
    
    catch(error){
        console.log(`Error: ${error}`);
        return res.status(501).json({

            success : false,
            message: 'Error al obtener los usuarios'
        }
        );
    }
},


async register(req, res, next) {

try {
    const user = req.body; //capturando los datos de un usuario, lo qu el cluiente nos envia en parametros
    const data = await User.create(user);

    return res.status(201).json({
        success : true,
        message: 'El registro se realizo correctamente',
        data: data.id //en el modelo establecimos que una vez que se almacene que nos retorno el id (RETURNING ID)


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

async findById(req, res, next) {
    try {
       // const id = req.params.id;
        const id_usuario= req.body.id_usuario;
        const data = await User.findByUserId(id_usuario);    
        console.log(`Usuario: ${data}`);
        //return res.status(201).json(data);
        return res.status(201).json({
            message: 'Datos de usuarios obtenidos correctamente',
            data: data ,
            success: true,
                                    
    
    
        });
        
    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Error al obtener el usuario por ID'
        });
    }
},


async login(req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const myUser = await User.findByEmail(email);

        if (!myUser) {
            return res.status(401).json({
                success: false,
                message: 'El email no fue encontrado'
            });
        }

        if (User.isPasswordMatched(password, myUser.password)) {
            const token = jwt.sign({id: myUser.id, email: myUser.email}, keys.secretOrKey, {
                // expiresIn: (60*60*24) // 1 HORA
            });
              //ESTA ES LA INFORMACION QUE LE RETONARMOS AL USUARIO UNA VEZ QUE EL CLIENTE HAGA LOGIN

            const data = {
                id: myUser.id,
                email: myUser.email,
                nombre: myUser.nombre,
                telefono: myUser.telefono,
                imagen: myUser.imagen,
                session_token : `JWT ${token}`,
                modelo_auto: myUser.modelo_auto,
                placa_auto: myUser.placa_auto,
                imagen_auto: myUser.imagen_auto,
                tipo_auto: myUser.tipo_auto
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

        await User.update(user);

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

async updateauto(req, res, next) {
    try {

        console.log(req.body);
        
        const user = req.body;
    

        await User.updateauto(user);

        return res.status(201).json({
            success: true,
            message: 'Los datos del usuario(vehiculo) se actualizaron correctamente'
        });

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Hubo un error con la actualizacion del vehiculo del usuario',
            error: error
        });
    }
},





   




};