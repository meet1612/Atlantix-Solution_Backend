var employee = require("../model/employee_model");
var express = require("express");
var router = express.Router();


router.get('/',function(req,res,next){
      employee.getEmployeeService(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
   });
  });
  
module.exports = router;
