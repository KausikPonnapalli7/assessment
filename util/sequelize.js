const Sequelize = require('sequelize');

const sequelize = new Sequelize('node','root','Qwerty1234', {dialect: 'mysql', host: 'localhost'})  ;

module.exports = sequelize;