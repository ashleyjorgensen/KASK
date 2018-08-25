// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var uid = [""];
//var uid = require("./routes/api-routes.js");
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  app.get('/', function (req, res) {
      res.render('index');
  });
  
  app.get("/survey/:uid", function(req, res) {
   uid[0]=req.params.uid;
   app.locals.uid = uid[0];
   res.render('dates');
  });


  app.get("/results/:uid", function(req, res) {
    console.log("START");
    var uid = req.params.uid; //'cGS4FAfQucdG6RYMI1WDNaXpsd63';

    console.log("UID IS: " + uid);
    console.log("Local log: " + app.locals.uid);

    db.dates.findOne({ where: { uid: uid } })
    .then(function (dbdates) {
      console.log(dbdates);

      //setting all these variables locally so we can accees in handlebars
      //used database connection above to grab answer1-8 from user
      app.locals.something = "date wheel!";
      app.locals.Q1A1 = dbdates.answer1;
      app.locals.Q1A2 = dbdates.answer2;
      app.locals.Q2A1 = dbdates.answer3;
      app.locals.Q2A2 = dbdates.answer4;
      app.locals.Q3A1 = dbdates.answer5;
      app.locals.Q3A2 = dbdates.answer6;
      app.locals.Q4A1 = dbdates.answer7;
      app.locals.Q4A2 = dbdates.answer8;
      res.render('final');
    });
  });

};
