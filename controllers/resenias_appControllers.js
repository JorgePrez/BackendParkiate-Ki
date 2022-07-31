
const ReseniasApp = require('../models/resenias_app'); //const modelo mayuscula primer User


module.exports = {


    
 //insertar reseña  resenias_app/create
async create(req, res, next) {

try {
    const resenias_app = req.body; //capturando los datos de un usuario, lo qu el cluiente nos envia en parametros
    const data = await ReseniasApp.create(resenias_app);

    return res.status(201).json({ 
        success : true,
        message: 'La resenia se registro correctamente',
        data: data.id_resenias //en el modelo establecimos que una vez que se almacene que nos retorno el id (RETURNING ID)


    });
    
} catch (error) {
    console.log(`Error: ${error}`);
    return res.status(501).json({
        success: false,
        message: 'Hubo un error con el registro de la reseña',
        error: error

    });
}

},


//resenias_app/getbypark

async geybypark(req, res, next) {


    try {
        const id_parqueo= req.body.id_parqueo;

        const data = await ReseniasApp.getbypark(id_parqueo);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar el listado de reseñas por parqueo`,
            success: false,
            error: error
        });
    
}

},


//resenias_app/getbypark

async getfullreviewscontroller(req, res, next) {


    try {
        const id_parqueo= req.body.id_parqueo;

        const data = await ReseniasApp.getfullreviewsmodel(id_parqueo);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar el listado de reseñas por parqueo`,
            success: false,
            error: error
        });
    
}

},


//resenias_app/countreviewparks


async countreviewparks(req, res, next) {
    try {
       // const id = req.params.id;
        const id_usuario_movil= req.body.id_usuario_movil;
        const id_parqueo = req.body.id_parqueo;
        const data = await ReseniasApp.countreviewpark(id_usuario_movil,id_parqueo);    
        console.log(`Cantiad de reseñas: ${data}`);
        //return res.status(201).json(data);
        return res.status(201).json({
            message: 'camtodad obtenida correctamente',
            data: data ,
            success: true,
                                    
    
        });
        
    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Error al obtener cantidad'
        });
    }
},


async getreviewcontroller1(req, res, next) {
    try {
       // const id = req.params.id;
        const id_usuario_movil= req.body.id_usuario_movil;
        const id_parqueo = req.body.id_parqueo;
        const data = await ReseniasApp.getreview1(id_usuario_movil,id_parqueo);    
        console.log(`Cantiad de reseñas: ${data}`);
        //return res.status(201).json(data);
        return res.status(201).json({
            message: 'resenia obtenida correctamente',
            data: data ,
            success: true,
                                    
    
        });
        
    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Error al obtener resenia'
        });
    }
},


async updatereviewc(req, res, next) {
    try {
   
        
        const id_usuario_movil= req.body.id_usuario_movil;
        const id_parqueo = req.body.id_parqueo;     
        const calificacion = req.body.calificacion;
        const comentario = req.body.comentario;
       
        await ReseniasApp.updatereview(id_usuario_movil,id_parqueo,calificacion,comentario);

        return res.status(201).json({
            success: true,
            message: 'Los datos  se actualizaron correctamente'
        });

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            success: false,
            message: 'Hubo un error con la actualizacion de datos ',
            error: error
        });
    }
},






};