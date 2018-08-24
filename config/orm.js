// // Import (require) `connection.js` into `orm.js`

// // In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// //      * `selectAll()`
// //      * `insertOne()`
// //      * `updateOne()`

// * Export the ORM object in `module.exports`.

var connection = require("./connection.js");

var orm = {
    selectAll: function (tableData, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableData], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function (tableData, colData, valData, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableData, colData, valData], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function (tableData, updateCol, updateVal, colData, valData, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableData, updateCol, updateVal, colData, valData], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;