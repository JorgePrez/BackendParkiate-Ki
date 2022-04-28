
//el controlador debe tener el mismo nombre que el modelo solo que en plural usersController

const Adminservicio = require('../models/adminservicios'); //const modelo mayuscula primer User


module.exports = {





async register(req, res, next) {

try {
    const adminservicio = req.body; //capturando los datos de un usuario, lo qu el cluiente nos envia en parametros
    const data = await Adminservicio.create(adminservicio);

    return res.status(201).json({ 
        success : true,
        message: 'El  servicio se registro correctamente',
        data: data.id//en el modelo establecimos que una vez que se almacene que nos retorno el id (RETURNING ID)

    });
    
} catch (error) {
    console.log(`Error: ${error}`);
    return res.status(501).json({
        success: false,
        message: 'Hubo un error con el registro del servicio',
        error: error

    });
}

},

async registerparams(req, res, next) {

    try {

        const id_servicio =req.query.id_servicio;


        const id_parqueo = req.query.id_parqueo;
        const direccion = req.query.direccion;
        const nombre_parqueo = req.query.nombre_parqueo;
        const imagenes = req.query.imagenes;
        const id_usuario = req.query.id_usuario;
        const nombre_usuario = req.query.nombre_usuario;
        const telefono = req.query.telefono;
        const modelo_auto = req.query.modelo_auto;
        const placa_auto = req.query.placa_auto;
        const fecha = req.query.fecha;
        const hora_deentrada = req.query.hora_deentrada;
        const hora_desalida = req.query.hora_desalida;
        const precio = req.query.precio;
        const parqueo_control_pagos = req.query.parqueo_control_pagos;
        
         //capturando los datos de un usuario, lo qu el cluiente nos envia en parametros
        const data = await Adminservicio.createwithparamas(id_servicio,id_parqueo,direccion,nombre_parqueo,imagenes,id_usuario,nombre_usuario,telefono,modelo_auto,placa_auto,fecha,hora_deentrada,hora_desalida,precio,parqueo_control_pagos);
    
        return res.status(201).json({ 
            success : true,
            message: 'El  servicio se registro correctamente',
            data: data.id//en el modelo establecimos que una vez que se almacene que nos retorno el id (RETURNING ID)
    
        });
        
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Hubo un error con el registro del servicio',
            error: error
    
        });
    }
    
    },


    async registerservice(req, res, next) {

        try {
    
            const id_servicio =req.query.id_servicio;
    
    
            const id_parqueo = req.query.id_parqueo;
            const direccion = req.query.direccion;
            const nombre_parqueo = req.query.nombre_parqueo;
            const imagenes = req.query.imagenes;
            const id_usuario = req.query.id_usuario;
            const nombre_usuario = req.query.nombre_usuario;
            const telefono = req.query.telefono;
            const imagen_auto = req.query.imagen_auto;
            const placa_auto = req.query.placa_auto;
            const fecha = req.query.fecha;
            const hora_deentrada = req.query.hora_deentrada;
            const hora_desalida = req.query.hora_desalida;
            const precio = req.query.precio;
            const parqueo_control_pagos = req.query.parqueo_control_pagos;
            const estado = req.query.estado;

            
             //capturando los datos de un usuario, lo qu el cluiente nos envia en parametros
            const data = await Adminservicio.createservicio(id_servicio,id_parqueo,direccion,nombre_parqueo,imagenes,id_usuario,nombre_usuario,telefono,imagen_auto,placa_auto,fecha,hora_deentrada,hora_desalida,precio,parqueo_control_pagos,estado);
        
            return res.status(201).json({ 
                success : true,
                message: 'El  servicio se registro correctamente',
                data: data.id//en el modelo establecimos que una vez que se almacene que nos retorno el id (RETURNING ID)
        
            });
            
        } catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Hubo un error con el registro del servicio',
                error: error
        
            });
        }
        
        },

