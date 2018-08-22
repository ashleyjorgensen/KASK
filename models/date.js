module.exports = function (sequelize, DataTypes) {
  var dates = sequelize.define("dates", {
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    answer1: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    answer2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    answer3: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    answer4: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    answer5: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    answer6: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    answer7: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    answer8: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },


  },{
    timestamps:false}
  );
  return dates;
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