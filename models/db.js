const Sequelize = require('sequelize');

// Conexión a la base de datos con sequelize
const sequelize = new Sequelize('proyecto','root', 'Elpitodebundy_1989', {
    host: 'al17222.systems',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established succesfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
