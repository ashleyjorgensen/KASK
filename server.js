// Dependencies

const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public' ));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Require handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// const routes = require("./controllers/date_controller.js");
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
// app.use(routes);


// app.get and app.use both from github expressjs docs
app.get('/', function (req, res) {
});
db.sequelize.sync().then(function() {
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})
});


// app.use(app.router);

// routes.initialize(app);

// var router = require("router");
