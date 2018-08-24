// In `models`, make a `burger.js` file.

//     * Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.

var orm = require("../config/orm.js");

// orm.selectAll("", "", " ")
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function (res) {
            cb(res);
        });
    },
    updateOne: function (burgerId, cb) {
        orm.updateOne("burgers", "devoured", true, "id", burgerId, function (res) {
            cb(res);
        });
    }
};

// export
module.exports = burger;