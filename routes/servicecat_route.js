var servicecat = require("../model/servicecat_model");
var express = require("express");
var router = express.Router();

router.get('/:sc_id?',function(req,res,next){
  if(req.params.sc_id){
    servicecat.getServicecatById(req.params.sc_id,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }    
      });
  }
  else{
 servicecat.getAllServicecat(function(err,rows){
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
  servicecat.addServicecat(req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:sc_id", function(req, res, next) {
  servicecat.updateServicecat(req.params.sc_id,req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:sc_id", function(req, res, next) {
    servicecat.deleteServicecat(req.params.sc_id,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  
module.exports = router;
