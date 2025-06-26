const db = require("../database/models/index");
const errorInfo = {
  message: "No fue posible obtener la informacion",
  causa: error,
  res: false,
};

const listaTodo = async (model) => {
  const { model1, model2 } = model;
  try {
    const opt = {
      attributes: { exclude: ["userId", "createdAt", "updatedAt"] },
    };
    if (model2 && db[model2]) {
      opt.include = [
        {
          model: db[model2],
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ];
    }
    const result = await db[model1].findAll(opt);
    return result;
  } catch (error) {
    return errorInfo;
  }
};

const buscarId = async (model, data) => {
  try {
    console.log(data)
    const { id } = data;
    const opt = {
      where: id,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    };
    if (model2) {
      opt.include = [
        {
          model: db[model2],
          attributes: { exclude: ["id", "createdAt", "updatedAt"] },
        },
      ];
    }
    const result = await db[model].findOne(opt);
    return result;
  } catch (error) {
    return errorInfo;
  }
};

const crear = async (model, data) => {
  try {
    const result = await db[model].create(data, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return result;
  } catch (error) {
    return errorInfo;
  }
};

const actualizar = async (model, data) => {
  try {
    console.log(data)
    const { id, ...datos } = data;
    let result = await db[model].update(datos, {
      where: { id: id },
    });
    return result;
  } catch (error) {
    return errorInfo;
  }
};

const validar = async (model, data) => {
  const { id, ...datos } = data;
  try {
    let result = await db[model].update(datos, {
      where: { id: id },
      fields: ["active"],
    });
    return result;
  } catch (error) {
    return errorInfo;
  }
};

const eliminar = async (model, data) => {
  try {
    const { id, ...datos } = data;
    let result = await db[model].update(datos, {
      where: { id: id },
      attributes: ["active"],
    });
    return result;
  } catch (error) {
    return errorInfo;
  }
};

module.exports = {
  listaTodo,
  buscarId,
  crear,
  actualizar,
  validar,
  eliminar,
};
