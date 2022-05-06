const express = require("express");
const homeController = require("../controllers/home")
const homeRouter = express.Router();




 

// You dont have to change the route when you are passing the data from front end in the form of query params, because we can access those values using keys , which is part of query param only

// But in case of URL params you will have to modify the route , because we need a key to access the value from url.

homeRouter.route("/")
.get(homeController.gethomeDetails)


module.exports = homeRouter