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
        res.render("index",hbsObject);
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


//creating an api route for the login
router.post("/api/login", function(req, res){
    //create a variable for the username
    var uname = req.body.uname;

    db.DateTable.find({
        where: {
            loginTable: uname
        }
    }).then(function(results){
        if(results.length == 0){
            //the username is not in the database

            res.json(false);
        }else {
            //the username was found in the database
            // res.redirect("/desiredRoute");

            // res.json("SEND WHAT YOU WANT TO SEND BACK");

            res.json(true)
        }
    })
})


module.exports = router;