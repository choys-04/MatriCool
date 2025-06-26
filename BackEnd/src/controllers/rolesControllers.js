const { roles } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let data = await roles.findAll({
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
    let data = await roles.findOne({
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

const createR = async (req, res) => {
  try {
    const { data } = req.body;
    let result = await roles.create(data, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
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

const updateR = async (req, res) => {
  try {
    const { id, ...data } = req.body.data;
    let result = await roles.update(data, {
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

const deleteR = async (req, res) => {
  try {
    const { id } = req.body.data;
    let role = await roles.findById(id);
    if (!role) {
      return res.status(400).json({msj:'id no existe.'});
    }
    let result = await role.destroy(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: "No fue posible obtener la informacion",
      causa: error,
      res: false,
    });
  }
};

module.exports = {
  getAll,
  getById,
  createR,
  updateR,
  deleteR,
};
