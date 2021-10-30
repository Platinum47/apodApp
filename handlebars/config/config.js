const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("databasename" , "root" , "YOURPASSWORD FOR GITHUB" , {
   host:"localhost", 
   dialect:"mysql", 
   port:3306
  });
  

  module.exports = sequelize