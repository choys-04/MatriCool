const { dataUser } = require("../database/models/index");
const { User } = require("../database/models/index");

const getAll = async (req, res) => {
  try {
    let dataUsers = await dataUser.findAll({
      attributes: { exclude: ["userId", "createdAt", "updatedAt"] },
      include: [
        {
          model: User,
          attributes: { exclude: ["createdAt", "updatedAt"] },
          as: "Usuario",
        },
      ],
    });
    res.status(200).json(dataUsers);
  } catch (error) {
    res.status(400).json({
      message: "No fue posible obtener la informacion",
      res: false,
    });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.query;
    let dataUsers = await dataUser.findOne({
      where: id,
      attributes: { exclude: ["userId", "createdAt", "updatedAt"] },
      include: [
        {
          model: User,
          attributes: { exclude: ["id", "createdAt", "updatedAt"] },
          as: "Usuario",
        },
      ],
    });
    res.status(200).json(dataUsers);
  } catch (error) {
    res.status(400).json({
      message: "No fue posible obtener la informacion",
      res: false,
    });
  }
};

const createD = async (req, res) => {
  try {
    const { data } = req.body;
    let resp = await dataUser.create(data, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(201).json(resp);
  } catch (error) {
    res.status(400).json({
      message: "No fue posible obtener la informacion",
      causa: error,
      res: false,
    });
  }
};

const updateD = async (req, res) => {
  try {
    const { userId, ...data } = req.body.data;
    let resp = await dataUser.update(data, {
      where: { id: userId }
    });
    res.status(200).json(resp);
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
  createD,
  updateD
};
