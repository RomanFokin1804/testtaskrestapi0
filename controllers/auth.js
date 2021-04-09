/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { keys } = require('../config/config');

const errorHandler = require('../utils/errorHandler');
const models = require('../models');

module.exports.signup = async (req, res) => {
  try {
    const { id, password } = req.body;
    const existingUser = await models.user.findOne({ where: { id } });
    if (existingUser) {
      res.status(400).json({ message: 'User was existed' });
      return;
    }
    const time = new Date();
    const accessToken = jwt.sign({
      id,
      time: `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
    },
    keys.accessSecret,
    { expiresIn: '10m' });
    const refreshToken = jwt.sign({
      id,
      time: `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
    },
    keys.refreshSecret,
    { expiresIn: '1d' });
    const salt = bcrypt.genSaltSync(10);
    const user = {
      id,
      password: bcrypt.hashSync(password, salt),
    };
    const tokens = {
      id,
      accessToken,
      refreshToken,
    };
    await models.user.create(user);
    const newTokens = await models.token.create(tokens);
    res.status(200).json({ newTokens });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.signin = async (req, res) => {
  try {
    const { id, password } = req.body;
    const existingUser = await models.user.findOne({ where: { id } });
    if (!existingUser) {
      res.status(400).json({ message: 'User with this id not find' });
      return;
    }
    const passwordResult = bcrypt.compareSync(password, existingUser.password);
    if (!passwordResult) {
      res.status(400).json({ message: 'Password not right' });
      return;
    }
    const time = new Date();
    const accessToken = jwt.sign({
      id,
      time: `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
    },
    keys.accessSecret,
    { expiresIn: '10m' });
    const refreshToken = jwt.sign({
      id,
      time: `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
    },
    keys.refreshSecret,
    { expiresIn: '1d' });
    await models.token.update(
      { accessToken, refreshToken },
      {
        where: { id },
      },
    );
    res.status(200).json({ accessToken, refreshToken });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.newToken = async (req, res) => {
  try {
    const existingToken = await models.token.findOne(
      { where: { refreshToken: req.body.refreshToken } },
    );
    if (!existingToken) {
      res.status(400).json({ message: 'User not find' });
    }
    const time = new Date();
    const accessToken = jwt.sign({
      id: existingToken.id,
      time: `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
    },
    keys.accessSecret,
    { expiresIn: '10m' });
    const refreshToken = jwt.sign({
      id: existingToken.id,
      time: `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`,
    },
    keys.refreshSecret,
    { expiresIn: '1d' });
    await existingToken.update(
      { accessToken, refreshToken },
    );
    res.status(200).json({ accessToken, refreshToken });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.logout = async (req, res) => {
  try {
    const id = req.user;
    const existingToken = await models.token.findOne({ where: { id } });
    if (!existingToken) {
      res.status(400).json({ status: false, message: 'User not find' });
    }

    await existingToken.update(
      { accessToken: null, refreshToken: null },
    );
    res.status(200).json({ status: true });
  } catch (e) {
    errorHandler(res, e);
  }
};
