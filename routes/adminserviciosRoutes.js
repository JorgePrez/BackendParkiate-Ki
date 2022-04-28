
//nombre del moodelo en plural + Routers usersRoutes
const AdminserviciosController = require('../controllers/adminserviciosControllers'); //Constante primera letra en mayuscula

module.exports = (app) => {


 
         //Registar servicios

    app.post('/api/adminservicios/create',AdminserviciosController.register);
    app.get('/api/adminservicios/creates',AdminserviciosController.registerparams);

    app.get('/api/adminservicios/createservice',AdminserviciosController.registerservice);



    //traer servicio por id

    
    //TRAER POR ID
    app.post('/api/adminservicios/getById',AdminserviciosController.findById); //nombre_de_tabla /  nombre de metodo


    app.post('/api/adminservicios/getServiceById',AdminserviciosController.findservicesById); //nombre_de_tabla /  nombre de metodo


    //Actualizar la efha de salida y cuanto se le cobro

    app.put('/api/adminservicios/update',AdminserviciosController.update); //perfil de usuario


    app.put('/api/adminservicios/updatetrue',AdminserviciosController.updatereal); //perfil de usuario


    
    app.get('/api/adminservicios/endservice',AdminserviciosController.updateplaca);


    //Actualizacar cuando ya fue leido el QR


    app.put('/api/adminservicios/updateqr',AdminserviciosController.updateqr); //perfil de usuario



    //Traer servicios por usuario

    app.post('/api/adminservicios/history',AdminserviciosController.history);

    //Obtener servicios por parqueo


    app.post('/api/adminservicios/historyadmin',AdminserviciosController.historyadmin);

     //Obtener servicios actuales
     
     app.post('/api/adminservicios/historyadminactual',AdminserviciosController.historyadminactual);


     //Obtener servicios actuales
     
     app.post('/api/adminservicios/historyservices',AdminserviciosController.historia);

     app.post('/api/adminservicios/historyservicesactuales',AdminserviciosController.historiaactual);


   

    //Obtener # de servicios por ID

    app.post('/api/adminservicios/servicesboolean',AdminserviciosController.findboolservice); //nombre_de_tabla /  nombre de metodo

    app.post('/api/adminservicios/servicesbooleanfinish',AdminserviciosController.findboolservicefinish); //nombre_de_tabla /  nombre de metodo

    













    
}