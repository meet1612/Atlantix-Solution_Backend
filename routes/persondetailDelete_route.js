var persondetailDelete=require("../model/persondetail_model");
var express = require("express");
var router = express.Router();

router.put('/:mobile_no',function(req,res,next){
    persondetailDelete.deletePersondetail(req.params.mobile_no,req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;