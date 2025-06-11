const express = require("express");
const router = express.Router();

const {getAll, getById, createMP, updateMP, /*validateMP, deleteMP*/} = require("../controllers/materiaprofesorControllers");

router.get("/", (req, res) => {
  res.json({ users: "aqui" });
});

router.get("/all", getAll);

router.get("/byid", getById);
router.post("/create", createMP);
router.put("/update", updateMP);
/*router.patch("/validate", validateU);
router.patch("/delete", deleteU)*/
module.exports = router;