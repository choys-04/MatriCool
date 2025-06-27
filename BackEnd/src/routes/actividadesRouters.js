const express = require("express");
const router = express.Router();

const {getAll, getById, createA, updateA, deleteA } = require("../controllers/actividadesControllers");

router.get("/", (req, res) => {
  res.json({ actividades: "aqui" });
});

router.get("/all", getAll);

router.get("/byid", getById);
 router.post("/create", createA);
router.put("/update", updateA);
router.patch("/delete", deleteA);
module.exports = router;
