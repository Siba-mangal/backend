const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.post("/success", controller.successPost);

module.exports = router;
