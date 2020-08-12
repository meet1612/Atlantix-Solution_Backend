var servicestatus = require("../model/ordermaintain_model");
var express = require("express");
var router = express.Router();

router.get('/:pk_id/:pp_endDate/:p_mobile',function(req,res,next){
    servicestatus.getServiceStatus(req.params.pk_id,req.params.pp_endDate,req.params.p_mobile,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }    
      });
});

module.exports = router;
