const { mensajes } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let data = await mensajes.findAll({
      attributes: { exclude: ["id"] },
    });
    res.json(data);
  } catch (error) {
    res.json({
      message: "No fue posible obtener la informacion",
      mjsError: error, 
      res: false,
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.query; 
    console.log(id)
    let data = await mensajes.findOne({
      where: {id:id},
      attributes: {
        exclude: ["id" ],
      },
    });
    res.json(data);
  } catch (error) {
    res.json({
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
    res.json(result);
  } catch (error) {
    res.json({
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
      where: { id:id },
    });
    res.json(result);
  } catch (error) {
    res.json({
      message: "No fue posible obtener la informacion",
      causa: error,
      res: false,
    });
  }
};
let validateME=0
let deleteME=0

module.exports = {
  getAll,
  getById,
  createME,
  updateME,
  validateME,
  deleteME,
};
