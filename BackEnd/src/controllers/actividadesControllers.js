const { actividades } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let data = await actividades.findAll({
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
    let data = await actividades.findOne({
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

const createA = async (req, res) => {
  try {
    const  data  = req.body;
    console.log(data)
    let result = await actividades.create(data, {
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

const updateA = async (req, res) => {
  try {
    const { id, ...data } = req.body.data;
    let result = await actividades.update(data, {
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

const deleteA = async (req, res) => {
  try {
    const { id } = req.body;
    let result = await actividades.update({ active: false }, {
      where: { id: id },
      attributes: ["active"],
    });
    res.json(result);
  } catch (error) {
    res.json({
      message: "No fue posible obtener la informacion",
      cause: error,
      res: false,
    });
  }
};



module.exports = {
  getAll,
  getById,
  createA,
  updateA,
  deleteA,
};
