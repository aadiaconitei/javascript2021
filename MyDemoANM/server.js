var express     = require('express');
var connection = require("./config/db_connect")
const bcrypt    = require('bcrypt');

var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(
    3003,  //PORT
    () => console.log('Serverul a pornit pe portul 3003!')
);

// get layout-ul - Acasa
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/getUsers", function (req, res) {
    var q = "SELECT * FROM utilizatori";
    connection.query(q, function (err, result) {
        res.send(JSON.stringify(result));
    })
});

app.get('/deleteUser', function (req, res) {
    var id = req.query.uid;
    var q = "DELETE FROM `utilizatori` WHERE `utilizatori`.`id` = ?";
    connection.query(q, [id], function (err, result) {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
});

app.get('/singleRow', function (req, res) {
    var id = req.query.uid;
    var q = "SELECT `id`, `nume`, `prenume`, `email`, `parola` FROM `utilizatori` WHERE `utilizatori`.`id` = ?";
    connection.query(q, [id], function (err, result) {
        res.send(JSON.stringify(result));
    });
});

app.get('/updateData', function (req, res) {
    var id = req.query.uid;
    var nume = req.query.nume;
    var prenume = req.query.prenume;
    var email = req.query.email;
    
    var q = "UPDATE `utilizatori` SET `nume` = '" + nume + "', `prenume` = '" + prenume + "' , `email` = '" + email + "' WHERE `utilizatori`.`id`=" + id;
    connection.query(q, function (err, result) {
        res.send(JSON.stringify(result));
    });
});

app.get('/addData', function (req, res) {
    var nume = req.query.nume;
    var prenume = req.query.prenume;
    var email = req.query.email;
    var passw = req.query.parola;
    let hash = bcrypt.hashSync(passw, 10);
    var q = "INSERT INTO `utilizatori` (`id`, `nume`, `prenume` ,`email` , `parola`) VALUES (NULL, '" + nume + "', '" + prenume + "', '" + email + "', '" + hash + "')";
    ///console.log(q);
    connection.query(q, function (err, result) {
        res.send(JSON.stringify(result));
    });
 
});

app.get("/valid_email", function(req, res) {
    connection.query("SELECT email FROM utilizatori WHERE email = ?", [req.query.email], 
       function(error, rows) {
         if (error) {
           res.send(error);
         }

         if (rows.length == 1) { // avem deja o adresa de email
            res.send({email_exists: true});
         } else {
            res.send({email_exists: false});
         }
       });
});