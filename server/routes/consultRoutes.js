const express = require("express");
const { createConsultation, getAllConsultations, get } = require("../controllers/consultController.js");

const router = express.Router();
router.post("/", createConsultation);
router.get("/", getAllConsultations);


module.exports = router;
