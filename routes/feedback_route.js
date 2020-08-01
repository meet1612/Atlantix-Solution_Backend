var feedback = require("../model/feedback_model");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  feedback.getAllFeedback(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function(req, res, next) {
  feedback.addFeedback(req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:id", function(req, res, next) {
    feedback.deleteFeedback(req.params.id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

module.exports = router;
