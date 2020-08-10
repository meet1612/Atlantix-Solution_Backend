var service = require("../model/servicecat_model");
var express = require("express");
var router = express.Router();

router.get('/:sc_id?',function(req,res,next){
    service.getServiceBySercatId(req.params.sc_id,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }    
      });
  
});
module.exports = router;
