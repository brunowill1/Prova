const db = require('./db')

const Categoria = db.sequelize.define('categories',{
    name:{
        type: db.Sequelize.STRING
         }
})

module.exports = Categoria;