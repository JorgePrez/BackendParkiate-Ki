
//nombre del moodelo en plural + Routers usersRoutes
const ReseniasControllerApp = require('../controllers/resenias_appControllers'); //Constante primera letra en mayuscula

module.exports = (app) => {



    app.post('/api/resenias_app/create',ReseniasControllerApp.create);

    app.post('/api/resenias_app/getbypark',ReseniasControllerApp.geybypark);

    app.post('/api/resenias_app/getfullreviews',ReseniasControllerApp.getfullreviewscontroller);



    app.post('/api/resenias_app/countreviews',ReseniasControllerApp.countreviewparks);

   app.post('/api/resenias_app/getreview', ReseniasControllerApp.getreviewcontroller1);

  app.post('/api/resenias_app/updatereview',ReseniasControllerApp.updatereviewc);






    
}