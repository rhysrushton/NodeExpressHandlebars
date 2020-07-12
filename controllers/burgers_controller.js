//Requiring express and router for client requits. 
var express = require("express");
var router = express.Router();
//Require the burgers model from models folder. 
var burger = require("../models/burgers.js");
//Different routes w/required logic. Get/Post/Put. 
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "name", "devour"
  ], [
    req.body.name, req.body.devour
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devour: req.body.devour
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//Again export. This will be used by the server.js file.
module.exports = router;