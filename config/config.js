const config = {};

config.database = {
  dbName: 'dbName',
  username: 'username',
  password: 'password',
  dialect: 'mysql',
  host: 'host',
};

config.keys = {
  accessSecret: 'dev-jwt',
  refreshSecret: 'very-secret-key',
};

module.exports = config;
