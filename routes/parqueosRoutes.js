
const ParqueosController = require('../controllers/parqueosControllers'); //Constante primera letra en mayuscula

module.exports = (app) => {


  
        //TREAR Servicios por usuario (APP)
    app.post('/api/parqueos/search',ParqueosController.getCoincidences);

    app.post('/api/parqueos/prize',ParqueosController.findPrize); //nombre_de_tabla /  nombre de metodo

    app.post('/api/parqueos/slot',ParqueosController.findslot); //nombre_de_tabla /  nombre de metodo


    
}