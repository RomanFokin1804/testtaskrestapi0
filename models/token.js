module.exports = (sequelize, Sequelize) => {
  const Token = sequelize.define('token', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    accessToken: {
      type: Sequelize.TEXT,
    },
    refreshToken: {
      type: Sequelize.TEXT,
    },
  });
  return Token;
};
