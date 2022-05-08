const express = require("express");
const AnimesController = require("../controllers/Animes")
const AnimesRouter = express.Router();




 



AnimesRouter.route("/")
.get(AnimesController.getAnimesDetails)


module.exports = AnimesRouter