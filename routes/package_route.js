var package = require("../model/package_model");
var express = require("express");
var router = express.Router();

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        package.getPackageById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }    
        });
    }
    else{
   package.getAllPackage(function(err,rows){
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
    package.addPackage(req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id", function(req, res, next) {
    package.updatePackage(req.params.id,req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
