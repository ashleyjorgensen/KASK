// // *********************************************************************************
// // api-routes.js - this file offers a set of routes for displaying and saving data to the db
// // *********************************************************************************

// // Dependencies
// // =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // app.get("/index.handlebars", function(req, res) {
  //   res.json({});

  // });

  // how do i turn index.handlebars into .html code and get it back to the user as a webpage?
  // app.get("/", function(req, res) {
  //   res.render('index');
  // });

  // GET route for getting all of the posts
  // app.get("/api/dates", function(req, res) {
  //   db.dates .findAll({})
  //     .then(function(dbdates) {
  //       res.json(dbdates);
  //     });
  // });

  // Get route for returning posts of a specific category
  // app.get("/api/dates", function(req, res) {
  //   db.dates.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // Get route for retrieving a single post
  // app.get("/api/dates", function(req, res) {
  //   db.dates.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbdates) {
  //       res.json(dbdates);
  //     });
  // });

  // POST route for saving a new post
  app.post("/api/dates/create_account", function(req, res) {

    // console.log(req.body);
    // console.log(req.body.username);

    db.dates.create({
      username: req.body.create_user_email,
      password: req.body.create_user_password, 
   
      
    });
    
    // .then send the "you have created an account" page to the user
      // .then(function(dbdates) {
      //   res.json(dbdates);
        
      // });
  });


  app.post("/api/dates/loginto_account", function(req, res) {
    var result = db.dates.query("SELECT * FROM dates WHERE username='" + req.body.sign_in_email + "' AND password='" + req.body.sign_in_password + "';");
    //check if result has the user
    if(result.length == 1)
    {
      //1 match
      var row = result[0];
      var user_id = row.id; //or maybe row['id'];
    }
  });
  // // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function(req, res) {
  //   db.dates.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbPost) {
  //       res.json(dbdate);
  //     });
  // });

  // // PUT route for updating posts
  // app.put("/api/posts", function(req, res) {
  //   db.date.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function(dbdate) {
  //       res.json(dbdate);
  //     });
  // });
}
