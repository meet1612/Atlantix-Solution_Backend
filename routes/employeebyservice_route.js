var employee = require("../model/employee_model");
var express = require("express");
var router = express.Router();

router.get("/:ID", function(req, res, next) {
  employee.getEmployeeByServiceID(req.params.ID,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
 
module.exports = router;
