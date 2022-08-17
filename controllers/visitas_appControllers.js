
const VisitasApp = require('../models/visitas_app'); //const modelo mayuscula primer User
const { allslotscontroller } = require('./parqueosControllers');


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


async getbyuserrecenct(req, res, next) {


    try {
        const id_usuario= req.body.id_usuario;

        const data = await VisitasApp.getmostrecent(id_usuario);
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


async id_visitas_controller(req, res, next) {


 
    try {
        const id_usuario= req.body.id_usuario;
        const id_visita= req.body.id_visita;
        const data = await VisitasApp.getbyid_visitas(id_usuario,id_visita);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar visita por id actuales por usuario`,
            success: false,
            error: error
        });
    
}

},



//currents by park


async obteniendoactualescontrolador(req, res, next) {


 
    try {
        const id_parqueo= req.body.id_parqueo;
        const data = await VisitasApp.obteniendoactuales(id_parqueo);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar las visitas actuales del parqueo`,
            success: false,
            error: error
        });
    
}

},



async allcontroller(req, res, next) {


 
    try {
        const id_parqueo= req.body.id_parqueo;
        const data = await VisitasApp.allvisitas(id_parqueo);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar las visitas del parqueo`,
            success: false,
            error: error
        });
    
}

},



async allcurrentcontroller(req, res, next) {


 
    try {
        const id_parqueo= req.body.id_parqueo;
        const data = await VisitasApp.allvisitasactual(id_parqueo);
        return res.status(201).json(data);

    } 
    catch (error) {
        console.log(`Error: ${error}`);
        return res.status(501).json({
            message: `Error al listar las visitas actuales del parqueo`,
            success: false,
            error: error
        });
    
}

},








};