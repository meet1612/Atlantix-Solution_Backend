var ordermaintain = require("../model/ordermaintain_model");
var express = require("express");
var router = express.Router();

router.get('/:pp_id',function(req,res,next){
    ordermaintain.totalEssentialServiceCount(req.params.pp_id,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }    
      });
});
module.exports = router;
