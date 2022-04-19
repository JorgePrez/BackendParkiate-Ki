
const ParqueosController = require('../controllers/parqueosControllers'); //Constante primera letra en mayuscula

module.exports = (app) => {


    //obtener todos los parqueos
    
    app.get('/api/parqueos/getAll',ParqueosController.getAll); //nombre_de_tabla /  nombre de metodo 

  
        //TREAR Servicios por usuario (APP)
    app.post('/api/parqueos/search',ParqueosController.getCoincidences);

    app.post('/api/parqueos/prize',ParqueosController.findPrize); //nombre_de_tabla /  nombre de metodo

    app.post('/api/parqueos/slot',ParqueosController.findslot); //nombre_de_tabla /  nombre de metodo

    app.post('/api/parqueos/reviews',ParqueosController.findsreviews); //nombre_de_tabla /  nombre de metodo

    app.post('/api/parqueos/login',ParqueosController.findsuser); //nombre_de_tabla /  nombre de metodo

    app.post('/api/parqueos/findpark',ParqueosController.findIdpark); //nombre_de_tabla /  nombre de metodo

    app.post('/api/parqueos/findparkamount',ParqueosController.findsamountpark); //nombre_de_tabla /  nombre de metodo


    app.post('/api/parqueos/dueniobyemail',ParqueosController.findadminbyemail); //nombre_de_tabla /  nombre de metodo


    app.post('/api/parqueos/dueniobyid',ParqueosController.findadminbyid); //nombre_de_tabla /  nombre de metodo


}   