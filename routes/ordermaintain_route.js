var ordermaintain = require("../model/ordermaintain_model");
var express = require("express");
var router = express.Router();

router.get('/:om_id?',function(req,res,next){
  if(req.params.om_id){
    ordermaintain.getAllOrdermaintainById(req.params.om_id,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }    
      });
  }
  else{
    ordermaintain.getAllOrdermaintain(function(err,rows){
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
  ordermaintain.addOrdermaintain(req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:om_id", function(req, res, next) {
  ordermaintain.updateOrdermaintain(req.params.om_id,req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
