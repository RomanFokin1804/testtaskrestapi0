module.exports = (sequelize, Sequelize) => {
  const File = sequelize.define('file', {
    uId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    extension: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mimeType: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    size: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dateUpload: {
      type: Sequelize.DATE,
      default: Date.now,
    },
    path: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return File;
};
