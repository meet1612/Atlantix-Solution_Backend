var mysql = require('mysql');
var connection = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'atlantix_solutions'

});
module.exports = connection;