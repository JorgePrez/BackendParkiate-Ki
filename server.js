
const express = require('express');
const app = express();
const http= require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');


/**
 * RUTAS 
 */
const users = require('./routes/usersRoutes'); //users ya que llamamos a las rutas del los usuarios
const resenias = require('./routes/reseniasRoutes');
const parqueos = require('./routes/parqueosRoutes');
const adminservicios = require('./routes/adminserviciosRoutes');




const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());

app.disable('x-powered-by');

app.set('port',port);


/**
 * Llamando a las rutas 
 */
users(app);
resenias(app);
parqueos(app);
adminservicios(app);


//server.listen(3000, '192.168.1.2' || 'localhost', function(){
    server.listen(process.env.PORT ||  3000, '192.168.1.25' || 'localhost', function(){

    //correr en gitBash ipconfig, para ver que ip cambio....
   // console.log('Aplicacion de NodeJs ' + process.pid + ' Iniciada...')
   console.log('Aplicacion de NodeJs ' + port + ' Iniciada...')

});


app.get('/', (req,res) => {
    res.send('Ruta raiz del backend');
} );

app.get('/test', (req,res) => {
    res.send('Este es la ruta TEST');
} );



//ERROR HANBLDER

app.use((err,req,res,next) =>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);
}
);

//module exports para usar variables en otros archivos
module.exports = {
    app:app,
    server: server
}

//200 - ES UNA RESPUESTA EXITOSA
//404 - SIGNFICA QUE LA URL NO EXISTE
//500 - ERROR INTERNO DEL SERVIDOR