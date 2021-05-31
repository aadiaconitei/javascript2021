// daca nu este instalat modulul mysql
// npm install mysql
// pornim serverul MySql din XAMPP

// node mysql.js

var MySQL = require('mysql');
var connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'universitate'
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
}
);

connection.query('SELECT * FROM studenti;', function(err, result, fields)  
{
  if (err) throw err;
  console.table(result);
});
connection.end();