const express = require('express')

const app = express()

// Conexão com DB MySql
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'clins'
})
connection.connect(function(err){
    if (err) {
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log('Connected as id ' + connection.threadId)
})

connection.query('SELECT * FROM users', function(err, rows, fields){
  if(!err){
      console.log('Resultado: ', rows)
  }  else {
      console.log('Error ao realizar a consulta')
  }
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/src/index.html')
})

app.get('/blog', function(req, res){
    res.send('Págian de Blog!')
})

app.get('/sobre-empresa', function(req, res){
    res.sendFile(__dirname + '/src/sobre-empresa.html')
})

app.get('/contato', function(req, res){
    res.send('Págian de Contato!')
})

app.listen(8080)