const express = require("express");
const router = express.Router();

const {getAll, getById, createSP, updateSP, /*validateSP, deleteSP*/} = require("../controllers/seccionprofesorControllers");

router.get("/", (req, res) => {
  res.json({ users: "aqui" });
});

router.get("/all", getAll);

router.get("/byid", getById);
router.post("/create", createSP);
router.put("/update", updateSP);
/*router.patch("/validate", validateU);
router.patch("/delete", deleteU)*/
module.exports = router;