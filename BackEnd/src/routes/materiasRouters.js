const express = require("express");
const router = express.Router();

const {getAll, getById, createM, updateM, /*validateM, deleteM*/} = require("../controllers/materiasControllers");

router.get("/", (req, res) => {
  res.json({ users: "aqui" });
});

router.get("/all", getAll);

router.get("/byid", getById);
router.post("/create", createM);
router.put("/update", updateM);
/*router.patch("/validate", validateU);
router.patch("/delete", deleteU)*/
module.exports = router;