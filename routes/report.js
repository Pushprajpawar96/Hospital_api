const express = require("express");
const { statusReports } = require("../controller/reportController");

const roter = express.Router();


roter.get("/:status", statusReports);

module.exports = roter;