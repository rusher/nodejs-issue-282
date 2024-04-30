const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('testn', 'root', null //password
    , {
    host: 'localhost',
    dialect: 'mariadb'
});
async function main() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main();