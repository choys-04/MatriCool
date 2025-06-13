const { seccionalumnos } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let data = await seccionalumnos.findAll({
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
    let data = await seccionalumnos.findOne({
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

const createS = async (req, res) => {
  try {
    const { data } = req.body;
    let result = await seccionalumnos.create(data, {
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

const updateS = async (req, res) => {
  try {
    const { id, ...data } = req.body.data;
    let result = await seccionalumnos.update(data, {
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
let validateS=0
let deleteS=0

module.exports = {
  getAll,
  getById,
  createS,
  updateS,
  validateS,
  deleteS,
};
