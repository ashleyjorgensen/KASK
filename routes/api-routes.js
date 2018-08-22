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

    db.dates.create({
      username: req.body.text,
      password: req.body.password,
      
    })
    
      .then(function(dbdates) {
        res.json(dbdates);
        
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
