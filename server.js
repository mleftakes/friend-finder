// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// parse applications/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'test/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringigy(req.body, null, 2))
// });

// requiring routing file for server to use
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});






// Create New Friends - takes in JSON input
app.post("/api/new", function(req, res) {
  var newReservation = req.body;
 newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  characters.push(newReservation);

  res.json(newReservation);
});