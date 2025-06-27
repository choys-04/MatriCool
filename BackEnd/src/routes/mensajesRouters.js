const express = require("express");
const router = express.Router();

const {getAll, getById, createME, updateME, /*validateME, deleteME*/} = require("../controllers/mensajesControllers");

router.get("/", (req, res) => {
  res.json({ users: "aqui" });
});

router.get("/all", getAll);

router.get("/byid", getById);
router.post("/create", createME);
router.put("/update", updateME);
/*router.patch("/validate", validateU);
router.patch("/delete", deleteU)*/
module.exports = router;