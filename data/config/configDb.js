;
require('dotenv').config() 
module.exports = {
    development: {
        username: process.env.USER_DB,
        password: process.env.PASS_DB,
        database: process.env.NAME_DB,
        host: process.env.HOST_DB,
        dialect: 'postgres',
        pool: {
          max: 100,
          min: 0,
          acquire: 120000,
          idle:20000
        }
      }
}