
//nombre del moodelo en plural + Routers usersRoutes
const Usuarios_appController = require('../controllers/usuarios_appController'); //Constante primera letra en mayuscula

module.exports = (app) => {

   /*
   
   usuarios_app/login        O
      usuarios_app/register     O
      usuarios_app/getuser      O
      usuarios_app/modifyuser  O     nombre.... telefono... foto_perfil...
   
   */

       app.post('/api/usuarios_app/register',Usuarios_appController.register_controller); 

       app.post('/api/usuarios_app/login',Usuarios_appController.login_controller); 

       app.post('/api/usuarios_app/getuser',Usuarios_appController.getuserController); 

       app.post('/api/usuarios_app/getuserbyemail',Usuarios_appController.getuserbyemailController); 

       app.post('/api/usuarios_app/modifyuser',Usuarios_appController.update); 













   
    






    
}