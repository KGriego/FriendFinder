var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var friends = require("./app/data/friends");

var PORT = process.env.PORT || 8082;
var app = express();

app.use(bodyParser());

var apiRoutes = require("./app/routes/apiRoutes")(app, path, friends);
var htmlRoutes = require("./app/routes/htmlRoutes.js")(app, path);

app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
