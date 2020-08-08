var persondetail = require("../model/persondetail_model");
var express = require("express");
var router = express.Router();

router.get("/:mobile_no?", function (req, res, next) {
  if (req.params.mobile_no) {
    persondetail.getPersondetailById(req.params.mobile_no, function (
      err,
      rows
    ) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    persondetail.getAllPersondetail(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post("/", function (req, res, next) {
  persondetail.PersondetailLoginforUser(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id?", function (req, res, next) {
   if (req.params.id) {
    persondetail.PersondetailUpdate(req.params.id, req.body, function (err,rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
  else {
    persondetail.changepwd(req.body, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }

});
module.exports = router;
