
//el controlador debe tener el mismo nombre que el modelo solo que en plural usersController

const Parqueo = require('../models/parqueos');
const { findPrize } = require('../models/parqueos');
const Parqueos = require('../models/parqueos'); //const modelo mayuscula primer User


module.exports = {

    async getAll(req,res,next){

        try{
            const data = await Parqueos.getAll(); //obtneido todos los usuarios que nos devuelve la consulta, 
            //await espera que se haga la consulta y despues sigue econ el condigo
            console.log(`Parqueos: ${data}`);
            return res.status(201).json(data);  //http response : Cidugis de estadi de resoyestas HTTP

        }
    
    catch(error){
        console.log(`Error: ${error}`);
        return res.status(501).json({

            success : false,
            message: 'Error al obtener toodos los parqueos'
        }
        );
    }
},





async getCoincidences(req, res, next) {


        try {
            const akeyword= req.body.akeyword;

            const data = await Parqueos.findByKeyWord(akeyword);
            return res.status(201).json(data);

        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                message: `Error al listar las coincidencias de parqueos `,
                success: false,
                error: error
            });
        
    }
    
    },

    async findPrize(req, res, next) {
        try {
           // const id = req.params.id;
            const id_parqueo= req.body.id_parqueo;
            const data = await Parqueos.findPrize(id_parqueo);    
            console.log(`Admin Servicio: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Datos de parqueo obtenidos correctamente',
                data: data ,
                success: true,
                                        
        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener tarifas'
            });
        }
    },


  
    //obteniendo todos los slots de un parqueo
    //CONTROLADOR DE MODELO: Parqueo.allslots
    async allslotscontroller(req, res, next) {
        try {
           // const id = req.params.id;

           const id_parqueo= req.body.id_parqueo;
           const data = await Parqueo.allslots(id_parqueo);
           return res.status(201).json(data);

         
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener parqueo',
                error: error

            });
        }
    },



    async findIdpark(req, res, next) {
        try {
           // const id = req.params.id;
            const id_parqueo= req.body.id_parqueo;
            const data = await Parqueos.findbyid(id_parqueo);    
            console.log(`Parqueo: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Datos de parqueo obtenidos correctamente',
                data: data ,
                success: true,
                                        
        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener parqueo'
            });
        }
    },


    
    async findIdparkfirebase(req, res, next) {
        try {
           // const id = req.params.id;
            const id_parqueo= req.body.id_parqueo;
            const data = await Parqueos.findbyidFirebase(id_parqueo);    
            console.log(`Parqueo: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Datos de parqueo obtenidos correctamente',
                data: data ,
                success: true,
                                        
        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener parqueo'
            });
        }
    },


    async findId_entrada_salida(req, res, next) {
        try {
           // const id = req.params.id;
            const id_entrada_salida= req.body.id_entrada_salida;
            const data = await Parqueos.findActualVisit(id_entrada_salida);    
            console.log(`Parqueo: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Datos de parqueo obtenidos correctamente',
                data: data ,
                success: true,
                                        
        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener parqueo'
            });
        }
    },
    


    async findsreviews(req, res, next) {
        try {
           // const id = req.params.id;
            const id_parqueo= req.body.id_parqueo;
            const nombre_usuario = req.body.nombre_usuario
            const data = await Parqueos.findreviews(id_parqueo,nombre_usuario);    
            console.log(`Cantiad de reseñas: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Datos de parqueo obtenidos correctamente',
                data: data ,
                success: true,
                                        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener tarifas'
            });
        }
    },


    async findslot(req, res, next) {
        try {
           // const id = req.params.id;
            const id_parqueo= req.body.id_parqueo;
            const data = await Parqueos.findSlots(id_parqueo);    
            console.log(`Admin Servicio: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Datos de parqueo obtenidos correctamente',
                data: data ,
                success: true,
                                        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener tarifas'
            });
        }
    },


    async findsuser(req, res, next) {
        try {
           // const id = req.params.id;
            const id_parqueo= req.body.id_parqueo;
            const contrasenia= req.body.contrasenia;
            const data = await Parqueos.findUsers(id_parqueo,contrasenia);    
            console.log(`Cantidad de usuarios: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Datos de parqueo obtenidos correctamente',
                data: data ,
                success: true,
                                        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener usuarios'
            });
        }
    },

    async findsamountpark(req, res, next) {
        try {
           // const id = req.params.id;
            const id_duenio= req.body.id_duenio;
            const id_parqueo= req.body.id_parqueo;
            const data = await Parqueos.findParks(id_duenio,id_parqueo);    
            console.log(`Cantidad de parqueos: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Datos de parqueo obtenidos correctamente',
                data: data ,
                success: true,
                                        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener usuarios'
            });
        }
    },


    async findadminbyemail(req, res, next) {
        try {
           // const id = req.params.id;
            const correoo= req.body.correoo;
            const data = await Parqueos.UserbyCorreo(correoo);    
            console.log(`Cantidad de parqueos: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Datos de duenio obtenidos correctamente',
                data: data ,
                success: true,
                                        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener usuarios'
            });
        }
    },



    async findadminbyid(req, res, next) {
        try {
           // const id = req.params.id;
            const id_duenio= req.body.id_duenio;
            const data = await Parqueos.UserbyId(id_duenio);    
            console.log(`Admin: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Datos de duenio obtenidos correctamente',
                data: data ,
                success: true,
                                        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener duenio'
            });
        }
    },


    async findplacaentrada(req, res, next) {
        try {
           const id_parqueo = req.query.id_parqueo;
            const data = await Parqueos.placaentrada(id_parqueo);    
            console.log(`Admin: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Ultima placa de entrada (link obtenido)',
                data: data ,
                success: true,
                                        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener placa'
            });
        }
    },


    async findplacasalida(req, res, next) {
        try {
           const id_parqueo = req.query.id_parqueo;
            const data = await Parqueos.placasalida(id_parqueo);    
            console.log(`Admin: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                message: 'Ultima placa de entrada (link obtenido)',
                data: data ,
                success: true,
                                        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener placa'
            });
        }
    },


    async findplacaentradaURL(req, res, next) {
        try {
           const id_parqueo = req.query.id_parqueo;
            const data = await Parqueos.placaentrada(id_parqueo);    
            console.log(`Admin: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({data
                                        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener placa'
            });
        }
    },


    async detectplacaentrada(req, res, next) {
        try {
           const id_placa_entrada = req.query.id_placa;
           const numerodeplaca = req.query.numero_placa;

            const data = await Parqueos.deteccion_entrada(id_placa_entrada,numerodeplaca);    
            console.log(`Admin: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                                        
        
            });
          
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al registrar placa'
            });
        }
    },


    async detectplacasalida(req, res, next) {
        try {
           const id_placa_salida = req.query.id_placa;
           const numerodeplaca = req.query.numero_placa;

            const data = await Parqueos.deteccion_salida(id_placa_salida,numerodeplaca);    
            console.log(`Admin: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({
                                        
        
            });
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al registrar placa'
            });
        }
    },
    async findplacasalidaURL(req, res, next) {
        try {
           const id_parqueo = req.query.id_parqueo;
            const data = await Parqueos.placasalida(id_parqueo);    
            console.log(`Admin: ${data}`);
            //return res.status(201).json(data);
            return res.status(201).json({data
                 
               
                                        
        
            });
            
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Error al obtener placa'
            });
        }
    },



    
    // Administrador haciendo login

    async login_admin(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;
    
            const myAdmin = await Parqueo.findByEmail(email);
    
            if (!myAdmin) {
                return res.status(401).json({
                    success: false,
                    message: 'El email no fue encontrado'
                });
            }
    
            if (Parqueo.isPasswordMatched(password, myAdmin.password)) {
              
    
                const data = {
                    id_duenio: myAdmin.id_duenio,
                    email: myAdmin.email,
                    id_parqueo: myAdmin.id_parqueo
                }
    
                return res.status(201).json({
                   // success: true,
                    data: data,
                    message: 'El administrador ha sido autenticado',
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


    async libresocupados(req, res, next) {


 
        try {
            const id_parqueo= req.body.id_parqueo;
            const data = await Parqueo.getslots(id_parqueo);
            return res.status(201).json(data);
    
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                message: `Error al listar los slots del parqueo`,
                success: false,
                error: error
            });
        
    }
    
    },



   


};