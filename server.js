var path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
var PORT = process.env.PORT || 3000;
// const path = require('path');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// CANT GET MY CSS TO WORK????
// app.use(express.static(__dirname + "/public"));
// app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.static("public"));
//app.use("/", router);
app.use(express.static(path.join(__dirname, 'public')));


var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening on localhost:" + PORT);
})
