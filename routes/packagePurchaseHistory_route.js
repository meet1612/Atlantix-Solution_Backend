var pkpphistory = require("../model/packagepurchase_model");
var express = require("express");
var router = express.Router();

router.get("/:mobile_no", function(req, res, next) {
  pkpphistory.packagePurchaseHistoryById(req.params.mobile_no,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
