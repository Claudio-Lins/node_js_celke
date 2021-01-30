const Sequelize = require('sequelize')

const sequelize = new Sequelize('clins', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conexão realizada com SUCESSO!!!')
}).catch(function(err){
    con
})