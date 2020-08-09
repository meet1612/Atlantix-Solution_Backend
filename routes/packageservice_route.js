var package = require("../model/package_model");
var express = require("express");
var router = express.Router();

router.get('/:id?',function(req,res,next){
    package.getPackageServiceById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }    
        });
    });    

router.post("/", function(req, res, next) {
    package.addPackageService(req.body,function(err, rows) {
          if (err) {
            res.json(err);
          } else {
            res.json(rows);
          }
        });
});

router.put("/:pkid/:sid", function(req, res, next) {
    package.deletePackageServiceByPackageIdSid(req.params.pkid,req.params.sid,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
   
module.exports = router;
