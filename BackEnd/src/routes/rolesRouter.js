const express = require("express");
const router = express.Router();

const {getAll, getById, createR, updateR, /*validateR, deleteR*/} = require("../controllers/rolesControllers");

router.get("/", (req, res) => {
  res.json({ users: "aqui" });
});

router.get("/all", getAll);

router.get("/byid", getById);
router.post("/create", createR);
router.put("/update", updateR);
/*router.patch("/validate", validateU);
router.patch("/delete", deleteU)*/
module.exports = router;