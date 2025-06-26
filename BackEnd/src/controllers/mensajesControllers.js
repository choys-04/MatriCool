const { mensajes } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let data = await mensajes.findAll({
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
    let data = await mensajes.findOne({
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

const createME = async (req, res) => {
  try {
    const { data } = req.body;
    let result = await mensajes.create(data, {
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

const updateME = async (req, res) => {
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

const readedME = async (req, res) => {
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

const deleteME = async (req, res) => {
  try {
    const { id } = req.body.data;
    const mensaje = await mensajes.findByPk(id);
    if (!mensaje) {
      return res.status(404).send("No existe.");
    }
    let result = await mensaje.destroy();
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
  createME,
  updateME,
  readedME,
  deleteME,
};
