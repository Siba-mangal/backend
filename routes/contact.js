const path = require("path");

const express = require("express");

const controller = require("../controllers/controller");

const router = express.Router();

router.get("/contact", controller.getContact);

router.post("/contact", controller.postContact);

module.exports = router;
