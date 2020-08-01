var service = require("../model/service_model");
var express = require("express");
var router = express.Router();

router.put("/:s_id", function(req, res, next) {
  service.deleteServiceById(req.params.s_id,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
