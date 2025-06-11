const { seccionprofesor } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let data = await seccionprofesor.findAll({
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
    let data = await seccionprofesor.findOne({
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

const createSP = async (req, res) => {
  try {
    const { data } = req.body;
    let result = await seccionprofesor.create(data, {
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

const updateSP = async (req, res) => {
  try {
    const { id, ...data } = req.body.data;
    let result = await seccionprofesor.update(data, {
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
let validateSP=0
let deleteSP=0

module.exports = {
  getAll,
  getById,
  createSP,
  updateSP,
  validateSP,
  deleteSP,
};
