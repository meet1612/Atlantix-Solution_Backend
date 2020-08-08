var service = require("../model/service_model");
var express = require("express");
var router = express.Router();

router.get('/:s_id?',function(req,res,next){
  if(req.params.s_id){
    service.getServiceById(req.params.s_id,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }    
      });
  }
  else{
    service.getAllService(function(err,rows){
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
  service.addService(req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:s_id", function(req, res, next) {
  service.updateServiceById(req.params.s_id,req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:sc_id", function(req, res, next) {
  service.deleteServiceByCatId(req.params.sc_id,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
