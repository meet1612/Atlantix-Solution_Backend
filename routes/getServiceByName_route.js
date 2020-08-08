var service = require("../model/service_model");
var express = require("express");
var router = express.Router();

router.get('/:s_name?',function(req,res,next){
    service.getServiceByName(req.params.s_name,function(err,rows){
          if(err){
              res.json(err);
          }
          else{
              res.json(rows);
          }    
      });
});

module.exports = router;
