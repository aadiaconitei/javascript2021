// Cand dorim sa importam un modul in aplicatia noastra 
// folosim  require ('nume_modul');

var http = require('http');  // includem modulul http
var port = 3001;  // setam un port pentru server ( Recomandate: diferit de 80, 443, 8080)

// Start server 
// req - cererile catre seerver: requests
// res - raspunsurile serverului: responses
let server = http.createServer( function (req, res) {
        res.writeHead(
            200,  // setam header: status cod si tip continut
            {
                'Content-Type': 'text/html',
                'Access-Control-Allow-Origin': '*', 
            },
        ); 
        
        res.write( 'Hello World!' ); // Response content
        res.end(); // End response
});
server.listen( port );

// 1. pornim serverul
// node http_server.js 
// 2. accesam in browser
// http://localhost:3001

// putem opri serverul : ctrl+c