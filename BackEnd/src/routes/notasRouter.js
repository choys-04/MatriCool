const express = require("express");
const router = express.Router();

const {getAll, getById, createN, updateN, /*validateN, deleteN*/} = require("../controllers/notasControllers");

router.get("/", (req, res) => {
  res.json({ users: "aqui" });
});

router.get("/all", getAll);
router.get("/byid", getById);
router.post("/create", createN);
router.put("/update", updateN);
/*router.patch("/validate", validateU);
router.patch("/delete", deleteU)*/
module.exports = router;