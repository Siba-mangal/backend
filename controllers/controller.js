const path = require("path");
const rootDir = require("../utill/path");

exports.getContact = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

exports.postContact = (req, res, next) => {
  res.send("<p>Form successfuly filled</p>");
  res.redirect("/");
};

exports.successPost = (req, res, next) => {
  res.send("<p>Form successfuly filled</p>");
  res.redirect("/success");
};
