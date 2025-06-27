const express = require("express");
const router = express.Router();

const {getAll, getById, createH, updateH, /*validateH, deleteH*/} = require("../controllers/horariosControllers");

router.get("/", (req, res) => {
  res.json({ users: "aqui" });
});

router.get("/all", getAll);

router.get("/byid", getById);
router.post("/create", createH);
router.put("/update", updateH);
/*router.patch("/validate", validateU);
router.patch("/delete", deleteU)*/
module.exports = router;