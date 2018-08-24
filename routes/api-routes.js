// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/dates", function(req, res) {
    db.dates .findAll({})
      .then(function(dbdates) {
        res.json(dbdates);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/dates", function(req, res) {
    db.dates.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/dates", function(req, res) {
    db.dates.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbdates) {
        res.json(dbdates);
      });
  });

  // POST route for saving a new post
  app.post("/api/dates", function(req, res) {

    console.log(req.body);

    // db.dates.create({
    //   username: req.body.text,
    //   password: req.body.password,
      
    // })
    
    //   .then(function(dbdates) {
    //     res.json(dbdates);
        
    //   });
      
      // Sending survey data to DB
      db.dates.create({
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3,
        answer4: req.body.answer4,
        answer5: req.body.answer5,
        answer6: req.body.answer6,
        answer7: req.body.answer7,
        answer8: req.body.answer8,
      });
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
};
