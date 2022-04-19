
//nombre del moodelo en plural + Routers usersRoutes
const UsersController = require('../controllers/usersController'); //Constante primera letra en mayuscula

module.exports = (app) => {


    //TRAER DATOS
    app.get('/api/users/getAll',UsersController.getAll); //nombre_de_tabla /  nombre de metodo 

    //TRAER POR ID
    app.post('/api/users/getById',UsersController.findById); //nombre_de_tabla /  nombre de metodo


    //GUARDAR DATOS
    
    app.post('/api/users/create',UsersController.register);
    app.post('/api/users/login',UsersController.login);


    //ACTUALZIAR DATOS
    app.put('/api/users/update',UsersController.update); //perfil de usuario
    app.put('/api/users/updateauto',UsersController.updateauto); //perfil de usuario
    //vehiculo


    //Crear direcciones
    app.post('/api/users/createdirections',UsersController.createDirectios ); //perfil de usuario

     //obtener direcciones por id de usuario

     app.post('/api/users/getdirections',UsersController.directionsbyuser ); //perfil de usuario

    


    //Obtener # de servicios por ID

    






    
}