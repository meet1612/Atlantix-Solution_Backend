var employee = require("../model/employee_model");
var express = require("express");
var router = express.Router();

router.put("/", function(req, res, next) {
  employee.deleteEmployeeServiceByEmobileSid(req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
 
module.exports = router;
