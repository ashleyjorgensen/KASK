// Require express
var express = require("express");
// Setting up express router connection
var router = express.Router();

// Importing the burgers.js to use DB functions
var date = require("../models/date.js")

// Setting up the router functions to connect to our app
router.get("/", function (req, res) {
    date.all(function (result) {
        var hbsObject = {
            date: result
        };
        console.log(result);
        res.render("dates",{});
    });
});

router.post("/api/dates", function(req, res){ 
    date.create([
        "date_name" , "date_complete"
    ], [
        req.body.date_name, req.body.date_complete
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

module.exports = router;