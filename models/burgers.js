//Requiring ORM so the app can communicate with SQL DB. 
//Can see that previously defined ORM functions are being used here. 
var orm = require("../config/orm.js");
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};
//Export these functions for the burgers_controller.js file. 
module.exports = burger;