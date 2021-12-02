const promise= require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;

types.setTypeParser(1114,function(stringValue){
    return stringValue;
});


/*pg_connect("host=db-instancia.ccwm7dhw4cau.us-east-1.rds.amazonaws.com port=5432 
user=postgres password=56721449 dbname=postgres");

*/
const databaseConfig = {
    'host': 'db-instancia.ccwm7dhw4cau.us-east-1.rds.amazonaws.com',
    'port': 5432,
    'database': 'postgres',
    'user': 'postgres',
    'password': '56721449'
};

const db = pgp(databaseConfig);

module.exports = db;


