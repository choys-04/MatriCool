const { materias } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let data = await materias.findAll({
      attributes: { exclude: ["id"] },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      message: "No fue posible obtener la informacion",
      mjsError: error,
      res: false,
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.query;
    let data = await materias.findOne({
      where: { id: id },
      attributes: {
        exclude: ["id"],
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      message: "No fue posible obtener la informacion",
      res: false,
    });
  }
};

const createM = async (req, res) => {
  try {
    const { data } = req.body;
    let result = await materias.create(data, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      message: "No fue posible obtener la informacion",
      causa: error,
      res: false,
    });
  }
};

const updateM = async (req, res) => {
  try {
    const { id, ...data } = req.body.data;
    let result = await mensajes.update(data, {
      where: { id: id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: "No fue posible obtener la informacion",
      causa: error,
      res: false,
    });
  }
};

const deleteM = async (req, res) => {
  try {
    const { id } = req.body;
    let result = await materias.update({ active: false }, {
      where: { id: id },
      attributes: ["active"],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: "No fue posible obtener la informacion",
      cause: error,
      res: false,
    });
  }
};

module.exports = {
  getAll,
  getById,
  createM,
  updateM,
  deleteM,
};