async findById(req, res, next) {
    try {
       // const id = req.params.id;
        const id_servicio= req.body.id_servicio;
        const data = await Adminservicio.findById(id_servicio);    
        console.log(`Admin Servicio: ${data}`);
        //return res.status(201).json(data);
        return res.status(201).json({
            message: 'Datos de admin servicio obtenidos correctamente',
            data: data ,
            success: true,
                                    
    
    
        });
        
    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Error al obtener admin servicio por ID'
        });
    }
},


async findservicesById(req, res, next) {
    try {
       // const id = req.params.id;
        const id_servicio= req.body.id_servicio;
        const data = await Adminservicio.findservisById(id_servicio);    
        console.log(`Admin Servicio: ${data}`);
        //return res.status(201).json(data);
        return res.status(201).json({
            message: 'Datos de admin servicio obtenidos correctamente',
            data: data ,
            success: true,
                                    
    
    
        });
        
    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Error al obtener admin servicio por ID'
        });
    }
},

async update(req, res, next) {
    try {
   
        
        const id_servicio= req.body;

        await Adminservicio.update(id_servicio);

        return res.status(201).json({
            success: true,
            message: 'Los datos del servicio se actualizaron correctamente'
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

async updatereal(req, res, next) {
    try {
   
        
        const id_servicio= req.body;

        await Adminservicio.updatetrue(id_servicio);

        return res.status(201).json({
            success: true,
            message: 'Los datos del servicio se actualizaron correctamente'
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


async updateqr(req, res, next) {
    try {

        
        const id_servicio= req.body;

        await Adminservicio.updateqr(id_servicio);

        return res.status(201).json({
            success: true,
            message: 'Los datos del servicio se actualizaron correctamente'
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

async updateplaca(req, res, next) {
    try {

        const numero_placa = req.query.placa;

        const id_parqueo = req.query.id_parqueo;



        await Adminservicio.updateplaca(numero_placa,id_parqueo);

        return res.status(201).json({
            success: true,
            message: 'Los datos del servicio se actualizaron correctamente'
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



async history(req, res, next) {


    try {
        const id_usuario= req.body.id_usuario;

        const data = await Adminservicio.findByUser(id_usuario);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar el historial `,
            success: false,
            error: error
        });
    
}

},


async historyadmin(req, res, next) {


    try {
        const id_parqueo= req.body.id_parqueo;
        const data = await Adminservicio.findByPark(id_parqueo);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar el historial `,
            success: false,
            error: error
        });
    
}

},

async historyadminactual(req, res, next) {


    try {
        const id_parqueo= req.body.id_parqueo;
        const data = await Adminservicio.findByParkActuales(id_parqueo);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar el historial `,
            success: false,
            error: error
        });
    
}

},

async historia(req, res, next) {


    try {
        const id_parqueo= req.body.id_parqueo;
        const data = await Adminservicio.findhistoria(id_parqueo);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar el historial `,
            success: false,
            error: error
        });
    
}

},

async historiaactual(req, res, next) {


    try {
        const id_parqueo= req.body.id_parqueo;
        const data = await Adminservicio.findhistoriaactuales(id_parqueo);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar el historial `,
            success: false,
            error: error
        });
    
}

},


async findboolservice(req, res, next) {
    try {
       // const id = req.params.id;
        const id_servicio= req.body.id_servicio;
        const data = await Adminservicio.findService(id_servicio);    
        console.log(`Cantidad de servicios: ${data}`);
        //return res.status(201).json(data);
        return res.status(201).json({
            message: 'Datos de servicio obtenidos correctamente',
            data: data ,
            success: true,
                                    
    
        });
        
    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Error al obtener cantidad de servicios'
        });
    }
},


async findboolservicefinish(req, res, next) {
    try {
       // const id = req.params.id;
        const id_servicio= req.body.id_servicio;
        const data = await Adminservicio.findServicefinish(id_servicio);    
        console.log(`Cantidad de servicios: ${data}`);
        //return res.status(201).json(data);
        return res.status(201).json({
            message: 'Datos de servicio obtenidos correctamente',
            data: data ,
            success: true,
                                    
    
        });
        
    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Error al obtener cantidad de servicios'
        });
    }
},



//mETOD





   




};