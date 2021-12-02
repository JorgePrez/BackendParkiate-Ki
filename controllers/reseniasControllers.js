
const Resenia = require('../models/resenias'); //const modelo mayuscula primer User


module.exports = {


async register(req, res, next) {

try {
    const resenia = req.body; //capturando los datos de un usuario, lo qu el cluiente nos envia en parametros
    const data = await Resenia.create(resenia);

    return res.status(201).json({ 
        success : true,
        message: 'El  servicio se registro correctamente',
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


async reseniasparqueo(req, res, next) {


    try {
        const id_parqueo= req.body.id_parqueo;
        const data = await Resenia.findById(id_parqueo);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar el listado de reseñas`,
            success: false,
            error: error
        });
    
}

},







   




};