const express = require("express");
const router = express.Router();

const {getAll, getById, createSE, updateSE, /*validateSE, deleteSE*/} = require("../controllers/seccionesControllers");

router.get("/", (req, res) => {
  res.json({ users: "aqui" });
});

router.get("/all", getAll);

router.get("/byid", getById);
router.post("/create", createSE);
router.put("/update", updateSE);
/*router.patch("/validate", validateU);
router.patch("/delete", deleteU)*/
module.exports = router;