// Require express
var express = require("express");

// Setting up express router connection
var router = express.Router();

// Importing the burgers.js to use DB functions
var date = require("../models/date.js")

// Setting up the router functions to connect to our app
router.get("/", function (req, res) {
    date.all(function (datenight_data) {
        var hbsObject = {
            date: datenight_data
        };
        console.log(datenight_data);
        res.render("index",{datenight_data});
    });
});

router.post("/api/dates", function(req, res){ 
    date.create([
        "date_name" , "save_date"
    ], [
        req.body.date_name, req.body.save_date
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

module.export = router;