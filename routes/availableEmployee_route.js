var employee = require("../model/employee_model");
var express = require("express");
var router = express.Router();

router.put("/:mobile_no", function(req, res, next) {
  employee.availableEmployee(req.params.mobile_no,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
