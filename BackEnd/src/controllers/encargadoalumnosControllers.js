const { encargadoalumnos, Users } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let data = await encargadoalumnos.findAll({
      attributes: { exclude: ["id"] },
      include : [
              {
                model: Users,
                attributes: { exclude: ["createdAt", "updatedAt"] },
              },
            ]
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
    let data = await encargadoalumnos.findOne({
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

const createE = async (req, res) => {
  try {
    const { data } = req.body;
    let result = await encargadoalumnos.create(data, {
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

const updateE = async (req, res) => {
  try {
    const { id, ...data } = req.body.data;
    let result = await encargadoalumnos.update(data, {
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
let validateE=0
let deleteE=0

module.exports = {
  getAll,
  getById,
  createE,
  updateE,
  validateE,
  deleteE,
};
