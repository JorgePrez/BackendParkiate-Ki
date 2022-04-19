
//nombre del moodelo en plural + Routers usersRoutes
const AdminserviciosController = require('../controllers/adminserviciosControllers'); //Constante primera letra en mayuscula

module.exports = (app) => {


 
         //Registar servicios

    app.post('/api/adminservicios/create',AdminserviciosController.register);

    //traer servicio por id

    
    //TRAER POR ID
    app.post('/api/adminservicios/getById',AdminserviciosController.findById); //nombre_de_tabla /  nombre de metodo

    //Actualizar la efha de salida y cuanto se le cobro

    app.put('/api/adminservicios/update',AdminserviciosController.update); //perfil de usuario


    //Actualizacar cuando ya fue leido el QR


    app.put('/api/adminservicios/updateqr',AdminserviciosController.updateqr); //perfil de usuario



    //Traer servicios por usuario

    app.post('/api/adminservicios/history',AdminserviciosController.history);

    //Obtener servicios por parqueo


    app.post('/api/adminservicios/historyadmin',AdminserviciosController.historyadmin);

     //Obtener servicios actuales
     
     app.post('/api/adminservicios/historyadminactual',AdminserviciosController.historyadminactual);

   

    //Obtener # de servicios por ID

    app.post('/api/adminservicios/servicesboolean',AdminserviciosController.findboolservice); //nombre_de_tabla /  nombre de metodo

    app.post('/api/adminservicios/servicesbooleanfinish',AdminserviciosController.findboolservicefinish); //nombre_de_tabla /  nombre de metodo

    













    
}