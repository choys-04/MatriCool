const { seccionAlumnos } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let data = await seccionAlumnos.findAll({
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
    let data = await seccionAlumnos.findOne({
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

const createS = async (req, res) => {
  try {
    const { data } = req.body;
    let result = await seccionAlumnos.create(data, {
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

const updateS = async (req, res) => {
  try {
    const { id, ...data } = req.body.data;
    let result = await seccionAlumnos.update(data, {
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

const deleteS = async (req, res) => {
  try {
    const { id } = req.body.data;
    let seccionAlumno = await seccionAlumnos.findById(id);
    if (!seccionAlumnos){
      return res.status(400).
      json({msj:'id no encontrado.'})
    }
    let result = await seccionAlumnos.findById(id);
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
  createS,
  updateS,
  deleteS,
};
