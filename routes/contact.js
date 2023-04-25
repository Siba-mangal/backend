const path = require("path");

const express = require("express");

const rootDir = require("../utill/path");

const router = express.Router();

router.get("/contact", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

router.post("/contact", (req, res, next) => {
  res.send("<p>Form successfuly filled</p>");
  res.redirect("/");
});

module.exports = router;
