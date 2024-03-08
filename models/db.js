const Sequelize = require('sequelize')
//banco
const sequelize = new Sequelize('mydb', 'mysqlroot', 'root123',{
    host:"localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}