const express = require("express");
const router = express.Router();

const {getAll, getById, createS, updateS, /*validateS, deleteS*/} = require("../controllers/seccionalumnosControllers");

router.get("/", (req, res) => {
  res.json({ users: "aqui" });
});

router.get("/all", getAll);

router.get("/byid", getById);
router.post("/create", createS);
router.put("/update", updateS);
/*router.patch("/validate", validateU);
router.patch("/delete", deleteU)*/
module.exports = router;