
//nombre del moodelo en plural + Routers usersRoutes
const ReseniasController = require('../controllers/reseniasControllers'); //Constante primera letra en mayuscula

module.exports = (app) => {



 
    app.post('/api/resenias/create',ReseniasController.register);


       //TREAR Servicios por usuario (APP)
       app.post('/api/resenias/getresenias',ReseniasController.reseniasparqueo);

    
}