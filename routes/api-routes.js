// Routes
// =============================================================
var db = require("../models");

var uid = ["unknown"];
module.exports = uid;

module.exports = function (app) {

    // GET route for getting all of the posts
    app.get("/api/dates", function (req, res) {
        db.dates.findAll({})
        .then(function (dbdates) {
            res.json(dbdates);
        });
    });

    // Get route for returning posts of a specific category
    app.get("/api/dates", function (req, res) {
        db.dates.findAll({
            where: {
                category: req.params.category
            }
        })
        .then(function (dbPost) {
            res.json(dbPost);
        });
    });

    // Get route for retrieving a single post
    app.get("/api/dates", function (req, res) {
        db.dates.findOne({
            where: {
              id: req.params.id
            }
        })
        .then(function (dbdates) {
            res.json(dbdates);
        });
    });

    // POST route for saving a new post
    app.post("/api/dates", function (req, res) {

        console.log(req.body);
        console.log("MAKE");
        uid[0] = req.body.uid;
        console.log("UID: " + uid);
        db.dates.create({
            username: req.body.username,
            password: req.body.password,
            uid: uid[0],
        })
        .then(function (dbdates) {
            console.log("MADE");
            res.json(dbdates);

        });
    });




    app.post('/api/results', function (req, res) {
      console.log("REQUEST:");
      console.log(req);
      console.log("BODY:");
      console.log(req.body);
      // console.log(survey.data.question1[0]);
      var Q1A1=req.body.data.question1[0] ;
      var Q1A2=req.body.data.question1[1] ;
      var Q2A1=req.body.data.question2[0] ;
      var Q2A2=req.body.data.question2[1] ;
      var Q3A1= req.body.data.question3[0];
      var Q3A2= req.body.data.question3[1];
      var Q4A1= req.body.data.question4[0];
      var Q4A2= req.body.data.question4[1];

      console.log("Updating data for uid: " + uid);
      db.dates.findOne({ where: { uid: uid[0] } })
      .then(function (dbdates) {
        // Check if record exists in db
        dbdates.updateAttributes({
          answer1: Q1A1,
          answer2: Q1A2,
          answer3: Q2A1,
          answer4: Q2A2,
          answer5: Q3A1,
          answer6: Q3A2,
          answer7: Q4A1,
          answer8: Q4A2,
        })
        .then(function () {
          console.log("DONE UPDATEING");
        });
      });


      /*
      db.dates.query('UPDATE `dates` SET `answer1`=?,`answer2`=?,`answer3`=? where `uid`=?', [req.body.employee_name, req.body.Q1A1, req.body.Q1A2, req.body.Q2A1, uid[0]], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
      */
     });

    // // PUT route for updating posts
    // app.put("/api/results", function (req, res) {
    //     console.log(req.body);
    //     db.dates.update({
    //         Q1A1: req.body.Q1A1,
    //         Q1A2: req.body.Q1A2,
    //         Q2A1: req.body.Q2A1,
    //         Q2A2: req.body.Q2A2,
    //         Q3A1: req.body.Q3A1,
    //         Q3A2: req.body.Q3A2,
    //         Q4A1: req.body.Q4A1,
    //         Q4A2: req.body.Q4A2,

    //     })
    //         .then(function (dbdate) {
    //             res.json(dbdate);
    //         });

    // });

    
    
}






    //new api PUT route for the survey results 
//     app.put('/api/dates', function (req, res) {
//     db.dates.query('UPDATE `dates` SET `answer1`=?,`answer2`=?,`answer3`=? where `id`=?', ["Q1A1", Q1A2, Q2A1, Q2A2, id], function (error, results, fields) {
//     if (error) throw error;
//     res.end(JSON.stringify(results));
//   });
//  });

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
