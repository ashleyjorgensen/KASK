module.exports = function(sequelize, DataTypes) {
  var date = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  });
  return date;
  };
// Import ORM to create functions to interact with the DB
// var orm = require("../config/orm.js");

// var date = {
//     all: function(callback) {
//       orm.all("dates", function(res) {
//         callback(res);
//       });
//     },
//     // The variables cols and vals are arrays.
//     create: function(cols, vals, callback) {
//       orm.create("datenight_db", cols, vals, function(res) {
//         callback(res);
//       });
//     },
//     update: function(objColVals, condition, callback) {
//       orm.update("datenight_db", objColVals, condition, function(res) {
//         callback(res);
//       });
//     },
//     delete: function(condition, callback) {
//       orm.delete("datenight_db", condition, function(res) {
//         callback(res);
//       });
//     }
//   };
  
  // Export the database functions for the controller (date_controllers.js).
  // module.exports = date;