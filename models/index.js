const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const configDB = require('../config/config').database;

const sequelize = new Sequelize(configDB.dbName, configDB.username, configDB.password, {
  dialect: configDB.dialect,
  host: configDB.host,
});

const db = {};

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
