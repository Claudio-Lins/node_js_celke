const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'clins'
})

connection.connect(function (err) {
    if (err) console.error('Erro ao realizar a conexão com BD: ' + err.stack);
    return;
})


// INSERT REGISTRO NO DB
// connection.query("INSERT INTO users(nome, email) VALUES ('Jessica', 'jessica@clins.com.br')", function(err, result){
//     if (!err) {
//         console.log('Usuário cadastrado com sucesso!')
//     }else {
//         console.log('Error ao cadastrar o Usuário!!!')
//     }
// })
//

// UPDATE REGISTROS NO DB
// connection.query("UPDATE users SET nome = 'Jessica Silva' WHERE id = 3", function (err, result) {
//     if (!err) {
//         console.log('Usuário editado com sucesso!')
//     } else {
//         console.log('Error ao editado o Usuário!!!')
//     }
// })

// DELETE REGISTROS NO DB
// connection.query("DELETE FROM users WHERE id = 7", function (err, result) {
//     if (!err) {
//         console.log('Usuário Deletado com sucesso!')
//     } else {
//         console.log('Error ao Deletar o Usuário!!!')
//     }
// })