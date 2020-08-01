var package = require("../model/packagepurchase_model");
var express = require("express");
var router = express.Router();

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        package.getPackagePurchaseById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }    
        });
    }
    else{
   package.getAllPackagePurchase(function(err,rows){
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
    package.addPackagePurchase(req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id", function(req, res, next) {
    package.deletePackagePurchase(req.params.id,req.body,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
