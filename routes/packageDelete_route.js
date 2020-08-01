var package = require("../model/package_model");
var express = require("express");
var router = express.Router();

router.put("/:id", function(req, res, next) {
  package.deletePackage(req.params.id,req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
