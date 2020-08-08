var servicecatdel = require("../model/servicecat_model");
var express = require("express");
var router = express.Router();

router.put("/:sc_id", function(req, res, next) {
    servicecatdel.deleteServicecat(req.params.sc_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  
module.exports = router;