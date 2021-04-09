const errorHandler = require('../utils/errorHandler');

module.exports.info = async (req, res) => {
  try {
    if (req.user) {
      res.status(200).json({
        id: req.user,
      });
    } else {
      res.status(400).json({
        message: 'User not existence',
      });
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
