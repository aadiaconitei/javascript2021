var sql = require('mysql');
var myconnection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysite'
})
// myconnection.connect(function (err) {
//     if (err) throw err;
// });
module.exports = myconnection;