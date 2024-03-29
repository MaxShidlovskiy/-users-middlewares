const express = require(`express`);
const { getAllUsers, getUserById, createUser, updateUserById, deleteUser } = require(`../service/user.service`);
const { isValidUserData, isValidUserId } = require(`../helper/validation`);
const { buildResponse } = require('../helper/buildResponse');

const route = express.Router();

route.get(`/`, (req, res) => {
  const data = getAllUsers();
  res.send(data);
});

route.get(`/:id`, getUserById, (req, res) => {
  const { id } = req.params;
  const data = getUserById(id);
  res.send(data);
});

route.post(`/`, isValidUserData, (req, res) => {
  const { name, surname, email, pwd } = req.body;

  const data = createUser(name, surname, email, pwd);
  res.send(data);
});

route.put('/:id', isValidUserData, isValidUserId, (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = updateUserById(id, name, surname, email, pwd);
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

route.delete('/:id', isValidUserId, (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteUser(id);
    buildResponse(res, data, 200);
  } catch (error) {
    buildResponse(res, error.message, 404);
  }
});

module.exports = route;
