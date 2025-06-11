const express = require("express");
const router = express.Router();

const {getAll, getById, createE, updateE, /*validateU, deleteU*/} = require("../controllers/encargadoalumnosControllers");

router.get("/", (req, res) => {
  res.json({ users: "aqui" });
});

router.get("/all", getAll);

router.get("/byid", getById);
router.post("/create", createE);
router.put("/update", updateE);
/*router.patch("/validate", validateU);
router.patch("/delete", deleteU)*/
module.exports = router;
