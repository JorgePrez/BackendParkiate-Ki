
const VisitasApp = require('../models/visitas_app'); //const modelo mayuscula primer User


module.exports = {



//visitas_App/getbyuser


async getbyuser(req, res, next) {


    try {
        const id_usuario= req.body.id_usuario;

        const data = await VisitasApp.getbyuser(id_usuario);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar las visitas por usuario`,
            success: false,
            error: error
        });
    
}

},

//visitas_app/getbypark

async getbypark(req, res, next) {


 
    try {
        const id_parqueo= req.body.id_parqueo;
        const data = await VisitasApp.getbypark(id_parqueo);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar las visitas por usuario`,
            success: false,
            error: error
        });
    
}

},


//resenias_app/



};