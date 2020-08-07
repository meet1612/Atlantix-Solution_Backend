var employee = require("../model/employee_model");
var express = require("express");
var router = express.Router();
var multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    x = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });


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

router.post("/",upload.single('e_image'), function(req, res, next) {
  employee.addEmployee(req.body,req.file.filename,function(err, rows) {
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
