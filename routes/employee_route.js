var employee = require("../model/employee_model");
var express = require("express");
var router = express.Router();

router.get('/:mobile_no?',function(req,res,next){
  if(req.params.mobile_no){
    employee.getEmployeeById(req.params.mobile_no,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }    
      });
  }
  else{
 employee.getAllEmployee(function(err,rows){
      if(err){
          res.json(err);
      }
      else{
          res.json(rows);
      }
 });
}
});

router.post("/", function(req, res, next) {
  employee.addEmployee(req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:mobile_no", function(req, res, next) {
  employee.updateEmployee(req.params.mobile_no,req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
