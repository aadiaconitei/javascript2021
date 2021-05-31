// verificam lista de module instalate
// npm list
// daca nu este instalat
// npm i express

// 1. pornim serverul
// node expr_server.js 
// 2. accesam in browser
// http://localhost:3002

// putem opri serverul : ctrl+c

const express = require('express')
const app = express()
// GET
app.get('/', (req, res) => res.send('Hello World!'))


// POST
app.post('/', function (req, res) {
  res.send('POST request')
})

// PUT
app.put('/user', function (req, res) {
  res.send('PUT request la /user')
})

// DELETE
app.delete('/user', function (req, res) {
  res.send('DELETE request la /user')
})
app.listen(
    3002,  //PORT
    () => console.log('Aplicatie ce ruleaza pe portul 3002!')
)

