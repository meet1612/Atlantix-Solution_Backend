var sms = require("../model/sms_model");
var express = require("express");
var router = express.Router();


router.post('/',function(req,res,next){
    sms.sendMsg(req.body.mobile_no,req.body.msg);
})


module.exports=router;