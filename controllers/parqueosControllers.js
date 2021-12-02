
//el controlador debe tener el mismo nombre que el modelo solo que en plural usersController

const { findPrize } = require('../models/parqueos');
const Parqueos = require('../models/parqueos'); //const modelo mayuscula primer User


module.exports = {





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
    
    



   


};