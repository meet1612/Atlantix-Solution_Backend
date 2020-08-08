var employee = require("../model/employee_model");
var express = require("express");
var router = express.Router();

router.put("/:mobile_no/:sid", function(req, res, next) {
  employee.deleteEmployeeServiceByEmobileSid(req.params.mobile_no,req.params.sid,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
 
module.exports = router;
