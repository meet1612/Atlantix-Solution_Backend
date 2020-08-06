var AdminLogin=require("../model/persondetail_model");
var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
    AdminLogin.PersondetailLoginforAdmin(req.body, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  
module.exports=router;