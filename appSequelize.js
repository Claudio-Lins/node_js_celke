const Sequelize = require('sequelize')

const sequelize = new Sequelize('clins', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conexão realizada com SUCESSO!!!')
}).catch(function(err){
    console.log('ERROS: Conexão não realizada!!!! ' + err)
})

const Pagamentos = sequelize.define('pagamentos', {
    //Atributes
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE
    }
})
//Criar tablea com Sequelize
// User.sync({force:true})

Pagamentos.create({
    nome: "Energia",
    valor: 220
})