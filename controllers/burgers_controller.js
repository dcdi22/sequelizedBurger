// Inside the `burgers_controller.js` file, import the following:

// * Express
// * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// get request to grab database contents
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };

        res.render("index", hbsObject);
    });
});

// post request to add burger to database
router.post("/", function (req, res) {
    console.log(req.body.burger_name);
    if (req.body.burger_name !== "") {
        burger.insertOne(req.body.burger_name.trim(), function () {
            res.redirect("/");
        });
    }
});

// put request to update burger status
router.get("/:id", function (req, res) {
    console.log(req.params.id);

    burger.updateOne(req.params.id, function () {
        res.redirect("/");
    });
});

// export
module.exports = router;