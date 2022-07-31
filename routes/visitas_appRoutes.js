
//nombre del moodelo en plural + Routers usersRoutes
const VisitasControllerApp = require('../controllers/visitas_appControllers'); //Constante primera letra en mayuscula

module.exports = (app) => {


    app.post('/api/visitas_app/getbyuser',VisitasControllerApp.getbyuser);
    app.post('/api/visitas_app/getbypark',VisitasControllerApp.getbypark);

    
}