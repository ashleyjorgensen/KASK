// Require express
var express = require("express");

// Setting up express router connection
var router = express.Router();

// Importing the burgers.js to use DB functions
var burgers = require("../models/date.js")

// Setting up the router functions to connect to our app
router.get("/", function (req, res) {
    burgers.all(function (burger_data) {
        console.log(burger_data);
        res.render("index",{burger_data});
    })
})