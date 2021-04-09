/* eslint-disable camelcase */
const fs = require('fs');
const errorHandler = require('../utils/errorHandler');
const models = require('../models');

module.exports.getInfoById = async (req, res) => {
  try {
    const file = await models.file.findOne({ where: { id: req.params.id } });
    if (file) {
      res.status(200).json(file);
    } else {
      res.status(400).json({ status: false, message: 'File with this id not exist' });
    }
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.getListFiles = async (req, res) => {
  try {
    const { list_size = 10, page = 1 } = req.query;
    const offset = (page - 1) * list_size;
    const filesList = await models.file.findAndCountAll({
      offset,
      limit: Number(list_size),
    });
    const totalPages = Math.ceil(filesList.count / list_size);
    let next = '';
    let previous = '';
    if (Number(page) === totalPages) {
      next = null;
    } else {
      next = `https://testtaskrestapi0.herokuapp.com/api/file/list/?page=${Number(page) * 1 + 1}&limit=${list_size}`;
    }
    if (Number(page) === 1) {
      previous = null;
    } else {
      previous = `https://testtaskrestapi0.herokuapp.com/api/file/list/?page=${Number(page) - 1}&limit=${list_size}`;
    }
    filesList.nextPageLink = next;
    filesList.previousPageLink = previous;

    res.status(200).json(filesList);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.downloadById = async (req, res) => {
  try {
    const file = await models.file.findOne({ where: { id: req.params.id } });
    if (!file) {
      res.status(400).json({ status: false, message: 'File with this id not exist' });
      return;
    }
    res.status(200).sendfile(file.path);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.uploadFile = async (req, res) => {
  try {
    const id = req.user;
    if (!req.files) {
      res.status(400).json({ status: false, message: 'Error loading file' });
      return;
    }
    const dateNow = new Date();
    const filenameSplit = req.files[0].originalname.split('.');
    const newFile = {
      uId: id,
      name: req.files[0].filename,
      extension: filenameSplit[filenameSplit.length - 1],
      mimeType: req.files[0].mimetype,
      size: req.files[0].size,
      dateUpload: dateNow,
      path: req.files[0].path,
    };
    await models.file.create(newFile);
    res.status(200).json({ status: true });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.updateById = async (req, res) => {
  try {
    const id = req.user;
    if (!req.files) {
      res.status(400).json({ status: false, message: 'Error loading file' });
      return;
    }
    const oldFile = await models.file.findOne({ where: { id: req.params.id } });
    fs.unlinkSync(oldFile.path);

    const dateNow = new Date();
    const filenameSplit = req.files[0].originalname.split('.');
    const updatedFile = {
      uId: id,
      name: req.files[0].filename,
      extension: filenameSplit[filenameSplit.length - 1],
      mimeType: req.files[0].mimetype,
      size: req.files[0].size,
      dateUpload: dateNow,
      path: req.files[0].path,
    };
    await models.file.update(updatedFile, { where: { id: req.params.id } });
    res.status(200).json({ status: true });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.removeById = async (req, res) => {
  try {
    const oldFile = await models.file.findOne({ where: { id: req.params.id } });
    fs.unlinkSync(oldFile.path);
    const statusDeleted = await models.file.destroy({ where: { id: req.params.id } });
    if (statusDeleted) {
      res.status(200).json({ status: true });
    } else {
      res.status(400).json({ status: false, message: 'File with this id not exist' });
    }
  } catch (e) {
    errorHandler(res, e);
  }
};
