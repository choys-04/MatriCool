const { User } = require("../database/models/index");
const { dataUser } = require("../database/models/index");
const { listaTodo, buscarId, crear, actualizar, validar, eliminar} = requere("../services/services")

const getAll = async (req, res) => {
  let result;
  try {
    result = await listaTodo(User);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(result);
  }
};

const getById = async (req, res) => {
  let result;
  try {
    const { userId } = req.query;
    let data = {id:userId};
    result = await buscarId(User, data)
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(result);
  }
};

const createU = async (req, res) => {
  let result;
  try {
    const { data } = req.body;
    result = await crear(User, data)
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(result);
  }
};

const updateU = async (req, res) => {
  let result;
  try {
    const { user } = req.body;
    result = await actualizar(User, user);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(result);
  }
};

const validateU = async (req, res) => {
  let result;
  try {
    const { user } = req.body;
    result = await actualizar(User, user);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(result);
  }
};

const deleteU = async (req, res) => {
  let result;
  try {
    const { user } = req.body;
    result = await eliminar(User, user)
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(result);
  }
};

module.exports = {
  getAll,
  getById,
  createU,
  updateU,
  validateU,
  deleteU,
};
