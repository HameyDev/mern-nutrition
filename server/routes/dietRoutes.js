const express = require("express");
const { createDietRequest, getAllDietRequests, get } = require("../controllers/dietController.js");

const router = express.Router();
router.post("/", createDietRequest);
router.get("/", getAllDietRequests); 


module.exports = router;
