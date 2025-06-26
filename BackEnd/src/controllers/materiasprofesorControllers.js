const { materiasprofesor } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let data = await materiasprofesor.findAll({
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
    console.log(id)
    let data = await materiasprofesor.findOne({
      where: {id:id},
      attributes: {
        exclude: ["id" ],
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

const createMP = async (req, res) => {
  try {
    const { data } = req.body;
    let result = await materiasprofesor.create(data, {
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

const updateMP = async (req, res) => {
  try {
    const { id, ...data } = req.body.data;
    let result = await mensajesprofesor.update(data, {
      where: { id:id },
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

module.exports = {
  getAll,
  getById,
  createMP,
  updateMP
};
