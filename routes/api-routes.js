var db = require("../models");

module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/", function(req, res) {
        console.log("HELLO WORLD")
      // findAll returns all entries for a table when used with no options
      db.Burger.findAll({}).then(function(data) {
        // We have access to the todos as an argument inside of the callback function
        var hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject);
      });
    });
  
    // POST route for saving a new todo
    app.post("/burgers", function(req, res) {
        console.log("req.body");
        console.log(req.body.burger_name)
      db.Burger.create({
        burger_name: req.body.burger_name
      }).then(function(result) {
        // We have access to the new todo as an argument inside of the callback function
        res.redirect("/");
      })
    });
  
    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/:id", function(req, res) {
  
      // Update takes in an object describing the properties we want to update, and
      // we use where to describe which objects we want to update
      db.Burger.update({
        devoured: true
      }, {
        where: {
          id: req.params.id
        }
      }).then(function() {
        res.redirect("/");
      })
    });
  };