var persondel = require("../model/person_model");
var express = require("express");
var router = express.Router();


router.put("/:id", function(req, res, next) {
    persondel.deletePerson(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  module.exports = router;
  