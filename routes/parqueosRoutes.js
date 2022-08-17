
const ParqueosController = require('../controllers/parqueosControllers'); //Constante primera letra en mayuscula

module.exports = (app) => {


    //obtener todos los parqueos  
    app.get('/api/parqueos/getAll',ParqueosController.getAll); 

    //Login de usuario

    app.post('/api/parqueos/login',ParqueosController.login_admin);

    app.post('/api/parqueos/allslots',ParqueosController.allslotscontroller); //Ruta de controllador all_slots



  
        //TREAR Servicios por usuario (APP)
    app.post('/api/parqueos/search',ParqueosController.getCoincidences);

    app.post('/api/parqueos/prize',ParqueosController.findPrize); //nombre_de_tabla /  nombre de metodo

    app.post('/api/parqueos/slot',ParqueosController.findslot); //nombre_de_tabla /  nombre de metodo

    app.post('/api/parqueos/reviews',ParqueosController.findsreviews); //nombre_de_tabla /  nombre de metodo

    app.post('/api/parqueos/login2',ParqueosController.findsuser); //nombre_de_tabla /  nombre de metodo  //DEBE SER ELIMINADA YA

    app.post('/api/parqueos/findpark',ParqueosController.findIdpark); //nombre_de_tabla /  nombre de metodo

    app.post('/api/parqueos/findfullpark',ParqueosController.findIdparkfirebase); //nombre_de_tabla /  nombre de metodo

    app.post('/api/parqueos/findvisita',ParqueosController.findId_entrada_salida); //nombre_de_tabla /  nombre de metodo



    app.post('/api/parqueos/findparkamount',ParqueosController.findsamountpark); //nombre_de_tabla /  nombre de metodo


    app.post('/api/parqueos/dueniobyemail',ParqueosController.findadminbyemail); //nombre_de_tabla /  nombre de metodo


    app.post('/api/parqueos/dueniobyid',ParqueosController.findadminbyid); //nombre_de_tabla /  nombre de metodo

    app.get('/api/parqueos/foto_entrada',ParqueosController.findplacaentrada); //nombre_de_tabla /  nombre de metodo

    app.get('/api/parqueos/foto_salida',ParqueosController.findplacasalida); //nombre_de_tabla /  nombre de metodo

    app.get('/api/parqueos/foto_entrada_url',ParqueosController.findplacaentradaURL); //nombre_de_tabla /  nombre de metodo

    app.get('/api/parqueos/foto_salida_url',ParqueosController.findplacasalidaURL); //nombre_de_tabla /  nombre de metodo

    app.get('/api/parqueos/writeplaca_entrada',ParqueosController.detectplacaentrada); //nombre_de_tabla /  nombre de metodo

    app.get('/api/parqueos/writeplaca_salida',ParqueosController.detectplacasalida); //nombre_de_tabla /  nombre de metodo

   
    app.post('/api/parqueos/slotstate',ParqueosController.libresocupados); //nombre_de_tabla /  nombre de metodo

    


}   