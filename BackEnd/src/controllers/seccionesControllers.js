const { secciones } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let data = await secciones.findAll({
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
    let data = await secciones.findOne({
      where: { id: id },
      attributes: {
        exclude: ["id"],
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

const createSE = async (req, res) => {
  try {
    const { data } = req.body;
    let result = await secciones.create(data, {
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

const updateSE = async (req, res) => {
  try {
    const { id } = req.body;
    let result = await secciones.update({ active: false }, {
      where: { id: id },
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

const deleteSE = async (req, res) => {
  try {
    const { id } = req.body.data;
    let seccion = await secciones.findById(id);
    if (!seccion) {
      return res.status(400).json({msj:'id no existe.'});
    }
    let result = await seccion.destroy(id);
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
  createSE,
  updateSE,
  deleteSE,
};
